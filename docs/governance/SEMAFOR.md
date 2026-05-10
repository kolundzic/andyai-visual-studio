# SEMAFOR Standard

**Product:** AndyAI Visual Studio  
**Version:** `v0.2.0`  

---

## 1. Core rule

> **Downloads je magacin. Repo folder je radionica.**

Meaning:

- `~/Downloads` is only for received ZIP files and temporary packages.
- Real work happens inside the repo folder.
- Scripts must verify the target repo before writing files.
- Scripts must not blindly operate from the wrong directory.

---

## 2. Required repo path

```text
~/Documents/Projects/andyai-visual-studio
```

---

## 3. Required remote

```text
github.com/kolundzic/andyai-visual-studio
```

---

## 4. Apply script rules

Every TAP-TAP apply script should:

1. locate the repo path
2. `cd` into the repo folder
3. verify folder name
4. verify git repository
5. verify GitHub remote
6. verify expected base tag
7. write/patch files
8. run verifier
9. commit
10. tag
11. push branch
12. push tag
13. print final status

---

## 5. Why this matters

This protects against the biggest practical mistake:

> running a correct script in the wrong project.

SEMAFOR makes the process safer, clearer, and repeatable.
