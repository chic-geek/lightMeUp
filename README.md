# Project: Newsnow.co.uk Coding Challenge

### The challenge:
In object­oriented JavaScript, and using HTML, CSS and preferably jQuery, create a traffic light object that achieves the following:

* The object renders a traffic light on the web page, like the one shown above
* Every 10 seconds the object checks a URL (e.g. "/status") and retrieves the HTTP status code of the response
* If the status code is 200, the green light is illuminated and the red light is dimmed
* If the status code is not 200 or there is a timeout or other error, the green light is dimmed and the red light is illuminated and set flashing
* One can place multiple objects on the same page monitoring different URLs
* The object should include a function for triggering fetching the URL, which can be executed via the JavaScript console or via a future button onclick handler.

### Need to know:
This project uses a few different npm modules and bower to handle front-end dependencies. To get started, `cd` into root and simply run `npm i` and `bower i`.

Now everything is installed, run `gulp pipeline` to set up the styles and scripts. Use `gulp pipeline-serve` to execute the previous command but with the added extra server running on port `8081`.
