const fetchRomanNumeral = async (query) => {
    const response = await fetch(`http://localhost:8080/romannumeral?query=${query}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
    return response.json();
  };
  
  export default fetchRomanNumeral;