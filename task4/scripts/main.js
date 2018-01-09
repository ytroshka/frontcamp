import data from '../data/data.json';
import logo from '../images/logo.png';
import 'babel-polyfill';
import 'whatwg-fetch';
import FormElement from './formElement';
import NewsApi from './newsApi';
import CustomDebug from './customDebug';
import Report from './reporting';

(() => {
    new CustomDebug().init();
    new Report().init();

    const header = document.querySelector('header .wrapper');
    const image = document.createElement("img");

    const button = new FormElement('button');
    button.addParameters('Show News', 'show-news', document.querySelector('main'));

    const option = new FormElement('option');
    option.addParameters('Choose source', 'default', document.querySelector('select'));

    const articles = document.createElement('div');
    articles.id = 'articles';
    document.querySelector('main').appendChild(articles);

    image.src = logo;
    header.prepend(image);

    const baseUrl = "https://newsapi.org/v2";
    const apiKey = "762fef256cf642a3bc9c21296a4ed824";
    console.log(JSON.stringify(data));

    const newsApi = new NewsApi(baseUrl, apiKey);
    newsApi.getSources();
})();