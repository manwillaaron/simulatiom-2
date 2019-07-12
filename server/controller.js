//remember, in database zipcode key is just "zip"


module.exports = {
    getHouseList: (req, res) => {
        // console.log('hit1');
        const db = req.app.get('db');
        db.get_houselist()
        .then(houses => {
            res.status(200).send(houses)
            // console.log(houses);
        }).catch(err => {
            res.status(500).send( "there is an error getting data" )
            console.log(err)
        })
    },

    addHouse: (req, res) => {
        const { name, address, city, propertystate, zipcode, img, mortgage, rent } = req.body
        console.log('req.body', name, address, city, propertystate, zipcode, img, mortgage, rent)
        const db = req.app.get('db');
        db.add_new_property(name, address, city, propertystate, zipcode, img, mortgage, rent).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send('was not able to add')
            console.log(err)
        })
    },

    deleteProperty: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;
        db.delete_property(params.id).then(() => {
            res.sendStatus(200)
        }).catch((err) => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong on our end." })
            console.log(err)
        })
    }
    }

























  


