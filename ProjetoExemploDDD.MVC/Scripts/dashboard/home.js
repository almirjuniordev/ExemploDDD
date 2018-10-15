//window.onload = function () {


$(document).ready(function () {
    //Carrega porcentagem de inscritos
    //$.ajax({
    //    type: "GET",
    //    url: $("#inscritosPieChart").val(),
    //    dataType: "json",
    //    success: function (data) {

    //        var inscritos = new CanvasJS.Chart("inscritos",
    //            {
    //                title: {
    //                    text: "Advogados Inscritos",
    //                    fontSize: 18

    //                },

    //                animationEnabled: true,
    //                exportFileName: "Advogados Inscritos",
    //                exportEnabled: true,
    //                legend: {
    //                    verticalAlign: "center",
    //                    horizontalAlign: "left",
    //                    fontSize: 10,
    //                    startAngle: -12,
    //                    fontFamily: "Helvetica"
    //                },
    //                theme: "theme2",
    //                data: [
    //                    {
    //                        type: "pie",
    //                        indexLabelFontFamily: "Garamond",
    //                        indexLabelFontSize: 15,
    //                        indexLabel: "{label} {y}%",
    //                        startAngle: -20,
    //                        showInLegend: false,
    //                        toolTipContent: "{legendText} {y}%",
    //                        dataPoints: CarregaInscrito(data)
    //                    }
    //                ]
    //            });


    //        inscritos.render();
    //    }
    //});



    //$.getJSON($("#inscritosPieChart").val(), GerarChartInscrito);


    $.getJSON($("#inscritosPieChart").val())
        .then(function (data) {

            //var inscritos = new CanvasJS.Chart("inscritos",
            //    {
            //        title: {
            //            text: "Advogados Inscritos",
            //            fontSize: 18

            //        },

            //        animationEnabled: true,
            //        exportFileName: "Advogados Inscritos",
            //        exportEnabled: true,
            //        legend: {
            //            verticalAlign: "center",
            //            horizontalAlign: "left",
            //            fontSize: 10,
            //            startAngle: -12,
            //            fontFamily: "Helvetica"
            //        },
            //        theme: "theme2",
            //        data: [
            //            {
            //                type: "pie",
            //                indexLabelFontFamily: "Garamond",
            //                indexLabelFontSize: 15,
            //                indexLabel: "{label} {y}%",
            //                startAngle: -20,
            //                showInLegend: false,
            //                toolTipContent: "{legendText} {y}%",
            //                dataPoints: CarregaInscrito(data)
            //            }
            //        ]
            //    });


            //inscritos.render();



            var inscritos = new CanvasJS.Chart("inscritos", {
                theme: "light2", // "light1", "light2", "dark1", "dark2"
                exportEnabled: true,
                animationEnabled: true,
                title: {
                        text: "Advogados Inscritos",
                        fontSize: 18
                },
                data: [{
                    type: "pie",
                    startAngle: 25,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}%",
                    dataPoints: CarregaInscrito(data)
                }]
            });
            inscritos.render();


        });





    ////Carrega inscritos por sexo
    //$.ajax({
    //    type: "GET",
    //    url: $("#sexoAdvogadosColumnChart").val(),
    //    dataType: "json",
    //    success: function (data) {

    //        var sexoAdvogados = new CanvasJS.Chart("sexoAdvogados",
    //            {
    //                theme: "theme3",
    //                animationEnabled: true,
    //                title: {
    //                    text: "Homens & Mulheres",
    //                    fontSize: 20
    //                },

    //                exportFileName: "Homens & Mulheres",
    //                exportEnabled: true,

    //                toolTip: {
    //                    shared: true
    //                },
    //                data: [


    //                    {
    //                        type: "column",
    //                        name: "Homens Inscritos",
    //                        legendText: "Homens Inscritos no mês",
    //                        showInLegend: false,
    //                        color: "#698EB2",
    //                        dataPoints: CarregaInscritoSexoM(data)
    //                    },


    //                    {
    //                        type: "column",
    //                        name: "Mulheres",
    //                        legendText: "Mulheres Inscritos no mês",
    //                        axisYType: "secondary",
    //                        showInLegend: false,
    //                        color: "#B269B2",
    //                        dataPoints: CarregaInscritoSexoF(data)
    //                    }




    //                ],

    //                legend: {
    //                    cursor: "pointer",
    //                    itemclick: function (e) {
    //                        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
    //                            e.dataSeries.visible = false;
    //                        }
    //                        else {
    //                            e.dataSeries.visible = true;
    //                        }

    //                    }
    //                },

    //            });

    //        sexoAdvogados.render();
    //    }
    //});
}
);


//function CarregaInscrito(tipo) {
//    var dataPoints = [];

//    for (var i = 0; i < tipo.length; i++) {
//        if (tipo[i].dsInscricao === "Cons Estrangeiro") {
//            dataPoints.push({ y: parseFloat(tipo[i].percentual.toFixed(4)), name: "Cons Estrangeiro", label: "Cons Estrangeiro", color: "green" });
//        }
//        else if (tipo[i].dsInscricao === "Cons Estrangeiro Sup") {
//            dataPoints.push({ y: tipo[i].percentual, legendText: "Cons Estrangeiro Sup", label: "Cons Estrangeiro Sup", color: "fuchsia" });
//        }
//        else if (tipo[i].dsInscricao === "Transferido de Outra Seccional") {
//            dataPoints.push({ y: parseFloat(tipo[i].percentual.toFixed(4)), legendText: "Transferido de Outra Seccional", label: "Transferido de Outra Seccional", color: "blue" });
//        }
//        else if (tipo[i].dsInscricao === "Provisório") {
//            dataPoints.push({ y: parseFloat(tipo[i].percentual.toFixed(4)), legendText: "Provisório", label: "Provisório", color: "yellow" });

//        }
//        else if (tipo[i].dsInscricao === "Suplementar") {
//            dataPoints.push({ y: parseFloat(tipo[i].percentual.toFixed(4)), legendText: "Suplementar", label: "Suplementar", color: "black" })
//        }
//        else {
//            dataPoints.push({ y: parseFloat(tipo[i].percentual.toFixed(4)), legendText: "Definitivo", label: "Definitivo", color: "red" })
//        }
//    }

//    return dataPoints;

//}

function CarregaInscrito(tipo) {
    var dataPoints = [];

    for (var i = 0; i < tipo.length; i++) {
        if (tipo[i].dsInscricao === "Cons Estrangeiro") {
            dataPoints.push({ y: parseFloat(tipo[i].Porcentagem.toFixed(4)), name: "Cons Estrangeiro", label: "Cons Estrangeiro", color: "green" });
        }
        else if (tipo[i].dsInscricao === "Cons Estrangeiro Sup") {
            dataPoints.push({ y: tipo[i].Porcentagem, legendText: "Cons Estrangeiro Sup", label: "Cons Estrangeiro Sup", color: "fuchsia" });
        }
        else if (tipo[i].dsInscricao === "Transferido de Outra Seccional") {
            dataPoints.push({ y: parseFloat(tipo[i].Porcentagem.toFixed(4)), legendText: "Transferido de Outra Seccional", label: "Transferido de Outra Seccional", color: "blue" });
        }
        else if (tipo[i].dsInscricao === "Provisório") {
            dataPoints.push({ y: parseFloat(tipo[i].Porcentagem.toFixed(4)), legendText: "Provisório", label: "Provisório", color: "yellow" });

        }
        else if (tipo[i].dsInscricao === "Suplementar") {
            dataPoints.push({ y: parseFloat(tipo[i].Porcentagem.toFixed(4)), legendText: "Suplementar", label: "Suplementar", color: "black" })
        }
        else {
            dataPoints.push({ y: parseFloat(tipo[i].Porcentagem.toFixed(4)), legendText: "Definitivo", label: "Definitivo", color: "red" })
        }
    }

    return dataPoints;

}


function CarregaInscritoHighLights(tipo) {
    var dataPoints = [];

    for (var i = 0; i < tipo.length; i++) {
        if (tipo[i].dsInscricao === "Cons Estrangeiro") {
            dataPoints.push({ y: parseFloat(tipo[i].percentual.toFixed(4)), name: "Cons Estrangeiro"});
        }
        else if (tipo[i].dsInscricao === "Cons Estrangeiro Sup") {
            dataPoints.push({ y: tipo[i].percentual, name: "Cons Estrangeiro Sup"});
        }
        else if (tipo[i].dsInscricao === "Transferido de Outra Seccional") {
            dataPoints.push({ y: parseFloat(tipo[i].percentual.toFixed(4)), name: "Transferido de Outra Seccional"});
        }
        else if (tipo[i].dsInscricao === "Provisório") {
            dataPoints.push({ y: parseFloat(tipo[i].percentual.toFixed(4)), name: "Provisório"});

        }
        else if (tipo[i].dsInscricao === "Suplementar") {
            dataPoints.push({ y: parseFloat(tipo[i].percentual.toFixed(4)), name: "Suplementar"})
        }
        else {
            dataPoints.push({ y: parseFloat(tipo[i].percentual.toFixed(4)), name: "Definitivo"})
        }
    }

    return dataPoints;

}



function CarregaInscritoGoogleCharts(tipo) {
    var dataPoints = [];

    for (var i = 0; i < tipo.length; i++) {
        if (tipo[i].dsInscricao === "Cons Estrangeiro") {
            dataPoints.push(["Cons Estrangeiro", parseFloat(tipo[i].percentual.toFixed(4))]);
        }
        else if (tipo[i].dsInscricao === "Cons Estrangeiro Sup") {
            dataPoints.push(["Cons Estrangeiro Sup", tipo[i].percentual]);
        }
        else if (tipo[i].dsInscricao === "Transferido de Outra Seccional") {
            dataPoints.push(["Transferido de Outra Seccional", parseFloat(tipo[i].percentual.toFixed(4))]);
        }
        else if (tipo[i].dsInscricao === "Provisório") {
            dataPoints.push(["Provisório", parseFloat(tipo[i].percentual.toFixed(4))]);

        }
        else if (tipo[i].dsInscricao === "Suplementar") {
            dataPoints.push(["Suplementar", parseFloat(tipo[i].percentual.toFixed(4))]);
        }
        else {
            dataPoints.push(["Definitivo", parseFloat(tipo[i].percentual.toFixed(4))]);
        }
    }

    return dataPoints;

}


function CarregaInscritoSexoM(data) {
    var dataPoints = [];

    for (var i = 0; i < data.length; i++) {

        if (data[i].sexo === 'M') {
            dataPoints.push(AdicionaMes(data[i].mes, data[i].quantidade))
        }

    }

    return dataPoints;
}

function CarregaInscritoSexoF(data) {
    var dataPoints = [];

    for (var i = 0; i < data.length; i++) {

        if (data[i].sexo === 'F') {
            dataPoints.push(AdicionaMes(data[i].mes, data[i].quantidade))
        }

    }

    return dataPoints;
}

function AdicionaMes(mes, quantidade) {

    if (mes === 1) {
        return { label: "Janeiro", y: quantidade }
    }
    else if (mes === 2) {
        return { label: "Fevereiro", y: quantidade }
    }
    else if (mes === 3) {
        return { label: "Março", y: quantidade }
    }
    else if (mes === 4) {
        return { label: "Abril", y: quantidade }
    }
    else if (mes === 5) {
        return { label: "Maio", y: quantidade }
    }
    else if (mes === 6) {
        return { label: "Junho", y: quantidade }
    }
    else if (mes === 7) {
        return { label: "Julho", y: quantidade }
    }
    else if (mes === 8) {
        return { label: "Agosto", y: quantidade }
    }
    else if (mes === 9) {
        return { label: "Setembro", y: quantidade }
    }
    else if (mes === 10) {
        return { label: "Outubro", y: quantidade }
    }
    else if (mes === 11) {
        return { label: "Novembro", y: quantidade }
    }
    else {
        return { label: "Dezembro", y: quantidade }
    }
}
