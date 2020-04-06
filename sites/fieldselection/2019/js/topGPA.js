var topGPA = {
	countGPA : function(rankid,gpaid,fieldid,N){

		console.log(rankid);
		console.log(gpaid);
		console.log(fieldid);

		var fields = Object.keys(fullAllocation);
		currentAllocation = {'Chem':0,'Civil':0,'Comp':0,'Elect':0,'Mech':0,'Manufac':0};

		//iterate throught all the elements upto N
		for(var i=1;i<=N;i++){
			//console.log(i);
			//Get the current line from the dataArray
			var singleData = dataArray[i];

			//add to the current Allocation
			var currentField = singleData[fieldid];
			currentAllocation[currentField] = currentAllocation[currentField]+1;

		}
		console.dir(currentAllocation);

		//making the series object

		var series = [];
		var keys = Object.keys(currentAllocation);
		for(i=0;i<keys.length;i++){
			var percent = 100*(parseFloat(currentAllocation[keys[i]])/parseFloat(fullAllocation[keys[i]]));

			series.push({'name':keys[i],data:[currentAllocation[keys[i]],percent]});
		}
		console.dir(series);
		topGPA.drawGraph(series);



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

		var dropdown = document.getElementById('topGPA');
		var N = dropdown.selectedIndex;
		var data = dropdown.item(N).innerText;
		data = parseFloat(data);
		var count = 0;
		for(var i=1;i<dataArray.length;i++){
			if(dataArray[i][gpaid] >=data){
				count = count+1;
			}else{
				break;
			}
		}

		console.log("GPA greater than "+data+ " is "+count);

		topGPA.countGPA(rankid,gpaid,fieldid,count);


	},
	drawGraph : function(series){
		$(function () {
		    Highcharts.chart('graphContainer', {
		        chart: {
		            type: 'column'
		        },
		        title: {
		            text: 'Allocation of Top Students Based on GPA'
		        },
		        subtitle: {
		            text: 'Total Number of students allocated for each field and the percentage of maximum allocation'
		        },
		        xAxis: {
		            categories: [
		                'Number of Students assigned for the field','Number of Students / Maximum Allocation'
		            ],
		            crosshair: true
		        },
		        yAxis: {
		            min: 0,
		            title: {
		                text: 'Students'
		            }
		        },
		        
		        plotOptions: {
		            column: {
		                pointPadding: 0.2,
		                borderWidth: 0
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
