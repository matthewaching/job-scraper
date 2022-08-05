import { scrapeHTML, cheerioArray, generateObject } from './component/scraper';

async function run() {
  const runScrape = await scrapeHTML(
    'https://www.indeed.com/jobs?q=software%20developer&l=Houston%2C%20TX&fromage=3&sort=date'
  );
  const runCheerio = cheerioArray(runScrape, '.jcs-JobTitle span');
  const runObject = generateObject(runCheerio);
}

run();
