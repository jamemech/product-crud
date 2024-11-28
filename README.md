### REST API Stock Management

### GET Product 
GET /products
<pre>
Example Response :
[{
	"id" : "1",
	"name" : "Apple AirPods Pro",
	"price" : 10000,
	"stock" : 10
}, ...]
</pre>

GET /products/price?min={minPrice}&max={maxPrice}
<pre>
Example Response :
[{
	"id" : "1",
	"name" : "Apple AirPods Pro",
	"price" : 10000,
	"stock" : 10
}, ...]
</pre>

GET /products/:id
<pre>
Example Response :
{
	"id" : "1",
	"name" : "Airpods pro",
	"price" : 5000,
	"stock" : 10
}
</pre>

### CREATE Product 
POST /products
<pre>
Example Resquest Body :
{
	"name" : "Beats Studio Buds",
	"price" : 3000,
	"stock" : 10
}
Example Response :
{
	"id" : "4",
	"name" : "Beats Studio Buds",
	"price" : 3000,
	"stock" : 10
}

</pre>

### UPDATE Product 
PUT /products/:id
<pre>
Example Resquest Body :
{
	"name" : "Sony WF-1000XM4",
	"price" : 9000,
	"stock" : 10
}
Example Response :
{
	"id" : "2",
	"name" : "Sony WF-1000XM4",
	"price" : 9000,
	"stock" : 10
}
</pre>

### DELETE Product
DELETE /products/:id
<pre>
Example Response :
{
"Status" : "Success"
}
</pre>
