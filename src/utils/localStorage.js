export const get = (key) => {
  if (key === "Todos" || key === "Mode") {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return localStorage.getItem(key);
  }
};

export const set = (key, value) => {
  if (key === "Todos") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};
