# 🚀 GenScript – AI-Powered Terminal Assistant

GenScript is a cutting-edge terminal assistant that enhances your command-line experience using artificial intelligence. Powered by the Gemini API, GenScript supports natural language processing and command auto-suggestions to help you run terminal commands faster and more efficiently.

---

## 🌟 Features

### 🔹 Prompt Mode
- Translate natural language into terminal commands.
- Confirm commands before execution.
- Request clarification for ambiguous queries.
- Terminal-style UI with loading animations.

### 🔹 Auto-Suggestion Mode
- Suggests commands based on history.
- Real-time learning from user input.
- Press `Tab` to auto-complete.
- Fast and efficient search mechanism.

### 🔹 Additional Capabilities
- Seamless switching between Prompt and Auto-Suggestion Modes.
- Lightweight, privacy-focused design (no permanent logging).
- Quick exit with `exit` command.
- Clean and responsive CLI experience.

---

## 📦 Installation

GenScript supports macOS and Linux. Follow these steps:

```bash
# Step 1: Download the Installation Script
curl -o genscript.sh http://genscript.deploylite.tech/genscript.sh

# Step 2: Make the Script Executable
chmod +x genscript.sh

# Step 3: Run the Installation Script
./genscript.sh
🛠 Usage
✅ Start GenScript
bash
Copy
Edit
genscript
🧠 Prompt Mode
Type a natural language command.

GenScript interprets and confirms the shell command before execution.

Example:

sql
Copy
Edit
user@GenScript🤖:~$ AI> Create a new directory named 'projects'
Output:

bash
Copy
Edit
Here is the command: mkdir projects
Do you want to run it? (yes/no)
✨ Auto-Suggestion Mode
Type part of a command.

Suggestions appear based on history.

Press Tab to auto-complete.

Example:

ruby
Copy
Edit
user@GenScript🤖:~$ git cl
Did you mean: git clone <repo_url>? Press Tab to complete.
🔄 Toggle Modes
Press Alt + M to switch between Prompt and Auto-Suggestion modes.

❌ Quit GenScript
bash
Copy
Edit
exit
📚 Documentation
Quick Start Guide – Fast setup instructions.

Configuration – Customize GenScript to your workflow.

Command Reference – Explore available features.

API Documentation – Learn about integrating GenScript.

📖 Full documentation coming soon.

🧠 How It Works
🗣 Prompt Mode Workflow
Accepts natural language input.

Sends the query to Gemini API.

Displays matched command for confirmation.

Executes or refines based on user response.

🔍 Auto-Suggestion Mode Workflow
Monitors user input in real-time.

Suggests matching commands from history.

Auto-complete via Tab.

Executes command normally.

🤝 Contributing
We welcome community contributions! If you have suggestions, bug fixes, or feature requests:

bash
Copy
Edit
# Clone the repo
git clone https://github.com/your-repo/genscript.git
cd genscript
Submit pull requests or open issues. Let's improve GenScript together!

