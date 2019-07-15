class RequestService{
  constructor() {
	   this.getRequest("https://swapi.co/api/starships/",(retorno)=>{
		 this.data = retorno.results;
	 });
  }
  get getStarships(){
	  return this.data;
  }
  getRequest(theUrl, callback){
	let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
		if(xmlHttp.readyState == 4){
			if ( xmlHttp.status == 200)
				callback(JSON.parse(xmlHttp.responseText));
			else{
				console.error(xmlHttp)
			}
		}
    }
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
  }
  
  
  
}