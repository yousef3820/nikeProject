window.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.querySelector("#main-img img");
  const imageWrappers = document.querySelectorAll("#slider > div");
  function animateImageChange(newSrc) {
    if (mainImage.src.endsWith(newSrc)) return;
    mainImage.style.opacity = "0";
    mainImage.style.transform = "scale(0.95)";
    setTimeout(() => {
      mainImage.src = newSrc;
      mainImage.style.opacity = "1";
      mainImage.style.transform = "scale(1)";
    }, 300);
  }
  imageWrappers.forEach((wrapper) => {
    const img = wrapper.querySelector("img");

    wrapper.addEventListener("click", () => {
      animateImageChange(img.src);
      imageWrappers.forEach((w) => {
        w.classList.remove("ring-2", "ring-red-400", "rounded-md");
        w.style.transform = "scale(1)";
      });

      wrapper.classList.add("ring-2", "ring-red-400", "rounded-md");
      wrapper.style.transform = "scale(1.1)";
    });

    wrapper.addEventListener("mouseenter", () => {
      if (!wrapper.classList.contains("ring-2")) {
        wrapper.style.transform = "scale(1.05)";
      }
    });

    wrapper.addEventListener("mouseleave", () => {
      if (!wrapper.classList.contains("ring-2")) {
        wrapper.style.transform = "scale(1)";
      }
    });
  });

  imageWrappers[0].classList.add("ring-2", "ring-red-400", "rounded-md");
  imageWrappers[0].style.transform = "scale(1.1)";

  mainImage.style.transition = "all 0.3s ease-in-out";
  mainImage.style.opacity = "1";

  // Mobile menu functionality
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });

  // Close menu when clicking on a link
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    });
  });
  // Animate counting numbers
  const countElements = document.querySelectorAll(".animate-count");

  countElements.forEach((element) => {
    const target = parseInt(element.getAttribute("data-target"));
    let current = 0;
    const increment = target / 100;

    const updateCount = () => {
      if (current < target) {
        current += increment;
        element.textContent = Math.ceil(current).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = target.toLocaleString();
      }
    };

    updateCount();
  });
  // Intersection Observer for fade-in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  // Observe the Products section
  observer.observe(document.querySelector("#Products"));
  const qualityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  qualityObserver.observe(document.querySelector("#quality-section"));
  const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  servicesObserver.observe(document.querySelector("#services"));

  const offerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });
  offerObserver.observe(document.querySelector("#special-offer"));

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  footerObserver.observe(document.querySelector("#footer > div"));

  const sectionsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  document.querySelectorAll("#testimonials, #newsletter").forEach((section) => {
    sectionsObserver.observe(section);
  });
});
