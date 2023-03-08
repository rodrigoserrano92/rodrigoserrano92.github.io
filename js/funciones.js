
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
    document.getElementById("mail").textContent = mail;
    document.getElementById("fec_nac").textContent = fec_nac_nueva+" ("+edad+" años)";  
    document.getElementById("nacionalidad").textContent = nacionalidad;
    document.getElementById("sexo").textContent = sexo;
    document.getElementById("dni").textContent = documento;
    
    
	});
}

leer();


/*
document.getElementById("datos_pers").addEventListener("click", function(){

  document.getElementById("datos_pers").setAttribute("class", "li-active");
  document.getElementById("exp_lab").setAttribute("class", "");
  document.getElementById("habil").setAttribute("class", "");

});

document.getElementById("exp_lab").addEventListener("click", function(){

  document.getElementById("datos_pers").setAttribute("class", "");
  document.getElementById("exp_lab").setAttribute("class", "li-active");
  document.getElementById("habil").setAttribute("class", "");

});

document.getElementById("habil").addEventListener("click", function(){

  document.getElementById("datos_pers").setAttribute("class", "");
  document.getElementById("exp_lab").setAttribute("class", "");
  document.getElementById("habil").setAttribute("class", "li-active");

});
*/