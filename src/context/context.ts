import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define the context with a specific structure
interface RouterContextType {
  path: string;
  setPath: Dispatch<SetStateAction<string>>; // Define 'setPath' as a function
}

export const Router = createContext<RouterContextType>({
  path: "",
  setPath: () => {} // Initialize 'setPath' with a no-op function or the appropriate initial state setter
});