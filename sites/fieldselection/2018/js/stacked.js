

var stackedData = {
	getDataAndProcess : function(){
		var classes =  classDistirbution;
		var classListofFields = processedClasses;

		var fields = Object.keys(fullAllocation);

		var categories = fields; //for drawing graph

		
		//
		var firstClassData = [];
		for(var i=0;i<categories.length;i++){
			firstClassData.push(classes[categories[i]]['F'])
		}

		var SUClassData = [];
		for(var i=0;i<categories.length;i++){
			SUClassData.push(classes[categories[i]]['SU'])
		}
		var SLClassData = [];
		for(var i=0;i<categories.length;i++){
			SLClassData.push(classes[categories[i]]['SL'])
		}

		var OClassData = [];
		for(var i=0;i<categories.length;i++){
			OClassData.push(classes[categories[i]]['O'])
		}

		var series = [{'name':'Other','data':OClassData},{'name':'Second Lower','data':SLClassData},{'name':'Second Upper','data':SUClassData},{'name':'First Class','data':firstClassData}];
		console.log('This is series');
		console.log(series);
		stackedData.drawGraph(categories,series);

	},

	drawGraph : function(categories,series){

		//stackedData.getDataAndProcess();

		$(function () {
		    Highcharts.chart('stackedGraph', {
		        chart: {
		            type: 'bar'
		        },
		        title: {
		            text: 'Class distribution of each fields (Number of students)'
		        },
		        xAxis: {
		            categories: categories
		        },
		        yAxis: {
		            min: 0,
		            title: {
		                text: 'Total students'
		            }
		        },
		        legend: {
		            reversed: true
		        },
		        plotOptions: {
		            series: {
		                stacking: 'normal'
		            }
		        },
		        series: series
		    });
		});
	},


};