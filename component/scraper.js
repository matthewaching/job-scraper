import axios from 'axios';
import cheerio from 'cheerio';

// Scrapes url and returns HTML
async function scrapeHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

// Parses HTML through cheerio and returns list of DOM tags that match query
function cheerioArray(html, query) {
  const $ = cheerio.load(html);
  const list = $(query);
  const array = [...list];
  return array;
}

// Iterates through DOM array and returns dictionary containing listing's name and associated ID
function generateObject(array) {
  const list = [];
  for (let i = 0; i < array.length; i++) {
    const object = {
      name: array[i].attribs.title,
      id: array[i].attribs.id
    };
    list.push(object);
  }
  console.log(list);
  return list;
}

export { scrapeHTML, cheerioArray, generateObject };
