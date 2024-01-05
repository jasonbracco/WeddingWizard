Developer Provided Guidelines:

Purpose and Functionality:

My fiance and I were in the middle of planning our wedding, and working with multiple spreadsheets covering different topics got a little out of hand. I have professionally used Trello to organize tasks, track work, and assign values to quantify a project, and I thought that would be a great application to our wedding planning.

I wanted to break everything up by task, with each task having different properties that enable tracking and budeting all in one.

Users create cards to visualize one task, such as Booking a Band, Florals, or Signing the Venue Contract. Each card gets assigned a category, due date, cost, owner, card status, and payment status. Post creation, the user can edit the Update field. Each card can be moved by selecting a different Status, edited by selecting the Edit button, or deleted with the Delete Button.

The program shows you the days until your wedding (customizable), total cost (calculated based on input), and allows the user to filter by any value that has been inputted or edited on a card.

Tech:

I bootstrapped this program with Create React App (https://github.com/facebook/create-react-app).

Everything is written in JavaScript.

The server side was built using Express.js, and the local database is PostgreSQL.

Startup:

To run the frontend locally, use npm start in the project directory and open localhost:3000 in your browser.

To start the server, cd into the server directory and use node server.js.

When you start the server locally, the front end will not load unless you have connected a database to the project.

Create your own PostgreSQL database and connect it to the program referencing the PostgreSQL documentation. As you can see in server.js, a new Pool is created using the following:

DB_USER
DB_HOST
DB_DATABASE
DB_PASSWORD
DB_PORT

Create a .env file in the server directory to store this information, as it will be specific to your PostgreSQL account and table.

React Provided Guidelines:

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
