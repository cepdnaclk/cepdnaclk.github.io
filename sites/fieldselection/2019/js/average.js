var averageFind = {
	count : function(rankid,gpaid,fieldid,N){

		//console.log(rankid);
		//console.log(gpaid);
		//console.log(fieldid);

		var fields = Object.keys(fullAllocation);

		//GPA average data
		var gpaData = {'Chem':{'count':0,'sum':0},'Civil':{'count':0,'sum':0},'Comp':{'count':0,'sum':0},'Elect':{'count':0,'sum':0},'Mech':{'count':0,'sum':0},'Manufac':{'count':0,'sum':0}};

		//iterate throught all the elements upto N
		for(var i=1;i<N;i++){
			//console.log(i);
			//Get the current line from the dataArray
			var singleData = dataArray[i];

			//add to the current Allocation
			var currentField = singleData[fieldid];
			var gpa = parseFloat(singleData[gpaid]);


			gpaData[currentField]['count'] =gpaData[currentField]['count']+1; //increase the count
			gpaData[currentField]['sum'] =gpaData[currentField]['sum']+gpa;

		}
		console.dir(gpaData);

		//making the series object

		var categories = fields;
		var series = [];

		for(var i=0;i<categories.length;i++){
			var currentField = categories[i];
			var tmp = {};
			tmp['name'] = currentField;
			tmp['data']	= [gpaData[currentField]['sum']/gpaData[currentField]['count']];
			series.push(tmp);
		}

		averageFind.drawGraph(series);


	},
	getData : function() {
		// dataArray contains all the raw data
		//first element is the table topics
		var topics = dataArray[0];

		//find the rank column
		var rankid = topics.indexOf('Rank');

		//find the GPA column
		var gpaid = topics.indexOf('GPA');

		//find provided field
		var fieldid = topics.indexOf('Prov Field');

		//find the current selected value

		var N = dataArray.length; //I should consider all the people
		averageFind.count(rankid,gpaid,fieldid,N);


	},
	drawGraph : function(series){
		console.log('----------');
		console.dir(series);
		$(function () {
		    Highcharts.chart('averageGraph', {
		        chart: {
		            type: 'bar'
		        },
		        title: {
		            text: 'Average GPA'
		        },
		        subtitle: {
		            text: 'Average GPA of assigned students of each field'
		        },
		        xAxis: {
		            categories: ['Average GPA'],
		            crosshair: true
		        },
		        yAxis: {
		            min: 2,
		            max:4,
		            title: {
		                text: 'Students'
		            }
		        },
		        
		        plotOptions: {
		            bar: {
		                pointPadding: 0.2,
		                borderWidth: 0,
		                dataLabels: {
                    		enabled: true
                		}
		            },tooltip: {
		            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		                '<td style="padding:0"><b>{point.y.toFixed(2)} mm</b></td></tr>',
		            footerFormat: '</table>',
		            shared: true,
		            useHTML: true
		            
		        }
		        },
		        series: series
		    });
		});
	}



};
