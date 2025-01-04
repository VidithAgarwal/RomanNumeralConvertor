import React from 'react';
import { View, Flex } from '@adobe/react-spectrum';
import RomanInput from './Input.jsx';
import ThemeToggle from './Toggler.jsx';

/**
 * RomanConverter component that renders the Roman numeral converter input and the theme toggle.
 * 
 * @param {Function} setTheme - Function to update the theme.
 * @param {string} currentTheme - The current theme, either 'light' or 'dark'.
 * @returns {JSX.Element} The RomanConverter component.
 */
const RomanConverter = ({ setTheme, currentTheme }) => {
  return (
    <Flex 
      direction="column" 
      gap="size-200" 
      alignItems="center" 
      padding="size-300" 
      backgroundColor="gray-100" 
      borderRadius="medium" 
      maxWidth="size-4600"
      width={'100%'}
      margin="auto"
    >
      {/* Component for Roman numeral input and conversion */}
      <RomanInput />
      
      {/* Component for toggling between light and dark theme */}
      <ThemeToggle setTheme={setTheme} currentTheme={currentTheme}/>
    </Flex>
  );
};

export default RomanConverter;