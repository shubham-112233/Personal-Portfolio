document.querySelectorAll(".nav-links li").forEach(item => {
    item.addEventListener("click", function () {
      // Remove 'active' from all tabs
      document.querySelectorAll(".section").forEach(section => {
        section.style.display = "none";
      });
  
      // Get section ID from text (assuming li text = section id like 'about', 'resume')
      const id = this.textContent.trim().toLowerCase();
  
      const sectionToShow = document.getElementById(id);
      if (sectionToShow) {
        sectionToShow.style.display = "block";
        sectionToShow.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  