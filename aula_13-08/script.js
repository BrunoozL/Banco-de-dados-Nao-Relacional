// 1) Acessar o MongoDB: abra o terminal e digite: mongosh
// 2) Mostrar os bancos de dados no servidor: show dbs
// 3) Criar banco de dados: use primeiro_db
// 4) Mostrar as coleções no banco de dados: show collections
// 5) Criar coleção: 
    db.createCollection("minha_colecao")
// 6) Inserir documento: 
    db.minha_colecao.insertOne({ nome: "João", idade: 30})
// 7) Listar todos os documentos da coleção: 
    db.minha_colecao.find()
// 8) Inserir vários documentos: 
    db.minha_colecao.insertMany([
      { nome: "Ana", idade: 19 },
      { nome: "Maria", idade: 25},
      { nome: "Roberto", idade: 23}
    ])
// 9) Encontrar um documento>
    db.minha_colecao.findOne({ nome: "Bruno" })
// 10) Encontrar um documento e exibir apenas os campo "nome" e "idade":
    db.minha_colecao.find(
        { nome: "Bruno" },
        { nome: 1, idade: 1, _id: 0}
    )
// 11) Atualizar um documento:
    db.minha_colecao.updateOne(
        { nome: "Bruno" },
        { $set: { idade: 21 }}
    )
// 12) Remover um documento:
    db.minha_colecao.deleteOne({ nome: "Bruno"})
// 13) Remover uma coleção:
    db.minha_colecao.drop()
// 14) Remover o banco de dados:
    db.dropDatabase()