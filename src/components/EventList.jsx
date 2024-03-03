// /* eslint-disable react/prop-types */
import Event from "./Event";
import Header from "./Header";
import Button from "./Button";
import Date from "../utils/Date";
import { events } from "../data/EventData";
import Search from "../utils/Search";
import { useState, useEffect } from "react";

function EventList() {
  const today = Date();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeCategory, setActiveCategory] = useState("today");

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  const handleSearch = (inputValue) => {
    const searchResults = Search(events, inputValue);
    setSearchResults(searchResults);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery("");
  };

  const currentEvents = events.filter((event) => event.date === today);
  const previousEvents = events.filter((event) => event.date < today);
  const upcomingEvents = events.filter((event) => event.date > today);

  const filteredEvents = () => {
    switch (activeCategory) {
      case "today":
        return currentEvents;
      case "upcoming":
        return upcomingEvents;
      case "previous":
        return previousEvents;
      default:
        return currentEvents;
    }
  };

  const eventsToDisplay =
    searchQuery.trim() !== "" ? searchResults : filteredEvents();

  let categoryTitle;
  if (searchQuery.trim() !== "") {
    const spanStyle = { color: "red" };
    categoryTitle = (
      <>
        Search result for <span style={spanStyle}>{searchQuery}</span>
      </>
    );
  } else {
    switch (activeCategory) {
      case "today":
        categoryTitle = "Today's Events";
        break;
      case "upcoming":
        categoryTitle = "Upcoming Events";
        break;
      case "previous":
        categoryTitle = "Previous Events";
        break;
      default:
        categoryTitle = "All Events";
    }
  }

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <div className="event__show">
        <div className="detiels">
          <Button
            text="Previous Events"
            onClick={() => handleCategoryChange("previous")}
            isActive={activeCategory === "previous"}
          />
          <Button
            text="Today's Events"
            onClick={() => handleCategoryChange("today")}
            isActive={activeCategory === "today"}
          />
          <Button
            text="Upcoming Events"
            onClick={() => handleCategoryChange("upcoming")}
            isActive={activeCategory === "upcoming"}
          />
        </div>
        <h2>{categoryTitle}</h2>
        <div className="event">
          <ol>
            {eventsToDisplay.length === 0 ? (
              <p>
                No event fount with{" "}
                <span style={{ color: "red" }}>{searchQuery}</span>
              </p>
            ) : (
              eventsToDisplay.map((event) => (
                <Event key={event.id} event={event} />
              ))
            )}
          </ol>
        </div>
      </div>
    </>
  );
}

export default EventList;
