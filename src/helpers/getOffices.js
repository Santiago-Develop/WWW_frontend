import { backUpLocalStorage } from "./backUpLocalStorage";
import { setLocalStorage } from "./setLocalStorage";

export const getOffices = async (
  type,
  setData,
  setLoading = null,
  options = false,
  setOfficeOptions,
) => {

  const API_URL = import.meta.env.VITE_API_URL;

  const requestOptions = {
    method: "GET",
  };

  const id = localStorage.getItem("id");
  let officeOptions = [];

  try {
    const res = await fetch(API_URL + "api/user_offices/" + id + "/", requestOptions);
    let data = await res.json();

    if (setLoading) setLoading(true);
    setData(data);
    const { _id, _name, _role, _urlImg, _token } = backUpLocalStorage();
    setLocalStorage(_id, _name, _role, _urlImg, _token);
    if (type) localStorage.setItem(type, JSON.stringify(data));

    if (options) {
      data.forEach(({ id, name }) => {
        officeOptions.push({
          value: id,
          label: name,
        });
      });
      setOfficeOptions(officeOptions);

    }
  } catch (error) {
    console.log("error: ", error);
  }
};
