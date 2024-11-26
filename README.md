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


steps how the project was done

Here’s a simple step-by-step breakdown of how this React application is created:

1. Import Required Libraries
React: The React library is imported to create components and manage state in the app.
React-Bootstrap: The app uses React-Bootstrap for styling components like Container, Navbar, Button, Row, and Col.
App.css: External CSS file for additional styling
2. Define the App Component
3. 3. Initialize State
A state variable buttonStatus is initialized using the useState hook. It holds an array of objects, where each object represents the status of a button (whether it’s disabled and its color).
new Array(9): Creates an array with 9 elements (one for each button).
fill({ disabled: false, color: "" }): Fills the array with an object indicating that each button is initially enabled (disabled: false) and has no color (color: "").
4. Define Color Array
An array colors is defined with 9 color values. These colors will be assigned to the buttons as they are clicked.
5. Button Click Handler
The handleButtonClick function is defined to update the state when a button is clicked. This function:

Takes the index of the clicked button.
Creates a copy of the current buttonStatus array.
Updates the color of the clicked button to the corresponding color from the colors array.
Sets the disabled flag to true to disable the clicked button.
Updates the state with the new buttonStatus.

6. Rendering the UI
The JSX markup renders a Navbar and a grid of 9 buttons. It uses the following components:

Navbar: A simple navigation bar with the text "Button Color".
Container: A Bootstrap container to center and organize content.
Row and Col: Bootstrap's grid system to create a 3-column layout for the buttons.
Button: A React-Bootstrap button that is assigned a color and can be clicked to trigger the state change.
Button Color: Each button's background color is dynamically set using style={{ backgroundColor: btn.color }}.
Disabled Button: The disabled={btn.disabled} prop ensures that once a button is clicked, it gets disabled.
Button Label: The button displays the text "Button 1", "Button 2", etc., using {index + 1} for numbering.
7. Export the Component
Finally, the App component is exported to be used in other parts of the application (usually in index.js).
Summary of How it Works:
The app starts with 9 buttons that are initially enabled and have no background color.
When a button is clicked, it gets assigned a color from the colors array, and it becomes disabled.
The UI updates dynamically based on the state of each button, showing its respective color and disabling it after it is clicked.
This is a simple React app that demonstrates the use of state, event handling, and dynamic styling in React components.
