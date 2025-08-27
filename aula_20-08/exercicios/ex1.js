// 1) Utilize o operador $gte para encontrar todos os produtos com preço maior ou igual a 2000
db.produtos.find({ preco: { "$gte": 2000 } });