	"use strict"
				document.getElementById("nombreformu").onclick= function()
				{

					var nombre = document.getElementById("nombre");
					var apellido = document.getElementById("ape");
					if ( nombre.value.length < 3 ) 
					{ 
						nombre.style.color="red";
					}	
					 if ( nombre.value.length >= 3 ) 
					{  
						nombre.style.color="green";
					}	
					
				}

				var seccion_moda = document.getElementById("seccion_moda");
				var seccion_arquitectura = document.getElementById("seccion_arquitectura");
				var seccion_arte = document.getElementById("seccion_artesvisuales");
				var seccion_musica = document.getElementById("seccion_musica");

				seccion_arquitectura.style.display= "none";
				seccion_musica.style.display= "none";
				seccion_moda.style.display= "none";
				seccion_arte.style.display= "block";


				document.getElementById("menu_artesvisuales").onclick= function()
				{
					

					

				}
			
				//declaro variables que represwentan a las 5 preguntas
				var artep1 = document.getElementById("artep1");
				var artep2 = document.getElementById("artep2");
				var artep3 = document.getElementById("artep3");
				var artep4 = document.getElementById("artep4");
				var artep5 = document.getElementById("artep5");

				var archp1 = document.getElementById("arquitecturap1");
				var archp2 = document.getElementById("arquitecturap2");
				var archp3 = document.getElementById("arquitecturap3");
			    var archp4 = document.getElementById("arquitecturap4");
			    var archp5 = document.getElementById("arquitecturap5");

			    var modap1 = document.getElementById("modap1");
				var modap2 = document.getElementById("modap2");
				var modap3 = document.getElementById("modap3");
			    var modap4 = document.getElementById("modap4");
			    var modap5 = document.getElementById("modap5");

				var musicap1 = document.getElementById("musicap1");
				var musicap2 = document.getElementById("musicap2");
				var musicap3 = document.getElementById("musicap3");
			    var musicap4 = document.getElementById("musicap4");
			    var musicap5 = document.getElementById("musicap5");



				//p1-5  (significando pregunta 1 a 5) son variables que representan los cinco cuadrados del menu

				var botonenviar_arte_p1 = document.getElementById("arte_submitp1");
				var botonenviar_arte_p2 = document.getElementById("arte_submitp2");
				var botonenviar_arte_p3 = document.getElementById("arte_submitp3");
				var botonenviar_arte_p4 = document.getElementById("arte_submitp4");
				var botonenviar_arte_p5 = document.getElementById("arte_submitp5");

				var botonenviar_arch_p1 = document.getElementById("arte_submitp1");
				var botonenviar_arch_p2 = document.getElementById("arte_submitp2");
				var botonenviar_arch_p3 = document.getElementById("arte_submitp3");
				var botonenviar_arch_p4 = document.getElementById("arte_submitp4");
				var botonenviar_arch_p5 = document.getElementById("ar_submitp5");

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
				

				var menu_musica = document.getElementById ("menu_musica");
				var menu_arquitectura = document.getElementById ("menu_arquitectura");
				var menu_moda = document.getElementById ("menu_moda");
				var menu_arte = document.getElementById ("menu_artesvisuales");

				artep1.style.display = "block";
				artep2.style.display = "none";
				artep3.style.display = "none";
				artep4.style.display = "none";
				artep5.style.display = "none";



				menu_arte.onclick= function (){

				

					artep1.style.display = "block";
					artep2.style.display = "none";
					artep3.style.display = "none";
					artep4.style.display = "none";
					artep5.style.display = "none";

					boton1.onclick= function()
					{	
						artep1.style.display = "block";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display = "none";
					}	
					boton2.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "block";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display= "none";

					}
				
					boton3.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "block";
						artep4.style.display = "none";
						artep5.style.display = "none";

					}
					boton4.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "block";
						artep5.style.display = "none";
					}

					boton5.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display = "block";
					}

				}

				menu_musica.onclick= function (){


					boton1.onclick= function()
					{	
						artep1.style.display = "block";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display = "none";
					}	
					boton2.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "block";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display= "none";

					}
				
					boton3.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "block";
						artep4.style.display = "none";
						artep5.style.display = "none";

					}
					boton4.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "block";
						artep5.style.display = "none";
					}
					boton5.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display = "block";
					}

				}
				menu_artesvisuales.onclick= function (){


					boton1.onclick= function()
					{	
						artep1.style.display = "block";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display = "none";
					}	
					boton2.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "block";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display= "none";

					}
				
					boton3.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "block";
						artep4.style.display = "none";
						artep5.style.display = "none";

					}
					boton4.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "block";
						artep5.style.display = "none";
					}
					boton5.onclick= function()
					{
						artep1.style.display = "none";
						artep2.style.display = "none";
						artep3.style.display = "none";
						artep4.style.display = "none";
						artep5.style.display = "block";
					}

				}
				menu_musica.onclick= function (){


					musica_boton1.onclick= function()
					{	
						musicap1.style.display = "block";
						musicap2.style.display = "none";
						musicap3.style.display = "none";
						musicap4.style.display = "none";
						musicap5.style.display = "none";
					}	
					musica_boton2.onclick= function()
					{
						musicap1.style.display = "none";
						musicap2.style.display = "block";
						musicap3.style.display = "none";
						musicap4.style.display = "none";
						musicap5.style.display= "none";

					}
				
					musica_boton3.onclick= function()
					{
						musicap1.style.display = "none";
						musicap2.style.display = "none";
						musicap3.style.display = "block";
						musicap4.style.display = "none";
						musicap5.style.display = "none";

					}
					musica_boton4.onclick= function()
					{
						musicap1.style.display = "none";
						musicap2.style.display = "none";
						musicap3.style.display = "none";
						musicap4.style.display = "block";
						musicap5.style.display = "none";
					}
					musica_boton5.onclick= function()
					{
						musicap1.style.display = "none";
						musicap2.style.display = "none";
						musicap3.style.display = "none";
						musicap4.style.display = "none";
						musicap5.style.display = "block";
					}

				}
			
				submitp1.onclick= function()
				{
					
					boton1.style.color="red";
					boton1.style.background="green";
				}
				submitp2.onclick= function()
				{
					
					boton2.style.color="red";
					boton2.style.background="green";
				}
				submitp3.onclick= function()
				{
					
					boton3.style.color="red";
					boton3.style.background="green";
				}
				submitp4.onclick= function()
				{
					
					boton4.style.color="red";
					boton4.style.background="green";
				}
				submitp5.onclick= function()
				{
					
					boton5.style.color="red";
					boton5.style.background="green";
				}

