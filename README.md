# echo19 Web Survey Client

A web survey...

## commands...

run test:

    yarn test

run tests and coverage report:

    yarn test --coverage

start the app

    yarn start

amplify check status:

    amplify status

publish to aws

    amplify publish

## Ecosystem

- [AWS amplify]()

- [Create React App](https://facebook.github.io/create-react-app/)
  - React

## Info

using the steps from [this page](https://aws-amplify.github.io/docs/cli/multienv?sdk=js) to setup multiple amplify environments for `aws` services

## Output From `amplify init` command:

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

## create a survey in AWS AppSync -

This is the GraphQL statement I ran in AppSync to create a survey record - this isn't even close to what needs to happen, but GraphQL is new to me and I wanted to document it somewhere....

        mutation add {
        createSurvey(input: {id: 1, name: "TEST SURVEY", questions: "{\r\n  \"questions\": [\r\n    {\r\n      \"surveyQuestionId\": 35767,\r\n      \"SurveyQuestionName\": \"hello\",\r\n      \"defaultAction\": \"-1\",\r\n      \"defaultActionValue\": \"\",\r\n      \"singleDigit\": 1,\r\n      \"multipleDigitQuestion\": 0,\r\n      \"numberOfDigits\": 1,\r\n      \"required\": 0,\r\n      \"nameLong\": \"Hi [voter name]. Let\u2019s begin!\",\r\n      \"defaultResponseText\": \"\",\r\n      \"statement\": 1,\r\n      \"feedback\": 0\r\n    },\r\n    {\r\n      \"surveyQuestionId\": 35768,\r\n      \"SurveyQuestionName\": \"Like ice cream?\",\r\n      \"defaultAction\": \"-1\",\r\n      \"defaultActionValue\": \"\",\r\n      \"noAnswerReceivedAction\": \"-1\",\r\n      \"noAnswerReceivedValue\": \"\",\r\n      \"singleDigit\": 1,\r\n      \"multipleDigitQuestion\": 0,\r\n      \"numberOfDigits\": 1,\r\n      \"required\": 0,\r\n      \"nameLong\": \"First, let\u2019s start with do you like ice cream?\",\r\n      \"defaultResponseText\": \"\",\r\n      \"statement\": 0,\r\n      \"feedback\": 0,\r\n      \"answers\": [\r\n        {\r\n          \"surveyQuestionAnswerId\": 159348,\r\n          \"digit\": \"1\",\r\n          \"value\": \"Yes\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159349,\r\n          \"digit\": \"2\",\r\n          \"value\": \"No\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"BYE\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"surveyQuestionId\": 35769,\r\n      \"SurveyQuestionName\": \"How often you eat ice cream?\",\r\n      \"defaultAction\": \"-1\",\r\n      \"defaultActionValue\": \"\",\r\n      \"noAnswerReceivedAction\": \"-1\",\r\n      \"noAnswerReceivedValue\": \"\",\r\n      \"singleDigit\": 1,\r\n      \"multipleDigitQuestion\": 0,\r\n      \"numberOfDigits\": 1,\r\n      \"required\": 0,\r\n      \"nameLong\": \"Okay, that\u2019s good. About how many times a month would you say you eat ice cream?\",\r\n      \"defaultResponseText\": \"\",\r\n      \"statement\": 0,\r\n      \"feedback\": 0,\r\n      \"answers\": [\r\n        {\r\n          \"surveyQuestionAnswerId\": 159350,\r\n          \"digit\": \"1\",\r\n          \"value\": \"10 or more\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159351,\r\n          \"digit\": \"2\",\r\n          \"value\": \"6 to 9 times per month\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159352,\r\n          \"digit\": \"3\",\r\n          \"value\": \"3 to 5 times per month\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159353,\r\n          \"digit\": \"4\",\r\n          \"value\": \"1 to 2 times per month\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159354,\r\n          \"digit\": \"5\",\r\n          \"value\": \"less than once a month\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"surveyQuestionId\": 35770,\r\n      \"SurveyQuestionName\": \"how do you eat ice cream?\",\r\n      \"defaultAction\": \"-1\",\r\n      \"defaultActionValue\": \"\",\r\n      \"noAnswerReceivedAction\": \"-1\",\r\n      \"noAnswerReceivedValue\": \"\",\r\n      \"singleDigit\": 1,\r\n      \"multipleDigitQuestion\": 0,\r\n      \"numberOfDigits\": 1,\r\n      \"required\": 0,\r\n      \"nameLong\": \"Do you prefer to eat ice cream out of a Bowl, on a sugar cone, on a cake cone, or it doesn't matter?\",\r\n      \"defaultResponseText\": \"\",\r\n      \"statement\": 0,\r\n      \"feedback\": 0,\r\n      \"answers\": [\r\n        {\r\n          \"surveyQuestionAnswerId\": 159355,\r\n          \"digit\": \"1\",\r\n          \"value\": \"Bowl\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159356,\r\n          \"digit\": \"2\",\r\n          \"value\": \"Sugar cone\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159357,\r\n          \"digit\": \"3\",\r\n          \"value\": \"Cake cone\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159358,\r\n          \"digit\": \"4\",\r\n          \"value\": \"It doesn't matter\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"surveyQuestionId\": 35772,\r\n      \"SurveyQuestionName\": \"Best ice cream flavor\",\r\n      \"defaultAction\": \"-1\",\r\n      \"defaultActionValue\": \"\",\r\n      \"noAnswerReceivedAction\": \"-1\",\r\n      \"noAnswerReceivedValue\": \"\",\r\n      \"singleDigit\": 1,\r\n      \"multipleDigitQuestion\": 0,\r\n      \"numberOfDigits\": 1,\r\n      \"required\": 0,\r\n      \"nameLong\": \"Now, the tough one - which of the following is the best ice cream flavor: Chocolate, Vanilla or Strawberry?\",\r\n      \"defaultResponseText\": \"\",\r\n      \"statement\": 0,\r\n      \"feedback\": 0,\r\n      \"answers\": [\r\n        {\r\n          \"surveyQuestionAnswerId\": 159360,\r\n          \"digit\": \"1\",\r\n          \"value\": \"Chocolate\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"GOTO=7\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159361,\r\n          \"digit\": \"2\",\r\n          \"value\": \"Vanilla\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159362,\r\n          \"digit\": \"3\",\r\n          \"value\": \"Strawberry\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"-1\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"surveyQuestionId\": 35773,\r\n      \"SurveyQuestionName\": \"Sure it\u2019s not chocolate?\",\r\n      \"defaultAction\": \"-1\",\r\n      \"defaultActionValue\": \"\",\r\n      \"noAnswerReceivedAction\": \"-1\",\r\n      \"noAnswerReceivedValue\": \"\",\r\n      \"singleDigit\": 1,\r\n      \"multipleDigitQuestion\": 0,\r\n      \"numberOfDigits\": 1,\r\n      \"required\": 0,\r\n      \"nameLong\": \"Are you sure it\u2019s not chocolate?\",\r\n      \"defaultResponseText\": \"\",\r\n      \"statement\": 0,\r\n      \"feedback\": 0,\r\n      \"answers\": [\r\n        {\r\n          \"surveyQuestionAnswerId\": 159363,\r\n          \"digit\": \"1\",\r\n          \"value\": \"Yes\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"BYE\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        },\r\n        {\r\n          \"surveyQuestionAnswerId\": 159364,\r\n          \"digit\": \"2\",\r\n          \"value\": \"No\",\r\n          \"answerValue\": \"\",\r\n          \"action\": \"GOTO=7\",\r\n          \"doNotRandomize\": 0,\r\n          \"responseText\": \"\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"surveyQuestionId\": 35774,\r\n      \"SurveyQuestionName\": \"Chocolate is the best!\",\r\n      \"defaultAction\": \"BYE\",\r\n      \"defaultActionValue\": \"\",\r\n      \"singleDigit\": 1,\r\n      \"multipleDigitQuestion\": 0,\r\n      \"numberOfDigits\": 1,\r\n      \"required\": 0,\r\n      \"nameLong\": \"You are correct, chocolate is the best!\",\r\n      \"defaultResponseText\": \"\",\r\n      \"statement\": 1,\r\n      \"feedback\": 0\r\n    }\r\n  ],\r\n  \"intro\": \"Hello! This is [volunteer name] from Chocolate Cows with a brief 3-question survey about ice cream. Is this [voter name]?\",\r\n  \"goal\": \"Use this democall to play around with echo1>We have set up a robot-list to simulate voters answering the survey Contact us at help@echo19.com to get more information about this product.\",\r\n  \"endMessage\": \"Okay, that\u2019s it. Thank you very much for your time! Have a great day\/evening. This call was paid for by Chocolate Cows and is not authorized by any candidate or candidate\u2019s committee. 555-555-5555.\"\r\n}\r\n"}) {
            id
            name
            questions
        }
        }

Now you car query for this record as so...

        query get {
        getSurvey(id: 1) {
            id
            name
            questions
        }
        }

---

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
