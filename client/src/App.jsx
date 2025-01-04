import React, { useState } from 'react';
import { Provider, lightTheme, darkTheme, View } from '@adobe/react-spectrum';
import RomanConverter from './components/RomanConverter.jsx';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const currentTheme = theme === darkTheme ? 'dark' : 'light';


  return (
    <Provider theme={theme} colorScheme={currentTheme}>
      <View minHeight="100vh" backgroundColor="gray-200" justifyContent="center" alignItems="center" width="100vw" minWidth={'100vw'} maxWidth={'6000px'}>
        <RomanConverter setTheme={setTheme} currentTheme={currentTheme} />
      </View>
    </Provider>
  );
};

export default App;
