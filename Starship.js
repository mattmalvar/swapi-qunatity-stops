class Starship{

  constructor(starship) {
    this.name = starship.name;
    this.consumables = starship.consumables;
	this.mglt = starship.MGLT;
  }
  
  getName(){
	  return this.name;
  }
  getParadas(distancia){
	  let mglt = this.mglt;
	  let consumo = this._convertConsumable();
	  if(!mglt || mglt === "unknown" || !consumo){
		  return null;
	  }
	  let horas = distancia / mglt;
	  let paradas = horas / consumo;
	  
	  return Math.trunc(paradas);
  }
  _convertConsumable(){
	  let consum = this.consumables;
	  let horas = null;
	  let tempo;
	  let periodo;
	     if (!consum || consum === "unknown") {
            return null;
        }
        [tempo,periodo] = consum.split(" ");
        tempo = Number(tempo);
        
		switch (periodo) {
			  case 'years':
			  case 'year':
				horas = 365 * 24 * tempo;
				break;
			  case 'months':
			  case 'month':
				horas = 30 * 24 * tempo;
			  break;
			  case 'weeks':
			  case 'week':
				horas = 7 * 24 * tempo;
				break;
			  case 'days':
			  case 'day':
				horas = 24 * tempo;
				break;
			  case 'hours':
			  case 'hour':
				horas =  tempo;
				break;
			  default:
				console.error("Não foi possivel converter o período da nave");
				break;
		}

	return horas;
    }
  
}