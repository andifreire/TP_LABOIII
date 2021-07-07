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

			

			    // paso a declarar las variables que contienen el li que contiene al elemento del boton de cada pregunta

			    var boton_arte_p1 = document.getElementById("arte_preg1");
				var boton_arte_p2 = document.getElementById("arte_preg2");
				var boton_arte_p3 = document.getElementById("arte_preg3");
				var boton_arte_p4 = document.getElementById("arte_preg4");
				var boton_arte_p5 = document.getElementById("arte_preg5");

			    //inicializo a continuacion, las variables que contienen el "submit" de cada pregunta

				var botonenviar_arte_p1 = document.getElementById("arte_submitp1");
				var botonenviar_arte_p2 = document.getElementById("arte_submitp2");
				var botonenviar_arte_p3 = document.getElementById("arte_submitp3");
				var botonenviar_arte_p4 = document.getElementById("arte_submitp4");
				var botonenviar_arte_p5 = document.getElementById("arte_submitp5");

				

		
				//inicializo las variables del menu principal
				
				var menu_arte = document.getElementById ("menu_artesvisuales");
				var menu_moda = document.getElementById("menu_moda");
				var menu_arquitectura = document.getElementById("menu_arquitectura");
				var menu_musica = document.getElementById("menu_musica");
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
						
						//escondo el menu
						var menu_categorias = document.getElementById("menu");
						menu_categorias.style.display= "none";

						//Escondo las preguntas
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display = "none";

						boton_arte_p1.style.display="block";
						boton_arte_p2.style.display="none";
							boton_arte_p3.style.display="none";
							boton_arte_p4.style.display="none";
							boton_arte_p5.style.display="none";


				}	

				


				var puntajetotal = 0;

				function puntaje_arte(puntaje, n_pregunta){
						var caja_puntajetotal = document.getElementById("puntaje_total");
						
						var num = n_pregunta;
						 console.log("variable puntaje: " + puntaje);
						if (num =! 0) {puntajetotal = puntajetotal+ puntaje ;};
						console.log("variable puntajetotal: " + puntajetotal);
						console.log("variable num: " + num);

						var puntos_restantes = 100 - (parseInt(puntajetotal))

						if (num==5){caja_puntajetotal.innerHTML= ("FELICITACIONES " + nombre.value.toUpperCase()+ ", HA TERMINADO EL CUESTIONARIO CON " + puntaje_total + " PUNTOS. "); return true;}
					
							if (puntajetotal>99) {caja_puntajetotal.innerHTML= ("FELICITACIONES " + nombre.value.toUpperCase()+ ", GANÓ LA RONDA DE ARTE CON "+ puntajetotal + " PUNTOS. "); return true;}
							if (puntajetotal<99) {caja_puntajetotal.innerHTML = (nombre.value.toUpperCase() + ", SU PUNTAJE HASTA AHORA ES DE " + puntajetotal + " PUNTOS. PARA GANAR LA RONDA DE ARTE NECESITA " + puntos_restantes + " PUNTOS MÁS" );}
						
					
				
										
											

												/* if (puntaje_total>140) {caja_puntajetotal.innerHTML+= "SU DESEMPEÑO HA SIDO EXCELENTE";}
												if (puntaje_total<140&&puntaje_total>120) {caja_puntajetotal.innerHTML+= " SU DESEMPEÑO FUE EXTRAORDINARIO!";}
												if (puntaje_total>100&&puntaje_total<120) {caja_puntajetotal.innerHTML+= " SU DESEMPEÑO FUE MUY BUENO, SE NOTA QUE SOS UNA PERSONA INSTRUIDA.";}
												if (puntaje_total<100) {caja_puntajetotal.innerHTML+= "SU DESEMPEÑO PUEDE MEJORAR, SUERTE PARA LA PROXIMA. ";}
												return false; */
										

				
					
					
					


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
					if ( nombre.value.length < 3 ) 
					{ 
						nombre.style.background="red";
						advertencia.innerHTML= ("Debe ingresar un nombre valido");
						return false;
					}	
					 if ( nombre.value.length >= 3 ) 
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
					
				
					opcion_instrucciones.onclick= function(){
						
					opcion_instrucciones.style.display= "none";

						instrucciones.style.display= "block";
						menu_categorias.style.display= "none";
					}

					opcion_comenzarjuego.onclick= function (){
							menu_categorias.style.display= "block";

							menu_arte.style.display="inline";
							menu_moda.style.display="none";
							menu_arquitectura.style.display="none";
							menu_musica.style.display="none";

							instrucciones.style.display= "none";
							nombre_jugador.style.display="none";
							mensaje_bienvenida.style.display="none";
							opcion_instrucciones.style.display="none";
							opcion_comenzarjuego.style.display="none";
							
							return;
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
					
				menu_arte.onclick= function(){

								inicializar_arte();
								puntaje_arte(0, 0);

								
								//muestro solo el primer boton de la pregunta, una vez que lo aprieto, comienza la pregunta
										
									var seccionarte_p1 = document.getElementById("seccion_preguntaarte1");
									var seccionarte_p2 = document.getElementById("seccion_preguntaarte2");
									var seccionarte_p3 = document.getElementById("seccion_preguntaarte3");
									var seccionarte_p5 = document.getElementById("seccion_preguntaarte5");

										var arte_puntaje = 0;
										
										//PREGUNTA 1
										//si el usuario elige la respuesta correcta el icono se muestra verde
										//declaro una variable por cada respuesta, dependiendo la que elija el usuario
										var respuesta1_romanticismo=document.getElementById("r1_romanticismo");
										var respuesta1_surrealismo=document.getElementById("r1_surrealismo");
										var respuesta1_neoexpresionismo=document.getElementById("r1_neoexpresionismo");
										var respuesta1_minimalismo=document.getElementById("r1_minimalismo");
										var respuesta1_rococo=document.getElementById("r1_rococo");

										var seccion_artep1 =document.getElementById("seccion_preguntaarte1");
										
										var seccion_artep3 =document.getElementById("seccion_preguntaarte3");
										var seccion_artep5 =document.getElementById("seccion_preguntaarte5");
										//escondo el boton de submit
							
										boton_arte_p1.onclick = function () {
															artep1.style.display="block";
															//apenas elijo una respuesta, escondo la pregunta y muestro si estaba bien o no
																			respuesta1_neoexpresionismo.onclick = function (){
																						//inicializo la variable que contiene el puntaje de la opcion
																				
																										var valor_respuesta1a =  35;

																										seccionarte_p1.style.display="none";
																						
																										boton_arte_p1.style.background="green";
																										
																										respuesta1_neoexpresionismo.style.display="none";
																										respuesta1_surrealismo.style.display="none";
																										respuesta1_minimalismo.style.display="none";
																										respuesta1_rococo.style.display="none";
																										respuesta1_romanticismo.style.display="none";
																										puntaje_arte(valor_respuesta1a, 1);
																										seccion_preguntaarte1.style.display="none";

																												botonenviar_arte_p1.onclick= function()
																													{	
																														//ocurre cuando se presiona el submit 
																														botonenviar_arte_p1.style.display="none";
																														 													setTimeout(function(){ 
																														 												
																																											artep1.style.display="none";
																																											boton_arte_p1.style.display="none";
																																										    boton_arte_p2.style.display="block"; 
																																																					} , 1000);
																													}

																				};

																			respuesta1_surrealismo.onclick = function (){

																						

																										seccionarte_p1.style.display="none";
																										var valor_respuesta1b =  5;
																										boton_arte_p1.style.background="red";
																										
																										respuesta1_neoexpresionismo.style.display="none";
																										respuesta1_surrealismo.style.display="none";
																										respuesta1_minimalismo.style.display="none";
																										respuesta1_rococo.style.display="none";
																										respuesta1_romanticismo.style.display="none";
																										 puntaje_arte(valor_respuesta1b, 1);
																										seccion_preguntaarte1.style.display="none";

																												botonenviar_arte_p1.onclick= function()
																													{	
																														botonenviar_arte_p1.style.display="none";
																														//ocurre cuando se presiona el submit que escondi previamente (por las dudas lo dejo)
																														 													setTimeout(function(){ 
																														 													
																																											artep1.style.display="none";
																																											boton_arte_p1.style.display="none";
																																										    boton_arte_p2.style.display="block"; 
																																																					} , 1000);
																													}
																				};
																			respuesta1_romanticismo.onclick = function (){

																										seccionarte_p1.style.display="none";
																										var valor_respuesta1c =  0;
																										boton_arte_p1.style.background="red";
																										respuesta1_neoexpresionismo.style.display="none";
																										respuesta1_surrealismo.style.display="none";
																										respuesta1_minimalismo.style.display="none";
																										respuesta1_rococo.style.display="none";
																										respuesta1_romanticismo.style.display="none";
																										puntaje_arte(valor_respuesta1c, 1);

																										seccion_preguntaarte1.style.display="none";

																												botonenviar_arte_p1.onclick= function()
																													{	
																														botonenviar_arte_p1.style.display="none";
																														//ocurre cuando se presiona el submit que escondi previamente (por las dudas lo dejo)
																														 													setTimeout(function(){ 
																														 													
																																											artep1.style.display="none";
																																											boton_arte_p1.style.display="none";
																																										    boton_arte_p2.style.display="block"; 
																																																					} , 1000);
																													}
																				};
																			respuesta1_minimalismo.onclick = function (){

																								
																											seccionarte_p1.style.display="none";
																											var valor_respuesta1d =  0;
																											boton_arte_p1.style.background="red";
																											respuesta1_neoexpresionismo.style.display="none";
																											respuesta1_surrealismo.style.display="none";
																											respuesta1_minimalismo.style.display="none";
																											respuesta1_rococo.style.display="none";
																											respuesta1_romanticismo.style.display="none";
																											puntaje_arte(valor_respuesta1d, 1);

																											seccion_preguntaarte1.style.display="none";

																												botonenviar_arte_p1.onclick= function()
																													{	
																														botonenviar_arte_p1.style.display="none";
																														//ocurre cuando se presiona el submit que escondi previamente (por las dudas lo dejo)
																														 													setTimeout(function(){ 
																														 													 
																																											artep1.style.display="none";
																																											boton_arte_p1.style.display="none";
																																										    boton_arte_p2.style.display="block"; 
																																																					} , 1000);
																													}
																				};
																			respuesta1_rococo.onclick = function (){

																												seccionarte_p1.style.display="none";
																												var valor_respuesta1e =  0;
																											boton_arte_p1.style.background="red";
																											respuesta1_neoexpresionismo.style.display="none";
																											respuesta1_surrealismo.style.display="none";
																											respuesta1_minimalismo.style.display="none";
																											respuesta1_rococo.style.display="none";
																											respuesta1_romanticismo.style.display="none";
																											puntaje_arte(valor_respuesta1e, 1);
																											seccion_preguntaarte1.style.display="none";

																												botonenviar_arte_p1.onclick= function()
																													{	
																														botonenviar_arte_p1.style.display="none";
																														//ocurre cuando se presiona el submit que escondi previamente (por las dudas lo dejo)
																														 													setTimeout(function(){ 
																														 													
																																											artep1.style.display="none";
																																											boton_arte_p1.style.display="none";
																																										    boton_arte_p2.style.display="block"; 
																																																					} , 1000);
																													}
																										  
																				};
																				
									
										};
							
							boton_arte_p2.onclick = function () {
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

										artep2.style.display="block",
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
									var seccion_artep2 =document.getElementById("seccion_preguntaarte2");
									var devolucion_ap2 = document.getElementById("devolucion_artep2");
									botonenviar_arte_p2.style.display="none";
									seccion_artep2.style.display="none";
									//el usuario envia la pregunta y se procesan los datos
									
									if (arte_respuesta2== 4) {
										boton_arte_p2.style.background="green";
										var valor_respuesta2a =  35;
										puntaje_arte(valor_respuesta2a,2);
										devolucion_ap2.innerHTML = "La respuesta está excelente"; 
										seccion_artep2.style.display="none";

									}
									if (arte_respuesta2== 3) {
										//pinto de verde el cartel de la pregunta
										boton_arte_p2.style.background="green";
										//inicializo la cantidad de puntos que tendra la respuesta
										var valor_respuesta2b =  25;
										puntaje_arte(valor_respuesta2b,2);
										devolucion_ap2.innerHTML = "La respuesta está muy bien";
										seccion_artep2.style.display="none";
									}
									if (arte_respuesta2==2) {
										var valor_respuesta2c =  15;
										boton_arte_p2.style.background="orange";
										arte_puntaje= arte_puntaje + 15;
										puntaje_arte(valor_respuesta2c,2);
										devolucion_ap2.innerHTML = "La respuesta está bien";
										seccion_artep2.style.display="none";
									}
									if (arte_respuesta2== 1) {
										boton_arte_p2.style.background="grey";
										var valor_respuesta2d =  10;
										puntaje_arte(valor_respuesta2d,2);
										devolucion_ap2.innerHTML = "Podria estar mejor";
										seccion_artep2.style.display="none";
									}
									if (arte_respuesta2<1) {
										var valor_respuesta2e =  0;
										puntaje_arte(valor_respuesta2e,2);
										boton_arte_p2.style.background="red";
										devolucion_ap2.innerHTML = "La respuesta está mal";
										seccion_artep2.style.display="none";
									}

									

									setTimeout(function(){ 
														artep2.style.display="none";
														 boton_arte_p2.style.display="none";
													    boton_arte_p3.style.display="block";} , 3500);       }

								

						}

					boton_arte_p3.onclick =function () {
											//PREGUNTA 3
											var respuesta3_velazquez= document.getElementById("r3_dvelazquez");
											var respuesta3_frida= document.getElementById("r3_frida");
											var respuesta3_ribera= document.getElementById("r3_ribera");
											var respuesta3_elgreco= document.getElementById("r3_elgreco");
											var respuesta3_goya= document.getElementById("r3_goya");
											// escondo el submit
											artep3.style.display="block";
											//segun la respuesta elegida, el programa borra el resto de los input y da el resultado
													respuesta3_frida.onclick = function (){
																boton_arte_p3.style.background="red";
																respuesta3_frida.style.display="none";
																respuesta3_velazquez.style.display="none";
																respuesta3_ribera.style.display="none";
																respuesta3_elgreco.style.display="none";
																respuesta3_goya.style.display="none";
																var valor_respuesta3a =  0;
																seccion_preguntaarte3.style.display="none";

																puntaje_arte(valor_respuesta3a,3);

																			botonenviar_arte_p3.onclick=function (){
																												botonenviar_arte_p3.style.display="none";
																												setTimeout(function(){ 
																												artep3.style.display="none"; 
																											 	boton_arte_p3.style.display="none";
																										  	  	boton_arte_p4.style.display="block";} , 1000);			};
													}



													respuesta3_velazquez.onclick = function (){
																		boton_arte_p3.style.background="red";
																		respuesta3_frida.style.display="none";
																		respuesta3_velazquez.style.display="none";
																		respuesta3_ribera.style.display="none";
																		respuesta3_elgreco.style.display="none";
																		respuesta3_goya.style.display="none";
																		var valor_respuesta3b =  0;
																		puntaje_arte(valor_respuesta3b,3);
																		seccion_preguntaarte3.style.display="none";

																				botonenviar_arte_p3.onclick=function (){
																													botonenviar_arte_p3.style.display="none";
																													setTimeout(function(){ 
																													 artep3.style.display="none"; 
																													 boton_arte_p3.style.display="none";
																												     boton_arte_p4.style.display="block";} , 1000);		};
														}


													respuesta3_ribera.onclick = function (){
																				boton_arte_p3.style.background="red";
																				respuesta3_frida.style.display="none";
																				respuesta3_velazquez.style.display="none";
																				respuesta3_ribera.style.display="none";
																				respuesta3_elgreco.style.display="none";
																				respuesta3_goya.style.display="none";
																				var valor_respuesta3c =  0;
																			    puntaje_arte(valor_respuesta3c,3);
																			    seccion_preguntaarte3.style.display="none";


																botonenviar_arte_p3.onclick=function (){
																											botonenviar_arte_p3.style.display="none";
																											setTimeout(function(){  
																												artep3.style.display="none"; 
																												 boton_arte_p3.style.display="none";
																											    boton_arte_p4.style.display="block";} , 1000);			};
																	}

													respuesta3_elgreco.onclick = function (){
																					boton_arte_p3.style.background="red";
																					respuesta3_frida.style.display="none";
																					respuesta3_velazquez.style.display="none";
																					respuesta3_ribera.style.display="none";
																					respuesta3_elgreco.style.display="none";
																					respuesta3_goya.style.display="none";
																					var valor_respuesta3d =  0;
																					puntaje_arte(valor_respuesta3d,3);
																					seccion_preguntaarte3.style.display="none";
																		botonenviar_arte_p3.onclick=function (){
																					botonenviar_arte_p3.style.display="none";
																					setTimeout(function(){ 
																						artep3.style.display="none"; 
																					 boton_arte_p3.style.display="none";
																				    boton_arte_p4.style.display="block";} , 1000);		};
																			}

													respuesta3_goya.onclick = function (){
																					boton_arte_p3.style.background="green";
																					respuesta3_frida.style.display="none";
																					respuesta3_velazquez.style.display="none";
																					respuesta3_ribera.style.display="none";
																					respuesta3_elgreco.style.display="none";
																					respuesta3_goya.style.display="none";
																					var valor_respuesta3e =  30;
																			puntaje_arte(valor_respuesta3e,3);
																			seccion_preguntaarte3.style.display="none";
																		botonenviar_arte_p3.onclick=function (){
																					botonenviar_arte_p3.style.display="none";
																					setTimeout(function(){ 
																						artep3.style.display="none"; 
																					 boton_arte_p3.style.display="none";
																				    boton_arte_p4.style.display="block";} , 1000);		};
																		}
													

									

						}
							//inicializo variables para medir aciertos y errores
							var arte_p4_aciertos= 0;
							var arte_p4_errores= 0;

						boton_arte_p4.onclick =function () {
											//PREGUNTA 4
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
													// EStos son las correspondencias de las imagenes = la 1 - 3, la 2- 5, la 4 -8 y la 7 con la 6
													var aciertos = 0;
													artep4.style.display="block";

													
													arte_p4_r1.style.display="inline";
													arte_p4_r2.style.display="inline";
													arte_p4_r3.style.display="inline";
													arte_p4_r4.style.display="inline";
													arte_p4_r5.style.display="inline";
													arte_p4_r6.style.display="inline";
													arte_p4_r7.style.display="inline";
													arte_p4_r8.style.display="inline";
												
													devolucion_ap4.innerHTML+= nombre.value.toUpperCase()+ ", PRESIONE LA PRIMERA IMAGEN PARA COMENZAR";
													arte_p4_r1.onclick= function () {   
														arte_p4_r1.style.border = "2px solid violet"; 
														devolucion_ap4.innerHTML= "AHORA SELECCIONE LA IMAGEN 'HERMANA'";
														//Los errores
														arte_p4_r2.onclick= function () {agregarerror_p4();return false;} 
														arte_p4_r4.onclick= function () {agregarerror_p4();return false;}   
														arte_p4_r5.onclick= function () {agregarerror_p4();return false;}   
														arte_p4_r6.onclick= function () {agregarerror_p4();return false;}   
														arte_p4_r7.onclick= function () {agregarerror_p4();return false;}   
														arte_p4_r8.onclick= function () {agregarerror_p4();return false;}  

														arte_p4_r3.onclick = function () { agregaracierto_p4();
																						arte_p4_r3.style.border = "2px solid violet"; 
																						arte_p4_r1.style.display="none";
																						arte_p4_r3.style.display="none";  
																						setTimeout( function() {
																							
																							devolucion_ap4.innerHTML= "PRESIONE LA PRIMERA IMAGEN PARA SEGUIR";
																							arte_p4_r2.onclick= function () {   
																															arte_p4_r2.style.border = "2px solid violet";
																															arte_p4_r4.onclick= function () {agregarerror_p4();return false;}
																															arte_p4_r6.onclick= function () {agregarerror_p4();return false;}
																															arte_p4_r7.onclick= function () {agregarerror_p4();return false;}
																															arte_p4_r8.onclick= function () {agregarerror_p4();return false;}   
																															arte_p4_r5.onclick = function () { agregaracierto_p4();
																																								arte_p4_r5.style.border = "2px solid violet"; 
																																									arte_p4_r2.style.display="none";
																																								arte_p4_r5.style.display="none";  
																																								setTimeout( function() {
																																							
																																								//ESPERA A QUE PRESIONE LA SIGUIENTE IMAGEN
																																								devolucion_ap4.innerHTML+= ", PRESIONE LA PRIMERA IMAGEN PARA SEGUIR";
																																									arte_p4_r4.onclick= function () {   

																																																		arte_p4_r4.style.border = "2px solid violet"; 
																																																		
																																																			arte_p4_r6.onclick= function () {agregarerror_p4();return false;}
																																																			arte_p4_r7.onclick= function () {agregarerror_p4();return false;}
																															  
																																																			arte_p4_r8.onclick = function () { agregaracierto_p4();
																																																									arte_p4_r8.style.border = "2px solid violet"; 
																																																									arte_p4_r4.style.display="none";
																																																									arte_p4_r8.style.display="none";  
																																																									setTimeout( function() {
																																																											
																																																											arte_p4_r6.onclick= function () {   
																																																																arte_p4_r6.style.border = "2px solid violet";   
																																																																arte_p4_r7.onclick = function () { agregaracierto_p4();
																																																																							arte_p4_r7.style.border = "2px solid violet";  
																																																																								arte_p4_r7.style.display="none";
																																																																									arte_p4_r6.style.display="none"; 
																																																																							setTimeout( function() {
																																																																								

																																																																							}, 500 );
																																																																}
																																																															}
																																																									}, 500 );
																																																		}
																																																	}
																																							}, 500 );
																																}
																															}

																					}, 500 );
														}
													}

/*													

													arte_p4_r4.onclick= function () {   
														arte_p4_r4.style.border = "2px solid violet";   
														arte_p4_r8.onclick = function () { agregaracierto_p4();
																					arte_p4_r8.style.border = "2px solid violet";   
																					setTimeout( function() {
																							arte_p4_r4.style.display="none";
																							arte_p4_r8.style.display="none";

																					}, 1000 );
														}
													}

													arte_p4_r7.onclick= function () {   
														arte_p4_r7.style.border = "2px solid violet";   
														arte_p4_r6.onclick = function () { agregaracierto_p4();
																					arte_p4_r6.style.border = "2px solid violet";   
																					setTimeout( function() {
																							arte_p4_r7.style.display="none";
																							arte_p4_r6.style.display="none";

																					}, 1000 );
														}
													}

													
*/



													


													function agregaracierto_p4(){

														arte_p4_aciertos++;
														devolucion_ap4.innerHTML= ("USTED TIENE "+ arte_p4_aciertos + " ACIERTOS");

													};

													function agregarerror_p4(){

														arte_p4_errores++;
														if (arte_p4_errores==1){
																	devolucion_ap4.innerHTML= ("USTED TIENE UN ERROR");
														}
														if (arte_p4_errores>1){
														devolucion_ap4.innerHTML= ("USTED TIENE "+ arte_p4_errores + " ERRORES.");}

													};
													
													

													

													botonenviar_arte_p4.onclick= function()
													{		

															botonenviar_arte_p4.style.display="none";
															 boton_arte_p4.style.display="none";
															if (arte_p4_aciertos==4){

																if (arte_p4_errores<2){
																	puntaje_arte(35, 4);
																	devolucion_ap4.innerHTML="SU PUNTAJE EN ESTA RONDA ES DE 35 PUNTOS, EXCELENTE!";
																}	
																if (arte_p4_errores>=2 ){
																		if(arte_p4_errores<4){
																				puntaje_arte(25, 4);
																				devolucion_ap4.innerHTML="SU PUNTAJE EN ESTA RONDA ES DE 25 PUNTOS, BIEN!";
																		}		
																}
																if (arte_p4_errores>=4){
																		if(arte_p4_errores<10){

																				puntaje_arte(15, 4);
																				devolucion_ap4.innerHTML="SU PUNTAJE EN ESTA RONDA ES DE 15 PUNTOS, A SEGUIR!";
																		}		
																}
																if (arte_p4_errores>10){
																		puntaje_arte(0, 4)
																		devolucion_ap4.innerHTML="SU PUNTAJE EN ESTA RONDA ES DE 0 PUNTOS, HASTA MARADONA ERRO PENALES.";
																}
																	
																	setTimeout(function(){ 
																							artep4.style.display="none";
																							
																						    boton_arte_p5.style.display="block";} , 4000);

																	}
													}

									}

				boton_arte_p5.onclick= function() {

												artep5.style.display="block";


												var respuesta5_cara= document.getElementById("r5_caravaggio");
												var respuesta5_mond= document.getElementById("r5_mondrian");
												var respuesta5_frag= document.getElementById("r5_fragonard");
												var respuesta5_miguelangel= document.getElementById("r5_ma");
												var respuesta5_gaugin= document.getElementById("r5_gaugin");
												var respuesta5_monet= document.getElementById("r5_monet");
												var respuesta5_rafael= document.getElementById("r5_rafael");
												var respuesta5_borgoña= document.getElementById("r5_borgoña");
												var respuesta5_degas= document.getElementById("r5_degas");
												//apenas elijo una respuesta, escondo la pregunta y muestro si estaba bien o no


													var arte_respuesta5 = 0;
													var flag_5cara= 0;
													var flag_5mond= 0;
													var flag_5frag= 0;
													var flag_5ma= 0;
													var flag_5gaugin= 0;
													var flag_5monet= 0;
													var flag_5rafael= 0;
													var flag_5borgoña= 0;
													var flag_5degas= 0;


										respuesta5_cara.onclick=function()
										{	
											
											if (flag_5cara%2==0) {arte_respuesta5++;}
											else {arte_respuesta5--;}
											flag_5cara++;
											
											console.log(flag_5cara);
											console.log(arte_respuesta5);
										}
										respuesta5_mond.onclick=function()
										{
											if (flag_5mond%2==0) {arte_respuesta5--;}
											else  {arte_respuesta5++;}
											flag_5mond++;
											
											console.log(flag_5mond);
											console.log(arte_respuesta5);
										}
										respuesta5_frag.onclick=function()
										{
											if (flag_5frag%2==0) {arte_respuesta5--;}
											else {arte_respuesta5++;}
											flag_5frag++;
											
											
											console.log(flag_5frag);
											console.log(arte_respuesta5);
										}
										respuesta5_miguelangel.onclick=function()
										{
											if (flag_5ma%2==0) {arte_respuesta5++;}
											else  {arte_respuesta5--;}
											flag_5ma++;
											
											
											console.log(flag_5ma);
											console.log(arte_respuesta5);
										}		
										respuesta5_gaugin.onclick=function()
										{
											if (flag_5gaugin%2==0) {arte_respuesta5--;}
											else  {arte_respuesta5++;}
											flag_5gaugin++; 
											
											
											console.log(flag_5gaugin);
											console.log(arte_respuesta5);
										}
										respuesta5_monet.onclick=function()
										{
											if (flag_5monet%2==0) {arte_respuesta5--;}
											else  {arte_respuesta5++;}
											flag_5monet++;
											
											
											console.log(flag_5monet);
											console.log(arte_respuesta5);
										}
										respuesta5_rafael.onclick=function()
										{
											if (flag_5rafael%2==0) {arte_respuesta5++;}
											else  {arte_respuesta5--;}
											flag_5rafael++;
											
											
											console.log(flag_5rafael);
											console.log(arte_respuesta5);
										}
										respuesta5_borgoña.onclick=function()
										{
											if (flag_5borgoña%2==0) {arte_respuesta5++;}
											else {arte_respuesta5--;}
											flag_5borgoña++;
											
											
											console.log(flag_5borgoña);
											console.log(arte_respuesta5);
										}
										respuesta5_degas.onclick=function()
										{
											if (flag_5degas%2==0) {arte_respuesta5--;}
											else  {arte_respuesta5++;}
												flag_5degas++;
											
											console.log(flag_5degas);
											console.log(arte_respuesta5);
										}
										
							
										//sucede cuando se envia el formulario de la pregunta 2 de arte
										botonenviar_arte_p5.onclick= function()
										{
											var seccion_artep5 =document.getElementById("seccion_preguntaarte5");
											var devolucion_ap5 = document.getElementById("devolucion_artep5");
											botonenviar_arte_p5.style.display="none";
											seccion_artep5.style.display="none";
											//el usuario envia la pregunta y se procesan los datos
											
											if (arte_respuesta5== 4) {
												boton_arte_p5.style.background="green";
												var valor_respuesta5a =  45;
												puntaje_arte(valor_respuesta5a,5);
												devolucion_ap2.innerHTML = "La respuesta está excelente"; 
												setTimeout(function(){ 		seccion_arte.style.display="none";
																			devolucion_ap5.style.display="none";
																			boton_arte_p5.style.display="none";
																									} , 1000);
												

											}
											if (arte_respuesta5== 3) {
												//pinto de verde el cartel de la pregunta
												boton_arte_p5.style.background="orange";
												//inicializo la cantidad de puntos que tendra la respuesta
												var valor_respuesta5b =  25;
												puntaje_arte(valor_respuesta5b,5);
												devolucion_ap5.innerHTML = "La respuesta está muy bien";
												setTimeout(function(){ 		seccion_arte.style.display="none";
																			devolucion_ap5.style.display="none";
																			boton_arte_p5.style.display="none";
																									} , 1000);
											}
											if (arte_respuesta5==2) {
												var valor_respuesta5c =  15;
												boton_arte_p5.style.background="yellow";
												
												puntaje_arte(valor_respuesta5c,5);
												devolucion_ap5.innerHTML = "La respuesta está bien";
												seccion_artep5.style.display="none";
												setTimeout(function(){ 		seccion_arte.style.display="none";
																			devolucion_ap5.style.display="none";
																			boton_arte_p5.style.display="none";
																									} , 1000);
											}
											if (arte_respuesta5<2) {
												boton_arte_p5.style.background="grey";
												var valor_respuesta5d =  5;

												puntaje_arte(valor_respuesta5d,5);

												devolucion_ap5.innerHTML = "Podria estar mejor";
												seccion_artep5.style.display="none";
												setTimeout(function(){ 			seccion_arte.style.display="none";
																			devolucion_ap5.style.display="none";
																			boton_arte_p5.style.display="none";
																									} , 1000);
											}
											if (arte_respuesta5<0) {
												boton_arte_p2.style.background="black";
												var valor_respuesta5e =  0;
												puntaje_arte(valor_respuesta5e,5);
												devolucion_ap5.innerHTML = "Muy mal";
												seccion_artep5.style.display="none";
												setTimeout(function(){ 		seccion_arte.style.display="none";
																			devolucion_ap5.style.display="none";
																			boton_arte_p5.style.display="none";
																									} , 1000);
											}
										
											

									 	}
															
																	
						
				};

}
			

			
