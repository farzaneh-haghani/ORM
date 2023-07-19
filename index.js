const sequelize = require("./utils/database");
const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.hasMany(Order);   //relation between models

let customerId = null;

sequelize
  .sync({ force: true })
  // .sync()
  .then(result => {
    console.log(result);
    return Customer.create({          //  insert into customers table
      name: "Farzaneh Haghani",
      email: "farzaneh.haghani@gmail.com"
    })
  })
  .then(customer => {
    customerId = customer.id;
    console.log("first customer:", customer);
    return customer.createOrder({ total: 54321.99 });      //  insert into orders table
  })
  .then(order => {
    console.log("order is:", order);
    return Order.findAll({ where: customerId })         //  select with where statement
  })
  .then(orders => console.log(orders))
  .catch(err => console.error(err));