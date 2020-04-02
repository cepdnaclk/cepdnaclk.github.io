

var fileReader = {
	read : function(){
		var rawFile = new XMLHttpRequest();
		
		rawFile.open("GET", dataFile, false);
		rawFile.onreadystatechange = function (){
		        	if(rawFile.readyState === 4){
		            	if(rawFile.status === 200 || rawFile.status == 0){
		                		allDataFromCSV = rawFile.responseText;
		                		//console.log(allDataFromCSV);
		           			fileReader.handleData();
		           		}
		        	}
		}
		rawFile.send(null);
	},
	initialize : function () {
		fileReader.read();
	},
	splitData : function () {
		// split data and put it into an array
		var array = allDataFromCSV.split('\n');
		//console.dir(array);
		// check whether it has data

		if(array.length>2){
			// I can process

			for(var i=0;i<array.length;i++){
				var row = array[i].split(',');
				// console.dir(row);
				// console.log(row[3].length);
				if(row.length > 1){
					dataArray.push(row);
				}
			}

		}
		console.dir(dataArray);
	},

	fillTopN : function(){

		var dropdown = document.getElementById('topN');

		if(dropdown.getElementsByTagName('option').length < 1){
			for(var i = 1; i < dataArray.length; i++) {
			    var opt = document.createElement('option');
			    opt.innerHTML = String(i);
			    opt.value = i;
			    dropdown.appendChild(opt);
			}
		}
		//select the top 100
		dropdown.getElementsByTagName('option')[99].selected = true;

		topN.getData();
		dropdown.onchange = topN.getData;

	},

	fillTopGPA : function(){

		var dropdown = document.getElementById('topGPA');

		if(dropdown.getElementsByTagName('option').length < 1){
			for(var i = 4; i >= 0.05; i=i-0.05) {
			    var opt = document.createElement('option');
			    opt.innerHTML = i.toFixed(2);
			    opt.value = i;
			    dropdown.appendChild(opt);
			}
		}
		//select the top 100
		dropdown.getElementsByTagName('option')[6].selected = true;

		topGPA.getData();
		dropdown.onchange = topGPA.getData;

	},

	handleData : function(){
		fileReader.splitData();
		fileReader.fillTopN();
		fileReader.fillTopGPA();
		piClasses.getData();
		stackedData.getDataAndProcess(); //since piClasses calculate the class distirbution, I can directly call stacked data draw chart
		averageFind.getData(); //find the average

		
	}



};


fileReader.initialize(); //main point that enters the functions
