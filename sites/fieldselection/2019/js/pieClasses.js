var classDistirbution = {'Chem':{'F':0,'SU':0,'SL':0,'O':0},'Civil':{'F':0,'SU':0,'SL':0,'O':0},'Comp':{'F':0,'SU':0,'SL':0,'O':0},'Elect':{'F':0,'SU':0,'SL':0,'O':0},'Mech':{'F':0,'SU':0,'SL':0,'O':0},'Manufac':{'F':0,'SU':0,'SL':0,'O':0}};
var processedClasses = [];

var piClasses = {

	getClass : function(gpa){
		if(gpa>3.65){
			return 'F';
		}else if(gpa>3.25){
			return 'SU';
		}else if(gpa > 2.95){
			return 'SL';
		}else{
			return 'O';
		}
	},

	countGPA : function(rankid,gpaid,fieldid,N){

		console.log(rankid);
		console.log(gpaid);
		console.log(fieldid);

		var fields = Object.keys(fullAllocation);
		classDistirbution = {'Chem':{'F':0,'SU':0,'SL':0,'O':0},'Civil':{'F':0,'SU':0,'SL':0,'O':0},'Comp':{'F':0,'SU':0,'SL':0,'O':0},'Elect':{'F':0,'SU':0,'SL':0,'O':0},'Mech':{'F':0,'SU':0,'SL':0,'O':0},'Manufac':{'F':0,'SU':0,'SL':0,'O':0}};

		//iterate throught all the elements upto N
		for(var i=1;i<N;i++){
			//console.log(i);
			//Get the current line from the dataArray
			var singleData = dataArray[i];

			//add to the current Allocation
			var currentField = singleData[fieldid];
			var currentGPA = parseFloat(singleData[gpaid]);
			var currentClass = piClasses.getClass(currentGPA);
			classDistirbution[currentField][currentClass] = classDistirbution[currentField][currentClass] +1;

		}
		console.dir(classDistirbution);

		for(var i=0;i<fields.length;i++){
			// draw pi charts one by one
			var curField = fields[i];
			var series = [{'name':'First Class GPA','y':classDistirbution[curField]['F']}, {'name':'Second Upper GPA','y':classDistirbution[curField]['SU']},{'name':'Second Lower GPA','y':classDistirbution[curField]['SL']},{'name':'Other GPA','y':classDistirbution[curField]['O']}];
			//console.dir(series);
			piClasses.drawGraph(series,curField);
			processedClasses.push({'field':curField,'data':series});
		}

		//making the series object

		// var series = [];
		// var keys = Object.keys(currentAllocation);
		// for(i=0;i<keys.length;i++){
		// 	var percent = 100*(parseFloat(currentAllocation[keys[i]])/parseFloat(fullAllocation[keys[i]]));

		// 	series.push({'name':keys[i],data:[currentAllocation[keys[i]],percent]});
		// }
		// console.dir(series);
		// topGPA.drawGraph(series);



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

		//I should analyze all
		var count = dataArray.length;

		piClasses.countGPA(rankid,gpaid,fieldid,count);


	},
	drawGraph : function(series,container){
		$(function () {
			console.dir(series);
			var newSeries = [{
		            name: 'Students',
		            colorByPoint: true,
		            data: series
		        }];

		    console.dir(series);

		    Highcharts.chart(container, {
		    	 colors: ['#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],

		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false,
		            type: 'pie'
		        },
		        title: {
		            text: container+' field'
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: newSeries
		    });
		});
	},


};
