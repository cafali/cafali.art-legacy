particlesJS("particles-js", {
  particles: {
    number: { value: 20, density: { enable: true, value_area: 600 } },
    color: { value: "#00ff99" },
    shape: { type: "triangle" },
    opacity: { value: 0.5, random: true },
    size: { value: 9, random: true },
    move: { enable: true, speed: 1, direction: "none", out_mode: "out" }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } }
  }
});
