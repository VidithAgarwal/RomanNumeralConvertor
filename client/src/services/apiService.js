/**
 * Fetch the Roman numeral for a given integer from the API.
 * @param {Number} query The integer to be converted to a Roman numeral.
 * @returns {Promise<Object>} The response from the API, containing the Roman numeral.
 * @throws {Error} If the API returns an error, or if the response is malformed.
 */
const fetchRomanNumeral = async (query) => {
    // Base URL for the API, defaults to localhost if the environment variable is not defined
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    try {
      // Make the API request with the query parameter
      const response = await fetch(`${baseUrl}/romannumeral?query=${query}`);
      // Check if the response status is not OK (HTTP status 200–299)
      if (!response.ok) {
        // Parse the error message from the response body
        const errorData = await response.json();
        
        throw new Error(errorData.error || 'Unable to connect to the server. Please try again later.');
      }
  
      // Parse and return the JSON response
      return response.json();
    } catch (error) {    
      if (error.name === 'TypeError') {
        throw new Error('Unable to connect to the server. Please try again later.');
      }

      throw new Error(error.message || 'Something went wrong. Please try again.');
    }
  };
  
  export default fetchRomanNumeral;