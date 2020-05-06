
var file = "marks.csv";
var namefile = "names.csv";
var assignements;
var lines;
var allmarks=[];
var stackedMarks = [];
var namesArray = [];
(function getFile(){
    $.get(file,function(txt){
        lines = txt.split("\n");
		assignements = lines[0].split(",").slice(1); //assignements from first line
		var marks = lines.slice(1);

		var arrayTofillDropDown = [];
        for (var i = 0; i < marks.length; i++) {
			var oneMark = marks[i].split(",");
			
			if(oneMark.length == assignements.length+1){
				//console.dir(oneMark);
				var obj = {}
				obj.name = oneMark[0];
				obj.data = oneMark.slice(1).map(parseFloat);
				stackedMarks.push(obj);
			}
			//if not empty line
			if(oneMark.length == assignements.length +1){
				var obj = {};
				obj.name = oneMark[0]; //extracting name
				if(!(obj.name.toLowerCase()==="maximum")){
						arrayTofillDropDown.push(obj.name);
				}
				var data = oneMark.slice(1).map(parseFloat); //extracting marks
				
				if(data.length>1){
					for(var x=1;x<data.length;x++){
						data[x] = data[x]+data[x-1];
						data[x]= parseFloat(data[x].toFixed(4));	
					}
				}
				obj.data = data; //saving marks
				allmarks[i] = obj;
			}
            
        }
		
        //sort E numbers
        arrayTofillDropDown = arrayTofillDropDown.sort();
        for(var i=0;i<arrayTofillDropDown.length;i++){
        	$("#dropdown").append( '<li><a href="#">' + arrayTofillDropDown[i] + '</a></li>' );//appending names
        }

		plotChart(allmarks);
		drawStacked(stackedMarks,false);
		$('#sortcheck').click(function() {
			if(this.checked){
				drawStacked(stackedMarks,true);
			}else{
				drawStacked(stackedMarks,false);
			}
			//
		})
		
    }); 
})();


(function getFileName(){
    $.get(namefile,function(txt){
                        console.dir(txt);
        var lines = txt.split("\n");
                var _ = lines[0].split(","); //assignements from first line
                var names = lines.slice(1);

        for (var i = 0; i < names.length; i++) {
			if (names[i].length != 0){
                        	var linex = names[i];
                        	console.dir(linex);
				var line = linex.split(",");

                        //if not empty line
				if(line.length == 2){
                                	var obj = {};
                               	 	obj.eNo = line[0]; //extracting name
					obj.name= line[1];                              
					namesArray.push(obj);
                	        }
			}

        }
});

})();

function getName(eno){
	for (var i = 0; i < namesArray.length; i++){
		if (namesArray[i].eNo == eno)
			return namesArray[i].name;
	}
	return "";
}




function getSum(total, num) {
    return total + num;
}
//numbers.reduce(getSum);





function drawStacked(dataIn,sorted){
		//console.dir(data);
		var categorylist = [];
		var seriesSet = [];
		var data=JSON.parse(JSON.stringify(dataIn));
		if(sorted){
			console.log('going to sort array');
			// I am going to do the insertion sort
			data = data.sort(function(a, b) {
			    return  b.data.reduce(getSum) - a.data.reduce(getSum);
			});

		}


		for(var i=0;i<data.length;i++){
			categorylist.push(data[i].name);
		}
		for(var i = assignements.length-1 ;i>=1;i--){
			var obj = {};
			obj.name = assignements[i];
			obj.data = [];
			for(var j=0;j<data.length;j++){
				obj.data.push(data[j].data[i]);
			}
			seriesSet.push(obj);

		}
		console.dir(seriesSet);

		$('#stacked').highcharts({
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text:  'Total Marks',
	    },
	    xAxis: {
	        categories: categorylist
	    },
	    yAxis: {
	        min: 0,
	        title: {
	            text: 'Total marks'
	        }// },
	        // stackLabels: {
	        //     enabled: false,
	        //     style: {
	        //         fontWeight: 'bold',
	        //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
	        //     }
	        // }
	    },
	    legend: {
	        align: 'right',
	        x: -30,
	        verticalAlign: 'top',
	        y: 25,
	        floating: true,
	        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
	        borderColor: '#CCC',
	        borderWidth: 1,
	        shadow: false
	    },
	    tooltip: {
	        formatter: function() {
	        	total = getTotal(this.x);
	        	position = getPosition(this.x);
			var name = getName(this.x);

	        	console.dir(name);
	        	imagePath = '"photos/'+this.x.toLowerCase().split('/').join('')+'.jpg"';
	        	if(this.x.toLowerCase() == 'maximum'){
	        		imagePath = "photos/maximum.jpg";
	        	}
	        	console.log(imagePath);
	        	
		        return '<b>'+this.series.name +'</b> '+ this.y + '<br>Total '+total+'<br>Position '+position+'<br><img class="tooltipImage" src='+imagePath+'>'+'<br><center><b>' + this.x + '</b></center><center><b>' + name + '</b></center>';
		    },
		    useHTML: true
	    },
	    plotOptions: {
	        column: {
	            stacking: 'normal',
	            dataLabels: {
	                enabled: false,
	                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
	            }
	        },
	        series: {
	            point: {
	                events: {
	                    click: function () {
	                        console.dir(this.category);
	                        drawLinechart(this.category)
	                    }
	                }
	            }
        	}
	    },
	    series: seriesSet
	});
}






function plotChart(data){
			$('#container').highcharts({
				title: {
					text: 'Cumulative Marks',
					x: -20 //center
				},
				subtitle: {
					text: 'CO222 - Programming Methodology',
					x: -20
				},
				xAxis: {
					categories: assignements
				},
				yAxis: {
					title: {
						text: 'Marks (%)'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},
				tooltip: {
					valueSuffix: '%'
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: data
			});

}


