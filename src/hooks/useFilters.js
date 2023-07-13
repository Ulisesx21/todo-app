import { useContext } from "react";
import { TodoContext } from "../context/TodosContext";

export const useFilters = () => {
  const { filter, setFilter } = useContext(TodoContext);

  return { filter, setFilter };
};
