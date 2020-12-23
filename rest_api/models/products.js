const db = require('../Config/database')

const product ={
    fetchAllProducts:()=>{
        return new Promise((resolve,reject)=>{
            db.query('select * FROM products',(err,products)=>{
                if(err) reject(err)
                resolve(products)
            })
        })
    }
}

module.exports = product