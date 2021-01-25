export const getData = async (url = "", method = "GET", data = {}) => {
  let requestOptions = {
    method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
  };

  if (method !== "GET" && method !== "DELETE") {
    requestOptions = { ...requestOptions, body: data };
  }

  let response = await fetch(url, requestOptions);

  let parsedResponse = await response.json();

  return parsedResponse;
};
