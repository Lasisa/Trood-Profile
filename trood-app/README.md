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


# Trood-Test

# Project Description 

This single-page application (SPA) is designed for managing user profile data in a personal dashboard. Users can view, edit, and save their profile details, including their name, surname, job title, phone number, address, interests, profile link, and avatar.

# Key Features:

Profile Display: All user information is presented in an intuitive layout.

Profile Editing: Editable fields with validation for accuracy, as well as the ability to upload an avatar with a live preview.

Data Persistence: Updates are stored locally using localStorage, ensuring they remain accessible after a page refresh.

User-Friendly Interface: "Save" and "Cancel" buttons allow seamless control over edits.

The application adheres to the Figma design guidelines, prioritizing usability, interactivity, and reliable data handling.

# Technologies Used 

React: For building the dynamic, reusable, and component-based user interface.

React Icons: To incorporate visually appealing and consistent icons throughout the application.

localStorage: For saving and persisting user profile data directly in the browser.

VS Code: As the primary code editor for efficient development and debugging.

Git: For version control, enabling tracking of changes and collaborative development.

GitHub: To host the project repository and manage the codebase remotely.

Figma
Used for designing the application's UI and ensuring mobile responsiveness.

# Authors and Contributions

This project was developed solely by Lazizahon Abdulloevа. I was responsible for all aspects of the project, including:

Designing and implementing the user interface using React to create a dynamic and responsive single-page application.

Integrating React Icons for a polished and professional look.

Setting up local data storage with localStorage to ensure data persistence and usability.

Implementing input validation logic for all form fields, ensuring data integrity and a seamless user experience.

Adding functionality for real-time avatar uploads and previews.

Writing clean and maintainable code using VS Code.

Managing version control with Git, and hosting the repository on GitHub for accessibility and project tracking.

# Expected Outcomes:

Profile Management: Users can view and edit their profile details (name, surname, job title, phone, address, interests, and links).
Avatar Upload: Users can upload an avatar image, which is displayed immediately after selection (max size 5MB).

Interest and Link Management: Users can add/remove interest tags and links (site name and URL) and toggle input visibility for new entries.
Profile Visibility: Users can set their profile to "Private" or "Public" (default is "Private").

Validation: Data fields are validated before saving to ensure correct input formats (e.g., name, phone).

Persistent Data: Profile data is saved in localStorage, preserving information across page reloads.

Save/Cancel: Users can save changes to their profile or cancel to revert to previously saved data.

Error Handling: Invalid inputs trigger alerts, preventing save actions if data is incorrect.

User Experience: The interface is user-friendly, with clear labels, buttons, and responsive design.
