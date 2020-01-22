const puppeteer = require('puppeteer')
const cheerio = require('cheerio');

module.exports = (app) => {
    app.get('/', (req, res, next) => { res.send('Page Not Found'); next(); })
    app.post('/buscar', (req, res) => {
        
        console.log(req.body)
        crawler(req.body.checkin,req.body.checkout).then((value) => {
            console.log(value)
        })

    })
}


let crawler = async (checkin,checkout) => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.goto(`https://myreservations.omnibees.com/chain.aspx?c=2983&lang=pt-br&ad=2&_ga=2.238751430.716354957.1579641949-1912644431.1579356793&_ga=2.238751430.716354957.1579641949-1912644431.1579356793&sid=f4553988-834a-4060-b50f-e758621ea624&version=MyReservation#/hotel=&hotelname=&CheckIn=${checkin}&CheckOut=${checkout}&Code=&group_code=&loyality_card=&NRooms=1&ad=2&ch=0&ag=-`)
    await page.waitFor(1000)
    
    // crawler
    const result = await page.evaluate(() => {
      const titles = []
      const address = []
      const description = []
      const price = []
      const pictures = []
      const capa = []
  
      const total  = document.querySelectorAll('.available').length
  
      document.querySelectorAll('h5 > a').forEach(hotel => titles.push(hotel.title))
      document.querySelectorAll('.address').forEach(hotel => address.push(hotel.textContent))
      document.querySelectorAll('.description p:first-child').forEach(hotel => description.push(hotel.textContent))
      document.querySelectorAll('.bestChainPriceTextColor').forEach(hotel => price.push(hotel.textContent))
  
      document.querySelectorAll('.thumb > a').forEach(hotel => pictures.push(hotel.href))
      document.querySelectorAll('.image > a').forEach(hotel => capa.push(hotel.href))
  
      return total
    });
    
    browser.close()
    return result
  };
  
