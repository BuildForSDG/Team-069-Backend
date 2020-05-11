## Introduction

This is the contribution guide for Team-069 in line with the stated conventions.

## Setup

### Clone The repo

First off you want to clone this repo to your local repository.

```sh
// using ssh
$ git clone git@github.com:BuildForSDG/Team-069-Backend.git

// using https
$ git clone https://github.com/BuildForSDG/Team-069-Backend.git
```

## Create a branch for the task being worked on.

Next you should create a branch for the feature you are working on.
Branch name should follow the following convention.

- {issue or story type prefix}-{dash separated word summary}

- Issue or story type prefixes are one of the following:

  - ft => Feature
  - bg => Bug
  - ch => Chore
  - rf => Refactor

- Example

  - ft-facebook-auth
  - bg-facebook-auth-timeouts

  **Tip:** check the label for the task assigned to you for issue/story type, then add a short name describing the task to it.

- To create a branch from the develop branch run the following:

```sh
$ git checkout -b ft-branch-name
```

This creates a new branch from develop and switches you to the new branch immediately.

### Commit changes

Great job so far :+1: .
So you have been able to complete the task you are working on and ready to commit it.

Commit messages should follow the following [convention](https://www.conventionalcommits.org/).

```
$ git commit -m 'commit-message'
```

```
#Format
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

- Type: means type of issue e.g feature, bug e.t.c
- Description: A description of the fix worked on.
- Footer: Should contain name and issue number e.g [Fixes #2], which means it fixes issue #2, or [Finishes #2] means it finishes issue #2

```
#Example 1
chore(coveralls):add coveralls yml[Finishes #15]

#Example 2
bug(user-signup):fix user signup [Fixes #61]
```

## Create a pull request

So you are now ready to push to the remote repo :rocket: .

```bash
git push origin <name-of-branch>
```

Once this is done, you can create a pull request to the develop branch.
**Note:** Before your changes can be merged it requires three reviewers, so make sure you tell the team once you are done.

_Thanks for going through the guide, that will be all for now, we edit it as soon there are new things to add_
