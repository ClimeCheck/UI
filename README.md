## ClimeCheck UI

All contributors should adhere to the code conventions used in the devlony repository. The guidelines are outlined below.

### Workflow¶
1. Fork the repository¶


Use GitHub's interface to make a fork of the repo and clone it to your local machine.
```
git clone https://github.com/{user_github_handle}/UI.git
```



2. Add remote¶

Add the frontend repo as an upstream remote, and fetch upstream data:
```
git remote add upstream https://github.com/ClimeCheck/UI.git
git fetch upstream
```


3. Creating your branch¶

Create your local branch and should follow this naming convention:

feature/ ...

fix/ ...

refactor/ ...

doc/ ...

Create and switch to a new local branch called feat/[branch_name] based on development of the remote upstream.

```
git checkout -b feat/[branch_name] upstream/development
```

5. Commit changes to a branch¶

Make commits to your branch and make sure that you only make relevant changes. If you find yourself making unrelated changes, create a new branch for those changes. Prefix each commit like so:

(feature) add a new feature
(fix) fix inconsistent tests
(refactor) ...
(cleanup) ...
(doc) ...

## Commit message guidelines:

Commit messages should be written in the present tense, e.g. "(feature) add unit tests".
The first line of your commit message should be a summary of what the commit changes. Aim for about 70 characters max. Remember: This is a summary, not a detailed description of everything that changed.
If you want to explain the commit in more depth, following the first line should be blank and then a more detailed description of the commit. This can be as detailed as you want, so dig into details here and keep the first line short.

6. Rebase upstream changes¶

When you are done making changes, you can begin getting your code merged into the main repository. The first step is to rebase upstream changes into your branch.

```
git pull --rebase upstream development
```

This will start the rebase process. You must commit all of your changes before doing this. If there are no conflicts, this should roll all of your changes back on top of the changes from upstream, leading to an excellent, clean, linear commit history.

If there are conflicting changes, git will start yelling at you partway through the rebasing process. Then, git will pause rebasing to allow you to sort out the conflicts. You do this the same way you solve merge conflicts, by checking all of the files git says have been changed in both histories and picking the versions you want. Be aware that these changes will show up in your pull request, so try and incorporate upstream changes as much as possible.

You pick a file by git add ing it - you do not make commits during a rebase.

8. Create a pull request¶

Make a clear pull request from your fork and branch to the upstream development branch, detailing exactly what changes you made and what feature this should add. The clearer your pull request is, the faster you can get your changes incorporated into this repository.
