"use client";
import { SetStateAction, createContext, useContext, useState } from "react";

type NavBarContextType = {
  navBarBounds: ElementBounds | null,
  setNavBarBounds: React.Dispatch<SetStateAction<ElementBounds | null>>;
  overlaping: boolean;
  setOverlaping: React.Dispatch<SetStateAction<boolean>>
};

const NavBarContext = createContext<NavBarContextType | null>(null);

export function useNavBarContext() {
  return useContext(NavBarContext);
}

export default function NavBarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [overlaping, setOverlaping] = useState(false);
  const [navBarBounds, setNavBarBounds] = useState<ElementBounds | null>(null)

 
  return (
    <NavBarContext.Provider
      value={{
        overlaping,
        setOverlaping,
        navBarBounds,
        setNavBarBounds
      }}>
      {children}
    </NavBarContext.Provider>
  );
}