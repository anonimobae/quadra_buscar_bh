
// Lista de códigos válidos
const codigosValidos = ["TONHA", "BH010", "A1B2C", "XYZ12", "P5Q6R"];
const MOEDAS_INICIAIS = 5;

// Se for o primeiro acesso, define o saldo inicial
if (!localStorage.getItem("moedas")) {
  localStorage.setItem("moedas", MOEDAS_INICIAIS);
}
function atualizarSaldoMoedas() {
  const saldo = localStorage.getItem("moedas");
  const display = document.getElementById("saldo-moedas");
  if (display) {
    display.textContent = `💰 Moedas restantes: ${saldo}`;
  }
}


const quadras = [
    {
      local: "Quadra do Saldanha",
      regiao: "Venda Nova",
      bairro: "Letícia",
      endereco: "Av. Elías Antônio Issa, 363 - Letícia, Belo Horizonte - MG, 31570-010",
      contato: ""
    },
    {
      local: "Quadra do Renato | Escola de Esportes Talentos",
      regiao: "Venda Nova",
      bairro: "Santa Mônica",
      endereco: "R. dos Bororós, 781 - Santa Monica, Belo Horizonte - MG, 31530-290",
      contato: ""
    },
    {
      local: "Quadra Santiago",
      regiao: "Venda Nova",
      bairro: "Mantiqueira",
      endereco: "515, R. Conceição Silvana, 447 - Mantiqueira, Belo Horizonte - MG, 31655-610",
      contato: ""
    },
    {
      local: "Quadra Mantiqueira",
      regiao: "Venda Nova",
      bairro: "Mantiqueira",
      endereco: "Rua Maria Lourdes da Cruz, 250 - Mantiqueira, Belo Horizonte - MG, 31655-230",
      contato: ""
    },
    {
      local: "Quadra Águia Dourada",
      regiao: "Venda Nova",
      bairro: "Mantiqueira",
      endereco: "R. Geraldo Lopes da Silva - Mantiqueira, Belo Horizonte - MG, 31652-310",
      contato: ""
    },
    {
      local: "Arena Floramar",
      regiao: "Norte",
      bairro: "Flormar",
      endereco: "Rua Desembargador Arthur Albino, 105 - Floramar, Belo Horizonte - MG, 31742-116",
      contato: ""
    },
    {
      local: "Quadra do Vinícius",
      regiao: "Venda Nova",
      bairro: "Céu Azul",
      endereco: "R. Eurípedes Trindade Rezende, 61 - Céu Azul, Belo Horizonte - MG, 31580-110",
      contato: ""
    },
    {
      local: "Clube Stadium",
      regiao: "Venda Nova",
      bairro: "São João Batista",
      endereco: "Rua Dr. Álvaro Camargos, 775 - São João Batista, Belo Horizonte - MG, 31515-200",
      contato: ""
    },
    {
      local: "Gol a Gol",
      regiao: "Venda Nova",
      bairro: "Venda Nova",
      endereco: "R. Santa Cruz, 163 - Venda Nova, Belo Horizonte - MG, 31510-070",
      contato: ""
    },
    {
      local: "Quadra do Canjica",
      regiao: "Venda Nova",
      bairro: "Planalto",
      endereco: "Rua José Benjamim de Castro, 622 - Planalto, Belo Horizonte - MG, 31730-500",
      contato: ""
    },
    {
      local: "Arena Palestra",
      regiao: "Venda Nova",
      bairro: "Santa Mônica",
      endereco: "R. Min. Oliveira Salazar, 1401 - Santa Monica, Belo Horizonte - MG, 31520-400",
      contato: ""
    },
    {
      local: "Centro Esportivo Magno",
      regiao: "Venda Nova",
      bairro: "Planalto",
      endereco: "R. Antônio Ferreira Sobrinho, 47 - Planalto, Belo Horizonte - MG, 31730-685",
      contato: ""
    },
    {
      local: "Arena Boca Junior Brasil",
      regiao: "Venda Nova",
      bairro: "Santa Mônica",
      endereco: "R. Érico Veríssimo, 2137 - Santa Monica, Belo Horizonte - MG, 31530-570",
      contato: ""
    },
    {
      local: "Bianco Soccer",
      regiao: "Venda Nova",
      bairro: "Venda Nova",
      endereco: "2545 Av. Vilarinho",
      contato: ""
    },
    {
      local: "Arena Inter Pampulha | Escola de Futebol | Quadra Esportiva",
      regiao: "Venda Nova",
      bairro: "Céu Azul",
      endereco: "R. Maria Gertrudes Santos, 540 - Céu Azul, Belo Horizonte - MG, 31578-300",
      contato: ""
    },
    {
      local: "Arena Monte Castelo",
      regiao: "Pampulha",
      bairro: "Santa Branca",
      endereco: "R. Mario de Andrade, 200 - Santa Branca, Belo Horizonte - MG, 31565-110",
      contato: ""
    },
    {
      local: "Quadra do Pedro",
      regiao: "Venda Nova",
      bairro: "Jardim Leblon",
      endereco: "R. Dom Sebastião Leme, 8 - Jardim Leblon, Belo Horizonte - MG, 31540-530",
      contato: ""
    },
    {
      local: "Arena Santos",
      regiao: "Venda Nova",
      bairro: "Jardim Leblon",
      endereco: "R. Santa Cruz do Escalvado, 77 - Vila Jardim Leblon, Belo Horizonte - MG, 31540-270",
      contato: ""
    },
    {
      local: "Arena América Pampulha",
      regiao: "Pampulha",
      bairro: "Copacabana",
      endereco: "Av. Francisco Negrão de Lima, 270 - Copacabana, Belo Horizonte - MG, 31545-000",
      contato: ""
    },
    {
      local: "Espaço Alternativo",
      regiao: "Pampulha",
      bairro: "Bandeirantes",
      endereco: "Av. Otacílio Negrão de Lima, 6891-6895 - Pampulha, Belo Horizonte - MG, 31365-450",
      contato: ""
    },
    {
      local: "Arena Inter de Milão | Escolinha Oficial Inter Academy BH | Aluguel Quadra Society",
      regiao: "Pampulha",
      bairro: "Ouro Preto",
      endereco: "Av. Alfredo Camarate, 199 - Pampulha, Belo Horizonte - MG, 31310-000",
      contato: ""
    },
    {
      local: "Arena Seu Nome Seu Bairro",
      regiao: "Pampulha",
      bairro: "São Luíz",
      endereco: "R. Maestro Francisco Flôres, 416 - São Luiz, Belo Horizonte - MG, 31270-670",
      contato: ""
    },
    {
      local: "Arena Boleiros Bh",
      regiao: "Pampulha",
      bairro: "Bandeirantes",
      endereco: "Rua Sebastiao Antonio Carlos, 250 - Bandeirantes (Pampulha), Belo Horizonte - MG, 31365-430",
      contato: ""
    },
    {
      local: "Arena Pampulha",
      regiao: "Pampulha",
      bairro: "Bandeirantes",
      endereco: "Av. Heráclito Mourão de Miranda, 3895 - Bandeirantes (Pampulha), Belo Horizonte - MG, 31365-283",
      contato: ""
    },
    {
      local: "Quadra CENO",
      regiao: "Pampulha",
      bairro: "Serrano",
      endereco: "R. Agílio Cruz de Souza, 566 - Serrano, Belo Horizonte - MG, 30882-630",
      contato: ""
    },
    {
      local: "Quadra de Futebol La Pelota",
      regiao: "Pampulha",
      bairro: "Castelo",
      endereco: "R. Castelo Setúbal, 348 - Castelo, Belo Horizonte - MG, 31330-090",
      contato: ""
    },
    {
      local: "ARTBOL Futebol Society",
      regiao: "Pampulha",
      bairro: "Paquetá",
      endereco: "R. Póvoa de Varzim, 12 - Paquetá, Belo Horizonte - MG, 31340-060",
      contato: ""
    },
    {
      local: "Arena Portugal",
      regiao: "Pampulha",
      bairro: "Jardim Atântico",
      endereco: "Av. Portugal, 550 - Jardim Atlântico, Belo Horizonte - MG, 31550-000",
      contato: ""
    },
    {
      local: "Quadra Gol de Placa",
      regiao: "Norte",
      bairro: "São Bernardo",
      endereco: "R. Édson Tomás Santos, 145 - São Bernardo, Belo Horizonte - MG, 31741-377",
      contato: ""
    },
    {
      local: "Liga F7 Belo Horizonte",
      regiao: "Pampulha",
      bairro: "Braúnas",
      endereco: "Av. Otacílio Negrão de Lima, 11000 - Pampulha, Belo Horizonte - MG, 31365-450",
      contato: ""
    },
    {
      local: "Centro Esportivo Bola na Rede",
      regiao: "Pampulha",
      bairro: "Liberdade",
      endereco: "R. Intendente Câmara, 100 - Liberdade, Belo Horizonte - MG, 31270-240",
      contato: ""
    },
    {
      local: "Quadra Uaikiki",
      regiao: "Noroeste",
      bairro: "Dom Bosco",
      endereco: "Av. Abílio Machado, 1521 - Dom Bosco, Belo Horizonte - MG, 30830-093",
      contato: ""
    },
    {
      local: "Quadra Do Belo",
      regiao: "Noroeste",
      bairro: "Coqueiros",
      endereco: "R. Gaza, 190 - Coqueiros, Belo Horizonte - MG, 30881-130",
      contato: ""
    },
    {
      local: "Arena 7 BH",
      regiao: "Pampulha",
      bairro: "Castelo",
      endereco: "Av. Heráclito Mourão de Miranda, 907 - Alípio de Melo, Belo Horizonte - MG, 30882-150",
      contato: ""
    },
    {
      local: "Arena Jabulane Galo Arena",
      regiao: "Pampulha",
      bairro: "Santa Amélia",
      endereco: "Av. Portugal, 2031 - Santa Amelia, Belo Horizonte - MG, 31555-000",
      contato: ""
    },
    {
      local: "Quadra do América",
      regiao: "Nordeste",
      bairro: "Ipiranga",
      endereco: "Av. Bernardo de Vasconcelos, 2178 - Ipiranga, Belo Horizonte - MG, 31160-440",
      contato: ""
    },
    {
      local: "Arena Palmares Futebol Society",
      regiao: "Nordeste",
      bairro: "Palmares",
      endereco: "R. Nicolina Pachêco, 449 - Palmares, Belo Horizonte - MG, 31155-680",
      contato: ""
    },
    {
      local: "Quadra Arena Jacuí",
      regiao: "Nordeste",
      bairro: "Ipiranga",
      endereco: "R. Jacuí, 3895 - Ipiranga, Belo Horizonte - MG, 31160-190",
      contato: ""
    },
    {
      local: "Quadra do Deca",
      regiao: "Venda Nova",
      bairro: "Jardim dos Comerciários",
      endereco: "R. Sete de Outubro, 514 - Jardim dos Comerciários, Belo Horizonte - MG, 31652-000",
      contato: ""
    },
    {
      local: "Quadra Arena",
      regiao: "Venda Nova",
      bairro: "Minas Caixa",
      endereco: "R. Ronaldo Felipe de Sena, 306-400 - Minas Caixa, Belo Horizonte - MG, 31610-450",
      contato: ""
    },
    {
      local: "Quadra da Vilarinho",
      regiao: "Venda Nova",
      bairro: "Venda Nova",
      endereco: "Av. Vilarinho, 1400 - Venda Nova, Belo Horizonte - MG, 31610-240",
      contato: ""
    },
    {
      local: "Linha Verde",
      regiao: "Venda Nova",
      bairro: "Canaa",
      endereco: "Canaa, Belo Horizonte - MG, 31748-046",
      contato: ""
    },
    {
      local: "Arena Providência",
      regiao: "Norte",
      bairro: "Providência",
      endereco: "R. Júlio Dias, 20 - Providência, Belo Horizonte - MG, 31814-240",
      contato: ""
    },
    {
      local: "Quadra Soccer",
      regiao: "Nordeste",
      bairro: "Nazaré",
      endereco: "R. Américo Alves, 850 - Nazare, Belo Horizonte - MG, 31990-070",
      contato: ""
    },
    {
      local: "Arena 240 Futebol Society",
      regiao: "Norte",
      bairro: "Guarani",
      endereco: "MG-020, Belo Horizonte - MG",
      contato: ""
    },
    {
      local: "Centro Esportivo São Gabriel - Quadra do Nelinho",
      regiao: "Norte",
      bairro: "São Gabriel",
      endereco: "Rua Curimatan, 350 - São Gabriel, Belo Horizonte - MG, 31980-670",
      contato: ""
    },
    {
      local: "Arena Fut Quadra Sintética Leandro",
      regiao: "Nordeste",
      bairro: "Goiânia",
      endereco: "Rua Vera Lúcia Pereira, 153 - Goiânia, Belo Horizonte - MG, 31950-060",
      contato: ""
    },
    {
      local: "Monte Sião Esportes",
      regiao: "Venda Nova",
      bairro: "Candelária",
      endereco: "Rua Antônio Rodrigues Fróes, R. Luar de Minas, 491 - Candelária, Belo Horizonte - MG, 31535-600",
      contato: ""
    },
    {
      local: "Centro Esportivo Bate Bola",
      regiao: "Pampulha",
      bairro: "São Francisco",
      endereco: "R. Aveiro, 932 - São Francisco, Belo Horizonte - MG, 31255-060",
      contato: ""
    },
    {
      local: "Arena Santa Cruz Belo Horizonte",
      regiao: "Nordeste",
      bairro: "Maria Virgínia",
      endereco: "508, R. do Contôrno, 504 - Maria Virgínia, Belo Horizonte - MG",
      contato: ""
    },
    {
      local: "Arena Cachoeirinha",
      regiao: "Pampulha",
      bairro: "Santa Cruz",
      endereco: "Av. Cachoeirinha, 905 - Santa Cruz, Belo Horizonte - MG, 31150-260",
      contato: ""
    },
    {
      local: "Esporte Mania",
      regiao: "Nordeste",
      bairro: "Cachoeirinha",
      endereco: "Av. Bernardo de Vasconcelos, 780 - Cachoeirinha, Belo Horizonte - MG, 31150-000",
      contato: ""
    },
    {
      local: "Quadras Visual",
      regiao: "Noroeste",
      bairro: "Bonfim",
      endereco: "Rua Mariana, Praça 12 de Dezembro, 654 - Bonfim, Belo Horizonte - MG, 31210-420",
      contato: ""
    },
    {
      local: "Arena Tupinambás",
      regiao: "Centro",
      bairro: "Centro",
      endereco: "R. Rio Grande do Sul, 198 - Centro, Belo Horizonte - MG, 30170-110",
      contato: ""
    },
    {
      local: "Quadra de futsal - Quadra Itatiaia",
      regiao: "Noroeste",
      bairro: "Bonfim",
      endereco: "R. Itatiaia, 86 - Bonfim, Belo Horizonte - MG, 31210-170",
      contato: ""
    },
    {
      local: "Arena Túnel",
      regiao: "Leste",
      bairro: "Colégio Batista",
      endereco: "Av. Cristiano Machado, 65 - Colégio Batista, Belo Horizonte - MG, 31110-230",
      contato: ""
    },
    {
      local: "Arena Pitangui",
      regiao: "Noroeste",
      bairro: "Lagoinha",
      endereco: "R. Itabira, 880 - Lagoinha, Belo Horizonte - MG, 31210-030",
      contato: ""
    },
    {
      local: "Arena Planeta Bola Quadras Esportivas",
      regiao: "Leste",
      bairro: "Sagrada Família",
      endereco: "R. Cel. Praes, 20 - Sagrada Família, Belo Horizonte - MG, 31035-590",
      contato: ""
    },
    {
      local: "Arena Futciety",
      regiao: "Leste",
      bairro: "Sagrada Família",
      endereco: "R. Itacoatiara, 343 - Sagrada Família, Belo Horizonte - MG, 31035-400",
      contato: ""
    },
    {
      local: "Aqua Ball",
      regiao: "Leste",
      bairro: "Sagrada Família",
      endereco: "R São Luiz, 520 - Sagrada Família, Belo Horizonte - MG, 31035-430",
      contato: ""
    },
    {
      local: "Planet Gol BH",
      regiao: "Leste",
      bairro: "Santa Tereza",
      endereco: "R. Conselheiro Rocha, 1700 - Santa Tereza, Belo Horizonte - MG, 30150-210",
      contato: ""
    },
    {
      local: "Quadra Sportboll",
      regiao: "Oeste",
      bairro: "Calafate",
      endereco: "R. Juscelino Barbosa, 251 - Calafate, Belo Horizonte - MG, 30411-535",
      contato: ""
    },
    {
      local: "Futebol & Cia",
      regiao: "Noroeste",
      bairro: "Jardim Montanhês",
      endereco: "R. Moema, 375 - Jardim Montanhês, Belo Horizonte - MG, 30730-580",
      contato: ""
    },
    {
      local: "Futebol & Cia (2) ",
      regiao: "Noroeste",
      bairro: "Jardim Montanhês",
      endereco: "R. Carlos Pinheiro Chagas, 221 - Jardim Montanhês, Belo Horizonte - MG, 30750-150",
      contato: ""
    },
    {
      local: "Platina Ball Esportes",
      regiao: "Oeste",
      bairro: "Prado",
      endereco: "R. Platina, 1385 - Prado, Belo Horizonte - MG, 30411-325",
      contato: ""
    },
    {
      local: "Quadra de Futebol Pé de Muleke",
      regiao: "Oeste",
      bairro: "Prado",
      endereco: "R. Platina, 1905 - Prado, Belo Horizonte - MG, 30411-465",
      contato: ""
    },
    {
      local: "Arena Foot Beer Estoril",
      regiao: "Oeste",
      bairro: "Estoril",
      endereco: "R. Mario Coutinho, 311 - Estoril, Belo Horizonte - MG, 30494-057",
      contato: ""
    },
    {
      local: "Quadra Ednense",
      regiao: "Oeste",
      bairro: "Betânia",
      endereco: "R. Maria Rosa Sáles, 327 - Betânia, Belo Horizonte - MG, 30516-540",
      contato: ""
    },
    {
      local: "Espaço W11",
      regiao: "Oeste",
      bairro: "Estoril",
      endereco: "R. Geraldo Vasconcelos, 485 - Estoril, Belo Horizonte - MG, 30494-100",
      contato: ""
    },
    {
      local: "Arena Estrela Dalva",
      regiao: "Oeste",
      bairro: "Nova Barroca",
      endereco: "R. Manila, 570 - Nova Barroca, Belo Horizonte - MG, 30575-010",
      contato: ""
    },
    {
      local: "La Bombonera Sports Center",
      regiao: "Oeste",
      bairro: "Buritis",
      endereco: "Av. Professor Mário Werneck, 569 - Buritis, Belo Horizonte - MG, 30450-610",
      contato: ""
    },
    {
      local: "Arena PSG Academy BH",
      regiao: "Oeste",
      bairro: "Estrela Dalva",
      endereco: "R. Manila, 570 - Estrela Dalva, Belo Horizonte - MG, 30575-010",
      contato: ""
    },
    {
      local: "Arena Sion",
      regiao: "Centro-Sul",
      bairro: "Sion",
      endereco: "R. Washington, 957 - Sion, Belo Horizonte - MG, 30315-540",
      contato: ""
    },
    {
      local: "Arena Grécia II (Unidade Barreiro)",
      regiao: "Barreiro",
      bairro: "Barreiro",
      endereco: "R. José Zuquim, 54 - Barreiro, Belo Horizonte - MG, 30640-180",
      contato: ""
    },
    {
      local: "Quadra do Tião",
      regiao: "Barreiro",
      bairro: "Milionários",
      endereco: "R. Salvador Pirri, 483 - Milionários, Belo Horizonte - MG, 30620-040",
      contato: ""
    },
    {
      local: "Via Futebol Society",
      regiao: "Barreiro",
      bairro: "Santa Helena",
      endereco: "Rua Francisco Duarte Mendonça, 999A - Santa Helena, Belo Horizonte - MG, 30642-310",
      contato: ""
    },
    {
      local: "Sports Center Chiodi",
      regiao: "Oeste",
      bairro: "Madre Gertrudes",
      endereco: "Av. Sideral, 60 - Me. Gertrudes, Belo Horizonte - MG, 30518-140",
      contato: ""
    },
    {
      local: "Arena Sport Fino II - Football Field Society",
      regiao: "Oeste",
      bairro: "Madre Gertrudes",
      endereco: "R. Frei Gáspar, 77 - Me. Gertrudes, Belo Horizonte - MG, 30512-100",
      contato: ""
    },
    {
      local: "Centro Esportivo Portuguesa",
      regiao: "Noroeste",
      bairro: "Coqueiros",
      endereco: "Av. Amintas Jacques de Morais, 1961 - Coqueiros, Belo Horizonte - MG, 30880-330",
      contato: ""
    },
    {
      local: "Quadra Do Belo",
      regiao: "Noroeste",
      bairro: "Coqueiros",
      endereco: "R. Gaza, 190 - Coqueiros, Belo Horizonte - MG, 30881-130",
      contato: ""
    },
    {
      local: "Quadra bola no pé",
      regiao: "Centro-Sul",
      bairro: "Sion",
      endereco: "Rua Correias, 47 - Sion, Belo Horizonte - MG, 30315-340",
      contato: ""
    }
   ];


document.getElementById('entrar').addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value.trim();
    const login = document.getElementById('login-container');
    const busca = document.getElementById('busca-container');
    const erro = document.getElementById('mensagem-erro');
  
    if (codigosValidos.includes(codigo)) {
  
      erro.textContent = "";
      login.style.display = "none";
      busca.style.display = "block";
      document.getElementById("regiao").focus();
      atualizarSaldoMoedas();
    
    } else {
      erro.textContent = "Código inválido. Tente novamente.";
    }
  });
  
  // Atualiza bairros conforme a região
  function atualizarBairros() {
    const regiao = document.getElementById('regiao').value;
    const bairroSelect = document.getElementById('bairro');
  
    bairroSelect.innerHTML = '<option value="">Todos os bairros da região</option>';
  
    const bairros = [...new Set(quadras.filter(q => q.regiao === regiao).map(q => q.bairro))];
    bairros.forEach(bairro => {
      const option = document.createElement('option');
      option.value = bairro;
      option.textContent = bairro;
      bairroSelect.appendChild(option);
    });
  }
  
  // Realiza a busca pelas quadras
  function buscarQuadras() {
    const regiao = document.getElementById('regiao').value;
    const bairro = document.getElementById('bairro').value;
    const resultadoDiv = document.getElementById('resultado');
    let saldo = parseInt(localStorage.getItem("moedas"));

    
    if (saldo <= 0) {
      alert("Você não tem mais moedas para realizar buscas.");
      return;
    }
  
    const resultados = quadras.filter(q =>
      (!regiao || q.regiao === regiao) &&
      (!bairro || q.bairro === bairro)
    );
  
    resultadoDiv.innerHTML = '';
  
    if (resultados.length === 0) {
      resultadoDiv.textContent = 'Nenhuma quadra encontrada.';
      return;
    }
  
    resultados.forEach(q => {
        const div = document.createElement("div");
        div.classList.add("result-card");
        const nomeEncoded = encodeURIComponent(q.local); // Codifica o nome para URL
        const enderecoEncoded = encodeURIComponent(q.endereco); // para uso seguro na URL

        const perfilMaps = `https://www.google.com/maps/search/?api=1&query=${nomeEncoded}`;
        const rotaMaps = `https://www.google.com/maps/dir/?api=1&destination=${enderecoEncoded}`;

      div.innerHTML = `
        <strong><a href="${perfilMaps}" target="_blank">${q.local}</a></strong>
        Região: ${q.regiao}<br>
        Bairro: ${q.bairro}<br>
        Endereço: <a href="https://www.google.com/maps/dir/?api=1&destination=${enderecoEncoded}" target="_blank">${q.endereco}</a></p>
        Contato: ${q.contato}
      `;
      resultadoDiv.appendChild(div);
    });
    
    saldo -= 1;
    localStorage.setItem("moedas", saldo);
    atualizarSaldoMoedas();

  }
  
  // Eventos
  document.getElementById('regiao').addEventListener('change', atualizarBairros);
  document.getElementById('buscar').addEventListener('click', buscarQuadras);

// Alternar entre modo claro e escuro
document.getElementById('toggle-dark').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
