import "../styles/todoFilter.css";
import { useTodos } from "../hooks/useTodos";

const TodoFilter = () => {

  const { todosState, removeCompleted, mode, filter, setFilter } = useTodos();

  return (
    <>
      <div className={`filtercontainer ${mode && "D-filter"}`}>
        <h5 className="items-left">
          {todosState.length} item{`${todosState.length === 1 ? "" : "s"}`} left
        </h5>
        <div className="filter-bar-max">
          <h5
            className={`filter ${filter === "All" && "selected"} ${
              mode && "filter-D"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </h5>
          <h5
            className={`filter ${filter === "Active" && "selected"} ${
              mode && "filter-D"
            }`}
            onClick={() => setFilter("Active")}
          >
            Active
          </h5>
          <h5
            className={`filter ${filter === "Completed" && "selected"} ${
              mode && "filter-D"
            }`}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </h5>
        </div>
        <h5
          className={`${mode ? "clear-complete-D" : "clear-complete"}`}
          onClick={removeCompleted}
        >
          Clear Completed
        </h5>
      </div>
      <div className={`filter-bar-min ${mode && "D-filter"}`}>
        <h5
          className={`filter ${filter === "All" && "selected"} ${
            mode && "filter-D"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </h5>
        <h5
          className={`filter ${filter === "Active" && "selected"} ${
            mode && "filter-D"
          }`}
          onClick={() => setFilter("Active")}
        >
          Active
        </h5>
        <h5
          className={`filter ${filter === "Completed" && "selected"} ${
            mode && "filter-D"
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
