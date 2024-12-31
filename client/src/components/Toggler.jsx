import React from 'react';
import { Button, Flex, View, lightTheme, darkTheme } from '@adobe/react-spectrum';
import Sun from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';

const ThemeToggle = ({ setTheme, currentTheme }) => {
  const isDark = currentTheme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? lightTheme : darkTheme);
  };

  return (
    <Flex direction="row" alignItems="center" gap="size-200">
      <Button variant="primary" onPress={handleToggle} width="size-1600">
        <Flex alignItems="center" gap="size-100">
          {isDark ? <Moon /> : <Sun />}
          <View>{isDark ? 'Dark Mode' : 'Light Mode'}</View>
        </Flex>
      </Button>
    </Flex>
  );
};

export default ThemeToggle;
