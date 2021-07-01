import axios from "axios";

const API_BASE = "https://api.pokemontcg.io/v2/cards";

export const getCardsPokemons = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}?pageSize=50`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
