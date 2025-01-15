import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'; // Import the provider
import App from './App'; // Main App component
import { name as appName } from './app.json';

const Main = () => (
  <PaperProvider>
    <App />
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Main);
