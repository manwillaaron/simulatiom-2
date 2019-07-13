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
        let { name, address, city, state, zip, image, mortgage,rent } = req.body
        
        const db = req.app.get('db');
        db.add_new_property([name, address, city, state, zip,image,mortgage,rent])
        .then((res) => {
            res.status(200).send(res)
        }).catch(err => {
            res.status(500).send('was not able to add')
            console.log(err)
        })
    },

    deleteProperty: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_property(id).then(() => {
            res.sendStatus(200)
        }).catch((err) => {
            res.status(500).send({ errorMessage: "could not delete" })
            console.log(err)
        })
    }
    }

























  


