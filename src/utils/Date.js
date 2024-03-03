function useDate() {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const today = new Date().toLocaleDateString("en-GB", options);

  return today;
}

export default useDate;
