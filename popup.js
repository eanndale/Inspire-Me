 window.onload = function() {
      var quotes = [
          "\"Girls we are human beings. We crack, we fall, and we bleed. But we always, always stand back up.\"",
          "\"Find your passion\"",
          "\"Just live. Be strong. Move on.\"",
          "\"We create our own deamons\" -Tony Stark"
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML = quote;
};
