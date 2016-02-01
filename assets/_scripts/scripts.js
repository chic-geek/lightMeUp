///////////////////////////////////////////////////////////
// File: Modules
//

// includes
// ........................................................
//= require ../_lib/jquery/dist/jquery.min.js
//= require modules/_trafficLights.js


// document ready
// ........................................................
$(document).ready(function() {

  // should return 200
  $('[data-module="trafficLight-01"]').checkStatus({
    url:'data/data.json',
    refreshRate: 10000
  });

  // will error on purpose, file name is incorrect
  $('[data-module="trafficLight-02"]').checkStatus({
    url:'data/dat.json',
    refreshRate: 3000
  });
});
