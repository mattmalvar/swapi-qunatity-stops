class RequestService{
    constructor(url = "https://swapi.co/api/starships/") {
	   this.getRequest(url,(retorno)=>{
		 this.data = retorno.results;
		 this.previous = retorno.previous;
		 this.next = retorno.next;
	 });
  }
  get getStarships(){
	  return this.data;
  }
  get nextPage(){
	  return this.next;
  }
  get previousPage(){
	  return this.previous;
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