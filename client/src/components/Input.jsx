import React, { useState } from 'react';
import {
  TextField,
  Button,
  Flex,
  Text,
  Heading,
  Divider,
  View,
  Well,
  IllustratedMessage,
  ProgressCircle,
} from '@adobe/react-spectrum';
import fetchRomanNumeral from '../services/apiService.js'; // Import the API service for fetching Roman numerals

const RomanInput = () => {
  // State to hold the user's input
  const [input, setInput] = useState('');
  // State to hold the converted Roman numeral output
  const [output, setOutput] = useState('');
  // State to hold error messages
  const [error, setError] = useState('');
  // State to indicate if the API request is in progress
  const [isLoading, setIsLoading] = useState(false);

  // Handles the form submission
  const handleSubmit = async () => {
    setIsLoading(true); // Show the loader
    setError(''); // Clear previous errors
    try {
      const data = await fetchRomanNumeral(input); // Call the API with user input
      setOutput(data.output); // Set the output on successful response
    } catch (err) {
      setOutput(''); // Clear the output on error
      setError(err.message); // Set the error message from the API
    } finally {
      setInput(''); // Clear the input field
      setIsLoading(false); // Hide the loader
    }
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="size-400"
      wrap
      width="100%"
      maxWidth="size-4600"
      marginTop="size-800"
    >
      {/* Header */}
      <Heading level={2} >Roman Numeral Converter</Heading>

      {/* Divider for separation */}
      <Divider size="L"/>

      {/* Description for the converter */}
      <Well width="100%" maxWidth="size-4600" UNSAFE_style={{ textAlign: 'center', padding: 'clamp(8px, 2vw, 20px)', boxSizing: 'border-box' }}>
        <Text marginBottom="size-200" UNSAFE_style={{
          fontSize: 'clamp(0.9rem, 2vw, 1rem)', // Responsive font size
        }}>
          Enter an integer (1 to 3999) to convert it to a Roman numeral.
        </Text>
      </Well>

      {/* Input field for user input */}
      <TextField
        label="Enter a Number"
        value={input}
        onChange={setInput}
        isRequired
        width="size-3600"
        labelPosition="top"
        validationState={error ? 'invalid' : undefined} // Mark as invalid if there's an error
      />

      {/* Button to submit the conversion request */}
      <Button
        variant="cta"
        onPress={handleSubmit}
        UNSAFE_style={{
          backgroundColor: '#0078D4',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '12px',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
          padding: '14px 28px',
          transition: 'background-color 0.3s ease, transform 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          cursor: 'pointer',
        }}
        UNSAFE_hover_style={{
          backgroundColor: '#0056b3',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        Convert
      </Button>

      {/* Loader while waiting for API response */}
      {isLoading && (
        <Well
          marginTop="size-300"
          width="size-3000"
          backgroundColor="positive"
          padding="size-200"
        >
          <Flex direction="column" alignItems="center" justifyContent="center">
            <ProgressCircle aria-label="Loading…" isIndeterminate />
            <Text UNSAFE_style={{ marginTop: '10px', fontSize: '16px', color: 'green' }}>
              Loading...
            </Text>
          </Flex>
        </Well>
      )}

      {/* Display output if the conversion is successful */}
      {!isLoading && output && (
        <Well
          marginTop="size-300"
          width="size-3000"
          backgroundColor="positive"
          padding="size-200"
          UNSAFE_style={{
            wordWrap: 'break-word', // Ensures the output fits on smaller screens
          }}
        >
          <Heading
            level={4}
            UNSAFE_style={{
              color: 'green',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Converted Roman Numeral
          </Heading>
          <View
            UNSAFE_style={{
              fontSize: '20px',
              textAlign: 'center',
              color: 'green',
            }}
          >
            {output}
          </View>
        </Well>
      )}

      {/* Display error message if there's an error */}
      {!isLoading && error && (
        <IllustratedMessage>
          <Text
            marginTop="size-100"
            UNSAFE_style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: '1rem',
              textAlign: 'center',
            }}
          >
            Error: {error}
          </Text>
        </IllustratedMessage>
      )}
    </Flex>
  );
};

export default RomanInput;
