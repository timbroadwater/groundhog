// Document Ready JS
$(function(){
  // this will take some time to populate, so might want to think about some call back here.
  // var userInfo = getLatLong('26554');

  var data = testAjaxData('26554');
});



// Theoretical, isn't working yet.
// The goal is to get back temp data from the dataset
// not getting any data back from the supplied zip code yet, but may have errors.
// if zip code deosn't work, I'll work on passing the information another way.
function testAjaxData(zipcode){
  $.ajax({
    url: 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data',
    headers: { token: 'QPuEobODufxVhKNDEtwNjxgPcFSwPOWS'},
    data: {
      datasetid: 'GHCND',
      datatypeid: 'TMAX',
      locationid: 'ZIP:(' + zipcode +  ')',
      startdate:'2015-02-02', // YYYY-MM-DD
      enddate: '2015-03-16', // YYYY-MM-DD
    },
    success:function(data){
      console.log(JSON.stringify(data));
      return data;
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
