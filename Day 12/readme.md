<b>Check the version of github:</b> <br>
git --version <br> <br>

<strong>List the files in the current working directory:</strong> <br>
ls <br> <br>

<strong>Show even hidden file:</strong> <br>
ls -la <br> <br>

<strong>Change the working directory:</strong> <br>
cd folder-name <br> <br>

<strong>Remove that additional file from staging area:</strong> <br>
git rm --cached filename.ext <br> <br>

<strong>Remove that additional file from the secondary memory:</strong> <br>
git rm waste.html <br> <br>

<strong>Check git status:</strong> <br>
git status <br> <br>

<strong>Add git file to staging environment:</strong> <br>
git add index.html <br> <br>

<strong>Add more than one file or all files to staging environment</strong> <br>
git add index.html style.css <br>
git add --all<br>
git add .<br> <br>

<strong>Check status of the repo in a more compact way:</strong> <br>
git status --short <br>
or, git status -s <br> <br>

<strong>Commit the change with message:</strong> <br>
git commit -m "First release of Hello World!" <br> <br>

<strong>Note: Short status flags are:</strong> <br>
?? - Untracked files <br>
A - Files added to stage <br>
M - Modified files <br>
D - Deleted files <br> <br>

<strong>Git commit without stage for already tracked file:</strong> <br>
git commit -a -m "Updated index.html with a new line" <br>

<strong>View the history of commits for a repository</strong> <br>
git log <br>
git show <br>
git log --oneline (in one line) <br>

<strong>See all the available options for the specific command:</strong> <br>
git command --help <br>

<strong>See all possible commands:</strong> <br>
git help --all <br> <br>

<strong>Note:</strong> <br> If you find yourself stuck in the list view,
SHIFT + G to jump the end of the list,
then q to exit the view. <br> <br>

<strong>Create a new branch:</strong> <br>
git branch branch-name <br> <br>

<strong>Check and confirm which branch you are on:</strong> <br>
git branch <br> <br>

<strong>Move from the current branch to another branch:</strong> <br>
git checkout branch-name <br> <br>

<strong>Note:</strong> <br> Now, check the status of the current branch <br> <br>

<strong>Note:</strong> <br> Then, add the branched file to the staging environment
and also commit <br> <br>

<strong>List all the files in the current directory:</strong> <br>
ls <br> <br>

<strong>Change from current branch to master</strong> <br>
git checkout master <br> <br>

<strong>Directly create and shift to a new branch:</strong> <br>
git checkout -b new-branch <br> <br>

<strong>Merge a branch to master:</strong> <br>
git merge branch-name <br> <br>

<strong>Delete a branch:</strong> <br>
git branch -d branch-name <br> <br>

<strong>Push local repository to GitHub:</strong> <br>
git remote add origin repo_url <br> <br>

<strong>Push master branch to local origin:</strong> <br>
git push -u origin master <br> <br>

<strong>Pull the file to local after merge:</strong> <br>
git pull <br> <br>

<strong>Clear screen:</strong> <br>
Ctrl + L <br>
or, type => clear <br> <br>

<strong>Quit from a running process:</strong> <br>
Ctrl + C <br> <br>

<strong>Commit:</strong> <br>
git commit -m "First file" <br> <br>

<strong>Config:</strong> <br>
git config --global user.email "prasannaacharya2073@gmail.com" <br>
git config --global user.name "Prasanna Acharya" <br>
git conig --list <br> <br>

<strong>Delete recent commits:</strong> <br>
git reset [unique_commit_id] <br>
(View commit-id using => git log or, => git log --oneline) <br> <br>

<strong>Edit the commit message of the recent commit:</strong> <br>
git commit --amend -m "New commit message" <br> <br>

<strong>Other commands:</strong> <br>
git push origin -f <br>
(This will force) <br> <br>

git remote --verbose
