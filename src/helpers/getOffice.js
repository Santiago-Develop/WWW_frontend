export const getOffice = async (id) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const requestOptions = {
    method: "GET",
  };

  let data = [];

  try {
    const res = await fetch(API_URL + "api/office/" + id + "/", requestOptions);
    data = await res.json();
  } catch (error) {
    console.log("error: ", error);
  }

  return data;
};
