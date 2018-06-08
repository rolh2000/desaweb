//Este programa escribe en el log de la consola, el signo correspondiente al mes y dia indicados
//
//Inicializacion de variables
var mes = "",
    dia = 0,
    continuar = 1;

//Valores para hacer una prueba
mes = "noviembre";
dia = 9;
//
var meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
//
mes = mes.toLowerCase();
//Validar que el mes ingresado exista en el array
encontro = meses.includes(mes);
if (encontro == false){ 
   console.log("El mes ingresado no es válido");
   continuar = 0; 
}
//
if((dia < 1) || (dia>31)){
  console.log("El dia ingresado no es válido");
  continuar = 0;
}
//
if (continuar == 1 ) {
//
  if ((mes == "marzo" && dia>=21) || (mes =="abril" && dia<=20))
     console.log("Tu signo es Aries");
//
  else if ((mes =="abril" && dia>=21) || (mes =="mayo" && dia<=20))
     console.log("Tu signo es Tauro");  
//
  else if ((mes =="mayo" && dia>=21) || (mes =="junio" && dia<=20))
     console.log("Tu signo es Geminis");
//
  else if ((mes =="junio" && dia>=21) || (mes =="julio" && dia<=20))
     console.log("Tu signo es Cancer");
//
  else if ((mes =="julio" && dia>=21) || (mes =="agosto" && dia<=20))
     console.log("Tu signo es Leo");
//
  else if ((mes =="agosto" && dia>=21) || (mes =="septiembre" && dia<=20))
     console.log("Tu signo es Virgo");
//
  else if ((mes =="septiembre" && dia>=21) || (mes =="octubre" && dia<=20))
     console.log("Tu signo es Libra"); 
//
  else if ((mes =="octubre" && dia>=21) || (mes =="noviembre" && dia<=20))
     console.log("Tu signo es Escorpion");
//
  else if ((mes =="noviembre" && dia>=21) || (mes =="diciembre" && dia<=20))
     console.log("Tu signo es Sagitario");
//
  else if ((mes =="diciembre" && dia>=21) || (mes =="enero" && dia<=20))
     console.log("Tu signo es Capricornio");
//
  else if ((mes =="enero" && dia>=21) || (mes =="febrero" && dia<=20))
     console.log("Tu signo es Acuario");
//
  else if ((mes =="febrero" && dia>=21) || (mes =="marzo" && dia<=20))
     console.log("Tu signo es Piscis");
}
