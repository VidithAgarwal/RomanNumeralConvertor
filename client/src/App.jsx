import React, { useState } from 'react';
import { Provider, lightTheme, darkTheme, View } from '@adobe/react-spectrum';
import RomanConverter from './components/RomanConverter.jsx';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const currentTheme = theme === darkTheme ? 'dark' : 'light';


  return (
    <Provider theme={theme} colorScheme={currentTheme}>
      <View backgroundColor="gray-200" height="100vh" justifyContent="center" alignItems="center" width="100vw">
        <RomanConverter setTheme={setTheme} currentTheme={currentTheme} />
      </View>
    </Provider>
  );
};

export default App;
