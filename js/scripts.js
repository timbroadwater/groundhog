// Document Ready JS
$(function(){
  // this will take some time to populate, so might want to think about some call back here.
  // var userInfo = getLatLong('26554');

  var data = testAjaxData('15201');
});



// Theoretical, isn't working yet.
// The goal is to get back temp data from the dataset
// not getting any data back from the supplied zip code yet, but may have errors.
// if zip code deosn't work, I'll work on passing the information another way.
function testAjaxData(zipcode){
        $.ajax({
                type: 'GET',
                url: 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data',
                headers: { token: 'QPuEobODufxVhKNDEtwNjxgPcFSwPOWS'},
                data: {
                        datasetid: 'GSOM',
                        datacategoryid: 'TEMP',
                        locationid: 'FIPS:54',
                        startdate:'2015-02-02', // YYYY-MM-DD
                        enddate: '2015-03-16', // YYYY-MM-DD
                        limit:15
                },
                success:function(data){
                        console.log("JSON --> " + JSON.stringify(data));
                },

                error: function (jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status == 500) {
                          console.log('Internal error: ' + jqXHR.responseText);
                        } else {
                          console.log('Unexpected error.');
                        }
                },

                complete: function(){
                        console.log('call callback function here')
                },
        });
}