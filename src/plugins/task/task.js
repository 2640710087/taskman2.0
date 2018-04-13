import { addTask, delTask, query } from "../senddata";

export const add = (
  username,
  token,
  start = null,
  finish = null,
  title,
  details = null,
  situation
) => {
  return addTask({
    username,
    token,
    start,
    finish,
    title,
    details,
    situation
  })
};

export const del = (username, token, uid, title) => {
  return delTask({
    username,
    token,
    uid,
    title
  });
};

export const select = (username, token) => {
  return query({
    username,
    token
  })
}