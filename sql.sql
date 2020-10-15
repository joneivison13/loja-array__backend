select idproduct, p.product_name, p.product_price, p.product_amount from product  p
inner join products_photos on idproduct = products_idproduct;