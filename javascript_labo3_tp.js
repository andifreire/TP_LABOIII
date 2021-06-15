	"use strict"
				

				var seccion_moda = document.getElementById("seccion_moda");
				var seccion_arquitectura = document.getElementById("seccion_arquitectura");
				var seccion_arte = document.getElementById("seccion_artesvisuales");
				var seccion_musica = document.getElementById("seccion_musica");
			

			
			
				//declaro variables que representan al div que contiene las 5 preguntas

				var artep1 = document.getElementById("arte_p1");
				var artep2 = document.getElementById("arte_p2");
				var artep3 = document.getElementById("arte_p3");
				var artep4 = document.getElementById("arte_p4");
				var artep5 = document.getElementById("arte_p5");

				var arqp1 = document.getElementById("arquitectura_p1");
				var arqp2 = document.getElementById("arquitectura_p2");
				var arqp3 = document.getElementById("arquitectura_p3");
			    var arqp4 = document.getElementById("arquitectura_p4");
			    var arqp5 = document.getElementById("arquitectura_p5");

			    var modap1 = document.getElementById("moda_p1");
				var modap2 = document.getElementById("moda_p2");
				var modap3 = document.getElementById("moda_p3");
			    var modap4 = document.getElementById("moda_p4");
			    var modap5 = document.getElementById("moda_p5");

				var musicap1 = document.getElementById("musica_p1");
				var musicap2 = document.getElementById("musica_p2");
				var musicap3 = document.getElementById("musica_p3");
			    var musicap4 = document.getElementById("musica_p4");
			    var musicap5 = document.getElementById("musica_p5");
			

			    // paso a declarar las variables que contienen el li que contiene al elemento del boton de cada pregunta

			    var boton_arte_p1 = document.getElementById("arte_preg1");
				var boton_arte_p2 = document.getElementById("arte_preg2");
				var boton_arte_p3 = document.getElementById("arte_preg3");
				var boton_arte_p4 = document.getElementById("arte_preg4");
				var boton_arte_p5 = document.getElementById("arte_preg5");

				var boton_arq_p1 = document.getElementById("arquitectura_preg1");
				var boton_arq_p2 = document.getElementById("arquitectura_preg2");
				var boton_arq_p3 = document.getElementById("arquitectura_preg3");
			    var boton_arq_p4 = document.getElementById("arquitectura_preg4");
			    var boton_arq_p5 = document.getElementById("arquitectura_preg5");

			    var boton_moda_p1 = document.getElementById("moda_preg1");
				var boton_moda_p2 = document.getElementById("moda_preg2");
				var boton_moda_p3 = document.getElementById("moda_preg3");
			    var boton_moda_p4 = document.getElementById("moda_preg4");
			    var boton_moda_p5 = document.getElementById("moda_preg5");

				var boton_musica_p1 = document.getElementById("musica_preg1");
				var boton_musica_p2 = document.getElementById("musica_preg2");
				var boton_musica_p3 = document.getElementById("musica_preg3");
			    var boton_musica_p4 = document.getElementById("musica_preg4");
			    var boton_musica_p5 = document.getElementById("musica_preg5");

			    //inicializo a continuacion, las variables que contienen el "submit" de cada pregunta

				var botonenviar_arte_p1 = document.getElementById("arte_submitp1");
				var botonenviar_arte_p2 = document.getElementById("arte_submitp2");
				var botonenviar_arte_p3 = document.getElementById("arte_submitp3");
				var botonenviar_arte_p4 = document.getElementById("arte_submitp4");
				var botonenviar_arte_p5 = document.getElementById("arte_submitp5");

				var botonenviar_arch_p1 = document.getElementById("arte_submitp1");
				var botonenviar_arch_p2 = document.getElementById("arte_submitp2");
				var botonenviar_arch_p3 = document.getElementById("arte_submitp3");
				var botonenviar_arch_p4 = document.getElementById("arte_submitp4");
				var botonenviar_arch_p5 = document.getElementById("arte_submitp5");

				var botonenviar_musica_p1 = document.getElementById("musica_submitp1");
				var botonenviar_musica_p2 = document.getElementById("musica_submitp2");
				var botonenviar_musica_p3 = document.getElementById("musica_submitp3");
				var botonenviar_musica_p4 = document.getElementById("musica_submitp4");
				var botonenviar_musica_p5 = document.getElementById("musica_submitp5");

				var botonenviar_moda_p1 = document.getElementById("moda_submitp1");
				var botonenviar_moda_p2 = document.getElementById("moda_submitp2");
				var botonenviar_moda_p3 = document.getElementById("moda_submitp3");
				var botonenviar_moda_p4 = document.getElementById("moda_submitp4");
				var botonenviar_moda_p5 = document.getElementById("moda_submitp5");
				
				//inicializo las variables del menu principal
				var menu_musica = document.getElementById ("menu_musica");
				var menu_arquitectura = document.getElementById ("menu_arquitectura");
				var menu_moda = document.getElementById ("menu_moda");
				var menu_arte = document.getElementById ("menu_artesvisuales");
				//declaro las funciones "globales"

				function incializar_prog(){
				seccion_arquitectura.style.display= "none";
				seccion_musica.style.display= "none";
				seccion_moda.style.display= "none";
				seccion_arte.style.display= "block";
			    }

				function inicializar_arte(){
						//muestro la seccion de arte y borro el resto
						seccion_arte.style.display="block";
						seccion_musica.style.display="none";
						seccion_moda.style.display="none";
						seccion_arquitectura.style.display="none";
						//escondo el menu
						var menu_categorias = document.getElementById("menu");
						menu_categorias.style.display= "none";

						//Escondo las preguntas
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display = "none";
				}	
				function inicializar_musica(){
						seccion_arte.style.display="none";
						seccion_musica.style.display="block";
						seccion_moda.style.display="none";
						seccion_arquitectura.style.display="none";
						musicap1.style.display = "block";
						musicap2.style.display = "none";
						musicap3.style.display = "none";
						musicap4.style.display = "none";
						musicap5.style.display = "none";
				}	
				function inicializar_arquitectura(){
						seccion_arte.style.display="none";
						seccion_musica.style.display="none";
						seccion_moda.style.display="none";
						seccion_arquitectura.style.display="block";
						arqp1.style.display = "block";
						arqp2.style.display = "none";
						arqp3.style.display = "none";
						arqp4.style.display = "none";
						arqp5.style.display = "none";
				}	
				function inicializar_moda(){
						seccion_arte.style.display="none";
						seccion_musica.style.display="none";
						seccion_moda.style.display="block";
						seccion_arquitectura.style.display="none";
						modap1.style.display = "block";
						modap2.style.display = "none";
						modap3.style.display = "none";
						modap4.style.display = "none";
						modap5.style.display = "none";
				}	
				var puntajetotal = 0;
				function puntaje_arte(puntaje, n_pregunta){
						var caja_puntajetotal = document.getElementById("puntaje_total");
						var num = parseInt(n_pregunta);
						
						 console.log("variable puntaje: " + puntaje);
						if (n_pregunta =! 0) {puntajetotal = puntajetotal+ puntaje ;};
						console.log("variable puntajetotal: " + puntajetotal);
						var puntos_restantes = 100 - (parseInt(puntajetotal))

					caja_puntajetotal.innerHTML = ("SU PUNTAJE EN LA PREGUNTA NUMERO " + num + " ES= " + puntajetotal + ". PARA GANAR LA RONDA DE ARTE NECESITA " + puntos_restantes + " PUNTOS MÁS" );
				
					if (puntajetotal > 99){	
						caja_puntajetotal.innerHTML="FELICITACIONES, HA GANADO LA RONDA DE ARTE";
					}
					


				}
		

				//validacion del formulario
				document.getElementById("nombreformu").onclick= function()
				{	
					
					var advertencia = document.getElementById("advertencia"); //caja de advertencia de formulario
					var nombre_jugador = document.getElementById("datos_jugador"); // h1 que contiene los datos del jugador
					var mensaje_bienvenida = document.getElementById("msj_bienvenida");
					var nombre = document.getElementById("nombre");
					var apellido = document.getElementById("ape");
					var formu = document.getElementById("formulario_id");
					var opcion_hombre=document.getElementById("hombre");
					var opcion_mujer =document.getElementById("mujer");
					if ( nombre.value.length < 3 ) // 
					{ 
						nombre.style.background="red";
						advertencia.innerHTML= ("Debe ingresar un nombre valido");
						return false;
					}	
					 if ( nombre.value.length >= 3 ) // 
					{  
						nombre.style.background="green";
						advertencia.style.display= "none";
					}	
				

					// se le da la bienvenida al jugador, y se le da dos opciones, jugar o ver las instrucciones
					if (opcion_mujer.value = 1)
					nombre_jugador.innerHTML= ("HOLA "+ nombre.value.toUpperCase()+", BIENVENIDA.") ;

					if (opcion_hombre.value = 1)
					nombre_jugador.innerHTML= ("HOLA "+ nombre.value.toUpperCase()+", BIENVENIDO.") ;

					msj_bienvenida.innerHTML= ("DESEA COMENZAR A JUGAR?");
					

					var opcion_comenzarjuego = document.getElementById("opcion1_bienvenida");
					var opcion_instrucciones = document.getElementById("opcion2_bienvenida");
					var instrucciones = document.getElementById("contenedorinstrucciones");
					//despliego en pantalla las dos opciones
					opcion_comenzarjuego.style.display= "inline";
					opcion_instrucciones.style.display= "inline";
					formu.style.display="none";
					var menu_categorias = document.getElementById("menu");
					opcion_instrucciones.onclick= function (){
						instrucciones.style.display= "block";
						menu_categorias.style.display= "none";

					}

					opcion_comenzarjuego.onclick= function (){
							menu_categorias.style.display= "block";
							instrucciones.style.display= "none";
							nombre_jugador.style.display="none";
							mensaje_bienvenida.style.display="none";
							opcion_instrucciones.style.display="none";
							opcion_comenzarjuego.style.display="none";
					}

				}

				//creo una funcion de inicializacion que se ejecuta cada vez que el boton de menu de arte es presionado
				


				function reloj() {
					  var today = new Date();
					  var h = today.getHours();
					  var m = today.getMinutes();
					  var s = today.getSeconds();
					  // add a zero in front of numbers<10
					  
						
					  t = setTimeout(function(){ reloj() }, 500);
				}
					
				menu_arte.onclick= function (){

					inicializar_arte();
					puntaje_arte(0, 0);

					boton_arte_p1.onclick= function()
					{	
						artep1.style.display = "block";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display = "none";
					}	
					boton_arte_p2.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "block";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display= "none";
					}
				
					boton_arte_p3.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "block";
						artep4.style.display = "none";
						artep5.style.display = "none";
					}

					boton_arte_p4.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "block";
						artep5.style.display = "none";
					}

					boton_arte_p5.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display = "block";
					}
					//muestro solo el primer boton de la pregunta, una vez que lo aprieto, comienza la pregunta
					boton_arte_p1.style.display="block";
					boton_arte_p2.style.display="none";
					boton_arte_p3.style.display="none";
					boton_arte_p4.style.display="none";
					boton_arte_p5.style.display="none";

					var arte_puntaje = 0;
					
							//PREGUNTA 1
							//si el usuario elige la respuesta correcta el icono se muestra verde
							//declaro una variable por cada respuesta, dependiendo la que elija el usuario
							var respuesta1_romanticismo=document.getElementById("r1_romanticismo");
							var respuesta1_surrealismo=document.getElementById("r1_surrealismo");
							var respuesta1_neoexpresionismo=document.getElementById("r1_neoexpresionismo");
							var respuesta1_minimalismo=document.getElementById("r1_minimalismo");
							var respuesta1_rococo=document.getElementById("r1_rococo");	
							//escondo el boton de submit
							botonenviar_arte_p1.style.display="none";
							//apenas elijo una respuesta, escondo la pregunta y muestro si estaba bien o no
							respuesta1_neoexpresionismo.onclick = function (){
										//inicializo la variable que contiene el puntaje de
								
														var valor_respuesta1a =  35;

										//si eligen esta opcion, se esconden los demas inputs y se pone en verde el casillero de la pregunta, luego se pasa a llamar a la funcion set timeout para mostrar la proxima pregunta
														boton_arte_p1.style.background="green";
														
														respuesta1_neoexpresionismo.style.display="none";
														respuesta1_surrealismo.style.display="none";
														respuesta1_minimalismo.style.display="none";
														respuesta1_rococo.style.display="none";
														respuesta1_romanticismo.style.display="none";
														puntaje_arte(valor_respuesta1a, 1);
														setTimeout(function(){ artep2.style.display="block"; 
																			artep1.style.display="none";
																			boton_arte_p1.style.display="none";
																		    boton_arte_p2.style.display="block"; 
																													} , 3500);

								};
							respuesta1_surrealismo.onclick = function (){

										

										
														var valor_respuesta1b =  5;
														boton_arte_p1.style.background="red";
														
														respuesta1_neoexpresionismo.style.display="none";
														respuesta1_surrealismo.style.display="none";
														respuesta1_minimalismo.style.display="none";
														respuesta1_rococo.style.display="none";
														respuesta1_romanticismo.style.display="none";
														 puntaje_arte(valor_respuesta1b, 1);
														setTimeout(function(){ artep2.style.display="block"; 
																			   artep1.style.display="none";
																		   	 boton_arte_p1.style.display="none";
																		    arte_puntaje = arte_puntaje + 10;
																		   	} , 3500);
								};
							respuesta1_romanticismo.onclick = function (){

											
														var valor_respuesta1c =  0;
														boton_arte_p1.style.background="red";
														respuesta1_neoexpresionismo.style.display="none";
														respuesta1_surrealismo.style.display="none";
														respuesta1_minimalismo.style.display="none";
														respuesta1_rococo.style.display="none";
														respuesta1_romanticismo.style.display="none";
														puntaje_arte(valor_respuesta1c, 1);

														setTimeout(function(){ artep2.style.display="block"; 
															artep1.style.display="none";
															 boton_arte_p1.style.display="none";
														    boton_arte_p2.style.display="block";
															arte_puntaje = arte_puntaje + 0;
															 } , 3500);
								};
							respuesta1_minimalismo.onclick = function (){

												

															var valor_respuesta1d =  0;
															boton_arte_p1.style.background="red";
															respuesta1_neoexpresionismo.style.display="none";
															respuesta1_surrealismo.style.display="none";
															respuesta1_minimalismo.style.display="none";
															respuesta1_rococo.style.display="none";
															respuesta1_romanticismo.style.display="none";
															puntaje_arte(valor_respuesta1d, 1);

															setTimeout(function(){ artep2.style.display="block"; 
															artep1.style.display="none";
															 boton_arte_p1.style.display="none";
														    boton_arte_p2.style.display="block";
														    arte_puntaje = arte_puntaje + 0;
													
															} , 3500);
								};
							respuesta1_rococo.onclick = function (){

												
															var valor_respuesta1e =  0;
															boton_arte_p1.style.background="red";
															respuesta1_neoexpresionismo.style.display="none";
															respuesta1_surrealismo.style.display="none";
															respuesta1_minimalismo.style.display="none";
															respuesta1_rococo.style.display="none";
															respuesta1_romanticismo.style.display="none";
															puntaje_arte(valor_respuesta1e, 1);
															setTimeout(function(){ artep2.style.display="block"; 
															artep1.style.display="none";
															boton_arte_p1.style.display="none";
														    boton_arte_p2.style.display="block";
														    arte_puntaje = arte_puntaje + 0;
															} , 3500);
														  
								};
								
						
					botonenviar_arte_p1.onclick= function()
					{	
						//ocurre cuando se presiona el submit que escondi previamente (por las dudas lo dejo)
					}	
							

							//PREGUNTA 2
							//declaro variables de la respuesta
							var respuesta2_dali= document.getElementById("r2_dali");
							var respuesta2_miro= document.getElementById("r2_miro");
							var respuesta2_piero= document.getElementById("r2_pierodella");
							var respuesta2_manet= document.getElementById("r2_manet");
							var respuesta2_cezanne= document.getElementById("r2_cezanne");
							var respuesta2_braque= document.getElementById("r2_braque");
							var respuesta2_jmbasquiat= document.getElementById("r2_jmbasquiat");
							var respuesta2_berni= document.getElementById("r2_berni");
							var respuesta2_vangogh= document.getElementById("r2_vangogh");
							//declaro la variable que voy a usar para medir el resultado
							//declaro los flag, que me permiten por cada respuesta verificar que se le cuente al usuario una sola vez el voto
							var arte_respuesta2 = 0;
							var flag_2dali= 0;
							var flag_2miro= 0;
							var flag_2piero= 0;
							var flag_2manet= 0;
							var flag_2cezanne= 0;
							var flag_2braque= 0;
							var flag_2basquiat= 0;
							var flag_2berni= 0;
							var flag_2vangogh= 0;

							// algoritmo que define la cantidad de puntos que obtiene el usuario de la pregunta 3, va a obtener un numero, almacenado en la variable arte_respuesta2, que representara cuan bien le fue de un rango al -4 añ 4
							respuesta2_dali.onclick=function()
							{	
								
								if (flag_2dali%2==0) {arte_respuesta2--;}
								else {arte_respuesta2++;}
								flag_2dali++;
								
								console.log(flag_2dali);
								console.log(arte_respuesta2);
							}
							respuesta2_miro.onclick=function()
							{
								if (flag_2miro%2==0) {arte_respuesta2--;}
								else  {arte_respuesta2++;}
								flag_2miro++;
								
								console.log(flag_2miro);
								console.log(arte_respuesta2);
							}
							respuesta2_piero.onclick=function()
							{
								if (flag_2piero%2==0) {arte_respuesta2++;}
								else {arte_respuesta2--;}
								flag_2piero++;
								
								
								console.log(flag_2piero);
								console.log(arte_respuesta2);
							}
							respuesta2_manet.onclick=function()
							{
								if (flag_2manet%2==0) {arte_respuesta2++;}
								else  {arte_respuesta2--;}
								flag_2manet++;
								
								
								console.log(flag_2manet);
								console.log(arte_respuesta2);
							}		
							respuesta2_cezanne.onclick=function()
							{
								if (flag_2cezanne%2==0) {arte_respuesta2++;}
								else  {arte_respuesta2--;}
								flag_2cezanne++; 
								
								
								console.log(flag_2cezanne);
								console.log(arte_respuesta2);
							}
							respuesta2_braque.onclick=function()
							{
								if (flag_2braque%2==0) {arte_respuesta2--;}
								else  {arte_respuesta2++;}
								flag_2braque++;
								
								
								console.log(flag_2braque);
								console.log(arte_respuesta2);
							}
							respuesta2_jmbasquiat.onclick=function()
							{
								if (flag_2basquiat%2==0) {arte_respuesta2--;}
								else  {arte_respuesta2++;}
								flag_2basquiat++;
								
								
								console.log(flag_2basquiat);
								console.log(arte_respuesta2);
							}
							respuesta2_berni.onclick=function()
							{
								if (flag_2berni%2==0) {arte_respuesta2--;}
								else {arte_respuesta2++;}
								flag_2berni++;
								
								
								console.log(flag_2berni);
								console.log(arte_respuesta2);
							}
							respuesta2_vangogh.onclick=function()
							{
								if (flag_2vangogh%2==0) {arte_respuesta2++;}
								else  {arte_respuesta2--;}
								
								
								console.log(flag_2vangogh);
								console.log(arte_respuesta2);
							}
							
				
					//sucede cuando se envia el formulario de la pregunta 2 de arte
					botonenviar_arte_p2.onclick= function()
					{
						
						var devolucion_ap2 = document.getElementById("devolucion_artep2");
						
						//el usuario envia la pregunta y se procesan los datos
						
						if (arte_respuesta2== 4) {
							boton_arte_p2.style.background="green";
							var valor_respuesta2a =  35;
							puntaje_arte(valor_respuesta2a,2);
							devolucion_ap2.innerHTML = "La respuesta está excelente"; 

						}
						if (arte_respuesta2== 3) {
							//pinto de verde el cartel de la pregunta
							boton_arte_p2.style.background="green";
							//inicializo la cantidad de puntos que tendra la respuesta
							var valor_respuesta2b =  25;
							puntaje_arte(valor_respuesta2b,2);
							devolucion_ap2.innerHTML = "La respuesta está muy bien";
						}
						if (arte_respuesta2==2) {
							var valor_respuesta2c =  15;
							boton_arte_p2.style.background="orange";
							arte_puntaje= arte_puntaje + 15;
							puntaje_arte(valor_respuesta2c,2);
							devolucion_ap2.innerHTML = "La respuesta está bien";
						}
						if (arte_respuesta2== 1) {
							boton_arte_p2.style.background="grey";
							var valor_respuesta2d =  10;
							puntaje_arte(valor_respuesta2d,2);
							devolucion_ap2.innerHTML = "Podria estar mejor";
						}
						if (arte_respuesta2<1) {
							var valor_respuesta2e =  0;
							puntaje_arte(valor_respuesta2e,2);
							boton_arte_p2.style.background="red";
							devolucion_ap2.innerHTML = "La respuesta está mal";
						}
						setTimeout(function(){ artep3.style.display="block"; 
											artep2.style.display="none";
											 boton_arte_p2.style.display="none";
										    boton_arte_p3.style.display="block";} , 3500);

					}


					//PREGUNTA 3
					var respuesta3_velazquez= document.getElementById("r3_dvelazquez");
					var respuesta3_frida= document.getElementById("r3_frida");
					var respuesta3_ribera= document.getElementById("r3_ribera");
					var respuesta3_elgreco= document.getElementById("r3_elgreco");
					var respuesta3_goya= document.getElementById("r3_goya");
					// escondo el submit
					botonenviar_arte_p3.style.display="none";
					//segun la respuesta elegida, el programa borra el resto de los input y da el resultado
							respuesta3_frida.onclick = function (){
										boton_arte_p3.style.background="red";
										respuesta3_frida.style.display="none";
										respuesta3_velazquez.style.display="none";
										respuesta3_ribera.style.display="none";
										respuesta3_elgreco.style.display="none";
										respuesta3_goya.style.display="none";
										var valor_respuesta3a =  0;
										puntaje_arte(valor_respuesta3a,2);
										setTimeout(function(){ artep4.style.display="block"; 
																artep3.style.display="none"; 
															 boton_arte_p3.style.display="none";
														    boton_arte_p4.style.display="block";} , 3000);			};
						
							respuesta3_velazquez.onclick = function (){
												boton_arte_p3.style.background="red";
												respuesta3_frida.style.display="none";
												respuesta3_velazquez.style.display="none";
												respuesta3_ribera.style.display="none";
												respuesta3_elgreco.style.display="none";
												respuesta3_goya.style.display="none";
												var valor_respuesta3b =  0;
													puntaje_arte(valor_respuesta3b,2);
												setTimeout(function(){ artep4.style.display="block"; 
																	 artep3.style.display="none"; 
																	 boton_arte_p3.style.display="none";
																     boton_arte_p4.style.display="block";} , 3000);		};
									
							respuesta3_ribera.onclick = function (){
														boton_arte_p3.style.background="red";
														respuesta3_frida.style.display="none";
														respuesta3_velazquez.style.display="none";
														respuesta3_ribera.style.display="none";
														respuesta3_elgreco.style.display="none";
														respuesta3_goya.style.display="none";
														var valor_respuesta3c =  0;
													puntaje_arte(valor_respuesta3c,2);
														setTimeout(function(){ artep4.style.display="block"; 
															artep3.style.display="none"; 
															 boton_arte_p3.style.display="none";
														    boton_arte_p4.style.display="block";} , 3000);			};
						
							respuesta3_elgreco.onclick = function (){
															boton_arte_p3.style.background="red";
															respuesta3_frida.style.display="none";
															respuesta3_velazquez.style.display="none";
															respuesta3_ribera.style.display="none";
															respuesta3_elgreco.style.display="none";
															respuesta3_goya.style.display="none";
															var valor_respuesta3d =  0;
													puntaje_arte(valor_respuesta3d,2);
															setTimeout(function(){ artep4.style.display="block"; 
																artep3.style.display="none"; 
															 boton_arte_p3.style.display="none";
														    boton_arte_p4.style.display="block";} , 3000);		};
							
							respuesta3_goya.onclick = function (){
															boton_arte_p3.style.background="green";
															respuesta3_frida.style.display="none";
															respuesta3_velazquez.style.display="none";
															respuesta3_ribera.style.display="none";
															respuesta3_elgreco.style.display="none";
															respuesta3_goya.style.display="none";
															var valor_respuesta3e =  30;
													puntaje_arte(valor_respuesta3e,2);
															setTimeout(function(){ artep4.style.display="block";
																artep3.style.display="none"; 
															 boton_arte_p3.style.display="none";
														    boton_arte_p4.style.display="block";} , 3500);		};
							

					botonenviar_arte_p3.onclick= function()
					{
						
					}
					//inicializo las variables de las imagenes
					var arte_p4_r1=document.getElementById("arte_preg4_img1");
					var arte_p4_r2=document.getElementById("arte_preg4_img2");
					var arte_p4_r3=document.getElementById("arte_preg4_img3");
					var arte_p4_r4=document.getElementById("arte_preg4_img4");
					var arte_p4_r5=document.getElementById("arte_preg4_img5");
					var arte_p4_r6=document.getElementById("arte_preg4_img6");
					var arte_p4_r7=document.getElementById("arte_preg4_img7");
					var arte_p4_r8=document.getElementById("arte_preg4_img8");
					//inicializo variables para medir aciertos y errores
					var arte_p4_aciertos= 0;
					var arte_p4_errores= 0;
					//iniciliazo la variable de devolucion de respuesta
					var devolucion_ap4 = document.getElementById("devolucion_artep4");
					//si el usuario toca la imagen numero 1, el programa pasa a esperar que toque otra imagen para evaluar la relacion
					arte_p4_r1.onclick=function(){
					
						arte_p4_r1.style.border= "2px solid violet";

						arte_p4_r2.onclick=function (){ 
														agregaracierto_p4();
														arte_p4_r1.style.display="none";
														arte_p4_r2.style.display="none";

														arte_p4_r3.onclick=function (){ 

																								};
														};

						arte_p4_r3.onclick=function (){ agregarerror_p4();};

						arte_p4_r4.onclick=function (){ agregarerror_p4(); };

						arte_p4_r5.onclick=function (){ agregarerror_p4(); };

						arte_p4_r6.onclick=function (){ agregarerror_p4(); };

						arte_p4_r7.onclick=function (){ agregarerror_p4(); };

						arte_p4_r8.onclick=function (){ agregarerror_p4(); };

					}	

					function agregaracierto_p4(){

						arte_p4_aciertos++;
						devolucion_ap4.innerHTML= ("USTED TIENE "+ arte_p4_aciertos + " ACIERTOS.");

					};

					function agregarerror_p4(){

						arte_p4_errores++;
						devolucion_ap4.innerHTML= ("USTED TIENE "+ arte_p4_errores + " ERRORES.");

					};
					
					

					
					

					botonenviar_arte_p4.onclick= function()
					{
						
						
				
						setTimeout(function(){ artep5.style.display="block"; 
												artep4.style.display="none";
												 boton_arte_p4.style.display="none";
											    boton_arte_p5.style.display="block";} , 2000);

					}
					botonenviar_arte_p5.onclick= function()
					{
							
						var respuesta_=document.getElementById("");
						var respuesta_=document.getElementById("");
						var respuesta_=document.getElementById("");
						var respuesta_=document.getElementById("");
						var respuesta_=document.getElementById("");
						
						if(respuesta_.value=1){
							boton_arte_p2.style.background="green";}
						
						//LO DE ARRIBA ESTA MAL 
						
					}

				}
			

				menu_musica.onclick= function ()
				{
					inicializar_musica();
					boton_musica_p1.onclick= function()
					{	
						musicap1.style.display = "block";
						musicap2.style.display = "none";
						musicap3.style.display = "none";
						musicap4.style.display = "none";
						musicap5.style.display = "none";
					}	
					boton_musica_p2.onclick= function()
					{
						musicap1.style.display = "none";
						musicap2.style.display = "block";
						musicap3.style.display = "none";
						musicap4.style.display = "none";
						musicap5.style.display = "none";

					}
				
					boton_musica_p3.onclick= function()
					{
						musicap1.style.display = "none";
						musicap2.style.display = "none";
						musicap3.style.display = "block";
						musicap4.style.display = "none";
						musicap5.style.display = "none";
					}

					boton_musica_p4.onclick= function()
					{
						musicap1.style.display = "none";
						musicap2.style.display = "none";
						musicap3.style.display = "none";
						musicap4.style.display = "block";
						musicap5.style.display = "none";
					}

					boton_musica_p5.onclick= function()
					{
						musicap1.style.display = "none";
						musicap2.style.display = "none";
						musicap3.style.display = "none";
						musicap4.style.display = "none";
						musicap5.style.display = "block";
					}

				}
				menu_arquitectura.onclick= function ()
				{

					inicializar_arquitectura();
					boton_arq_p1.onclick= function()
					{	
						arqp1.style.display = "block";
						arqp2.style.display = "none";
						arqp3.style.display = "none";
						arqp4.style.display = "none";
						arqp5.style.display = "none";
					}	
					boton_arq_p2.onclick= function()
					{
						arqp1.style.display = "none";
						arqp2.style.display = "block";
						arqp3.style.display = "none";
						arqp4.style.display = "none";
						arqp5.style.display = "none";

					}
				
					boton_arq_p3.onclick= function()
					{
						arqp1.style.display = "none";
						arqp2.style.display = "none";
						arqp3.style.display = "block";
						arqp4.style.display = "none";
						arqp5.style.display = "none";
					}

					boton_arq_p4.onclick= function()
					{
						arqp1.style.display = "none";
						arqp2.style.display = "none";
						arqp3.style.display = "none";
						arqp4.style.display = "block";
						arqp5.style.display = "none";
					}
					boton_arq_p5.onclick= function()
					{
						arqp1.style.display = "none";
						arqp2.style.display = "none";
						arqp3.style.display = "none";
						arqp4.style.display = "none";
						arqp5.style.display = "block";
					}

				}
				menu_moda.onclick= function (){

					inicializar_moda();
					boton_moda_p1.onclick= function()
					{	
						modap1.style.display = "block";
						modap2.style.display = "none";
						modap3.style.display = "none";
						modap4.style.display = "none";
						modap5.style.display = "none";
					}	
					boton_moda_p2.onclick= function()
					{	
						modap1.style.display = "none";
						modap2.style.display = "block";
						modap3.style.display = "none";
						modap4.style.display = "none";
						modap5.style.display = "none";
					}	
				
					boton_moda_p3.onclick= function()
					{	
						modap1.style.display = "none";
						modap2.style.display = "none";
						modap3.style.display = "block";
						modap4.style.display = "none";
						modap5.style.display = "none";
					}	
					boton_moda_p4.onclick= function()
					{	
						modap1.style.display = "none";
						modap2.style.display = "none";
						modap3.style.display = "none";
						modap4.style.display = "block";
						modap5.style.display = "none";
					}	
						boton_moda_p5.onclick= function()
					{	
						modap1.style.display = "none";
						modap2.style.display = "none";
						modap3.style.display = "none";
						modap4.style.display = "none";
						modap5.style.display = "block";
					}	
				}
			
