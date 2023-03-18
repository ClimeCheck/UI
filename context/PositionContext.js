import { createContext, useState, useEffect } from "react";
import groupByContinent from "../utils/groupByContinent";

const PositionContext = createContext();

export const PositionProvider = ({ children }) => {
  const [positions, setPositions] = useState([]);
  const [result, setResult] = useState();
  const [totalDevices, setTotalDevices] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/position");

      const data = await response.json();

      const { groupedByContinent, totalPositions } = groupByContinent(data);

      setPositions(groupedByContinent);
      setTotalDevices(totalPositions);
    }

    fetchData();
  }, []);

  return (
    <PositionContext.Provider value={{ positions, totalDevices }}>
      {children}
    </PositionContext.Provider>
  );
};

export default PositionContext;
