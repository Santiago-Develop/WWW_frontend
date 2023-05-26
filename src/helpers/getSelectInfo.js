export const getSelectInfo = async (path, setState) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${API_URL}${path}`, options);
  const data = await response.json();

  let optionsData = [];

  data.forEach((elem) => {
    optionsData.push({ value: elem.id, label: elem.name });
  });

  setState(optionsData);
};
