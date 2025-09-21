# To-Do App (React Native / Expo)

## Project Overview
This is a simple *To-Do application* built using *React Native* and *Expo*.  
It allows users to:
- Add tasks  
- Mark tasks as completed  
- Delete tasks  

---

## Full Step-by-Step Procedure

### Step 1: Install Node.js
1. Go to the official Node.js website: [https://nodejs.org](https://nodejs.org)  
2. Download the *LTS version (20.19.5 recommended)* for Windows.  
   - Option: Windows Installer .msi → easier  
   - Ignore the Standalone Binary .zip unless you know what you’re doing  
3. Run the installer:
   - Keep all *default options* checked  
   - Let it *add Node.js to PATH* automatically  
4. After installation, open *Command Prompt* and check versions:  
   powershell
   node -v
   npm -v
     
   - Correct output example: v20.19.5 and 10.8.2  

> If there is an error, uninstall all Node.js versions and reinstall the *LTS 20.x version*.  

---

### Step 2: Install Git
1. Download Git from: [https://git-scm.com/download/win](https://git-scm.com/download/win)  
2. Run the installer:
   - Keep *default settings* (editor: choose VS Code if available)  
   - Select *Use Git from command line and third-party software*  
   - Leave other options as default  
3. After installation, open Command Prompt and check version:  
   powershell
   git --version
     
   - Correct output example: git version 2.51.0.windows.1  

---

### Step 3: Install Expo CLI
1. Open *Command Prompt* (PowerShell is also fine).  
2. Install *Expo CLI* using:  
   powershell
   npm install -g expo-cli
     
3. After installation, check version:  
   powershell
   expo --version
     
   - Example: 6.3.12  

> Note: Ignore any npm WARN deprecated messages — they don’t break the app.  

---

### Step 4: Create a New React Native Project
1. In Command Prompt, navigate to the folder where you want the project:  
   powershell
   cd C:\Users\YourUserName\Documents
     
2. Create a new folder for your app:  
   powershell
   mkdir TodoAppNew
   cd TodoAppNew
     
3. Run the Expo project creation command:  
   powershell
   npx create-expo-app@latest
     
4. Follow the prompts:
   - Accept default template → blank  
   - Enter app name: mytodo  
5. Once the project is created, go inside the project folder:  
   powershell
   cd mytodo
     

---

### Step 5: Open in VS Code / VS Codium
1. Open *VS Code*.  
2. Go to *File → Open Folder* → select the mytodo folder.  
3. Open index.tsk (or the main file under app folder).  
4. Delete existing code and paste your *To-Do app code*.  
5. Press *Ctrl + S* to save.  

> Tip: The file is saved in the folder structure, so you can reopen it anytime.  

---

### Step 6: Run the App on Phone
1. Open terminal in VS Code (PowerShell is fine).  
2. Make sure you are in the project folder (mytodo):  
   powershell
   cd path\to\mytodo
     
3. Start Expo server:  
   powershell
   npx expo start
     
4. On your phone, open *Expo Go, connected to the **same Wi-Fi*.  
5. Scan the *QR code* shown in the terminal.  
6. The app will load — test adding, completing, and deleting tasks.  

> If you see errors:  
> - Check that Node.js and Expo CLI versions are correct  
> - Restart terminal / Expo server if needed  

---

### Step 7: Take Screenshots
1. Screenshot *index.tsk* code in VS Code.  
2. Screenshot the *running app* on your phone with some tasks added.  

---

### Step 8: Organize Files for Submission
1. Create a folder: ToDoApp_Submission  
2. Include:
   - index.tsk file  
   - Screenshot(s) of code  
   - Screenshot of app  

---

### Step 9: Upload to GitHub
1. Go to [GitHub](https://github.com) and create a new repository: ToDoApp  
2. Upload the *ToDoApp_Submission folder* contents.  
3. Share the repository link with your professor.  

---

### Notes
- App works on *Android* via Expo Go  
- Only *add, complete, delete task features* implemented  
- All instructions are tested on *Windows 11*, Node.js 20.19.5 LTS, Expo CLI 6.3.12  
