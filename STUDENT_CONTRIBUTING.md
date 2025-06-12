
# STUDENT CONTRIBUTING

## 🧑‍💻 How to Contribute to This Repository (for Students)

Welcome! This guide explains how you, as a student, can contribute to this course repository — whether it’s submitting homework, updating a project, or sharing resources.

### 📌 Prerequisites

Before you begin:
- Make sure you have a GitHub account.
- Git should be installed on your computer.
- You have access to this repo (ask your teacher if you're unsure).

### 🌱 Step 1: Fork the Repository

1. Go to the repository’s GitHub page.
2. Click the **Fork** button (top-right).
3. This creates a personal copy of the repo under your account.

### 💻 Step 2: Clone the Repository Locally

```bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME
```

> Replace `YOUR_USERNAME` and `REPO_NAME` with your GitHub details.

### ✍️ Step 3: Make Your Changes

- Navigate to the relevant folder, e.g., `classes/class-03-[arrays]/homework/`
- Add or update your files (e.g., `homework.js`, `solution.md`)
- Commit your changes:

```bash
git add .
git commit -m "Add homework for class 03"
```

### 🚀 Step 4: Push and Create a Pull Request

1. Push your changes:

```bash
git push origin main
```

2. Go to your fork on GitHub.
3. Click **"Compare & pull request"**
4. Add a short title and description for your changes.
5. Submit the pull request (PR) to the original course repository.

### ✅ Tips for a Good Contribution

- Keep filenames clear and consistent (`homework-john.js`, `project-lena.md`, etc.)
- Don’t change other students’ files.
- Make sure your code runs and is well-formatted.
- Ask your teacher or mentor if you're unsure about anything.

### 🧹 Optional: Sync Your Fork

If the original repo has been updated, sync your fork like this:

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/REPO_NAME.git
git pull upstream main
git push origin main
```

---

Have fun and keep learning! 🎓  
If you run into issues, reach out to your teacher or a mentor.
