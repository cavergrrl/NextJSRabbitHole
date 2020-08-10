# Next JS Rabbit Hole

NextJS app configured with:

- [Material-UI](https://material-ui.com/)
- [SASS](https://sass-lang.com/)
- Internationalization with [Rosetta](https://www.npmjs.com/package/rosetta)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## How to use

### Install all dependencies defined in package.json:

```bash
npm install
# or
yarn
```

### Running the application for dev
This command will compile all your assets including a source map. 
This basically makes it easier to inspect any errors in the developer tools 
in the console in your browser. Also the application will refresh with any
changes done to the files.

```bash
npm run dev
# or
yarn dev
```

### Running the application
This command will minify everything and NOT create a source map for the files.
Changes done to files will NOT be reflected. You will need to restart to see
any changes.

```bash
npm run start
# or
yarn start
```

### Running the application for production
This command will build the application for production to the build directory.
The "build" folder would contain all the static files which can be directly used 
on any web server. Also, the build command transpiles our source code into code 
which the browser can understand. It uses Babel for this and files are optimized 
for best performance. All of our JS files are bundled into a single minified file 
and even HTML/CSS code is minified to significantly reduce the download times on 
the client's browser.

Build folder is './next'

```bash
npm run build
# or
yarn build
```
