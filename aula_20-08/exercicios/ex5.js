// 5) Utilize $nor para excluir da busca os produtos da categoria "Eletrônicos" e aqueles com preço maior que 3000
db.produtos.find({
    "$nor": [
        { categoria: "Eletrônicos" },
        { preco: { "$gt": 3000 } }
    ]
});