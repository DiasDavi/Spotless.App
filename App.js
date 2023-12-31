import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Routes from './src/Routes/Routes';


export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
}
