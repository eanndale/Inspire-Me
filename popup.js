 function() {
      var quotes = [
          "text1",
          "Text2",
          "text3",
          "text4"
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML = '<p>' + quote + '</p>';
}
