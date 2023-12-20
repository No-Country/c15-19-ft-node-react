export default class Api {
  constructor() {}

  async _useFetch(url, method, body) {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method,
      body: JSON.stringify(body),
    });

    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error ${res.status}`);
  }

  async getCardsChallenges() {
    try {
      const res = await this._useFetch(
        "https://challengeme-uy0s.onrender.com/challenges",
        "GET"
      );

      return res;
    } catch (err) {
      console.log(err);
    }
  }
}
