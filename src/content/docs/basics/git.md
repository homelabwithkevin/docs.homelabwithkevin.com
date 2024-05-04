---
title: Git
---

Source: https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet

| Command | Description | Example |
| --------- | ------------------ | ---- |
| git init | Initialize repository |  |
| git clone | Clone repository | git clone https://github.com/homelabwithkevin/docs.homelabwithkevin.com |
| git add | Stage file/directory | git add git.md |
| git commit -m  <message> | Commit staged files/directories, with message | git commit -m 'update doc' |
| git status | Get status of repo (stashed files, branch) | |
| git log --pretty=oneline | Get log of repo | |
| git reflog | Get detailed log of repo | |
| git diff | Get difference between committed and staged/unstaged | git diff git.md |
| git fetch | Fetch repo (does not pull) | |
| git pull | Fetch repo and immediately merge into local | |
| git push | Push committed changes to remote branch | |
| git rebase -i HEAD~X | Rebease to X commits ago, used for squashing sometimes | git rebase -i HEAD~3 |
| git merge <branch> --squash | Squash commit merge <branch> into the current branch | git merge example --squash |