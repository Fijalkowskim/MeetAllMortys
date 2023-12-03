import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { CardData } from "../model/CardData";
import { GetRandomNumbers } from "../helpers/helpers";

interface CardsContextProviderProps {
  children: ReactNode;
}
interface CardsContext {
  getRandomCards: (amount: number) => Promise<CardData[] | null>;
}
const CardsContext = createContext({} as CardsContext);

export function useCardsContext() {
  return useContext(CardsContext);
}

export function CardsContextProvider({ children }: CardsContextProviderProps) {
  const [randomCards, setRandomCards] = useState<CardData[]>([]);

  const getRandomCards = async (amount: number) => {
    try {
      const charactersAmountResponse = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      const charactersAmount = charactersAmountResponse.data.info.count;

      const ids = GetRandomNumbers(amount, 1, charactersAmount);
      if (ids === undefined) return null;

      const newCards = await Promise.all(
        ids.map(async (id) => {
          const characterResponse = await axios.get(
            `https://rickandmortyapi.com/api/character/${id}`
          );

          const newCard: CardData = {
            id: id,
            name: characterResponse.data.name,
            species: characterResponse.data.species,
            image: characterResponse.data.image,
          };

          return newCard;
        })
      );

      setRandomCards(newCards);
      return newCards;
    } catch (error) {
      console.error("Error while fetching random cards:", error);
      return null;
    }
  };
  return (
    <CardsContext.Provider value={{ getRandomCards }}>
      {children}
    </CardsContext.Provider>
  );
}
