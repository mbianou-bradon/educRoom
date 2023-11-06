# About the Application

EducRoom is a simple learning Management System that helps you acquire skills through Well defined courses. 
<br>

On EducRoom, you can see list of courses, featured courses. You can select the course of your choice and view it's details such as `Course Title`, `course description`, `Duration`, `schedule time`, `Syllabus`, `prerequisites` and `Course instructor detail`. 



# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## step 1: Get the repository
First, you will need to to `clone` or `fork` the repository, so you can have access to a copy of the code. 

```bash
#cloning repository
git clone https://github.com/mbianou-bradon/educRoom.git

#entering educRoom folder
cd educationRoom

#installing dependencies
npm install 
```

## Step 2: Start the Metro Server

Next, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

Or

# if react-native is not installed globally
npx react-native start
```

## Step 3: Start the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# if react-native is not installed globally
npx react-native run-android
```

### For iOS

```bash
# using npm
npm run ios

# if react-native is not installed globally
npx react-native run-ios
```

If everything is set up _correctly_, you should see your the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 4: Modifying the App 

Now that you have successfully run the app, you can modify it inorder to fetch from your own APO.

1. Open `utils` folder. 
2. Open `API.tsx` in your text editor of choice and edit baseURL of the API.
3. Upon changing the API base URL, make sure the data structure and endpoints are the same as the open use in this application.

## Congratulations! :tada:

You've successfully run and modified your EducRoom API. :partying_face:
- You can go through the [API documentation](https://github.com/mbianou-bradon/educRoom-api/#README.md) and have a look at the current API being used right now. 

### Now what?

- If you want to contribute to this application, [contact the owner](https://github.com/mbianou-bradon).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).


# Useful Resources on React Native

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
