## Live coding task

This is a NextJS project prepared for a live coding interview. It's a pretty simplified version of a project we regularly deal with. Typically we'd launch this on a local machine but this instance has the same server-side functionality running inside the Code Sandbox container.

The task is to create a home page for this app with two components on it: a form and a user card. A form should allow to populate fields and send a request to Github API (Github client is already configured and ready to use). The fetched result should be shown on a user card on the same page. Below are the details about these components.

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

- Fetching content from Github via GraphQL queries and outputting the results
- Confident React API usage (components, props/state, hooks)
- Semantic HTML tags. We don't expect any CSS styles though
- Handling user errors and fields validations
- Handling request states and errors
- Basic accessibility
- App state management implementation or explanation of how this could be implemented
- SSR/CSR/SSG explanation


## Tips

- Read the readme file. Inspect existing app structure. Ask questions if something isn't clear or if you don't have needed information.
- Usage of any documentation is allowed.




