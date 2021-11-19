const fetchData = () => {
    _apiBase = 'https://the-one-api.dev/v2/';
    getBooks = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
      };
}
export default fetchData;