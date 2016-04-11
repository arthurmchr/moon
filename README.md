# Installation

```
npm install -g jspm
npm install
jspm install
```

Then 3 commands are available :
- `npm run watch` watch compiled files and start an HTTP server with CSS livereload
- `npm run build` clean and build needed files (HTML / CSS / JS)
- `npm run deploy` same as build but copy all needed files in a `dist` directory

# Git branch workflow

## Features

When we start a new feature or a bugfix, we create a new branch from `dev` :

```
$(dev) git checkout -b featureName
...
$(featureName) git add -A
$(featureName) git commit -m "commit message"
```

We follow `dev` branch evolution and regularly ensure that our code still works by rebasing our branch `featureName` on branch `dev` :

```
$(featureName) git rebase dev
```

When our feature is completed, we do a last rebase as described above. Thanks to this :

- we ensure that the maintainer will be able to merge easily
- we check that our code is compliant with `dev` branch

The maintainer can now merge this branch in `dev` without conflicts :

```
$(dev) git merge --no-ff featureName
```

When this is done, we can delete our branch :

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
