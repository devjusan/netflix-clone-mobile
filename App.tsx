import React from 'react';
import Logo from './src/pages/login';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const App: React.FC = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#e50914',
      background: '#3c3c3c',
      placeholder: '#fff',
      text: '#fff',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <Logo />
    </PaperProvider>
  );
};

export default App;
