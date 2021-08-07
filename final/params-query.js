const express = require('express');
const app = express();

const {products} = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image};
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProdutc = products.find((product) => product.id === Number(productID))
    if(!singleProdutc){
        return res.status(404).send('Product Does Not Exist!')
    }
    res.json(singleProdutc)
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({sucess: true, data: []})
    }
    res.status(200).json(sortedProducts)
})

app.listen(8000, () => {
    console.log('server is listening on port 8000');
})