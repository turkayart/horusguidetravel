# Git Auto-Upload Command File

> [!IMPORTANT]
> When the user references this file (e.g., via `@gityukler.md`), the AI Agent must automatically execute the following Git stage, commit, and push workflow.

## Instructions for AI Agent:
1. Check the git status to verify what changes are unstaged.
2. Stage all changes in the workspace:
   ```powershell
   & "C:\Program Files\Git\cmd\git.exe" add .
   ```
3. Create a commit. Analyze the changed files and generate a descriptive commit message based on the updates. If there are no changes to commit, notify the user.
   ```powershell
   & "C:\Program Files\Git\cmd\git.exe" commit -m "<descriptive message summarizing changes>"
   ```
4. Push the changes to the configured remote repository on the `main` branch:
   ```powershell
   & "C:\Program Files\Git\cmd\git.exe" push origin main
   ```
5. Report the status of the commit and push back to the user clearly.

---

## Technical Configuration
- **Default Branch**: `main`
- **Git Executable Path**: `C:\Program Files\Git\cmd\git.exe`
- **Remote Origin**: (Will be configured by the user or dynamically using `git remote add origin <URL>`)
