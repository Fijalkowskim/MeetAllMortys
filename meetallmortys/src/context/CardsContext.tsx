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
  randomCards: CardData[];
  shiftCards: (next: boolean) => void;
}
const CardsContext = createContext({} as CardsContext);

export function useCardsContext() {
  return useContext(CardsContext);
}

export function CardsContextProvider({ children }: CardsContextProviderProps) {
  const [randomCards, setRandomCards] = useState<CardData[]>([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        const charactersAmount = res.data.info.count;

        const ids = GetRandomNumbers(5, 1, charactersAmount);
        if (ids === undefined) return null;
        const requests = ids.map((id) =>
          axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        );

        Promise.all(requests)
          .then((responses) => {
            const newCards: CardData[] = responses.map((res) => ({
              id: res.data.id,
              name: res.data.name,
              species: res.data.species,
              location: res.data.location.name,
              image: res.data.image,
            }));
            setRandomCards(newCards);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getRandomCards = () => {
    return randomCards;
  };

  const shiftCards = (next: boolean) => {
    setRandomCards((prevCards) => {
      const lastIndex = prevCards.length - 1;
      const shiftedCards = [...prevCards];

      if (next) {
        const firstCard = shiftedCards.shift();
        if (firstCard != undefined) shiftedCards.push(firstCard);
      } else {
        const lastCard = shiftedCards.pop();
        if (lastCard != undefined) shiftedCards.unshift(lastCard);
      }

      return shiftedCards;
    });
  };
  return (
    <CardsContext.Provider value={{ randomCards, shiftCards }}>
      {children}
    </CardsContext.Provider>
  );
}
