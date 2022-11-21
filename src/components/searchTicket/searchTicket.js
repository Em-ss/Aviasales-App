// import { process } from 'react';
export class searchTicket {
  constructor() {
    this.APIURL = 'https://front-test.dev.aviasales.ru';
  }

  async getResource(url) {
    const res = await fetch(`${this.APIURL}${url}`);

    if (!res.ok) {
      throw new Error('Vse ploxo');
    }
    return await res.json();
  }

  newSearchId() {
    return this.getResource('/search');
  }
}
