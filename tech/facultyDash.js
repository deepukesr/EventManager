function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button') && !event.target.matches('.dropdown-button *')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
  };
  



  
  
  // Initialize the calendar when the DOM is loaded
  document.addEventListener('DOMContentLoaded', initCalendar);
  
  document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.querySelector(".sign-in-button");
  
    if (signInButton) {
        signInButton.addEventListener("click", function () {
            window.location.href = "login.html"; // Replace with your actual file name
        });
    }
  });
  


  
  
  
  

 