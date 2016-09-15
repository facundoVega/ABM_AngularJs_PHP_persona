var miAplicacion = angular.module("aplicacion", ['ui.router']);//en el corchete van los modulos a utilizzar en comillas simples.


 miAplicacion.config(function($stateProvider, $urlRouterProvider){//este config manejara la navegacion de mi sitio
 																	//tambien me permitira hacer gestionar la logica con distintos controladores funcionando entre si
	

 	$stateProvider
	.state('inicio',
		{
			url:'/inicio',
			templateUrl:'inicio.html',
			controller: 'controlInicio'
		})


	.state('persona',
		{
			url:'/persona',
			abstract:true,
			templateUrl:'abstractapersona.html',
			controller: 'controlPersona'
		})
	.state('persona.menu',
		{
			url:'/menu',
			views:{
				'contenido':{

					templateUrl:"personamenu.html",
					controller:"controlPersonaMenu"
				} 

			}
		})

	.state('persona.alta',
		{
			url:'/alta',
			views:{
				'contenido':{

					templateUrl:"personaAlta.html",
					controller:"controlAltaPersona"
				} 

			}
		})

	.state('persona.grilla',
	{
		url:'/grilla',
		views: {
			'contenido': {
				templateUrl:'formGrilla.html',
				controller: 'controlGrilla'

			}


		}



	})



	.state('juegos',
	{
		url:'/juegos',
		templateUrl: 'juegos.html',
		controller: 'controllerJuegos',
		abstract: true
	})

	.state('juegos.inicio',
	{
		url: '/inicioJ',
		views: {
			'contenido': {

				templateUrl: 'juegosInicio.html',
				controller: 'controllerJuegoInicio'
						}
				}
	})

	.state('juegos.juego1',
	{
		url:'/juego1',
		views: {
			'contenido': {
				templateUrl: 'juego1.html',
				controller: 'controlJuego1'
						}
				}
	})

	.state('juegos.juego2',
	{
		url:'/juego2',
		views: {
			'contenido': {
				templateUrl:'juego2.html',
				controller: 'controlJuego2'
						  }
				}
	})

	.state('juegos.juego3',
	{
		url: '/juego3',
		views: {
			'contenido': {
				templateUrl: 'juego3.html',
				controller: "controlJuego3"
							}
				}
	})

	
	


	.state('loginAndRegister',
	{
		url:'/loginAndRegister',
		templateUrl: 'abstractLoginRegister.html',
		controller: 'controlLoginRegister',
		abstract: true

	})

	.state('loginAndRegister.login',
	{
		url: '/login',
		views: {
			'contenido': {
				templateUrl:'formLogin.html',
				controller: 'controlLogin'
						}
				}
	})

	.state('loginAndRegister.register',
	{
		url:'/register',
		views: {
			'contenido': {
				templateUrl: 'register.html',
				controller: 'controlRegister'

						}
				}
	})


	$urlRouterProvider.otherwise('/inicio');//cuando arranca la pagina me direcciona al  state especificado.

 });

 miAplicacion.controller("controlInicio", function($scope ){







 });

 miAplicacion.controller("controllerJuegoInicio", function($scope){});

 miAplicacion.controller("controlGrilla", function($scope, $http){

 	$scope.DatoTest="**grilla**";
 	

  function bien(response)
  {
    console.info(response.data);
     $scope.ListadoDeDatos = response.data;
  }
  function mal(respuesta)
  {
    console.log(data);
     $scope.ListadoDeDatos = [];
    

  }


  //convierte el json de la direccion pasada en un objeto.
  $http.get("http://www.mocky.io/v2/57c8229c120000fc03e76999").then(bien, mal);



 });

 miAplicacion.controller("controlJuego2", function($scope){

 	$scope.valores = {};



$scope.valores.empates = 0;
$scope.valores.perdidas = 0;
$scope.valores.ganadas= 0;




$scope.comenzar = function()
{
	$scope.valores.juego =  Math.round(Math.random() * (3 - 1) + 1);
	document.getElementById("jugada").src="imagenes/interrogacion.jpg" ;
	alert("empieza");
}

$scope.piedra = function()
{
	$scope.valores.juego =  Math.round(Math.random() * (3 - 1) + 1);

	if($scope.valores.juego == 1)
	{

		$scope.valores.empates++;
		alert("La maquina eligio piedra Usted empato");

	}

	if($scope.valores.juego == 2)
	{

		
		alert("La maquina eligio papel Usted perdio");
		$scope.valores.perdidas++;
	}
	

	if($scope.valores.juego == 3)
	{

		$scope.valores.ganadas++;

		alert("La maquina eligio tijera Usted gano");
	}
	



}



$scope.papel = function()
{
	$scope.valores.juego =  Math.round(Math.random() * (3 - 1) + 1);
	if($scope.valores.juego == 1)
	{

		$scope.valores.ganadas++;
		alert("La maquina eligio : piedra Usted gano");
	}

	if($scope.valores.juego == 2)
	{

		$scope.valores.empates++;
		alert("La maquina eligio papel Usted empato");
	}
	

	if($scope.valores.juego == 3)
	{

		$scope.valores.perdidas++;
		alert("La maquina eligio tijera Usted perdio");
	}



}

$scope.tijera = function()
{
	$scope.valores.juego =  Math.round(Math.random() * (3 - 1) + 1);
	if($scope.valores.juego == 1)
	{

		$scope.valores.perdidas++;
		alert("La maquina eligio piedra Usted perdio");
	}

	if($scope.valores.juego == 2)
	{

		$scope.valores.ganadas++;
		alert("La maquina eligio papel Usted gano");
	}
	

	if($scope.valores.juego == 3)
	{

		$scope.valores.empates++;
		alert("La maquina eligio tijera Usted empato");
	}





}











 });

 miAplicacion.controller("controlJuego3", function($scope){

$scope.valores = {};





$scope.Comenzar = function()
{



	$scope.valores.num1 = Math.round(Math.random() * (10 - 1) + 1);
	
	var operador = Math.round(Math.random() * (4- 1) + 1);

	switch(operador)
	{
		case 1:
			$scope.valores.operador = '+';
			break

		case 2:
			 $scope.valores.operador = '-';
			break

		case 3:
			 $scope.valores.operador = 'x';
			break

		case 4:
			 $scope.valores.operador = '%';
			break


	}
	$scope.valores.num2 = Math.round(Math.random() * (10 - 1) + 1);



}

$scope.Responder = function()
{

	var resultado;

	switch($scope.valores.operador)
	{
		case '+':
			resultado = parseInt($scope.valores.num1) + parseInt($scope.valores.num2);
			break

		case '-':
			resultado = parseInt($scope.valores.num1) - parseInt($scope.valores.num2);
			break

		case 'x':
			resultado = parseInt($scope.valores.num1) * parseInt($scope.valores.num2);
			break

		case '%':
			resultado = parseInt($scope.valores.num1) / parseInt($scope.valores.num2);
			break
	} 

	if(resultado == parseInt($scope.valores.respuesta))
	{


		alert("su respuesta es correcta");
	}
	else
	{

		alert("su respuesta es incorrecta");

	}


}
 });
 miAplicacion.controller("controlJuego1", function($scope){


$scope.valores={};

	$scope.valores.intentos;
	$scope.valores.aleatorio; 






	$scope.comenzar=function()
	{
		$scope.valores.aleatorio = Math.floor(Math.random()*100);
		$scope.valores.numero = "";
		$scope.valores.intentos = 0;
		alert("Comienza");

	}

	$scope.verificar=function()
	{

		$scope.valores.intentos++;

		if(parseInt($scope.valores.numero) == $scope.valores.aleatorio)
		{


			alert("USTED ES UN GANADOR Y EN SOLO  " + $scope.valores.intentos + "intentos");
			

			switch($scope.valores.intentos)
			{
				case 1:
					alert("Usted es psiquico");
					break

				case 2:
					alert("Excelente percepcion");
					break

				case 3:
					alert("esto es suerte");
					break

				case 4:
					alert("Excelente tecnica");
					break
				case 5:
					alert("Usted esta en la media");
					break

			}
			if($scope.valores.intentos > 5 && $scope.valores.intentos <=10)
			{
				alert("falta tecnica");

			}
			if($scope.valores.intentos > 10 )
			{
				alert("afortunado en el amor");

			}
			$scope.valores.numero = "";
			$scope.valores.intentos = "";
			$scope.valores.aleatorio = Math.floor(Math.random()*10);

		}
		else
		{

			if(parseInt($scope.valores.numero) > $scope.valores.aleatorio)
			{


				alert("se paso ...");
			}

			if(parseInt($scope.valores.numero) < $scope.valores.aleatorio)
			{


				alert("falta para llegar al numero");
			}


		}

		
	}


 });

miAplicacion.controller("controlPersona", function($scope){
	

});

miAplicacion.controller("controlPersonaMenu", function($scope, $state){


	$scope.Alta = function()
	{
		$state.go("persona.alta");
		
	}
	$scope.Grilla = function()
	{
		$state.go("persona.grilla");
	}

});

miAplicacion.controller("controlAltaPersona", function($scope){

});

miAplicacion.controller("controllerJuegos", function($scope){});

miAplicacion.controller('controlLoginRegister', function($scope){});

miAplicacion.controller('controlLogin', function($scope){});

miAplicacion.controller('controlRegister', function($scope){});