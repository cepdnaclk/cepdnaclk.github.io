
var file = "marks.csv";
var assignements;
var lines;
var allmarks=[];
(function getFile(){
    $.get(file,function(txt){
        lines = txt.split("\n");
		assignements = lines[0].split(",").slice(1); //assignements from first line
		var marks = lines.slice(1);
        for (var i = 0; i < marks.length; i++) {
			var oneMark = marks[i].split(",");
			//if not empty line
			if(oneMark.length == assignements.length +1){
				var obj = {};
				obj.name = oneMark[0]; //extracting name
				if(!(obj.name.toLowerCase()==="maximum")){
						$("#dropdown").append( '<li><a href="#">' + obj.name + '</a></li>' );//appending names
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
		
		plotChart(allmarks);
		
    }); 
})();


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
