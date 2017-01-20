/**
 * getLatLong function
 * -------------------------------------------------------------------------------------------------
 * Makes an ajax call to google maps to grab the relevant information from the user as a postal code.
 * From there it sets that information in an object and returns it for later use.
 * @param {String} zipcode - postal or zip code submitted by the user.
 * @return {Object} userLocation (address, latitude, longitude)
 */

function getLatLong(zipcode){
  var userLocation =  { };
  $.ajax({
    url : 'http://maps.googleapis.com/maps/api/geocode/json?address=morgantown&components=postal_code:' + zipcode,
    method: 'GET',

    success:function(data){
      userLocation.latitude = data.results[0].geometry.location.lat;
      userLocation.longitude = data.results[0].geometry.location.lng;
      userLocation.address = data.results[0].formatted_address;
    },

    error: function (jqXHR, textStatus, errorThrown) {
      if (jqXHR.status == 500) {
          console.log('Internal error: ' + jqXHR.responseText);
      } else {
          console.log('Unexpected error.');
      }
    },

    complete: function(){
      return userLocation;
    },
  });
}
