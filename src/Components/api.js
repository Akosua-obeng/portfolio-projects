export const fetchAPI = async (date) => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
      const data = await response.json();
      return data[date] || [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };