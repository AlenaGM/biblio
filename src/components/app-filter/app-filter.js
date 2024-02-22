import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "All Books" },
    { name: "want", label: "Want to read" },
    { name: "reading", label: "Reading now" },
    { name: "finished", label: "Finished" },
    { name: "like", label: "Favourites" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";

    return (
      <button
        type="button"
        aria-label="filter button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
