function mostrar(){
        
    var votos1=document.form1.candidato1.value;
    var votos2=document.form1.candidato2.value;
    var votos3=document.form1.candidato3.value; 

    var sumatoria=parseInt(votos1)+parseInt(votos2)+parseInt(votos3);

    var porcentaje1= votos1/sumatoria*100;
    var porcentaje2= votos2/sumatoria*100;
    var porcentaje3= votos3/sumatoria*100;

    const xValues = ["Primer Candidato", "Segundo Candidato", "Tercer Candidato"];
    const yValues = [porcentaje1, porcentaje2, porcentaje3];
    const barColors = ["#b91d47","#00aba9","#2b5797"];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            title: {
            display: true,
            text: "Elecciones Electorales 2024"
            }
        }
        });

        var tabla = "<table>";
        tabla += "<tr><td colspan='2'>Resultado de las  Elecciones 2024</td></tr>";

        tabla += "<tr><td>Cantidad total de votos:</td><td>" + sumatoria + "</td></tr>";
    
        tabla += "<tr><td>Cantidad de votos de Candidato 1:</td><td>" + votos1 + "</td></tr>";
        tabla += "<tr><td>Porcentaje obtenido:</td><td>" + porcentaje1 + "%" + "</td></tr>";
    
        tabla += "<tr><td>Cantidad de votos de Candidato 2:</td><td>" + votos2 + "</td></tr>";
        tabla += "<tr><td>Porcentaje obtenido:</td><td>" + porcentaje2 + "%" + "</td></tr>";
    
        tabla += "<tr><td>Cantidad de votos de Candidato 3:</td><td>" + votos3 + "</td></tr>";
        tabla += "<tr><td>Porcentaje obtenido:</td><td>" + porcentaje3 + "%" + "</td></tr>";
    
        tabla += "</table>";
    
    document.getElementById("resultados").innerHTML = tabla;



}