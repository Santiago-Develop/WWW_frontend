import React from "react";
import { STATES, TRANSPORTS } from "../utils/enums";

export const getReports = async (body, setData, setLoading) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(API_URL + "api/reports/", requestOptions);
    let { data } = await res.json();
    console.log("🚀 ~ file: getReports.js:14 ~ getReports ~ data:", data);
    data.forEach((item) => {
      item.transport = TRANSPORTS[item.transport];
      item.status = STATES[item.status];
    });
    setLoading(false);
    setData([{ name: "test" }, { name: "test2" }]);
    setData(data);
  } catch (error) {
    console.log("error: ", error);
  }
};
