# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Implementing the challenge website

## Initialise a new react app

Clear down for the work

## Review the target example

Target has a landing home page component and a shop coponent that can be accessed from navbar or from the Browse plants
The site is responsive

- Create components
- Create pages
- test the basic construct works as coponents

- move the product to a component

  - Setup the product component to take the prop values for price name and url
  - implement the product in the shop as a single unit passing the testdata

- Create multiple objects from the sourcedata with a callback function

- Implement routing from navbar to call each page.

  - Setup BrowserRouter Routes Route (Alias BrowserRouter as Router)
    -configure routes in the app.jsx to pages targets
    -configure Header Nav to take the routes for all pages

- Set Styling for home page
  - import bootstrap using npm install bootstrap

| Class                | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `container-fluid`    | Creates a full-width container, spanning the entire width of the viewport           |
| `row`                | Creates a horizontal group of columns                                               |
| `g-0`                | Removes gutters (spacing between columns) in rows and columns                       |
| `col-md-6`           | Creates a column that spans 6 units (half the width) on medium-sized screens and up |
| `d-flex`             | Creates a flexbox container                                                         |
| `align-items-center` | Vertically centers flex items                                                       |
| `bg-light`           | Applies a light background color                                                    |
| `bg-success`         | Applies a green (success) background color                                          |
| `p-0`                | Removes padding on all sides                                                        |
| `p-5`                | Applies large padding on all sides                                                  |
| `mb-3`               | Applies margin to the bottom                                                        |
| `mb-4`               | Applies larger margin to the bottom                                                 |
| `text-success`       | Applies green (success) text color                                                  |
| `text-muted`         | Applies a muted (subdued) text color                                                |
| `text-white`         | Applies white text color                                                            |
| `display-4`          | Applies a large display heading style                                               |
| `lead`               | Makes a paragraph stand out                                                         |
| `btn`                | Base class for buttons                                                              |
| `btn-success`        | Applies green (success) styling to a button                                         |
| `btn-lg`             | Makes a button larger                                                               |
| `img-fluid`          | Makes an image responsive (scale with its container)                                |
| `h-100`              | Sets height to 100%                                                                 |
| `w-100`              | Sets width to 100%                                                                  |
| `object-fit-cover`   | Makes an image cover its container while maintaining aspect ratio                   |
| `py-3`               | Applies padding to the top and bottom                                               |
| `h3`                 | Applies h3 heading styles                                                           |
| `mb-0`               | Removes margin from the bottom                                                      |
| `text-end`           | Aligns text to the right                                                            |
| `me-3`               | Applies margin to the right (end in LTR languages)                                  |
