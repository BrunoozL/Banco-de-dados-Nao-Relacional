const fs = require('fs');

function gerarDadosMongo() {
  const nomesAnimais = ['Rex', 'Luna', 'Thor', 'Mimi', 'Bob', 'Nina', 'Jack', 'Bella', 'Max', 'Daisy', 'Luna', 'Zeus'];
  const tipos = ['Cachorro', 'Gato', 'Pássaro', 'Peixe'];
  const racas = {
    Cachorro: ['Labrador', 'Poodle', 'Bulldog', 'Beagle', 'Pitbull', 'Chiuaua', 'Pinscher'],
    Gato: ['Siamês', 'Persa', 'Maine Coon', 'Sphynx'],
    Pássaro: ['Canário', 'Papagaio', 'Calopsita'],
    Peixe: ['Betta', 'Tetra', 'Guppy', 'Piranha']
  };
  const nomesDonos = ['Carlos', 'Ana', 'Marcos', 'Beatriz', 'João', 'Fernanda', 'Lucas', 'Carla', 'Pedro', 'Juliana', 'Bruno', 'Maria'];
  const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Pereira', 'Costa', 'Almeida', 'Nascimento', 'Lima', 'Ribeiro', 'Fernandes'];
  const telefones = ['123456789', '987654321', '912345678', '934567890', '976543210', '958312674', '947603813'];
  const enderecos = [
    "Rua das Acácias, 123 - Jaú - SP",
    "Avenida Brasil, 456 - São Paulo - SP",
    "Travessa das Flores, 78 - Rio de Janeiro - RJ",
    "Praça da Liberdade, 99 - Belo Horizonte - MG",
    "Alameda dos Anjos, 12 - Curitiba - PR",
    "Rua dos Lírios, 235 - Campinas - SP",
    "Avenida Paulista, 1000 - São Paulo - SP",
    "Travessa dos Jacarandás, 45 - Recife - PE",
    "Rua das Orquídeas, 876 - Fortaleza - CE",
    "Alameda das Palmeiras, 321 - Salvador - BA",
    "Rua Dom Pedro II, 67 - Santos - SP",
    "Praça XV de Novembro, 88 - Niterói - RJ",
    "Avenida Atlântica, 2345 - Rio de Janeiro - RJ",
    "Rua das Margaridas, 112 - Sorocaba - SP",
    "Alameda dos Pinheiros, 54 - Joinville - SC",
    "Travessa Santo Antônio, 41 - Porto Alegre - RS",
    "Rua José Bonifácio, 35 - Ribeirão Preto - SP",
    "Avenida Independência, 801 - Brasília - DF",
    "Rua São João, 91 - Uberlândia - MG",
    "Praça Central, 10 - Florianópolis - SC",
    "Alameda dos Cravos, 134 - Belém - PA",
    "Rua Tiradentes, 234 - Maceió - AL",
    "Avenida Sete de Setembro, 654 - Natal - RN",
    "Travessa Monte Castelo, 32 - Aracaju - SE",
    "Rua General Osório, 77 - Campo Grande - MS",
    "Rua das Rosas, 92 - Blumenau - SC",
    "Alameda Professor Carlos, 56 - Teresina - PI",
    "Rua do Comércio, 109 - Goiânia - GO",
    "Avenida das Américas, 1001 - Rio de Janeiro - RJ",
    "Praça dos Expedicionários, 23 - São Luís - MA",
    "Rua Marechal Deodoro, 76 - Cuiabá - MT",
    "Rua Domingos Martins, 11 - Vitória - ES",
    "Avenida João Pessoa, 482 - Canoas - RS",
    "Travessa da Paz, 90 - Londrina - PR",
    "Rua das Acácias, 456 - Bauru - SP",
    "Alameda dos Lírios, 67 - Maringá - PR",
    "Rua João XXIII, 321 - Franca - SP",
    "Avenida das Nações, 222 - Brasília - DF",
    "Praça São Pedro, 12 - Aparecida - SP",
    "Rua Santo André, 88 - São José dos Campos - SP",
    "Rua Frei Galvão, 312 - Guarulhos - SP",
    "Rua Santa Luzia, 45 - Osasco - SP",
    "Travessa das Oliveiras, 63 - Taubaté - SP",
    "Avenida Rio Branco, 99 - Petrópolis - RJ",
    "Alameda dos Cedros, 31 - Boa Vista - RR",
    "Rua Irmã Dulce, 143 - Palmas - TO",
    "Praça Dom Bosco, 77 - Macapá - AP",
    "Avenida Presidente Vargas, 210 - Manaus - AM",
    "Rua das Camélias, 184 - Barueri - SP",
    "Travessa dos Lírios, 59 - Jundiaí - SP",
    "Alameda das Hortênsias, 199 - Gramado - RS",
    "Rua Castro Alves, 77 - Pelotas - RS",
    "Rua Rio Grande, 33 - São Carlos - SP",
    "Avenida Beira Mar, 300 - Vitória - ES",
    "Rua Visconde de Mauá, 50 - Itaboraí - RJ",
    "Alameda dos Jasmins, 18 - Serra - ES",
    "Rua da Paz, 120 - Itajaí - SC",
    "Praça República, 19 - São Vicente - SP",
    "Avenida Dom Pedro I, 999 - Campinas - SP",
    "Travessa do Sol, 55 - Araraquara - SP",
    "Rua Sete Quedas, 89 - Londrina - PR",
    "Avenida do Contorno, 65 - Belo Horizonte - MG",
    "Rua São José, 22 - Santo André - SP",
    "Praça Matriz, 14 - São Caetano do Sul - SP",
    "Alameda Mar Azul, 72 - Ubatuba - SP",
    "Rua dos Cravos, 34 - Itapetininga - SP",
    "Rua Santa Bárbara, 12 - Indaiatuba - SP",
    "Avenida Bento Gonçalves, 877 - Canoas - RS",
    "Rua Dom João VI, 47 - Anápolis - GO",
    "Avenida Goiás, 500 - Goiânia - GO",
    "Rua dos Pioneiros, 110 - Londrina - PR",
    "Rua XV de Novembro, 99 - Joinville - SC",
    "Travessa das Bromélias, 29 - Blumenau - SC",
    "Rua Padre Cícero, 67 - Juazeiro do Norte - CE",
    "Praça das Bandeiras, 44 - Campinas - SP",
    "Avenida Litorânea, 401 - São Luís - MA",
    "Rua dos Coqueiros, 73 - Ilhéus - BA",
    "Avenida Presidente Kennedy, 88 - São Bernardo do Campo - SP",
    "Travessa Esperança, 60 - Nova Iguaçu - RJ",
    "Rua São Sebastião, 18 - Volta Redonda - RJ",
    "Avenida Tiradentes, 300 - Londrina - PR",
    "Rua Padre Anchieta, 99 - Cascavel - PR",
    "Alameda das Rosas, 26 - Goiânia - GO",
    "Praça São Francisco, 13 - Recife - PE",
    "Rua Bom Jesus, 48 - Olinda - PE",
    "Rua da Esperança, 31 - Serra Talhada - PE",
    "Rua do Sol, 200 - Petrolina - PE",
    "Rua Coronel Antônio, 22 - Caruaru - PE",
    "Rua Luiz Gonzaga, 15 - Campina Grande - PB",
    "Avenida João Pessoa, 666 - João Pessoa - PB",
    "Rua Francisco Sá, 44 - Fortaleza - CE",
    "Rua Doutor Arnaldo, 70 - São Paulo - SP",
    "Rua do Carmo, 21 - Salvador - BA",
    "Praça do Rosário, 78 - Maceió - AL",
    "Rua das Palmeiras, 115 - Porto Velho - RO",
    "Alameda das Acácias, 99 - Boa Vista - RR",
    "Travessa Verdejante, 39 - Rio Branco - AC",
    "Rua Principal, 17 - Cruzeiro do Sul - AC",
    "Rua Frei Caneca, 81 - São Paulo - SP",
    "Rua Marechal Floriano, 42 - Curitiba - PR",
    "Rua São Jorge, 36 - São Leopoldo - RS",
    "Avenida Atlântica, 1221 - Balneário Camboriú - SC",
    "Rua do Imperador, 43 - Petrópolis - RJ",
    "Rua das Gaivotas, 98 - Florianópolis - SC",
    "Rua General Câmara, 64 - Porto Alegre - RS",
    "Rua Barão do Rio Branco, 102 - Canoas - RS",
    "Rua Dom Pedro I, 72 - São José - SC",
    "Rua General Neto, 84 - Caxias do Sul - RS",
    "Rua Visconde de Itaboraí, 27 - Volta Redonda - RJ",
    "Rua Santo Cristo, 20 - Belford Roxo - RJ",
    "Rua Nova Esperança, 88 - São Gonçalo - RJ",
    "Rua Castro Neves, 55 - Magé - RJ",
    "Rua das Almas, 31 - Campos dos Goytacazes - RJ",
    "Rua Princesa Isabel, 19 - Teresópolis - RJ",
    "Rua do Porto, 70 - Cabo Frio - RJ",
    "Alameda dos Ipês, 76 - Guarujá - SP",
    "Rua do Bosque, 120 - Caraguatatuba - SP",
    "Rua da Praia, 333 - Santos - SP",
    "Rua do Comércio, 21 - São Sebastião - SP",
    "Rua Dom Bosco, 15 - Taubaté - SP",
    "Avenida das Indústrias, 144 - Sorocaba - SP",
    "Rua do Estudante, 18 - Piracicaba - SP",
    "Rua da Colina, 71 - Limeira - SP",
    "Rua das Araucárias, 97 - São Roque - SP",
    "Rua São Miguel, 31 - Barretos - SP",
    "Rua São Vicente, 27 - Itapeva - SP",
    "Rua São Rafael, 82 - Bragança Paulista - SP",
    "Rua Nossa Senhora da Paz, 38 - Franca - SP",
    "Rua da Serra, 61 - Botucatu - SP",
    "Rua das Pedras, 20 - Itapira - SP",
    "Rua do Mirante, 89 - Araras - SP",
    "Rua das Violetas, 35 - Mogi Guaçu - SP",
    "Rua do Horto, 46 - Jundiaí - SP",
    "Rua Santa Tereza, 103 - Assis - SP",
    "Rua São Joaquim, 75 - Tup"
];

  // Gerar donos com _id
  const donos = [];
  for (let i = 1; i <= 1000; i++) {
    const nome = nomesDonos[Math.floor(Math.random() * nomesDonos.length)] + ' ' + sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    const telefone = telefones[Math.floor(Math.random() * telefones.length)];
    const endereco = enderecos[Math.floor(Math.random() * enderecos.length)];
    donos.push({ _id: i, nome, telefone, endereco });
  }

  // Gerar animais com _id e dono como nome completo
  const animais = [];
  for (let i = 1; i <= 1000; i++) {
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    const nome = nomesAnimais[Math.floor(Math.random() * nomesAnimais.length)];
    const idade = Math.floor(Math.random() * 15) + 1; // idade 1-15 anos
    const racaLista = racas[tipo];
    const raca = racaLista[Math.floor(Math.random() * racaLista.length)];
    const peso = parseFloat((Math.random() * 30 + 1).toFixed(2));
    const dono = donos[Math.floor(Math.random() * donos.length)].nome;

    animais.push({ _id: i, nome, tipo, idade, raca, peso, dono });
  }

  // Gerar texto do script mongo
  const donoInsert = `db.dono.insertMany(${JSON.stringify(donos, null, 2)});\n`;
  const animalInsert = `db.animal.insertMany(${JSON.stringify(animais, null, 2)});\n`;

  return donoInsert + '\n' + animalInsert;
}

const scriptMongo = gerarDadosMongo();

// Salvar no arquivo insertsMongo.js
fs.writeFileSync('insertsMongo.js', scriptMongo);

console.log('Arquivo insertsMongo.js criado com os comandos de insert para MongoDB!');

// node gerarDados.js