# Cat-alog

This application provides information about different cat breeds, helping cat enthusiasts and potential pet owners to explore and learn more about various feline breeds. Whether you're curious about a specific breed's characteristics, temperament, or grooming needs, this app has got you covered!

## Features
- Browse images of different breed of cats Breeds: Explore a wide range of cat breeds, each with its own page featuring detailed information.
- Search Functionality: Quickly find specific cat breeds by partial text search
- Responsive Design: Enjoy a seamless experience across various devices, including desktops, tablets, and mobile phones.


## Tech Stack
- This project was bootstrapped with [Create React App](https://facebook.github.io/create-react-app), using React w/ Typescript
- TailwindCSS for styling and grid layout 
- [@shacdn/ui](https://ui.shadcn.com) for re-usable UI components
- React Context API for state management

## Local Development Setup
- Run `npm i`
- Run `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### [@shacdn/ui](https://ui.shadcn.com) UI Components
- UI Components are stored in from @shacdn/ui are stored in `src/components/ui`
- Add UI components from [@shacdn/ui](https://ui.shadcn.com) by running `npx shadcn-ui@latest add <component name>` . See installation guide for each component in [@shacdn/ui documentation](https://ui.shadcn.com/docs)
- Move the component *.tsx file to `src/components/ui` directory and fix any imports to point to this directory

### AppConfig
- The following parameters are configurable for the app in `src/appConfig.ts` file

Variable | Required | Description | Default Value
--- | --- | --- | ---
CAT_API_KEY | No | The Cat API key. See [Authentication in https://docs.thecatapi.com/](https://docs.thecatapi.com/)  for more details | Empty string
CAT_API_BASE_URL | Yes | The Cat API base URL | https://api.thecatapi.com/v1
PAGE_LIMIT | Yes | The number of cat image to show per page load | 10

## Testing
- Run `npm test`
- Launches the test runner in the interactive watch mode.
- See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deployment
- Run `npm run build`
- Builds the app for production to the `build` folder.
- It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
- Move this build package to your web server
- See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.