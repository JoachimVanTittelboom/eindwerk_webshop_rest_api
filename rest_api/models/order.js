const db = require('../Config/database')

const Order = {
    getOrderById: (id) => {
        return new Promise(((resolve, reject) => {
            db.query('SELECT * FROM orders o ' +
                'JOIN orderline po ' +
                'ON o.Id = po.OrderId ' +
                'JOIN products p ' +
                'ON p.Id = po.ProductId ' +
                'WHERE o.Id = ?', [id], (err, orders) => {
                if (err) reject(err)
                resolve(orders)
            })
        }))
    },
    postNewOrder: (newOrder) => {
        return new Promise((resolve, reject) => {
            console.log(newOrder);
            let query = 'INSERT INTO orders(OrderDate,FirstName,LastName,Street,Number,PostalCode,City,Telephone,Email,TotalPrice) ' +
                'Values(?,?,?,?,?,?,?,?,?,?)';
            db.query(query,
                [newOrder.OrderDate, newOrder.FirstName, newOrder.LastName, newOrder.Street, newOrder.Number, newOrder.PostalCode, newOrder.City, newOrder.Telephone, newOrder.Email, newOrder.TotalPrice],
                (err, orders) => {
                    if (err) reject(err)
                    let orderId = orders.insertId;
                    newOrder.Products.forEach(product =>
                        addProducts(product, orderId,resolve)
                    )
                })
        })
    },

}

const addProducts = (product, orderId,resolve) => {
    db.query('INSERT INTO webshop.orderline(OrderId,ProductId,Quantity,Price)' +
        'Values(?,?,?,?)', [orderId, product.Id, product.Quantity, product.Price],
        (err, orderProducts) => {
            if (err) reject(err)
            resolve(orderProducts)
        })
}

module.exports = Order;