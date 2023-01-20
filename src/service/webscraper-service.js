const puppeteer = require('puppeteer');

const getNotebooks = async () => {
    try {
        const url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops';
        const browser =  await puppeteer.launch();
        const page = await browser.newPage();
    
        await page.goto(url);
        
        const list =  await page.evaluate(() => {
            const products = Array.from(document.querySelectorAll('.thumbnail')).filter((product) => { 
                const description = product.querySelector('.description').innerText;
                return description.toLocaleLowerCase().includes('lenovo');
            }).sort((a, b) => {
                const priceA = Number(a.querySelector('.price').innerText);
                const priceB = Number(b.querySelector('.price').innerText);

                return priceA - priceB;
            });
            
            return products.map((product) => {
                const productName = product.querySelector('.title').innerText;
                const price = product.querySelector('.price').innerText;
                const productDescription = product.querySelector('.description').innerText;
                const memory = product.querySelector('.memory').innerText;
                const rating = product.querySelector('.rating').innerText;
            
                return { productName, price, productDescription, memory, rating };
            });
        });
    
        await browser.close();
        return list;
    } catch (error) {
        throw new Error();
    }
}

module.exports = getNotebooks;