import { get } from "./ApiCaller";
export const fetchUser = () => {
  return get({
    url: "https://my-json-server.typicode.com/lokeshHappiest/demo/user",
  });
};
