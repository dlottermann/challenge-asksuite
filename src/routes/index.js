const Chromy = require('chromy')

module.exports = (app) => {
    app.get('/', (req, res, next) => { res.send('Page Not Found'); next(); })
    app.post('/buscar', (req, res, next) => {



        if (Object.keys(req.body).length === 0) {
            res.send({
                title: 'Erro',
                message: 'Informe as datas de check-in e check-out corretamente'
            })
        } else {
            let checkin = parseInt(req.body.checkin)
            let checkout = parseInt(req.body.checkout)

            if (checkin > checkout) {
                res.send({
                    title: 'Erro',
                    message: 'Informe as datas de check-in e check-out corretamente - Check-out deve ser maior que o check-in'
                })
            } else if (checkin === checkout) {
                res.send({
                    title: 'Erro',
                    message: 'Informe as datas de check-in e check-out corretamente - Data iguais não são permitidas'
                })
            } else {
                main(req.body.checkin, req.body.checkout)
                    .then((e) => {
                        res.send(e)
                        next();
                    }).catch(err => console.log(err))
            }


        }





    })
}

//async function
async function main(checkin, checkout) {
    let chromy = new Chromy()
    await chromy.goto(`https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=c1946547-5754-4e23-b840-bd6a0947765f#/&diff=false&CheckIn=${checkin}&CheckOut=${checkout}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-`)
    const result = await chromy.evaluate(() => {


       
        const hoteis = []
        const pictures = []
        const thumbs = []
        //scrap loop of elements                
        document.querySelectorAll('.roomExcerpt').forEach(item => {
            let acomod = {}
         
             item.querySelectorAll('h5 > a').forEach(hotel =>  acomod.title = hotel.textContent )
             item.querySelectorAll('.sincePriceContent > h6').forEach(hotel => acomod.price =  hotel.textContent )
             item.querySelectorAll('a.description').forEach(hotel => acomod.description = hotel.textContent)
             item.querySelectorAll('.slide > a').forEach(hotel => pictures.push(hotel.href))
             item.querySelectorAll('.slide > a > img').forEach(hotel => thumbs.push(hotel.src))

            acomod.pictures =  pictures 
            acomod.thumbs =  thumbs 

            hoteis.push(acomod)    
        })

        return hoteis

    })


    await chromy.close()
    return result
}
