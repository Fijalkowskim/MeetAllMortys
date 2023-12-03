import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { CardData } from "../model/CardData";
interface CardsContextProviderProps {
  children: ReactNode;
}
interface CardsContext {
  getRandomCards: (amount: number) => CardData[];
}
const CardsContext = createContext({} as CardsContext);

export function useCardsContext() {
  return useContext(CardsContext);
}

export function CardsContextProvider({ children }: CardsContextProviderProps) {
  const [randomCards, setRandomCards] = useState<CardData[]>([]);
  const getRandomCards = (amount: number) => {
    return randomCards;
  };
  return (
    <CardsContext.Provider value={{ getRandomCards }}>
      {children}
    </CardsContext.Provider>
  );
}
