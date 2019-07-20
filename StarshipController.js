class StarshipController{

  constructor() {
		this.setUpController();
	  
  }
  setUpController(url){
	  this.requestService = new RequestService(url);
	  this.distancia = 0;
	  this.previous = this.requestService.previousPage;
	  this.next = this.requestService.nextPage;
	  this.setUpPagination.bind(this)();
	  this.listStarship = this.requestService.getStarships.map(starship=>{
		  return new Starship(starship)
		  })
  }
  setUpPagination(){
	  let botaoNext = document.getElementById("next");
	  let botaoPrevious = document.getElementById("back");
	  if(!this.previous){
		  botaoPrevious.classList.add("hide");
	  }else{
		  botaoPrevious.classList.remove("hide");
	  }
	  if(!this.next){
		  botaoNext.classList.add("hide");
	  }else{
		  botaoNext.classList.remove("hide");
	  }
  }
  calcularDistancia(){
	  let tabela = document.getElementById("tableDados");
	  this.distancia = document.getElementById("distancia");
	  let mensagem = document.getElementById("mensagem");
	  tabela.innerHTML = "";
	  if(distancia.value && distancia.value > 0){
		  mensagem.innerHTML = "";
		  this.listStarship.forEach((starship)=>{
			  this.adicionarLinha(starship,tabela);
			  console.log(starship.getName(),starship.getParadas(distancia.value));
		  })
	  }else{
		  mensagem.innerHTML = "Distância não está no padrão. (Maior que 0)";
	  }
  }
  nextPage(){
	  this.requestService = new RequestService();
	  this.setUpController(this.next);
	  this.distancia = document.getElementById("distancia").value;
	  this.calcularDistancia.bind(this)();
  }
  previousPage(){
	  this.requestService = new RequestService();
	  this.setUpController(this.previous);
	  this.distancia = document.getElementById("distancia").value;
	  this.calcularDistancia.bind(this)();
  }
  
  assinarEvento(){
		let botao = document.getElementById("calcular");
		let botaoNext = document.getElementById("next");
		let botaoPrevious = document.getElementById("back");
		botao.onclick = this.calcularDistancia.bind(this);
		botaoNext.onclick = this.nextPage.bind(this);
		botaoPrevious.onclick = this.previousPage.bind(this);
		
  }
  adicionarLinha(starship,tabela){
	let linha = tabela.insertRow(tabela.rows.length);
    let colName = linha.insertCell(0);
    let celParada = linha.insertCell(1);
    colName.innerHTML = starship.getName();
    celParada.innerHTML = starship.getParadas(distancia.value);
  }
  init(){
	  this.assinarEvento();
  }

}

window.onload = function(){
const controller = new StarshipController();

	controller.init();
}

