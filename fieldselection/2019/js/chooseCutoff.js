var cutoffGPA = {'Chem':4,'Civil':4,'Comp':4,'Elect':4,'Mech':4,'Manufac':4};

var markCutoff = {
	getData : function(){

		var keyArray = Object.keys(cutoffGPA);
		//console.log('Starting to print');
		for(i=1;i<dataArray.length;i++){
			for(x=0;x<keyArray.length;x++){
				if(dataArray[i][3]==keyArray[x]){
					//console.log(dataArray[i][3] + ' '+ keyArray[x]);
					if(parseFloat(dataArray[i][2])<cutoffGPA[keyArray[x]]){
						//console.dir(cutoffGPA);
						//console.log(dataArray[i][2]);
						cutoffGPA[keyArray[x]] = parseFloat(dataArray[i][2]);
					}
				}
			}
		}

		//console.dir(dataArray);
		console.dir(cutoffGPA);
		markCutoff.updateCards();

	},
	updateCards : function(){
		document.getElementById('chemClass').children[0].innerText = cutoffGPA.Chem;
		document.getElementById('civilClass').children[0].innerText = cutoffGPA.Civil;
		document.getElementById('compClass').children[0].innerText = cutoffGPA.Comp;
		document.getElementById('electClass').children[0].innerText = cutoffGPA.Elect;
		document.getElementById('mechClass').children[0].innerText = cutoffGPA.Mech;
		document.getElementById('prodClass').children[0].innerText = cutoffGPA.Manufac;
	}

};
