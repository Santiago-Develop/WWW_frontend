import { backUpLocalStorage } from "./backUpLocalStorage";
import { setLocalStorage } from "./setLocalStorage";

const API_URL = import.meta.env.VITE_API_URL;

/* Function to obtain the data of all users */
export const getUsers = async (
  role,
  type = null,
  setData = null,
  setLoading = null,
  isSearch = true,
) => {
  const requestOptions = {
    method: "GET",
  };

  try {
    const res = await fetch(API_URL + "api/user", requestOptions);
    let data = await res.json();
    data = data.filter((user) => user.role === role);
    if (isSearch) {
      setData(data);
      setLoading(true);
      const { _id, _name, _role, _urlImg, _token } = backUpLocalStorage();
      setLocalStorage(_id, _name, _role, _urlImg, _token);
      localStorage.setItem(type, JSON.stringify(data));
    }
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
};
