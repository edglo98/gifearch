import { createContext, FC, useState } from "react";
import { GifsResultOwn } from "../interfaces/gifs";

const initialState: GifsResultOwn = {
  data: [],
  pagination: {
    total_count: 0,
    count: 0,
    offset: 0,
  },
  meta: {
    status: 200,
    msg: "OK",
    response_id: "5e8f8f9b9f9e600020c7d8f8",
  },
}

interface GifContextProps {
  gifs: GifsResultOwn;
  setGifs: React.Dispatch<React.SetStateAction<GifsResultOwn>>;
}

export const GifContext = createContext<GifContextProps>({} as GifContextProps);

export const GifProvider: FC = ({children}) => {
  const [gifs, setGifs] = useState<GifsResultOwn>(initialState);

  return (
    <GifContext.Provider value={{gifs, setGifs}}>
      {children}
    </GifContext.Provider>
  );
}