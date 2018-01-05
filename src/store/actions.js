import config from "../config";

export const getEventData = ({ commit }, query) => {
  return fetch(config.apiUrl, {
    body: query,
    headers: config.apiDefaultHeaders
  })
    .then(result => {
      console.log(result);
    })
    .catch(err => console.error(err));
};
