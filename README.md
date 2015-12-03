# Installation

```
npm install -g jspm
npm install
jspm install
```

Then 3 commands are available :
- `npm run watch` watch compiled files and start an HTTP server with CSS livereload
- `npm run build` clean and build needed files (HTML / CSS / JS)
- `npm run deploy` same as build but copy all needed files in a `dir` directory

# Git branch workflow

## Features

When developers start a new feature or a bugfix, he creates a new branch from `dev` :

```
$(dev) git checkout -b featureName
$(featureName) git add -A
$(featureName) git commit -m "commit message"
```

He follows `dev` branch evolution and regularly ensures that his code still works by rebasing his branch `featureName` on branch `dev` :

```
$(featureName) git rebase dev
```

When his feature is complete, he does a last rebase as described above. Thanks to this :

- he ensures that the maintainer will be able to merge easily
- he checks that his code is compliant with `dev` branch

The maintainer can now merge this branch in `dev` without conflicts :

```
$(dev) git merge --no-ff featureName
```

When it is done, developer can delete his branch :

```
$(dev) git branch -d featureName
$(dev) git push origin --delete featureName
```

## Stables

We first need to tag our `dev` branch, then create a new branch :

```
$(dev) git tag x.x
$(dev) git checkout master
$(master) git merge --no-ff dev
```

## Hotfixes

If last master version needs hotfix, we can do this fix directly on it, and then before a new stable version release we will do :

```
$(dev) git merge --no-ff master
```

# Resources

## Git

- http://fle.github.io/an-efficient-git-workflow-for-midlong-term-projects.html
- http://nvie.com/posts/a-successful-git-branching-model/
