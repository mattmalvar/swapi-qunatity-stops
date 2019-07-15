class StarshipController{

  constructor() {
	  this.requestService = new RequestService();
	  this.listStarship = this.requestService.getStarships.map(starship=>{
		  return new Starship(starship)
		  })
	  
  }
  calcularDistancia(){
	  let tabela = document.getElementById("tableDados");
	  let distancia = document.getElementById("distancia");
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
  assinarEvento(){
		let botao = document.getElementById("calcular");
		botao.onclick = this.calcularDistancia.bind(this);

		
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

