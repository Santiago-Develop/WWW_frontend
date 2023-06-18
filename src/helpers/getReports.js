import React from "react";

export const getReports = async (data, setData, setLoading) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(data),
  };

  try {
    // const res = await fetch(API_URL + "api/reports/", requestOptions);
    // let { data } = await res.json();
    setLoading(false);
    setData([{name: "test"}, {name: "test2"}]);
    // setData([]);
  } catch (error) {
    console.log("error: ", error);
  }
};
