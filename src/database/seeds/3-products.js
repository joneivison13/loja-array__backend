
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {product_name:'Macarrão', product_price:20.50, product_amount:5, user_iduser:1},
        {product_name:'Carro', product_price:20.50, product_amount:5, user_iduser:2},
        {product_name:'Moto', product_price:20.50, product_amount:5, user_iduser:1}
      ]);
    });
};
