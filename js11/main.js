var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
$(function(){
    $('#submit').click(function(){
        calcRoute();
    });
    calcRoute();
    initialize();
});
// initialize the Google Map API.
function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var Mumbai = new google.maps.LatLng(19.075984, 72.877656);
    var mapOptions = {
        zoom:15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: Mumbai
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    directionsDisplay.setMap(map);
}

//Find the Start and End Destination on google Map
function calcRoute() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var request = {
        origin:start,
        destination:end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}