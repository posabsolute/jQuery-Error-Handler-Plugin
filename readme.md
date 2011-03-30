# jQuery error capturing plugin

This jQuery plugin send an email when a javascript error is triggered. 
Specially useful in big web application where you want to know if users hit javascript errors.

A php mail example is given with this plugin, but it could also be easily logged in a database 

## Integration

Load the plugin just after the jQuery library

      $(document).jsErrorHandler();



## Options

You can define some options.

By default the plugin automatically fetch the domain and add it to the email subject, but you can overwrite it.
You can also define a from, I would highly recommend that you change the from setting in the plugin file (jquery.onerror.js)  if your going to use this plugin on multiple websites.

     $(document).jsErrorHandler({
        from: "support@youremail.com",
		website: document.domain
     });


## The Email

The email received will look like this:

A javascript error has been detected on www.position-absolute.com

Message: variable is not defined
Url: http://www.position-absolute.com/creation/onerror/
Line: 21

## Limitation

The plugin works on 
Firefox 3.6+
Safari latest
Chrome Latest

