import React from 'react';
import { View, Flex } from '@adobe/react-spectrum';
import RomanInput from './Input.jsx';
import ThemeToggle from './Toggler.jsx';

const RomanConverter = ({ setTheme, currentTheme }) => {
  return (
    <Flex direction="column" gap="size-200" alignItems="center" padding="size-300" backgroundColor="gray-100" borderRadius="medium" maxWidth="size-3600" margin="auto">
      <RomanInput />
      <ThemeToggle setTheme={setTheme} currentTheme={currentTheme}/>
    </Flex>
  );
};

export default RomanConverter;