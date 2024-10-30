# Country Scores App

This is a simple React Native application that fetches and displays cricket scores for various countries. The app allows users to input a country name and calculates the average score based on the fetched data.

## Features

- Fetches cricket scores from an external API.
- Displays loading and error states.
- Allows users to input a country name to calculate the average score.
- Modular architecture with separated components and hooks.

## Technologies Used

- **React Native**
- **TypeScript**
- **React Hooks**: Utilizes hooks for state management and side effects.

## folder structure

|| App.tsx : rendering the whole function
|| src/ : folder where we have stored all logics
|
|_ CountryScore : calculate the all this in hooks (countryInput, averageScore, handleInputChange) and provide this component to MainContents
|
|_ MainContents : here we check the data state and display the data accordingly (CountryScore componet)
