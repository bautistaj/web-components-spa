const API = 'https://rickandmortyapi.com/api/character/';

export const getData = async (url = API) => {
  const apiURl = url;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export const getCharacterDetail = async (id) => {
  const apiURl = `${API}${id}`;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};