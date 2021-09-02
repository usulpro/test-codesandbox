## Live coding task

This is a NextJS project prepared for a live coding interview.

The task is to create a home page for this app with two components on it.

### 1 Form

This form should contain the following inputs:

- Github user name
- Email
- Dropdown with a list of some cities of your choice
- Submit button

### 2 User card

User card should output the following details about a Github user whose name was entered in the form:

- User avatar
- List of user's public Github repositories
- User email (assuming this is the email entered in the form)
- User relocation city (taken from the form)

The user’s repository list should be sorted by a count of stars (from the most starred) and should contain the following details:
- Repository name
- Count of stars
- A link to the repository card (already implemented in this app see `pages/repository/[owner]/[name]`).

## What we expect to have as a result

- fetching content from Github via GraphQL queries
- semantic html tags. We don't expect any css styles though
- show usage of React components and hooks
- handling user errors and fields validations
- handling request states and errors
- basic accessibility
- app state management explanation
- SSR/CSR/SSG explanation



