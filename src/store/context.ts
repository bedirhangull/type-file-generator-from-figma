import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface RouterContextType {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
}

export const Router = createContext<RouterContextType>({
  path: "",
  setPath: () => {}
});