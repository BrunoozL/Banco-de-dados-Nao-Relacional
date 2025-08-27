// 2) Filtre os produtos que pertencem à categoria "Móveis" e possuem avaliação superior a 4.5 usando $and
db.produtos.find({
    "$and": [
        { categoria: "Móveis" },
        { avaliacao: { "$gt": 4.5 } }
    ]
});