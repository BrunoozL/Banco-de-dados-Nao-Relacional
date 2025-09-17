// $lookup - agregando coleções

db.createCollection("produto");

db.produtos.insertOne({
    nome: "Mangá",
    preco: 20,
    categoria: "Livros"
});

// ===================================

db.createCollection("cliente");

db.cliente.insertOne({
    nome: "Bruno Righi",
    idade: 20,
    endereco: [
      {
        rua: "Rua Dr. Waldemar Bauab",
        bairro: "Jadrim São Francisco",
        numero: 100
      }
    ]
  });

// ===================================

db.createCollection("compra");

db.compra.insertOne({
    cliente_id: ObjectId("68caba1b17bd868ca1788968"),
    data: new Date(),
    itens: [
      {
        produto_id: ObjectId("68caba1017bd868ca1788967"),
        preco: 40,
        quantidade: 2,
        valor_unitario: 20
      }
    ]
  });


// aggregate
db.compra.aggregate([
    {
        $lookup: {
            from: "cliente",
            localField: "cliente_id",
            foreignField: "_id",
            as: "cliente_info"
        }
    }
])

// aggregate com project
db.compra.aggregate([
    {
        $project: {
            cliente_id: 1,
            data: 1,
            valor_total_compra: {
                $sum: {
                    $map: {
                        input: "$itens",
                        as: "item",
                        in: "$$item.preco"
                    }
                }
            }
        }
    }
])