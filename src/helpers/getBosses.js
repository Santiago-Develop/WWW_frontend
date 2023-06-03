import { backUpLocalStorage } from "./backUpLocalStorage";
import { setLocalStorage } from "./setLocalStorage";

export const getBosses = async (id, setData, setLoading, type, isSearch= true) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const requestOptions = {
    method: "GET",
  };

  try {
    const res = await fetch(API_URL + "api/get_bosses/" + id + "/", requestOptions);
    let { data } = await res.json();
    setLoading(true);
    setData(data);
    if (isSearch) {
      const { _id, _name, _role, _urlImg, _token } = backUpLocalStorage();
      setLocalStorage(_id, _name, _role, _urlImg, _token);
      localStorage.setItem(type, JSON.stringify(data));
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
