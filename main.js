const menu = {
  _opcoes: {
    entradas: [],
    principais: [],
    sobremesas: [],
  },
  // Getters e Setters
  get entradas() {
    return this._opcoes.entradas;
  },
  get principais() {
    return this._opcoes.principais;
  },
  get sobremesas() {
    return this._opcoes.sobremesas;
  },
  set entradas(entrada) {
    this._opcoes.entradas = entrada;
  },
  set principais(principal) {
    this._opcoes.principais = principal;
  },
  set entradas(sobremesa) {
    this._opcoes.sobremesas = sobremesa;
  },
  get opcoes() {
    return {
      entradas: this.entradas,
      principais: this.principais,
      sobremesas: this.sobremesas,
    };
  },
  // Adiciona pratos
  addPratoOpcao(opcaoNome, pratoNome, pratoPreco) {
    const prato = {
      nome: pratoNome,
      preco: pratoPreco,
    };

    return this._opcoes[opcaoNome].push(prato);
  },
  // Retorna prato aleatório
  getPratoAleatorio(opcaoNome) {
    const pratos = this._opcoes[opcaoNome];
    const randomIndex = Math.floor(Math.random() * pratos.length);

    return pratos[randomIndex];
  },
  // Gera refeição aleatório
  gerarRefeicao() {
    const entrada = this.getPratoAleatorio('entradas');
    const principal = this.getPratoAleatorio('principais');
    const sobremesa = this.getPratoAleatorio('sobremesas');
    const valorTotal = entrada.preco + principal.preco + sobremesa.preco;

    return `Sua refeição é ${entrada.nome}, ${principal.nome}, ${sobremesa.nome}, e o valor total é de ${valorTotal}`;
  },
  // Adiciona opções
};
// Entradas
menu.addPratoOpcao('entradas', 'salada', 4);
menu.addPratoOpcao('entradas', 'asinhas', 6);
menu.addPratoOpcao('entradas', 'batata-frita', 5);
// Principais
menu.addPratoOpcao('principais', 'ala-minuta', 18);
menu.addPratoOpcao('principais', 'feijoada', 22);
menu.addPratoOpcao('principais', 'macarronada', 20);
// Sobremesas
menu.addPratoOpcao('sobremesas', 'sorvete', 3);
menu.addPratoOpcao('sobremesas', 'torta', 5);
menu.addPratoOpcao('sobremesas', 'petit gateau', 8);

// Gera refeição
const refeicao = menu.gerarRefeicao();
console.log(refeicao);
