### Default Developer Workflow

- Assign yourself to an issue you feel confident in taking on
- Checkout a personal branch from the latest version of `master`. Always make sure you have the latest before starting work with:
```
git checkout master
git pull
git checkout <personal-branch>
git merge master
```
- After you've finished testing locally, add any new files, commit and refer to any relevant issues in your commit message. Include `closes #1` if the code you are pushing resolves the issue. One or two complete sentences should suffice depending on the size and complexity of your implementation
- Before pushing, do another sync with `master` in case any pull requests have been merged already while you were working. Resolve any conflicts before finalizing the commits and pushing to your branch.
- Create a pull request to `master` and wait for a reviewer to merge the changes
- You can continue working on your branch with a new issue as long as you sync with master early and often. If any changes are required after review, pushing to your personal branch again will automatically update the pull request