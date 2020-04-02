
var filename = "scatterData.txt";

var imageFolder = 'images/'
var factor = 0.2; //Image resize factor

// font names
var fontNamesFile = 'fontNames.txt';
var fontNameData = "";
var fontDirList = [];

//Labels
var labelFileName = 'labels.txt';
var labelRaw = "";
var labelArray = [];

//Data file one

var datafile1Name = 'size1.txt';
var data1Raw = "";
var dataArray1 = [];


//Data file two

var datafile2Name = 'size2.txt';
var data2Raw = "";
var dataArray2 = [];




var scatterData = [];
var allDataFromFile = "";
var dataArray = [];
var usableData = [];
var data = []; //data that actually used to plot scatter plot
var seriesData = [];

var fileReader = {
    handleFileNames : function(){
        var array = fontNameData.split('\n');
        console.dir(array);
        for(var i=0;i<array.length;i++){
            if(array[i].length>0){
                fontDirList.push(array[i]);
            }
        }
        console.dir(fontDirList);
    },

    handleLabels : function(){
        var array = labelRaw.split('\n');
        for(var i=0;i<array.length;i++){
            if(array[i].length>0){
                labelArray.push([]);
                var columns = array[i].split(',');
                for(var j=0;j<columns.length;j++){

                    if(columns[j].length>0){
                        labelArray[i].push(columns[j]); 
                    }
                }
            }
        }
        console.dir(labelArray);
    },

    handleData1 : function(){
        var array = data1Raw.split('\n');
        for(var i=0;i<array.length;i++){
            if(array[i].length>0){
                dataArray1.push([]);
                var columns = array[i].split(',');
                for(var j=0;j<columns.length;j++){

                    if(columns[j].length>0){
                        dataArray1[i].push(parseInt(columns[j])); 
                    }
                }
            }
        }
        console.dir(dataArray1);
    },

    handleData2 : function(){
        var array = data2Raw.split('\n');
        for(var i=0;i<array.length;i++){
            if(array[i].length>0){
                dataArray2.push([]);
                var columns = array[i].split(',');
                for(var j=0;j<columns.length;j++){

                    if(columns[j].length>0){
                        dataArray2[i].push(parseInt(columns[j])); 
                    }
                }
            }
        }
        console.dir(dataArray2);
    },


    read : function(){


        //Reading the font names
        var rawFile1 = new XMLHttpRequest();
        
        rawFile1.open("GET", fontNamesFile, false);
        rawFile1.onreadystatechange = function (){
                    if(rawFile1.readyState === 4){
                        if(rawFile1.status === 200 || rawFile1.status == 0){
                                fontNameData = rawFile1.responseText;
                                //console.log(fontNameData);
                                fileReader.handleFileNames();
       
        //Reading labels
        var rawFile2 = new XMLHttpRequest();
        
        rawFile2.open("GET", labelFileName, false);
        rawFile2.onreadystatechange = function (){
                    if(rawFile2.readyState === 4){
                        if(rawFile2.status === 200 || rawFile2.status == 0){
                                labelRaw = rawFile2.responseText;
                                //console.log(allDataFromFile);
                                fileReader.handleLabels();

        //Reading data1
                var rawFile3 = new XMLHttpRequest();
                
                rawFile3.open("GET", datafile1Name, false);
                rawFile3.onreadystatechange = function (){
                            if(rawFile3.readyState === 4){
                                if(rawFile3.status === 200 || rawFile3.status == 0){
                                        data1Raw = rawFile3.responseText;
                                        //console.log(allDataFromFile);
                                        fileReader.handleData1();


                        // Handle datafile2
                        var rawFile4 = new XMLHttpRequest();
                        
                        rawFile4.open("GET", datafile2Name, false);
                        rawFile4.onreadystatechange = function (){
                                    if(rawFile4.readyState === 4){
                                        if(rawFile4.status === 200 || rawFile4.status == 0){
                                                data2Raw = rawFile4.responseText;
                                                //console.log(allDataFromFile);
                                                fileReader.handleData2();
                                                


                                                //After handling all the files, I can go to draw the chart

                                                fileReader.handleDataAll();



                                        }
                                    }
                        }
                        rawFile4.send(null);






                                }
                            }
                }
                rawFile3.send(null);






                        }
                    }
        }
        rawFile2.send(null);




                        }
                    }
        }
        rawFile1.send(null);


        

        




    },
    initialize : function () {
        fileReader.read();
    },
    createSeries : function (){
        // I should Iterate until I have fonts

        for(var i=0;i<fontDirList.length;i++){

            // This is an entry for series
            var tempData = [];
            for(var j=0;j<dataArray1[i].length;j++){
                tempData.push([dataArray1[i][j],dataArray2[i][j]]);
            }

            seriesObj = {}; //{name: 'Bindumathi',color: 'rgba(223, 83, 83, .5)', data: data}
            seriesObj.name = fontDirList[i];
            seriesObj.data = tempData
            seriesData.push(seriesObj);
        }

        console.dir(seriesData);
    },
    handleDataAll : function(){
        fileReader.createSeries();
        plotter.plotChart();
        //parser.parseToJSON();
        //graph.plotGPA();
        //student.enableDropdownForSubjects();
        
        //resultUpdater.getResutlRankings();

        
    }



};




var plotter = {

    plotChart : function () {

        function formatterFunc(){
            xval = this.x;
            yval = this.y;
            seriesName = this.series.name;
            seriesIndex = -1;
            labelIndex = -1;

            searchDataArray = [];
            // search in series array
            // get the series
            for(i=0;i<fontDirList.length;i++){
                if(fontDirList[i]==seriesName){
                    seriesIndex = i;
                    break;
                }
            }

            // iterate through series

            for(var i=0;i<seriesData.length;i++){
                if(seriesData[i].name == seriesName){
                    searchDataArray = seriesData[i].data;
                    break;
                }
            }
            for(i=0;i<searchDataArray.length;i++){
                if(searchDataArray[i][0]===xval && searchDataArray[i][1]===yval){
                    labelIndex = i;
                    break;
                }
            }
            newx = xval*factor;
            newy = yval*factor;
            imageSrc = imageFolder+'/'+this.series.name+'/'+labelArray[seriesIndex][labelIndex];
            var htmlText = '<div>'+this.series.name+'</div><div style="width:'+newy+'px;height:'+newx+'px;"><img class="tooltipImage" src="'+imageSrc+'"></img><div>'+'Height: '+xval+'</div><div>'+'Width: '+yval+'</div></div>';
            // console.log(htmlText);

            return htmlText;

        }

        Highcharts.chart('container', {
            chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
            title: {
                text: 'Classification of Sinhala characters based on width and height'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                borderWidth: 1
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Height (pixels)'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Width (pixels)'
                }
            },
            tooltip: {
                backgroundColor: null,
                borderWidth: 0,
                shadow: true,
                useHTML: true,
                style: {
                    padding: 0
                },
                formatter: formatterFunc
            },
               series: seriesData
            // series: [{
            //     name: 'Bindumathi',
            //     color: 'rgba(223, 83, 83, .5)',
            //     data: data
            // }]
        });
    }

    // plotChart : function () {
    //     Highcharts.chart('container', {
    //         chart: {
    //             type: 'scatter',
    //             zoomType: 'xy'
    //         },
    //         title: {
    //             text: 'Classification of Sinhala Characters based on Height and Width'
    //         },
    //         subtitle: {
    //             text: 'Source: Heinz  2003'
    //         },
    //         xAxis: {
    //             title: {
    //                 enabled: true,
    //                 text: 'Height (pixels)'
    //             },
    //             startOnTick: true,
    //             endOnTick: true,
    //             showLastLabel: true
    //         },
    //         yAxis: {
    //             title: {
    //                 text: 'Width (pixels)'
    //             }
    //         },
    //         legend: {
    //             layout: 'vertical',
    //             align: 'left',
    //             verticalAlign: 'top',
    //             x: 100,
    //             y: 70,
    //             floating: true,
    //             backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
    //             borderWidth: 1
    //         },
    //         plotOptions: {
    //             scatter: {
    //                 marker: {
    //                     radius: 5,
    //                     states: {
    //                         hover: {
    //                             enabled: true,
    //                             lineColor: 'rgb(100,100,100)'
    //                         }
    //                     }
    //                 },
    //                 states: {
    //                     hover: {
    //                         marker: {
    //                             enabled: false
    //                         }
    //                     }
    //                 },
    //                 tooltip: {
    //                     //headerFormat: '<b>{series.name}</b><br>',
    //                     pointFormat: '{point.x} cm, {point.y} kg',
                      
    //                     shared: true,
    //                     useHTML: true
    //                 }
    //             }
    //         },
    //         series: [{
    //             name: 'Bindumathi',
    //             color: 'rgba(223, 83, 83, .5)',
    //             data: data,
    //                 tooltip: {
    //                     formatter: function() {
    //                         return '{point.x} cg, {point.y} kg';
    //                     }
    //                 }

    //             }]
    //         });
    // }


};


fileReader.initialize();