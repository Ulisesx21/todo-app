import { useTodos } from "../../hooks/useTodos";
import { useTheme } from "../../hooks/useTheme";
import { useFilters } from "../../hooks/useFilters";
import "./TodoFilter.css";

const TodoFilter = () => {

  const { todos, removeCompleted } = useTodos();
  const { filter, setFilter } = useFilters();
  const { isDark } = useTheme();

  return (
    <>
      <div className={`filtercontainer ${isDark && "D-filter"}`}>
        <h5 className="items-left">
          {todos.length} item{`${todos.length === 1 ? "" : "s"}`} left
        </h5>
        <div className="filter-bar-max">
          <h5
            className={`filter ${filter === "All" && "selected"} ${
              isDark && "filter-D"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </h5>
          <h5
            className={`filter ${filter === "Active" && "selected"} ${
              isDark && "filter-D"
            }`}
            onClick={() => setFilter("Active")}
          >
            Active
          </h5>
          <h5
            className={`filter ${filter === "Completed" && "selected"} ${
              isDark && "filter-D"
            }`}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </h5>
        </div>
        <h5
          className={`${isDark ? "clear-complete-D" : "clear-complete"}`}
          onClick={removeCompleted}
        >
          Clear Completed
        </h5>
      </div>
      <div className={`filter-bar-min ${isDark && "D-filter"}`}>
        <h5
          className={`filter ${filter === "All" && "selected"} ${
            isDark && "filter-D"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </h5>
        <h5
          className={`filter ${filter === "Active" && "selected"} ${
            isDark && "filter-D"
          }`}
          onClick={() => setFilter("Active")}
        >
          Active
        </h5>
        <h5
          className={`filter ${filter === "Completed" && "selected"} ${
            isDark && "filter-D"
          }`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </h5>
      </div>
      <div className="dndAdvise">Drag and drop to reorder list</div>
    </>
  );
};

export default TodoFilter;
