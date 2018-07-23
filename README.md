# Adblock Detection Script (JavaScript)
JavaScript function to detect the presence of an ad blocker. More info in the blog post on [AdGlare Ad Server](https://www.adglare.com/kb/45/adblock-detection-script-incredibly-simple-and-effective).

##Usage
Include the JS file, and then call the function `hasAdblock`.

##Example
<script src='adblock-detection-script.js'></script>
<script>
  if(hasAdblock()) {
    //do something
  } else {
    //do something
  }
  </script>
