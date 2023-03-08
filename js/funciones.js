
function leer(){
  
	fetch("https://randomuser.me/api/")
	.then((res) => (res).json())
	.then(function(data) {
			
    const img_url = data.results[0].picture.large;
    const documento = data.results[0].cell;
    const edad = data.results[0].dob.age;
    const fec_nac = data.results[0].dob.date;
  
    const fec_nac_original = new Date(fec_nac);
    const fec_nac_nueva= fec_nac_original.toLocaleString("es-ES" ,
	  {day: "2-digit", month: "long", year: "numeric"});

    const nombre0 = data.results[0].name.title;
    const nombre1 = data.results[0].name.first;
    const apellido = data.results[0].name.last;
    const sexo = data.results[0].gender;
    const mail = data.results[0].email;
    const celular = data.results[0].phone;
    const telefono = data.results[0].cell;
    const altura = data.results[0].location.street.number;
    const calle = data.results[0].location.street.name;
    const ciudad = data.results[0].location.city;
    const estado = data.results[0].location.state;
    const pais = data.results[0].location.country;
    const codPostal = data.results[0].location.postcode;
    const nacionalidad = data.results[0].nat;
 
    document.getElementById("img-atr").setAttribute("src", img_url);
  
    document.getElementById("titulo_nombre").textContent = nombre0+". "+apellido+", "+nombre1;
    document.getElementById("domicilio").textContent = calle+" "+altura+" "+ciudad+" ("+codPostal+")"+" "+estado+" "+pais;
    document.getElementById("telefono").textContent = "Tel: "+telefono+" / "+"Cel: "+celular;

    document.getElementById("mail_href").textContent = mail;
    document.getElementById("mail_href").setAttribute("href", "mailto:"+mail+"?subject=Curriculum%20Vitae");
    
    document.getElementById("fec_nac").textContent = fec_nac_nueva+" ("+edad+" años)";  
    document.getElementById("nacionalidad").textContent = nacionalidad;
    document.getElementById("sexo").textContent = sexo;
    document.getElementById("dni").textContent = documento;
    
    
	});
}

leer();


function progreso(){

  function getRandomInt(max) {
    return Math.floor(Math.random() * max + 50);
  }

  const random1 = (getRandomInt(50));
  const random1width = "width: "+random1+"%";

  const random2 = (getRandomInt(50));
  const random2width = "width: "+random2+"%";

  const random3 = (getRandomInt(50));
  const random3width = "width: "+random3+"%";

  const random4 = (getRandomInt(50));
  const random4width = "width: "+random4+"%";

  const random5 = (getRandomInt(50));
  const random5width = "width: "+random5+"%";
  
  
  document.getElementById("progress-bar-1").setAttribute("style", random1width);
  document.getElementById("progress-bar-text-1").textContent = "HTML "+random1+"%";

  document.getElementById("progress-bar-2").setAttribute("style", random2width);
  document.getElementById("progress-bar-text-2").textContent = "CSS "+random2+"%";

  document.getElementById("progress-bar-3").setAttribute("style", random3width);
  document.getElementById("progress-bar-text-3").textContent = "JS "+random3+"%";

  document.getElementById("progress-bar-4").setAttribute("style", random4width);
  document.getElementById("progress-bar-text-4").textContent = "GitHub "+random4+"%";

  document.getElementById("progress-bar-5").setAttribute("style", random5width);
  document.getElementById("progress-bar-text-5").textContent = "Inglés "+random5+"%";
  
}

progreso();
