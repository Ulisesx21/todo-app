export const get = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const set = (key, value) => {
  if (key === "Todos") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};
