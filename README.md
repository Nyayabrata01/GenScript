# GenScript - AI-Powered Terminal Assistant

GenScript is an advanced AI-powered terminal assistant designed to enhance your command-line experience. With **Prompt Mode** and **Auto-Suggestion Mode**, GenScript helps users run commands faster, reducing the need to remember complex syntax. It leverages the **Gemini API** to provide intelligent command suggestions and auto-completions.

---

## 🚀 Features

### 🔹 Prompt Mode
- Convert natural language into terminal commands.
- If a command is found, the system asks for confirmation before executing it.
- If the command is unclear, the user can refine their input.
- Loading animation while processing requests.
- Seamless UI to provide a real terminal-like experience.

### 🔹 Auto-Suggestion Mode
- Maintains a pool of frequently used commands.
- Learns from user command history in real-time.
- Suggests commands as the user types.
- Press **Tab** to auto-complete commands.
- Efficient search algorithm for retrieving the best match.

### 🔹 Additional Features
- **Toggle Modes Easily:** Switch between **Prompt Mode** and **Auto-Suggestion Mode** effortlessly.
- **Quit Option:** Easily exit the assistant when needed.
- **Lightweight & Fast:** Runs efficiently in the background.
- **Privacy-Focused:** Commands are stored only in memory and not logged permanently.

---

## 📦 Installation

GenScript can be installed on **macOS** and **Linux** with a single command.

### **Step 1: Download the Installation Script**
```sh
curl -o script.sh http://genscript.deploylite.tech/genscript.sh
```

### **Step 2: Make the Script Executable**
```sh
chmod +x genscript.sh
```

### **Step 3: Run the Installation Script**
```sh
./genscript.sh
```

---

## 🛠 Usage

### **Start GenScript**
```sh
genscript
```

### **Prompt Mode (Natural Language Commands)**
1. Type a request in natural language.
2. GenScript processes it using the **Gemini API**.
3. If a valid command is found, it is displayed with a confirmation prompt.
4. If confirmed, the command executes.
5. If not found, an error message is displayed.
6. Users can refine their query if the command is incorrect.

#### Example:
```sh
user@GenScript🤖:~$ AI> Create a new directory named 'projects'

Here is the command: mkdir projects
Do you want to run it? (yes/no)
```

### **Auto-Suggestion Mode (Command History & Auto-Completion)**
1. As the user types, GenScript suggests relevant commands.
2. Suggestions are based on previously used commands.
3. Press **Tab** to auto-complete the command.
4. Execute as usual.

#### Example:
```sh
user@GenScript🤖:~$ git cl

Did you mean: git clone <repo_url>? Press Tab to complete.
```

### **Toggle Between Modes**
- Use **Alt + M** to switch between **Prompt Mode** and **Auto-Suggestion Mode**.

### **Quit GenScript**
```sh
type exit
```

---

## 📜 Documentation

### **1. Quick Start Guide**
- Learn how to install and configure GenScript in minutes.

### **2. Configuration**
- Customize settings to fit your workflow.

### **3. Command Reference**
- Explore all available commands and options.

### **4. API Documentation**
- Integrate GenScript with other tools.

[View Full Documentation](http://genscript.deploylite.tech/docs)

---

## 🤖 How It Works

### **Prompt Mode Workflow**
1. User submits a request in natural language.
2. The request is processed via the **Gemini API**.
3. If a command is found:
   - It is displayed for confirmation.
   - If confirmed, the command executes.
4. If not found, an error is returned.

### **Auto-Suggestion Mode Workflow**
1. User starts typing a command.
2. GenScript suggests possible completions from history.
3. Press **Tab** to auto-complete.
4. Execute as usual.

---

## 🛠 Contributing
We welcome contributions! If you have suggestions, bug fixes, or feature requests, please check our **GitHub repository**.

### **Clone the Repository**
```sh
git clone https://github.com/your-repo/genscript.git
cd genscript
```

### **Submit Issues**
- Report bugs and suggest features on our **[GitHub Issues](https://github.com/your-repo/genscript/issues)** page.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 📢 Stay Connected
- **Website:** [GenScript](http://genscript.deploylite.tech)
- **GitHub:** [GenScript Repo](https://github.com/your-repo/genscript)
- **Docs:** [GenScript Documentation](http://genscript.deploylite.tech/docs)

### ⚡ Supercharge your terminal with GenScript today! 🚀

