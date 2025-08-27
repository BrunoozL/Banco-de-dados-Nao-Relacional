db.produtos.insertMany([
    {
        "_id": 1,
        "nome": "Notebook Dell",
        "categoria": "Eletrônicos",
        "preco": 4500,
        "estoque": 15,
        "avaliacao": 4.7
    },
    {
        "_id": 2,
        "nome": "Smartphone Samsung",
        "categoria": "Eletrônicos",
        "preco": 2500,
        "estoque": 30,
        "avaliacao": 4.5
    },
    {
        "_id": 3,
        "nome": "Cadeira Gamer",
        "categoria": "Móveis",
        "preco": 1200,
        "estoque": 10,
        "avaliacao": 4.8
    }
])

//
// ================= OPERADORES DE COMPARAÇÃO: =================
//

/* 
$eq: EQUAL - (igual a)
-- Este operador retorna documentos cujo valor de 
um campo específico seja igual ao valor informado
*/
db.produtos.find({ preco: {"$eq": 2500 } });

// -------------------------------------------------------------

/*
$ne: NOT EQUAL - (diferente de)
-- Retorna documentos cujo valor de um campo 
seja diferente do valor especificado
*/
db.produtos.find({ preco: { "$ne": 4500 } });

// -------------------------------------------------------------

/*
$gt: G TRHEN - (maior que)
-- Retorna documentos cujo valor de um campo 
seja maior que o valor especificado
*/
db.produtos.find({ preco: { "$gt": 2000 } });

// -------------------------------------------------------------

/*
$lt: LOWER THEN - (menor que)
-- Retorna documentos cujo valor de um campo 
seja menor que o valor especificado
*/
db.produtos.find({ preco: { "$lt": 3000 } });

// -------------------------------------------------------------

/*
$gte e $lte: G THEN OR EQUAL / LOWER THEN OR EQUAL - (maior ou igual / menor ou igual)
-- São variações dos operadores anteriores, 
incluindo valores iguais ao limite definido
*/
db.produtos.find({ preco: { "$gte": 1000, "$lte": 3000 } });

//
// ================= OPERADORES LÓGICOS: =================
//

/*
$and - (e)
-- O operador $and exige que todas as condições especificadas sejam verdadeiras
*/
db.produtos.find({
    "$and": [
        { categoria: "Eletrônicos" },
        { preco: { "$gt": 3000 } }
    ]
});

// -------------------------------------------------------------

/*
$or - (ou)
-- O operador $or retorna documentos que satisfaçam pelo menos
uma das condições especificadas
*/
db.produtos.find({
    "$or": [
        { categoria: "Eletrônicos" },
        { preco: { "$gt": 4000 } }
    ]
});

// -------------------------------------------------------------

/*
$not - (não)
-- Este operador nega uma condição específica
*/
db.produtos.find({
    preco: { "$not": { "$gt": 3000 } }
});

// -------------------------------------------------------------

/*
$nor
-- O operador $nor é o oposto de $or, excluindo 
documentos que satisfaçam qualquer uma das condições listadas
*/
db.produtos.find({
    "$nor": [
        { categoria: "Eletrônicos" },
        { preco: { "$gt": 4000 } }
    ]
});

//
// ================= OPERADORES DE ELEMENTO: =================
//

/*
$exists - (existe?)
-- Verifica se um campo está presente ou não em um documento
*/
db.produtos.find({ avaliacao: { "$exists": true } });

// -------------------------------------------------------------

/*
$type - (tipo)
-- Filtra documentos com base no tipo de dado armazenado em um campo
*/
db.produtos.find({ preco: { "$type": "integer" } });