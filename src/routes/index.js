const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');


module.exports = (app) => {
    app.get('/', (req, res, next) => { res.send('Page Not Found'); next(); })
    app.post('/buscar', (req, res) => {
        
        request('https://myreservations.omnibees.com/chain.aspx?c=2983&lang=pt-br&ad=2&_ga=2.118497545.1064657719.1579303647-917115491.1579303647&version=MyReservation&sid=f583389b-e8aa-437e-baa8-62e7227fe4fc#/hotel=&hotelname=&CheckIn=11072020&CheckOut=19072020&Code=&group_code=&loyality_card=&NRooms=1&ad=2&ch=0&ag=-',
        function(err,res, body){
           
            const $ = cheerio.load(body)

            console.log($('div.aspNetHidden').length)
            console.log($.html())

            

        })

    })
}
