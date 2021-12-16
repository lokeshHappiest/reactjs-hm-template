import { post } from "./ApiCaller";
export const addNote = (note) => {
  return post({
    url: "http://localhost:3000/notes",
    data: note,
  });
};
