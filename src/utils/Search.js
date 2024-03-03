function Search(events, inputValue) {
  return events.filter((event) => {
    return (
      event.name.toLowerCase().includes(inputValue) ||
      event.description.toLowerCase().includes(inputValue) ||
      event.date.includes(inputValue) ||
      event.lastDateofReg.includes(inputValue)
    );
  });
}

export default Search;
