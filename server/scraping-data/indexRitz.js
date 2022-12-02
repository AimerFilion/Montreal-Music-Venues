const fs = require("fs");
const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://barleritzpdb.com/");

  //  Get a screenshot of the page
  // await page.screenshot({ path: 'example.png', fullPage: true });

  //  Get a PDF of the page
  // await page.pdf({ path: 'example.pdf', format: 'A4' });

  //  Get HTML of the page
  // const html = await page.content();

  //  Get text of the page
  // const title = await page.evaluate(() => document.title);

  //  Get text of the page
  // const text = await page.evaluate(() => document.body.innerText);

  //  Get all links
  // const links = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll('a'), (e) => e.href)
  // );

  //  Get courses
  // const courses = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll('#courses .card'), (e) => ({
  //     title: e.querySelector('.card-body h3').innerText,
  //     level: e.querySelector('.card-body .level').innerText,
  //     url: e.querySelector('.card-footer a').href,
  //     promo: e.querySelector('.card-footer .promo-code .promo').innerText,
  //   }))
  // );

  // Get courses using $$eval
  const shows = await page.$$eval(".home.blog #main #list", (elements) =>
    elements.map((e) => ({
      title: e.querySelector("#list #listing_title").innerText,
      date: e.querySelector("#list #show-date").innerText,
      info: e.querySelector("#list p").innerText,
      img: e.querySelectorAll(".wp-image img").alt,
      // e.getAttribute("src")
      // promo: e.querySelector(".card-footer .promo-code .promo").innerText,
    }))
  );

  //console.log(shows);

  fs.writeFile("venueRitz.json", JSON.stringify(shows), (err) => {
    if (err) throw err;
    //console.log("File saved");
  });

  await browser.close();
}

run();
