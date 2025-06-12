# 📚 ReDI JavaScript Course Guidelines

These guidelines define the shared conventions for organizing course content based on the ReDI JavaScript Course Template. Please follow them when creating or maintaining your course repository.

---

## 📁 Folder & File Structure

Your course repository should follow this structure:

```
[COURSE-ROOT]
├── README.md
├── CONTRIBUTING.md
├── GUIDELINES.md
├── SYLLABUS.md
├── classes
│   ├── 01-class/
│   │   ├── code/
│   │   ├── homework/
│   │   └── resources/
│   ├── 02-class/
│   │   ├── code/
│   │   ├── homework/
│   │   └── resources/
│   └── ...
├── projects
│   ├── team-1-project
│   └── ...
└── assets (optional)
    └── images, PDFs, diagrams, etc.
```


- `classes/`: One folder per class session. Inside each:
  - `code/`: Live-coded material, example solutions, starter code.
  - `homework/`: Homework assignments and instructions.
  - `resources/`: Slides, reading material, cheat sheets, etc.

- `projects/`: Space for student final projects or starter templates.

- `assets/`: Optional folder for shared diagrams, images, PDFs.

---

## 📅 Naming Conventions

- **Repository name**:  
  Use the pattern: `YEARSEMESTER-course-name`:  
  - `2025SS-javascript-intro` (SS = Spring Summer)  
  - `2025AW-advanced-js` (AW = Autumn/Winter)  
  This helps identify the course and time period quickly.

- **Class folders**: `01-class`, `02-class`, ..., `10-class`  
  Always use two digits for class numbering for consistent sorting.

- **File names**:  
  - Use lowercase and hyphens (e.g., `array-methods.js`, `homework-instructions.md`)
  - Use descriptive names (e.g., `functions-intro.js` is better than `lesson1.js`)

- **Homework files**:  
  Prefer formats like:
  - `homework.md` inside the `homework/` folder
  - Or one file per task: `task-01.md`, `task-02.md`

---
## ✏️ Content Guidelines

### README.md
Each course repo should have a top-level `README.md` explaining:
- Course title
- Semester (e.g., Spring 2025)
- Short description
- How to navigate the repo

you can delete the template README and other template-specific files (like `GUIDELINES.md` and `CONTRIBUTING.md`) from your cloned copy once you're set up, unless you plan to reuse or adapt them.


### Class content
- Each `XX-class/` folder should be self-contained and reflect what was covered that day.
- Include any slides or resources shared during class.
- Provide code examples (with comments if possible) for students to revisit later.
- Use the `resources/` folder for links, PDFs, or supplemental material.
- Include an index.md file inside each class folder. This file should briefly describe:
  - What was covered during the session
  - Learning objectives
  - Any in-class activities
  - Links to relevant resources or slides

### Homework
- Homework should be clearly stated, with expected output or goals.
- Optionally, provide starter code or a challenge format.
- Use the `homework/` folder inside each class.

---

## ✅ Best Practices

- Keep it simple and consistent.
- Reuse and adapt from past classes.
- Avoid uploading unnecessary files (e.g., compiled code, personal notes).
- Test or lint code where appropriate.
- Clearly indicate which files students should edit or submit.
- Use version control actively—commit frequently and meaningfully.

---

## 🤝 Collaboration

If multiple teachers contribute to the same course repo:
- Assign responsibilities or coordinate updates ahead of time.
- Use branches or forks for parallel work if needed.
- Review each other's work before merging major changes.

---

## 🔄 Versioning and Forking

- Use this template to create a fresh repo for each semester (e.g., `2025-spring-advanced-javascript`).
- Do not push changes back to the original template repo.
- If you find improvements for the template, [see CONTRIBUTING.md](./CONTRIBUTING.md)

---

Thanks for keeping our courses structured and accessible! 🎓✨
