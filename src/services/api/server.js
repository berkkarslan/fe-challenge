const api_url = process.env.REACT_APP_API_URL;
const api_key = process.env.REACT_APP_API_KEY;

export class ServerApi {
  post = async (url, data) => {
    return fetch(api_url + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((er) => {
        throw new Error(er);
      });
  };
  get = async (url, param = '') => {
    return fetch(api_url + url + "?api_key=" + api_key + "&language=tr" + param)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((er) => {
        throw new Error(er);
      });
  };
}
