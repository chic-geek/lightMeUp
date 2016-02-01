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
  $('.m_traffic-lights').checkStatus({
    url:'data/data.json',
    refreshRate: 3000
  });
});
