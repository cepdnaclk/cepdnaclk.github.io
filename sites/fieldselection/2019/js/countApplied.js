var appliedCount = {'Chem':0,'Civil':0,'Comp':0,'Elect':0,'Mech':0,'Manufac':0};

var appliedCounter = {
	getData : function(){

		var keyArray = Object.keys(cutoffGPA);
		//console.log('Starting to print');
		for(i=1;i<dataArray.length;i++){
			appliedCount[dataArray[i][3]] = appliedCount[dataArray[i][3]] +1;
		}

		console.log('Number of applied');
		console.dir(appliedCount);
		appliedCounter.drawChart();

	},
	drawChart : function(){
	}

};
