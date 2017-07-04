$(document)
.ready(
		function(){
			$
		
			.getJSON(
					"restaurantes.json",
					function(datos){
						for (var i in datos.restaurant){
							var rowHTML = "<tr><td>"
								+datos.restaurant[i].nombre
								+
								"<td></td>"
								+datos.restaurant[i].ciudad
								+
								"<td></td>"
								+datos.restaurant[i].pais
								+
								"<td></td>"
								+datos.restaurant[i].comida
								+
								"<td></td>"
								+datos.restaurant[i].url
								+"</td></tr>";
							$("#hola")
							.append(rowHTML);
						}
					});
		});