
var voto1=parseInt(document.form1.candidato1.value);
var voto2=parseInt(document.form1.candidato2.value);
var voto3=parseInt(document.form1.candidato3.value);

var suma=parseInt(voto1)+parseInt(voto2)+parseInt(voto3);
var porcentaje1=parseInt(voto1)/suma*100;
var porcentaje2=parseInt(voto2)/suma*100;
var porcentaje3=parseInt(voto3)/suma*100;
function calcular(){
    const xValues = ["porcentaje 1 ","porcentaje 2", "porcentaje 3"];
    const yValues = [porcentaje1, porcentaje2, porcentaje3];
    const barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    ];

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
}