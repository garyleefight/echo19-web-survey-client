

Output From `amplify init` command:
-----------------------------------


    Jays-MacBook:echo19-web-survey-client jayw$ amplify init
    Note: It is recommended to run this command from the root of your app directory
    You're initializing your project with a beta version of the CLI which supports multiple environments of your project
    ? Enter a name for the project websurveyclient
    ? Enter a name for the environment master
    ? Choose your default editor: Visual Studio Code
    ? Choose the type of app that you're building javascript
    Please tell us about your project
    ? What javascript framework are you using react
    ? Source Directory Path:  src
    ? Distribution Directory Path: build
    ? Build Command:  yarn build
    ? Start Command: yarn start
    Using default provider  awscloudformation

    For more information on AWS Profiles, see:
    https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

    ? Do you want to use an AWS profile? Yes
    ? Please choose the profile you want to use echo19
    ⠧ Initializing project in the cloud...

    CREATE_IN_PROGRESS websurveyclient-20190114105435 AWS::CloudFormation::Stack Mon Jan 14 2019 10:54:36 GMT-0700 (MST) User Initiated             
    CREATE_IN_PROGRESS UnauthRole                     AWS::IAM::Role             Mon Jan 14 2019 10:54:40 GMT-0700 (MST)                            
    CREATE_IN_PROGRESS DeploymentBucket               AWS::S3::Bucket            Mon Jan 14 2019 10:54:40 GMT-0700 (MST)                            
    CREATE_IN_PROGRESS AuthRole                       AWS::IAM::Role             Mon Jan 14 2019 10:54:40 GMT-0700 (MST)                            
    CREATE_IN_PROGRESS UnauthRole                     AWS::IAM::Role             Mon Jan 14 2019 10:54:40 GMT-0700 (MST) Resource creation Initiated
    CREATE_IN_PROGRESS AuthRole                       AWS::IAM::Role             Mon Jan 14 2019 10:54:40 GMT-0700 (MST) Resource creation Initiated
    CREATE_IN_PROGRESS DeploymentBucket               AWS::S3::Bucket            Mon Jan 14 2019 10:54:41 GMT-0700 (MST) Resource creation Initiated
    ⠇ Initializing project in the cloud...

    CREATE_COMPLETE UnauthRole AWS::IAM::Role Mon Jan 14 2019 10:54:53 GMT-0700 (MST) 
    CREATE_COMPLETE AuthRole   AWS::IAM::Role Mon Jan 14 2019 10:54:54 GMT-0700 (MST) 
    ✔ Successfully created initial AWS cloud resources for deployments.
    ✔ Initialized provider successfully.
    Initialized your environment successfully.

    Your project has been successfully initialized and connected to the cloud!

    Some next steps:
    "amplify status" will show you what you've added already and if it's locally configured or deployed
    "amplify <category> add" will allow you to add features like user login or a backend API
    "amplify push" will build all your local backend resources and provision it in the cloud
    "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

    Pro tip:
    Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything



__________________________________________________________

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
