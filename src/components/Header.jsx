import Input from "./Input";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Header({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleOnChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);
    onSearch(inputValue);
  };

  return (
    <div className="today">
      <h1
        className="reload"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Events Tracker
      </h1>
      <div className="noMatch">
        <Input
          type="text"
          placeholder="Search Event"
          value={searchInput}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}

export default Header;
