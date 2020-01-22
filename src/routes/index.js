const Chromy = require('chromy')

module.exports = (app) => {
    app.get('/', (req, res, next) => { res.send('Page Not Found'); next(); })
    app.post('/buscar', (req, res,next) => {
        
       main(req.body.checkin,req.body.checkout)
        .then((e) => {
          res.send(e)
          next();
        }).catch(err => console.log(err))
     
    })
}

  //async function
  async function main (checkin,checkout) {
    let chromy = new Chromy()
    await chromy.goto(`https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=c1946547-5754-4e23-b840-bd6a0947765f#/&diff=false&CheckIn=${checkin}&CheckOut=${checkout}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-`)
    const result = await chromy.evaluate(() => {

        
          const hoteis = []
           //scrap loop of elements                
          document.querySelectorAll('.roomExcerpt').forEach(item => {
             
            item.querySelectorAll('h5 > a').forEach(hotel => hoteis.push({'title':hotel.textContent}))
            item.querySelectorAll('.sincePriceContent > h6').forEach(hotel => hoteis.push({'price':hotel.textContent}))
            item.querySelectorAll('a.description').forEach(hotel => hoteis.push({'description':hotel.textContent}))
            item.querySelectorAll('.slide > a').forEach(hotel => hoteis.push({'pictures':hotel.href}))
            item.querySelectorAll('.slide > a > img').forEach(hotel => hoteis.push({'thumbnail':hotel.src}))
         
        })
      
          return hoteis

          })
          
    
    await chromy.close()
    return result
  }