import { createContext, useState, useEffect } from "react";
import groupByContinent from "../utils/groupByContinent";

const PositionContext = createContext(null);

export const PositionProvider = ({ children }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("starting");

      const response = await fetch("/api/position");

      const data = await response.json();

      const grouped = groupByContinent(data);
      setPositions(grouped);
      
    }

    fetchData();
  }, []);

  return (
    <PositionContext.Provider value={{ positions }}>
      {children}
    </PositionContext.Provider>
  );
};

export default PositionContext;
