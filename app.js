//Import the required modules
var turf = require( "turf" ),
    fs = require('fs'),
    path = require('path')

console.log('loading points');

var data = fs.readFileSync('e-stations.json');

data = JSON.parse(data);

var stations = data.fuel_stations.map(function(station) {

    return {"type":"Feature","properties":{"access_days_time":station.access_days_time,"city":station.city,"station_name":station.station_name,"station_phone":station.station_phone,street_address: station.street_address},"geometry":{"type":"Point","coordinates":[station.longitude,station.latitude]}}

});

var geoJson = {"type":"FeatureCollection","features":stations};
  
fs.writeFileSync('e-stations.geojson', JSON.stringify(geoJson));

console.log('done! happy mapping!');




