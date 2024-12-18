document.getElementById("paymentButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
  });
  
  document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
  
  // Close the popup if clicked outside of it
  window.addEventListener("click", function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
  