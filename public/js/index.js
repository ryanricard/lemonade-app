$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://api.lemonade.targetrad.com/location/today',
        dataType: 'json'
    }).done(function (data) {
        var standLocation = new google.maps.LatLng(data.lat, data.long);

        var mapOptions = {
          center: standLocation,
          zoom: 15
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);


        var marker = new google.maps.Marker({
            position: standLocation,
            map: map
        });

        var content = '<div id="info-window">' + data.description + '</div>';
        var infoWindow = new google.maps.InfoWindow({ content: content });
        infoWindow.open(map, marker);
    });
});