const API_URL = import.meta.env.VITE_API_URL;

export const getCustomers = async (id, setData) => {
  const requestOptions = {
    method: "GET",
  };

  try {
    const res = await fetch(API_URL + "api/user_messengers/" + id + "/", requestOptions);
    let { data } = await res.json();
    setData(data);
  } catch (error) {
    console.log("error: ", error);
  }
};
