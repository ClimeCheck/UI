import { createContext, useState, useContext } from "react";

const ShowSidebarContext = createContext(null);

export const SidebarContext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ShowSidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ShowSidebarContext.Provider>
  );
};

export function useSidebarContext() {
  return useContext(ShowSidebarContext);
}
