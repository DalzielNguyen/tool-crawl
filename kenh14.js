const puppeteer = require('puppeteer');

(async ()=> {
    // Mở trình duyệt web
    const browser = await puppeteer.launch ({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://kenh14.vn');


    // lấy dữ liệu

    const articles = await page.evaluate(()=>{
        let titleLinks = document.querySelectorAll('h3.knswli-title > a');
        titleLinks = [...titleLinks];
        let articles = titleLinks.map(link=>({
            title: link.getAttribute('title'),
            url : link.getAttribute('href')
        }));
        return articles;
    });
    
    // Xuất kết quả

    console.log (articles);
    await browser.close();

})();