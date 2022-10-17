## Instructions to run the App

In the project directory, you can run:
### `npm install`

Install all the dependencies needed for the repository.

### Before `npm start`

You need to get a personal token to use GitHub API.\
Open [How to get Personal token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and follow the instructions to get a token.\
Once you have the token, replace REACT_APP_TOKEN_GRAPHQL on .env file with your Personal Token (please do not add quotes).

### `npm start`
Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

after use `run build` you need execute
- npm install -g serve
- serve -s build

## Future Improvements

- Refactoring: maybe create component for text with props as size, color, etc. to use in place of ErrorMsg or replace the text labels used on TopicList.js
- Additional Features: search if is possible get more that 10 topics on the request response, add tescafe tests.

