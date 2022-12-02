const fs = require("fs");
const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://casadelpopolo.com/en");

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
  const shows = await page.$$eval("main .mb-8", (elements) =>
    elements.map((e) => ({
      title: e.querySelector(".heading.text-4xl.mb-2").innerText,
      date: e.querySelector(".heading.text-2xl.mb-2").innerText,
      price: e.querySelector(".mb-4").innerText,
      // img: e.querySelector(".lazy"),
      // promo: e.querySelector(".card-footer .promo-code .promo").innerText,
    }))
  );

  console.log(shows);

  // Save data to JSON file
  // fs.writeFile("shows.json", JSON.stringify(shows), (err) => {
  //   if (err) throw err;
  //   console.log("File saved");
  // });

  await browser.close();
}

run();
