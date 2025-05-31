document.addEventListener("DOMContentLoaded", function () {
      AOS.init();

      // Animate progress bars on scroll into view
      const progressBars = document.querySelectorAll(".progress-bar");

      function animateProgressBars() {
        progressBars.forEach(bar => {
          const value = bar.getAttribute("data-width");
          bar.style.width = value;
          bar.style.transition = "width 1.5s ease-in-out";
        });
      }

      // Use Intersection Observer to trigger animation once
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateProgressBars();
            obs.disconnect(); // run only once
          }
        });
      });

      observer.observe(document.querySelector("#skills"));
    });
    //readme tougle button

    document.querySelectorAll('.read-more-toggle').forEach(button => {
      button.addEventListener('click', function () {
        const cardText = this.closest('.card-text');
        const shortText = cardText.querySelector('.short-text');
        const fullText = cardText.querySelector('.full-text');

        shortText.classList.toggle('d-none');
        fullText.classList.toggle('d-none');

        this.textContent = this.textContent === 'Read more' ? 'Read less' : 'Read more';
      });
    });

//menu toggle button
const menubtn = document.getElementById("btn");
menubtn.addEventListener("click", () => {
    const dropdown = document.getElementById("drdn");
    if (dropdown.classList.contains("d-flex")) {
        dropdown.classList.add("d-none");
        dropdown.classList.remove("d-flex");
    }
    else {
        dropdown.classList.remove("d-none");
        dropdown.classList.add("d-flex", "dropdown");
    }
})