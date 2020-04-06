
$("ul").on('click', 'li', function () {
  var obj = this.textContent;
  
  if(obj==="ALL"){
	  plotChart(allmarks);
	  resetPredictions();
	  return;
  }
  console.log(obj);
  $("#prediction")[0].scrollIntoView();
  
  var currentmarks;
  var totalmarks;
  var tmparray=[];
  var newSeries=[];
  //finding marks
  for(var i=0;i<allmarks.length;i++){
	  
          console.log(allmarks[i].data);	  
	  if(allmarks[i].name === obj){
		  currentmarks = allmarks[i].data;
		  newSeries.push(allmarks[i]);
		  //console.log("found",allmarks[i]);
	  }
	  if(allmarks[i].name.toLowerCase() === "maximum"){
		  totalmarks = allmarks[i].data;
		  newSeries.push(allmarks[i])
		  //console.log("total",allmarks[i]);
	  }else{
		var len = allmarks[i].data.length;
	    tmparray.push(allmarks[i].data[len-1]);
	  
	  }
  }
  console.log(tmparray);
  //calculation part
  var current = currentmarks[currentmarks.length-1]; console.log(current);
  var total = totalmarks[totalmarks.length-1]; console.log(total);
  var currentPrecentage = (current/total)*100;  console.log(currentPrecentage);
  var predicted = currentPrecentage;
  var maxmark = 100-(total-current); console.log(maxmark);
  var position = tmparray.sort(function(a, b){return b-a}).indexOf(current)+1; console.log(position);
  
  $("#cmarks")[0].innerText=current+"/"+total;
  $("#cpercentage")[0].innerText=Number(currentPrecentage).toFixed(2)+"%";
  $("#cposition")[0].innerText=position+"/"+tmparray.length;
  $("#ptotal")[0].innerText=Number(predicted).toFixed(2)+"/100";
  $("#mtotal")[0].innerText=maxmark+"/100";
  
  //plotting data
  plotChart(newSeries.reverse());
  
  //console.log(allmarks);
});

function resetPredictions(){
  $("#cmarks")[0].innerText=0;
  $("#cpercentage")[0].innerText=0;
  $("#cposition")[0].innerText=0;
  $("#ptotal")[0].innerText=0;
  $("#mtotal")[0].innerText=0;
}
