import React from 'react';
import { Button, Flex, View, lightTheme, darkTheme } from '@adobe/react-spectrum';
import Sun from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';

/**
 * ThemeToggle component that renders the theme toggle button.
 *
 * @param {Function} setTheme - Function to update the theme.
 * @param {string} currentTheme - The current theme, either 'light' or 'dark'.
 * @returns {JSX.Element} The ThemeToggle component.
 */
const ThemeToggle = ({ setTheme, currentTheme }) => {
  
    // Check if the current theme is dark
  const isDark = currentTheme === 'dark';

  /**
   * Handles the theme toggle button click by calling the setTheme
   * function with the new theme (either lightTheme or darkTheme).
   */
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
