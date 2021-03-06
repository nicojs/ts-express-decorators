---
layout: contributing
pageClass: contributingpage
heroText: TS.ED
heroVersion: community
heroDescription: Become contributors
contributors:
 title: Our<br /><b>Contributors</b>
backers:
 title: Our<br /><b>Backers</b>
 details: Thank you to all our backers! 🙏
 src: https://opencollective.com/tsed/tiers/backer.svg?width=890
 link: https://opencollective.com/tsed#backers
 button:
   text: Become backers
   link: https://opencollective.com/tsed#backers
sponsors:
 title: Our<br /><b>sponsors</b>
 details: Support this project by becoming a sponsor. Your logo will show up here with a link to your website.
 src: https://opencollective.com/tsed/tiers/sponsor.svg?width=890
 link: https://opencollective.com/tsed#sponsor
 button:
   text: Become sponsor
   link: https://opencollective.com/tsed#sponsor
---
# Contributing
## Introduction

First, thank you for considering contributing to Ts.ED! It's people like you that make the open source community such a great community! 😊

We welcome any type of contribution, not only code. You can help with

- QA: file bug reports, the more details you can give the better (e.g. screenshots with the console open)
- Marketing: writing blog posts, howto's, printing stickers, ...
- Community: presenting the project at meetups, organizing a dedicated meetup for the local community, ...
- Code: take a look at the [open issues](https://github.com/Romakita/tsed/blob/master/issues). Even if you can't write code, commenting on them, showing that you care about a given issue matters. It helps us triage them.
- Money: we welcome financial contributions in full transparency on our [open collective](https://opencollective.com/tsed).

## Your First Contribution

Working on your first Pull Request? You can learn how from this free series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

## Submitting code

Any code change should be submitted as a pull request. The description should explain what the code does and give steps to execute it. The pull request should also contain tests.
Code review process

The bigger the pull request, the longer it will take to review and merge. Try to break down large pull requests in smaller chunks that are easier to review and merge. It is also always helpful to have some context for your pull request. What was the purpose? Why does it matter to you?

## Financial contributions

We also welcome financial contributions in full transparency on our open collective. Anyone can file an expense. If the expense makes sense for the development of the community, it will be "merged" in the ledger of our [open collective](https://opencollective.com/tsed) by the core contributors and the person who filed the expense will be reimbursed.

## Questions

If you have any questions, create an [issue](https://github.com/Romakita/tsed/blob/master/issue) (protip: do a quick search first to see if someone else didn't ask the same question before!). You can also reach us at hello@tsed.opencollective.com.

## How to work on Ts.ED
### Setup

Clone your fork of the repository

```bash
$ git clone https://github.com/YOUR_USERNAME/ts-express-decorators.git
```

Install npm dependencies

```bash
npm install
```

Run build process

```bash
npm run build
```

### Test

```bash
npm run test
```

### Gflow

[Gflow](https://www.npmjs.com/package/gflow) is a command line tool to help developer with the Git Flow process used in Ts.ED.

Gflow help you to create a branch from production, rebase and run the test before pushing your branch on your remote repository.

```bash
npm install -g gflow
```

#### Start a feature branch

```bash
gflow new feat name_of_feat
```

#### Commit & Push a feature

This command rebase your branch feature from the production branch, run the test and push your branch.

```bash
git commit -m "feat(domain): Your message"
gflow push
```
> To write your commit message see [convention page](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)

When your feature is ready to review, you can open a PR on Ts.ED github.

#### Finish a feature

After the PR has been accepted, the feature will be automatically merge on the master branch, but
your feature isn't merge with the production branch.

To publish your feature on the production branch you need to run a this command:

```bash
gflow finish
```

> Note: This action works only on the Ts.ED repository (not on your fork).

### Write documentation

Ts.ED use docsify to convert markdown to HTML. In addition, all documentation in your code will be used to generate
the Api documentation. To preview your comments on a class you can run this command:

```
npm run doc:serve
```

***

## Guidelines

- Ts.ED follow the git flow to generate a release note. To write your commit message see [convention page](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)
- Please try to combine multiple commits before pushing
- Please use TDD when fixing bugs. This means that you should write a unit test that fails because it reproduces the issue, then fix the issue and finally run the test to ensure that the issue has been resolved. This helps us prevent fixed bugs from happening again in the future
- Please keep the test coverage at 100%. Write additional unit tests if necessary
- Please create an issue before sending a PR if it is going to change the public interface of Ts.ED or includes significant architecture changes,
- Feel free to ask for help from other members of the Ts.ED team

<!-- This `CONTRIBUTING.md` is based on @nayafia's template https://github.com/nayafia/contributing-template -->