db.users.insertMany([
    {
        _id: 1,
        username: "Bruno",
        age: 20,
        active: true,
        premium: false,
        hobbies: ["reading", "soccer"],
        tasks: [{ title: "Study MongoDB", status: "pending" }]
    },
    {
        _id: 2,
        username: "Pedro",
        age: 21,
        active: false,
        premium: true,
        hobbies: ["cooking", "yoga"],
        tasks: [{ title: "Complete project", status: "done" }]
    },
    {
        _id: 3,
        username: "Weverton",
        age: 20,
        active: true,
        premium: false,
        hobbies: ["gaming", "music"],
        tasks: [{ title: "Write report", status: "pending" }]
    }
])

// Métodos de Documentos: - UpdateOne(), UpdateMany(), ReplaceMany()
// Operadores de Atualização: - $set, $unset, $rename, $inc, $mul, $min, $max
// Operadores de Array: - $push, $pop, $pull, $addToSet, $pullAll, $each

// - ATUALIZAÇÃO DE DOCUMENTOS (UPDATE E REPLACE)
- updateOne(filter, update, options) // Atualiza um único documento que corresponde ao filtro
- updateMany(filter, update, options) // Atualiza múltiplos documentos que correspondem ao filtro
- replaceOne(filter, replacement, options) // Substitui um único documento inteiro pelo novo documento fornecido

// ----------------------------------------------------------------------------------

// - OPERADORES DE ATUALIZAÇÃO
// Modificação de campos:
- $set // Define ou altera um campo específico
- $unset // Remove um campo
- $rename // Renomeia um campo

// Operações matemáticas:
- $inc // Incrementa o valor de um campo numérico
- $mul // Multiplica o valor de um campo
- $min // Atualiza o campo apenas se o novo valor for menor que o atual
- $max // Atualiza o campo apenas se o novo valor for maior que o atual

// Operações de array:
- $push // Adiciona um elemento a um array
- $pop // Remove o primeiro (-1) ou o último (1) elemento de um array
- $pull // Remove elementos específicos de um array
- $addToSet // Adiciona um elemento ao array apenas se ele não existir
- $pullAll // Remove múltiplos valores específicos de um array
- $each // Usado com $push para adicionar múltiplos elementos ao array

// ----------------------------------------------------------------------------------

// - EXEMPLOS (ATUALIZAÇÃO DE DOCUMENTOS)
// Atualiza apenas um documento que corresponde ao filtro
db.users.updateOne(
    { username: "Bruno" },
    { $set: { age: 21 } }
);

// Atualiza todos os documentos que correspondam ao filtro
db.users.updateMany(
    { active: true },
    { $set: { premium: true } }
);

// Substitui um documento inteiro por um novo
db.users.replaceOne(
    { username: "Bruno" },
    { _id: 1, username: "Bruno", age: 20, active: true, premium: false, hobbies: [] }
);


// - EXEMPLOS (MODIFICAÇÃO DE CAMPOS)
// Atualização de documento com $set
db.users.updateOne(
    { username: "Bruno "},
    { $set: { premium: true } }
);

// Atualização de documento com $unset
db.users.updateOne(
    { username: "Bruno" },
    { $unset: { premium: "" } }
);

// Atualização de documento com o $rename
db.users.updateOne(
    { username: "Bruno" },
    { $rename: { "age": "yearsOld" } }
);


// - EXEMPLOS (OPERAÇÕES MATEMÁTICAS)
// Atualização de documento com $inc
db.users.updateOne(
    { username: "Bruno" },
    { $inc: { yearsOld: 1 } }
);

// Atualização de documento com $mul
db.users.updateOne(
    { username: "Bruno" },
    { $mul: { yearsOld: 2 } }
);

// Atualização de documento com $min
db.users.updateOne(
    { username: "Bruno" },
    { $min: { yearsOld: 20 } }
);

// Atualização de documento com $max
db.users.updateOne(
    { username: "Bruno" },
    { $max: { yearsOld: 20 } }
);


// - EXEMPLOS (OPERAÇÕES EM ARRAYS)
// Atualização de documento com $push
db.users.updateOne(
    { username: "Bruno" },
    { $push: { hobbies: "gaming" } }
);

// Atualização de documento com $pop
db.users.updateOne(
    { username: "Bruno" },
    { $pop: { hobbies: -1 } }
);

// Atualização de documento com $pull
db.users.updateOne(
    { username: "Bruno" },
    { $pull: { hobbies: "gaming" } }
);

// Atualização de documento com $addToSet
db.users.updateOne(
    { username: "Bruno" },
    { $addToSet: { hobbies: "gaming" } }
);

// Atualização de documento com $each
db.users.updateOne(
    { username: "Bruno" },
    { $push: { hobbies: { $each: ["coding", "music"] } } }
);