import React from 'react';
import Logo from './src/pages/login';
import {Provider as PaperProvider} from 'react-native-paper';

const App: React.FC = () => {
  return (
    <PaperProvider>
      <Logo />
    </PaperProvider>
  );
};

export default App;
