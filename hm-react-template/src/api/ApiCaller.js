import axios from "axios";

export const get = (request) => {
  return axios.get(request.url, {
    headers: {
      ContentType: "application/json",
    },
  });
};

export const post = (request) => {
  return axios.post(request.url, request.data, {
    headers: {
      ContentType: "application/json",
    },
  });
};
