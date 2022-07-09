import "./App.css";
import ActivityList from "./components/ActivityList";
import { useState, useMemo } from "react";
import useActivities from "./hooks/useActivities";
import FilterInput from "./components/FilterInput";

function App() {
  const [numberOfActivities, setNumberOfActivities] = useState(10);
  const { data, error, isFetching, refetch } = useActivities(numberOfActivities);
  const [filter, setFilter] = useState("");

  const filteredData = useMemo(
    () => data?.filter((a) => a.activity.toLowerCase().includes(filter.toLowerCase()) || a.type.toLowerCase().includes(filter.toLowerCase())),
    [data, filter]
  );

  if (isFetching)
    return (
      <div className="container">
        <div className="spinner"></div>
      </div>
    );
  if (error)
    return (
      <div className="container">
        <div className="error">Error has occurred</div>
      </div>
    );
  return (
    <div>
      <FilterInput setFilter={setFilter} refetchData={refetch} />
      <ActivityList data={filteredData} />
    </div>
  );
}

export default App;
