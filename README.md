# Thunkable Project List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you will need to run:

### `npm install`

Make sure to install the dependencies!

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run start:server`

Runs the apps server.\
This server has the standard CRUD APIs and can be accessed with the route:\
[http://localhost:8080/api/projects](http://localhost:8080/api/projects)

This route handles the methods GET, POST, PUT, DELETE.

### Features

I was able to accomplish the following features

1. Add a project
2. Edit a project
3. Delete a project
4. Set up Redux
5. Mobile Responsive

The following are extra features

1. Creating a baisc express server to allow real data fetching
2. On Mobile, I changed the UI slightly to allow for the project list to be scrollable, there was an issue in the design where if I were to just let the whole page scroll, the Add Project button would overlay the edit and delete project buttons making them inaccessible, being able to scroll within the list container should hopefully solve this
3. Truncated the project names if they're too long and display an ellipsis.

I didn't think I would have time to finish Drag and Drop, but I probably would have included a `project.rank` property in the project object on the server, use a package like `react-dnd` (I implmented this in a few projects at my previous company), add an api route and handler for updating the rank property on drop release, and also update the server to sort the project array by rank.

### Directory Structure

`server` - contains the express server/backend

`src` - Contains the following:

1. `assets` - storage for images
2. `components` - All the React components for the project
   - `svgs` - contains all the svgs
   - `UI` - contains the smaller ui elements, InputField, ListItem, Modal, etc
   - `layout` - contains the larger layout components made up of multiple UI components
3. `store` - contains all the Redux code, store.js, reducers.js and actions.js
4. `utility` - contains a helper file for requesting the server APIs
5. `App.js` - Its the main component!
