 window.onload = function() {
      var quotes = [
          "\"The worst you can do is fail\"",
          "\"Find your passion\"",
          "\"Just live. Be strong. Move on.\"",
          "\"We create our own deamons\" -Tony Stark"
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML = quote;
};
