#!/bin/bash

# GenScript - A AI Based Terminal Assistant
# A terminal-based assistant that helps users run commands faster with AI suggestions

# Configuration
HISTORY_FILE="$HOME/.genscript_history"
MODE="prompt" # Default mode: prompt or autosuggestion
MAX_HISTORY=1000
API_KEY="AIzaSyAAPxBnp9Mv7LsAgEklg5MWRFfIRXtBmRk" # Replace with your actual Gemini API key

# Create history file if it doesn't exist
if [ ! -f "$HISTORY_FILE" ]; then
  touch "$HISTORY_FILE"
fi

# ANSI color codes for styling - Enhanced color palette
DARK_RED='\033[0;31m'
RED='\033[1;31m'
DARK_GREEN='\033[0;32m'
GREEN='\033[1;32m'
DARK_BLUE='\033[0;34m'
BLUE='\033[1;34m'
DARK_YELLOW='\033[0;33m'
YELLOW='\033[1;33m'
DARK_PURPLE='\033[0;35m'
PURPLE='\033[1;35m'
DARK_CYAN='\033[0;36m'
CYAN='\033[1;36m'
GRAY='\033[0;37m'
WHITE='\033[1;37m'
BOLD='\033[1m'
UNDERLINE='\033[4m'
RESET='\033[0m'

# Function to display spinner during loading
show_spinner() {
  local pid=$1
  local delay=0.1
  local spinstr='⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏' # More elegant spinner characters
  
  echo -n "  "
  while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
    local temp=${spinstr#?}
    printf " %s  " "${CYAN}${spinstr:0:1}${RESET}"
    local spinstr=$temp${spinstr:0:1}
    sleep $delay
    printf "\b\b\b\b\b"
  done
  printf "    \b\b\b\b"
}

# Function to add command to history
add_to_history() {
  local cmd="$1"
  
  # Don't add empty commands or duplicates of the last command
  if [ -z "$cmd" ] || [ "$(tail -n 1 "$HISTORY_FILE")" = "$cmd" ]; then
    return
  fi
  
  # Add command to history file
  echo "$cmd" >> "$HISTORY_FILE"
  
  # Keep history file size in check
  if [ "$(wc -l < "$HISTORY_FILE")" -gt "$MAX_HISTORY" ]; then
    tail -n "$MAX_HISTORY" "$HISTORY_FILE" > "${HISTORY_FILE}.tmp"
    mv "${HISTORY_FILE}.tmp" "$HISTORY_FILE"
  fi
}

# Function to query AI for command suggestion
query_ai() {
  local prompt="$1"
  local result
  
  # Format the user query
  local user_query="Convert this natural language request to a bash command. Only return the exact bash command with no explanation or markdown formatting: $prompt"
  
  # Call the Gemini API to convert natural language to command
  result=$(curl -s \
    -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}" \
    -H 'Content-Type: application/json' \
    -d "{
      \"contents\": [
        {
          \"role\": \"user\",
          \"parts\": [
            {
              \"text\": \"$user_query\"
            }
          ]
        }
      ],
      \"generationConfig\": {
        \"temperature\": 0.2,
        \"topK\": 40,
        \"topP\": 0.95,
        \"maxOutputTokens\": 500,
        \"responseMimeType\": \"text/plain\"
      }
    }" | jq -r '.candidates[0].content.parts[0].text' 2>/dev/null)
  
  # Clean up the output - remove any backticks or markdown formatting
  result=$(echo "$result" | sed -e 's/^```bash\?//' -e 's/```$//' -e 's/^`//' -e 's/`$//' | tr -d '\r' | xargs)
  
  echo "$result"
}

# Function to find suggestion from history
get_suggestion() {
  local input="$1"
  local suggestion=""
  
  if [ -n "$input" ]; then
    # Search history for matching commands
    suggestion=$(grep "^$input" "$HISTORY_FILE" | tail -n 1)
  fi
  
  echo "$suggestion"
}

# Function to clear screen with style
clear_screen() {
  clear
  echo -e "${BOLD}${BLUE}┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓${RESET}"
  echo -e "${BOLD}${BLUE}┃${RESET}  ${BOLD}${PURPLE} GenScript🤖 ${RESET}${DARK_CYAN} - A Smart Terminal Assistant v1.0  ${BOLD}${BLUE}┃${RESET}"
  echo -e "${BOLD}${BLUE}┃${RESET}  ${GRAY}Mode: ${YELLOW}${BOLD}$MODE${RESET}                                     ${BOLD}${BLUE}┃${RESET}"
  echo -e "${BOLD}${BLUE}┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛${RESET}"
  echo ""
}

# Function to display help
show_help() {
  echo -e "${BOLD}${PURPLE}GenScript${RESET} ${DARK_CYAN}Command Reference${RESET}"
  echo -e "${GRAY}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
  echo -e "${BOLD}Commands:${RESET}"
  echo -e "  ${GREEN}:help${RESET}          - Show this help message"
  echo -e "  ${GREEN}:mode${RESET}          - Toggle between prompt and autosuggestion mode"
  echo -e "  ${GREEN}:quit${RESET}          - Exit the AI Terminal Assistant"
  echo -e "  ${GREEN}:clear${RESET}         - Clear the screen"
  echo -e ""
  echo -e "${BOLD}Modes:${RESET}"
  echo -e "  ${CYAN}● ${BOLD}Prompt Mode${RESET}     - ${GRAY}Enter natural language queries that will be converted to commands${RESET}"
  echo -e "  ${YELLOW}● ${BOLD}Autosuggestion Mode${RESET} - ${GRAY}Get suggestions from your command history as you type${RESET}"
  echo -e ""
  echo -e "${BOLD}${DARK_CYAN}In Prompt Mode:${RESET}"
  echo -e "  ${GRAY}Type your request in natural language and press Enter.${RESET}"
  echo -e "  ${GRAY}The assistant will suggest a command and ask for confirmation.${RESET}"
  echo -e ""
  echo -e "${BOLD}${DARK_CYAN}In Autosuggestion Mode:${RESET}"
  echo -e "  ${GRAY}Start typing a command and matching commands from history will be suggested.${RESET}"
  echo -e "  ${GRAY}Press Tab to autocomplete with the suggestion.${RESET}"
  echo -e ""
}

# Function to toggle mode
toggle_mode() {
  if [ "$MODE" = "prompt" ]; then
    MODE="autosuggestion"
  else
    MODE="prompt"
  fi
  clear_screen
  echo -e "${GREEN}Switched to ${BOLD}$MODE${RESET}${GREEN} mode.${RESET}"
}

# Function to handle prompt mode
prompt_mode() {
  local input="$1"
  local command
  
  # Show loading animation
  echo -e "${CYAN}${BOLD}⏳ Thinking...${RESET}"
  # Start a background process to show spinner
  sleep 0.5 &
  show_spinner $!
  
  # Query AI for command suggestion
  command=$(query_ai "$input")
  
  if [ -z "$command" ] || [ "$command" = "null" ]; then
    echo -e "${RED}✖ Sorry, I couldn't find a suitable command for your request.${RESET}"
    echo -e "${YELLOW}💡 Please try rephrasing your query.${RESET}"
    return
  fi
  
  # Display the suggested command and ask for confirmation
  echo -e "${GREEN}${BOLD}✓ Found command:${RESET}"
  echo -e "${WHITE}${BOLD}${DARK_BLUE}▶ ${CYAN}$command${RESET}"
  echo -e "${YELLOW}${BOLD}? ${RESET}${YELLOW}Run this command? ${WHITE}(y/n)${RESET}"
  read -r confirm
  
  if [ "$confirm" = "y" ] || [ "$confirm" = "Y" ]; then
    # Add to history before executing
    add_to_history "$command"
    
    echo -e "${GREEN}${BOLD}⚙ Executing command...${RESET}"
    echo -e "${WHITE}${BOLD}${DARK_BLUE}▶ ${CYAN}$command${RESET}"
    eval "$command"
  else
    echo -e "${YELLOW}✖ Command not executed. Please try again with a clearer request.${RESET}"
  fi
}

# Function to handle autosuggestion mode with tab completion
autosuggestion_mode() {
  local input="$1"
  local current_suggestion=""
  
  # If there's input, execute it
  if [ -n "$input" ]; then
    add_to_history "$input"
    echo -e "${WHITE}${BOLD}${DARK_BLUE}▶ ${CYAN}$input${RESET}"
    eval "$input"
  fi
}

# Simple autocomplete function for bash
setup_autocomplete() {
  # This is a basic implementation - a full version would use readline
  bind -x '"\t": autocomplete'
}

autocomplete() {
  local current_input="${READLINE_LINE}"
  local suggestion=$(get_suggestion "$current_input")
  
  if [ -n "$suggestion" ] && [ "$suggestion" != "$current_input" ]; then
    READLINE_LINE="$suggestion"
    READLINE_POINT=${#suggestion}
  fi
}

# Main loop
clear_screen
show_help

# Set up autocomplete if in autosuggestion mode
if [ "$MODE" = "autosuggestion" ]; then
  setup_autocomplete
fi

while true; do
  # Display prompt based on mode
  if [ "$MODE" = "prompt" ]; then
    echo -ne "${BOLD}${PURPLE}GenScript🤖 ${RESET}${BOLD}${DARK_CYAN}>${RESET} "
  else
    # Get current directory for the prompt
    current_dir=$(basename "$(pwd)")
    echo -ne "${BOLD}${GREEN}$USER@$HOSTNAME${RESET}:${BOLD}${BLUE}~/$current_dir${RESET}${PURPLE}$ ${RESET}"
  fi
  
  # Read user input
  read -e input
  
  # Handle special commands
  case "$input" in
    :help)
      show_help
      continue
      ;;
    :mode)
      toggle_mode
      # Reset autocomplete settings when changing mode
      if [ "$MODE" = "autosuggestion" ]; then
        setup_autocomplete
      fi
      continue
      ;;
    :quit)
      echo -e "${GREEN}Thank you for using ${BOLD}${PURPLE}GenScript🤖${RESET}${GREEN}. Goodbye!${RESET}"
      exit 0
      ;;
    :clear)
      clear_screen
      continue
      ;;
    "")
      # Skip empty input
      continue
      ;;
  esac
  
  # Process input based on mode
  if [ "$MODE" = "prompt" ]; then
    prompt_mode "$input"
  else
    autosuggestion_mode "$input"
  fi
done