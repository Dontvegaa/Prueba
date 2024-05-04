
function mostrar(){

var voto1=document.form1.candidato1.value;
var voto2=document.form1.candidato2.value;
var voto3=document.form1.candidato3.value;

var suma=parseInt(voto1)+parseInt(voto2)+parseInt(voto3);
var porcentaje1=parseInt(voto1)/suma*100;
var porcentaje2=parseInt(voto2)/suma*100;
var porcentaje3=parseInt(voto3)/suma*100;

const xValues = ["Candidato 1 ","Candidato 2", "Candidato 3"];
const yValues = [porcentaje1, porcentaje2, porcentaje3];
const barColors = ["#b91d47","#00aba9","#2b5797",];

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
        text: "Elecciones The Savior 2025"
        }
    }
});
    var tabla = "<table border='1'>";
    tabla += "<tr><td>Resultado de las  Elecciones 2024</td></tr>";

    tabla += "<tr><td>Cantidad de votos de Candidato 1:</td><td>" + voto1 + "</td></tr>";
    tabla += "<tr><td>Porcentaje obtenido:</td><td>" + porcentaje1 + "%" + "</td></tr>";

    tabla += "<tr><td>Cantidad de votos de Candidato 2:</td><td>" + voto2 + "</td></tr>";
    tabla += "<tr><td>Porcentaje obtenido:</td><td>" + porcentaje2 + "%" + "</td></tr>";

    tabla += "<tr><td>Cantidad de votos de Candidato 3:</td><td>" + voto3 + "</td></tr>";
    tabla += "<tr><td>Porcentaje obtenido:</td><td>" + porcentaje3 + "%" + "</td></tr>";

    tabla += "</table>";

document.getElementById("resultados").innerHTML = tabla;

}