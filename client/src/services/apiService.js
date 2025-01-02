const fetchRomanNumeral = async (query) => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    const response = await fetch(`${baseUrl}/romannumeral?query=${query}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
    return response.json();
  };
  
  export default fetchRomanNumeral;