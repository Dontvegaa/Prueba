function mostrar(){

    var nota1=document.form1.nota1.value;
    var nota2=document.form1.nota2.value;
    var nota3=document.form1.nota3.value; 

const xValues = ["Diseño páginas web", "Desarrollo de Lógica de Programación", "Análisis de sistemas"];
const yValues = [nota1, nota2, nota3];
const barColors = ["cyan", "green","red"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "RESULTADO DE NOTAS"
    }
  }
});
}