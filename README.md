# Next Antd Styled-Components Starter using the App directory

## Includes

- Reusable UI components and theming
- Theming and SSR support using styled-components and antd

## TODO

[ ] Eslint and prettier configuration

## Notes

- When using styled-component, mark the file with `'use client'`
- Always use `shouldNotForwardPropsWithKeys` (/lib/styled.ts), to avoid styled components custom props to end up in the DOM
- Follow the structure as it is now

## Getting Started for Mac Users

```
  brew install Nodejs
  brew install yarn
  cd project directory
  yarn
  yarn run dev

```

### Database Setup

```
You must have postgresql installed if you do not have postgresql installed
brew install docker
cd to root directory
docker-compose up -d
```

### Linting

Configure your editor to highlight linting erros ([eslint](http://eslint.org/))
and format your code ([prettier](https://github.com/prettier/prettier)) on save.
Here are the options we use:

```
prettier --double-quote --trailing-comma es5
```

Before pushing a commit:

- use prettier to correctly format the code
  ```
  npm prettier
  ```
- check for linting errors and warnings
  ```
  npm lint
  ```

### Testing

@ todo

Our React (Nextjs) dashboard Jest will be used as Testing Library
Notes:

- **Pre-Commit Tests**: Run tests before committing to update snapshots.
- **During Development**:
  - Use `yarn test:watch` for a live testing environment. Press `o` to focus on changed files.
- **Snapshot Testing**:
  Prefer Jest snapshots for UI consistency. Example:
  ```javascript
  describe("<SignupForm />", () => {
    it("renders correctly", () => {
      const component = createRender(<SignupForm />);
      expect(component).toMatchSnapshot();
    });
  });
  ```

# TODO for Enzyme simulating events:

Navid will add this section

### [ES6 for Humans](docs/es6.md)

<br>

# Code Review

A guide for reviewing code and having your code reviewed.

## Everyone

- Accept that many programming decisions are opinions. Discuss tradeoffs, which
  you prefer, and reach a resolution quickly.
- Ask questions; don't make demands. ("What do you think about naming this
  `:user_id`?")
- Ask for clarification. ("I didn't understand. Can you clarify?")
- Avoid selective ownership of code. ("mine", "not mine", "yours")
- Avoid using terms that could be seen as referring to personal traits. ("dumb",
  "stupid"). Assume everyone is intelligent and well-meaning.
- Be explicit. Remember people don't always understand your intentions online.
- Be humble. ("I'm not sure - let's look it up.")
- Don't use hyperbole. ("always", "never", "endlessly", "nothing")
- Don't use sarcasm.
- Keep it real. If emoji, animated gifs, or humor aren't you, don't force them.
  If they are, use them with aplomb.
- Talk synchronously (e.g. chat, screensharing, in person) if there are too many
  "I didn't understand" or "Alternative solution:" comments. Post a follow-up
  comment summarizing the discussion.

## Having Your Code Reviewed

- Be grateful for the reviewer's suggestions. ("Good call. I'll make that
  change.")
- Don't take it personally. The review is of the code, not you.
- Explain why the code exists. ("It's like that because of these reasons. Would
  it be more clear if I rename this class/file/method/variable?")
- Extract some changes and refactorings into future tickets/stories.
- Link to the code review from the ticket/story. ("Ready for review:
  https://github.com/organization/project/pull/1")
- Push commits based on earlier rounds of feedback as isolated commits to the
  branch. Do not squash until the branch is ready to merge. Reviewers should be
  able to read individual updates based on their earlier feedback.
- Seek to understand the reviewer's perspective.
- Try to respond to every comment.
- Wait to merge the branch until Continuous Integration (TDDium, TravisCI, etc.)
  tells you the test suite is green in the branch.
- Merge once you feel confident in the code and its impact on the project.

## Reviewing Code

Understand why the change is necessary (fixes a bug, improves the user
experience, refactors the existing code). Then:

- Communicate which ideas you feel strongly about and those you don't.
- Identify ways to simplify the code while still solving the problem.
- If discussions turn too philosophical or academic, move the discussion offline
  to a regular Friday afternoon technique discussion. In the meantime, let the
  author make the final decision on alternative implementations.
- Offer alternative implementations, but assume the author already considered
  them. ("What do you think about using a custom validator here?")
- Seek to understand the author's perspective.
- Sign off on the pull request with a :thumbsup: or "Ready to merge" comment.

## Style Comments

Reviewers should comment on missed [style](../style)
guidelines. Example comment:

    [Style](../style):

    > Order resourceful routes alphabetically by name.

An example response to style comments:

    Whoops. Good catch, thanks. Fixed in a4994ec.

If you disagree with a guideline, open an issue on the guides repo rather than
debating it within the code review. In the meantime, apply the guideline.

# Git Protocol

A guide for programming within version control.

## Maintain a Repo

- Avoid including files in source control that are specific to your
  development machine or process.
- Delete local and remote feature branches after merging.
- Perform work in a feature branch.
- Rebase frequently to incorporate upstream changes.
- Use a [pull request] for code reviews.

[pull request]: https://help.github.com/articles/using-pull-requests/

## Write a Feature

Create a local feature branch based off master.

    git checkout master
    git pull
    git checkout -b <branch-name>

Rebase frequently to incorporate upstream changes.

    git fetch origin
    git rebase origin/master

Resolve conflicts. When feature is complete and tests pass, stage the changes.

    git add --all

When you've staged the changes, commit them.

    git status
    git commit --verbose

Write a [good commit message]. Example format:

    Present-tense summary under 50 characters

    * More information about commit (under 72 characters).
    * More information about commit (under 72 characters).

    http://project.management-system.com/ticket/123

If you've created more than one commit,
[use `git rebase` interactively](https://help.github.com/articles/about-git-rebase/)
to squash them into cohesive commits with good messages:

    git rebase -i origin/master

Share your branch.

    git push origin <branch-name>

Submit a [GitHub pull request].

Ask for a code review in the project's chat room.

[good commit message]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
[github pull request]: https://help.github.com/articles/using-pull-requests/

## Review Code

A team member other than the author reviews the pull request. They follow
[Code Review](/code-review) guidelines to avoid
miscommunication.

They make comments and ask questions directly on lines of code in the GitHub
web interface or in the project's chat room.

For changes which they can make themselves, they check out the branch.

    git checkout <branch-name>
    ./bin/setup
    git diff staging/master..HEAD

They make small changes right in the branch, test the feature on their machine,
run tests, commit, and push.

When satisfied, they comment on the pull request `Ready to merge.`

## Merge

Rebase interactively. Squash commits like "Fix whitespace" into one or a
small number of valuable commit(s). Edit commit messages to reveal intent. Run
tests.

    git fetch origin
    git rebase -i origin/master

Force push your branch. This allows GitHub to automatically close your pull
request and mark it as merged when your commit(s) are pushed to master. It also
makes it possible to [find the pull request] that brought in your changes.

    git push --force-with-lease origin <branch-name>

View a list of new commits. View changed files. Merge branch into master.

    git log origin/master..<branch-name>
    git diff --stat origin/master
    git checkout master
    git merge <branch-name> --ff-only
    git push

Delete your remote feature branch.

    git push origin --delete <branch-name>

Delete your local feature branch.

    git branch --delete <branch-name>

[find the pull request]: http://stackoverflow.com/a/17819027
