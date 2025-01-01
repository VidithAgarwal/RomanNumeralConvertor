import React, { useState } from 'react';
import { TextField, Button, Flex, Text, Heading, Divider, View, Well, IllustratedMessage } from '@adobe/react-spectrum';
import fetchRomanNumeral from '../services/apiService.js';

const RomanInput = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const data = await fetchRomanNumeral(input);
      setOutput(data.output);
      setError('');
    } catch (err) {
      setOutput('');
      setError(err.message);
    }
  };

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" gap="size-400" width="size-4600" marginTop="size-800">
      <Heading level={2}>Roman Numeral Converter</Heading>
      <Divider size="L" />
      <Well width="100%" maxWidth="size-4600" UNSAFE_style={{ textAlign: 'center' }}>
        <Text marginBottom="size-200">
          Enter an integer (1 to 3999) to convert it to a Roman numeral.
        </Text>
      </Well>

      <TextField
        label="Enter a Number"
        value={input}
        onChange={setInput}
        isRequired
        width="size-3600"
        labelPosition="top"
        validationState={error ? "invalid" : undefined}
      />
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
        UNSAFE_hover_style = {{
          backgroundColor: '#0056b3',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}


      >
        Convert
      </Button>


      {output && (
        <Well marginTop="size-300" width="size-3000" backgroundColor="positive" padding="size-200">
          <Heading level={4} UNSAFE_style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>Converted Roman Numeral</Heading>
          <View UNSAFE_style={{ fontSize: '20px', textAlign: 'center', color: 'green' }}>{output}</View>
        </Well>
      )}

      {error && (
        <IllustratedMessage>
          <Text
            marginTop="size-100"
            UNSAFE_style={{ color: 'red', fontWeight: 'bold', fontSize: '1rem' }}
          >
            Error: {error}
          </Text>
        </IllustratedMessage>
      )}
    </Flex>
  );
};

export default RomanInput;
