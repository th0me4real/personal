// Fade in project elements as they come into view
const projects = document.querySelectorAll(".project");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px",
    threshold: 0.5,
  }
);

projects.forEach((project) => {
  observer.observe(project);
});
