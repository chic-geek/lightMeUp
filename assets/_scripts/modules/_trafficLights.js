///////////////////////////////////////////////////////////
// Traffic lights
//

// - function for pinging a url
// - function for changing light to green
// - function for changing light to red
// - setInterval function for pinging every 10 seconds
// - plugin declaration

(function($) {

  $.fn.checkStatus = function(defaults) {

    var defaults = $.extend({
      url: '',
      refreshRate: '3000'
    }, defaults);

    // Ping url
    // ........................................................
    function pingUrl(url, refreshRate) {
      setInterval(function() {
        $.ajax({
          url: url,
          type: "GET",
          dataType: "json",
          statusCode: {
            200: function(data) {
              goGreen();
            }
          },
          error: function(xhr, status, errorThrown) {
            goRed();
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
          }
        });
      }, refreshRate)
    }
    pingUrl(defaults.url, defaults.refreshRate);


    // what happens when we all good...
    // ........................................................
    function goGreen() {
      console.log('We have lift off!');
      $('.m_traffic-light-red').removeClass('is-active');
      $('.m_traffic-light-green').addClass('is-active');
    }


    // error! error!
    // ........................................................
    function goRed() {
      console.log('Houston... We have a problem!');
      $('.m_traffic-light-red').addClass('is-active');
      $('.m_traffic-light-green').removeClass('is-active');
    }
  };

}(jQuery));


//
// ........................................................
$(document).ready(function() {
  $('.m_traffic-lights').checkStatus('data/data.json', 10000);
});
