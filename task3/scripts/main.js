import data from '../data/data.json';
import logo from '../images/logo.png';
import 'babel-polyfill';
import 'whatwg-fetch';
import NewsApi from './newsApi';

(() => {
    const header = document.querySelector('header .wrapper');
    const image = document.createElement("img");

    image.src = logo;
    header.prepend(image);

    const baseUrl = "https://newsapi.org/v2";
    const apiKey = "762fef256cf642a3bc9c21296a4ed824";
    console.log(JSON.stringify(data));

    const newsApi = new NewsApi(baseUrl, apiKey);
    newsApi.getSources();
})();