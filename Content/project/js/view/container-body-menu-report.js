
function genChart(pDataSaleChartModel, pDataOrderChartModel, pDataSaleChartCompareModel,
    pDataOrderChartCompareModel, pFirstDayCurrentMonth, pEndDayCurrentMonth,
    pFirstDayLastMonth, pEndDayLastMonth, updateChart, pDateDiff, compare) {

    var formatDate = 'MM/DD/YYYY';
    var dataSaleChartDays = [];
    var dataSaleChartAmount = [];
    var dataSaleChartDaysCompare = [];
    var dataSaleChartAmountCompare = [];
    var dataOrderChartDays = [];
    var dataOrderChartValue = [];
    var dataOrderChartDaysCompare = [];
    var dataOrderChartValueCompare = [];

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var chartFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

    //date sale,order chart
    if (pDateDiff <= 31) {
        for (var d = moment(pFirstDayCurrentMonth) ; d <= moment(pEndDayCurrentMonth) ; d.add(1, 'days')) {
            var dateFormat = moment(d).format(formatDate);
            dataSaleChartDays.push(dateFormat);
            dataOrderChartDays.push(dateFormat);
        }

        if (compare) {
            for (var c = moment(pFirstDayLastMonth) ; c <= moment(pEndDayLastMonth) ; c.add(1, 'days')) {
                var dateFormatCompare = moment(c).format(formatDate);
                dataSaleChartDaysCompare.push(dateFormatCompare);
                dataOrderChartDaysCompare.push(dateFormatCompare);
            }
        }

    } else {
        for (var i = 0; i < 12; i++) {
            dataSaleChartDays.push(monthNames[i]);
            dataOrderChartDays.push(monthNames[i]);
            dataSaleChartDaysCompare.push(monthNames[i]);
            dataOrderChartDaysCompare.push(monthNames[i]);
        }
    }

    //data sale chart
    for (var keySaleChart in pDataSaleChartModel) {
        if (pDataSaleChartModel.hasOwnProperty(keySaleChart)) {
            dataSaleChartAmount.push(pDataSaleChartModel[keySaleChart]);
        }
    }

    //data order chart
    for (var keyOrderChart in pDataOrderChartModel) {
        if (pDataOrderChartModel.hasOwnProperty(keyOrderChart)) {
            dataOrderChartValue.push(pDataOrderChartModel[keyOrderChart]);
        }
    }

    if (compare) {
        //compare
        //data sale chart
        for (var keySaleChartCompare in pDataSaleChartCompareModel) {
            if (pDataSaleChartCompareModel.hasOwnProperty(keySaleChartCompare)) {
                dataSaleChartAmountCompare.push(pDataSaleChartCompareModel[keySaleChartCompare]);
            }
        }

        //data order chart
        for (var keyOrderChartCompare in pDataOrderChartCompareModel) {
            if (pDataOrderChartCompareModel.hasOwnProperty(keyOrderChartCompare)) {
                dataOrderChartValueCompare.push(pDataOrderChartCompareModel[keyOrderChartCompare]);
            }
        }
    }

    var dataSaleMade;
    if (compare) {
        dataSaleMade = {
            labels: dataSaleChartDays,
            datasets: [
                {
                    label: " Amount ($)",
                    backgroundColor: "rgba(92, 184, 92, 0.5)", // fill
                    borderColor: "rgba(92, 184, 92, 0.1)", // line
                    pointBackgroundColor: "rgba(92, 184, 92, 0.4)", // before hover
                    pointBorderColor: "#fff", // line storke color 
                    pointHoverBackgroundColor: "#5cb85c", // 
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    data: dataSaleChartAmount
                },
                {
                    label: " Amount ($)",
                    backgroundColor: "rgba(151,187,205,0.2)",
                    borderColor: "rgba(151,187,205,1)",
                    pointBackgroundColor: "rgba(151,187,205,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#C5CAE9",
                    pointHoverBorderColor: "rgba(151,187,205,1)",
                    data: dataSaleChartAmountCompare
                }
            ]
        };
    } else {
        dataSaleMade = {
            labels: dataSaleChartDays,
            datasets: [
                {
                    label: " Amount ($)",
                    backgroundColor: "rgba(92, 184, 92, 0.5)", // fill
                    borderColor: "rgba(92, 184, 92, 0.1)", // line
                    pointBackgroundColor: "rgba(92, 184, 92, 0.4)", // before hover
                    pointBorderColor: "#fff", // line storke color 
                    pointHoverBackgroundColor: "#5cb85c", // 
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    data: dataSaleChartAmount
                }
            ]
        };
    }

    var dataOrderMade;
    if (compare) {
        dataOrderMade = {
            labels: dataOrderChartDays,
            datasets: [
                {
                    label: " Orders",
                    backgroundColor: "rgba(92, 184, 92, 0.5)", // fill
                    borderColor: "rgba(92, 184, 92, 0.1)", // line
                    pointBackgroundColor: "rgba(92, 184, 92, 0.4)", // before hover
                    pointBorderColor: "#fff", // line storke color 
                    pointHoverBackgroundColor: "#5cb85c", // 
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    data: dataOrderChartValue
                },
                {
                    label: " Orders",
                    backgroundColor: "rgba(151,187,205,0.2)",
                    borderColor: "rgba(151,187,205,1)",
                    pointBackgroundColor: "rgba(151,187,205,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#C5CAE9",
                    pointHoverBorderColor: "rgba(151,187,205,1)",
                    data: dataOrderChartValueCompare
                }
            ]
        };
    } else {
        dataOrderMade = {
            labels: dataOrderChartDays,
            datasets: [
                {
                    label: " Orders",
                    backgroundColor: "rgba(92, 184, 92, 0.5)", // fill
                    borderColor: "rgba(92, 184, 92, 0.1)", // line
                    pointBackgroundColor: "rgba(92, 184, 92, 0.4)", // before hover
                    pointBorderColor: "#fff", // line storke color 
                    pointHoverBackgroundColor: "#5cb85c", // 
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    data: dataOrderChartValue
                }
            ]
        };
    }

    var optionSaleMade = {
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    lineWidth: 0.4,
                },
                ticks: {
                    beginAtZero: true,
                    fontFamily: chartFontFamily,
                    fontSize: 10,
                    fontStyle: "normal",
                    fontColor: "#666",
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    lineWidth: 0.4,
                },
                ticks: {
                    fontFamily: chartFontFamily,
                    fontSize: 10,
                    fontStyle: "normal",
                    fontColor: "#666",
                }
            }]
        },
        legend: {
            display: false,
        },
        responsive: false,
        maintainAspectRatio: true,
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    return " $" + tooltipItems.yLabel.toFixed(2).toString();
                }
            },
            enabled: true,
            mode: 'label',
            backgroundColor: "rgba(92, 184, 92, 1)",
            bodyFontFamily: chartFontFamily,
            bodyFontSize: 14,
            bodyFontStyle: "normal",
            bodyFontColor: "#fff",
            titleFontFamily: chartFontFamily,
            titleFontSize: 10,
            titleFontStyle: "bold",
            titleFontColor: "#fff",
            xPadding: 6,
            yPadding: 6,
            caretSize: 8,
            cornerRadius: 6
        }
    };

    var optionOrderMade = {
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    lineWidth: 0.4,
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 5,
                    fontFamily: chartFontFamily,
                    fontSize: 10,
                    fontStyle: "normal",
                    fontColor: "#666",
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    lineWidth: 0.4,
                },
                ticks: {
                    fontFamily: chartFontFamily,
                    fontSize: 10,
                    fontStyle: "normal",
                    fontColor: "#666",
                }
            }]
        },
        legend: {
            display: false,
        },
        responsive: false,
        maintainAspectRatio: true,
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    return " " + tooltipItems.yLabel.toString() + " Orders";
                }
            },
            enabled: true,
            mode: 'label',
            backgroundColor: "rgba(92, 184, 92, 1)",
            bodyFontFamily: chartFontFamily,
            bodyFontSize: 14,
            bodyFontStyle: "normal",
            bodyFontColor: "#fff",
            titleFontFamily: chartFontFamily,
            titleFontSize: 10,
            titleFontStyle: "bold",
            titleFontColor: "#fff",
            xPadding: 6,
            yPadding: 6,
            caretSize: 8,
            cornerRadius: 6
        }
    };

    var canvasSaleMadeChart;
    var canvasOrderMadeChart;
    var lineSaleChart;
    var lineOrderChart;
    //Clear
    if (updateChart) {
        $('#canvasSaleMadeChart').remove();
        $('#canvasOrderMadeChart').remove();
        $('#container-chart').append('<canvas id="canvasSaleMadeChart" data-bind="visible: report.chart.chartMade()"></canvas>' +
            '<canvas id="canvasOrderMadeChart" data-bind="visible: !report.chart.chartMade()"></canvas>');
    }
    canvasSaleMadeChart = document.getElementById("canvasSaleMadeChart");
    canvasOrderMadeChart = document.getElementById("canvasOrderMadeChart");

    lineSaleChart = new Chart(canvasSaleMadeChart, { type: 'line', data: dataSaleMade, options: optionSaleMade });
    lineOrderChart = new Chart(canvasOrderMadeChart, { type: 'line', data: dataOrderMade, options: optionOrderMade });

    if (updateChart) {
        var element = _.first($('#container-chart'));
        ko.cleanNode(element);
    }
    vmViewIndex.report.chart.updateChart(false);
    chkShowHideChart();
};

function chkShowHideChart() {
    if (vmViewIndex.report.chart.chartMade()) {
        $('#canvasSaleMadeChart').show();
        $('#canvasOrderMadeChart').hide();
    } else {
        $('#canvasSaleMadeChart').hide();
        $('#canvasOrderMadeChart').show();
    }
};

