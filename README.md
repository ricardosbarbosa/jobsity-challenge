This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo
You can find a demo of this project deployed on Netlify here: https://ricardo-jobsity-challenge.netlify.com/

## Weather api
The weather api chosen was https://www.weatherapi.com/ 
To be easier, the api key is hardcoded in the application, instead to be a enviroment variable.

The api key has the free plan, wo the application has a limitation to show the weather only for the last 30 days.
For the other dates the weather will not be applied in the application.

## Calendar UI
To create the calendar ui in the application the [react-big-calendar](https://github.com/jquense/react-big-calendar) library was choosen.

## Main libraries
- redux
- redux-saga
- axios
- formik 
- yup
- moment
- material-ui

## Available Scripts

In the project directory, you can run:

### `npm start`

Use this command to run the application locally, in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Use this command to launch the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


