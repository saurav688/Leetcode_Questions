select product_name,year,price
from sales
inner join  Product
where  sales.product_id=Product.product_id;
