export const BASE_URL = "https://script.google.com/macros/s/AKfycbyTT3r288vZfGaeKGRON7SUZk1HLZdJssRgqfrKvLCou4yPkzrTf8hpGzviT30AI033/exec";

export const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: new URLSearchParams(data)
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

