  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function () {
      scrollFunction()
  };

  function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.getElementById("navbar").style.height = "75px";
          document.getElementById("navbar").style.padding = "10px";
          document.getElementById("navbar").style.backgroundColor = "#FFFFFFE5";
          document.getElementById("logo").className = "text-light text-center";

      } else {
          document.getElementById("navbar").style.padding = "5px";
          document.getElementById("navbar").style.height = "125px";
          document.getElementById("logo").className = "display-1 text-light text-center";
      }
  }