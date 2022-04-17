window.onload = () => {
  const transition = document.querySelector(".transition");

  transition.classList.remove("is-active");

  const links = document.querySelectorAll("a.transition");

  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    console.log(link);

    link.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;
      console.log(target);

      transition.classList.add("is-active");

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  }
};

function verifyLogin() {
  const username = document.getElementById("username").value;
  if (username.length < 6) {
    document.getElementById("yes").style.opacity = "0";
    document.getElementById("no").style.opacity = "1";
  } else {
    document.getElementById("no").style.opacity = "0";
    document.getElementById("yes").style.opacity = "1";
  }
}

function activateSlider() {
  if (document.getElementById("slider").style.transform == "translateX(100%)") {
    document.getElementById("slider").style.transform = "translateX(0%)";
    document.getElementById("bgslider").style.width = "50px";
    document.querySelector(".login").style.backgroundColor = "floralwhite";
  } else {
    document.getElementById("slider").style.transform = "translateX(100%)";
    document.getElementById("bgslider").style.width = "100%";
    document.querySelector(".login").style.backgroundColor = "#4e4e4e";
  }
}

function hamOverlay() {
  var line1 = document.querySelector(".hamline1");
  var line2 = document.querySelector(".hamline2");
  var line3 = document.querySelector(".hamline3");
  var overlay = document.querySelector(".overlayham");
  var content = document.querySelector(".container");
  if (line2.style.opacity != "0") {
    overlay.style.right = "0";
    line2.style.opacity = "0";

    line1.style.top = "50%";
    line3.style.top = "50%";

    line1.style.transform = "translateY(-50%) rotate(45deg)";
    line3.style.transform = "translateY(-50%) rotate(-45deg)";

    content.style.opacity = "0.6";
  } else {
    overlay.style.right = "-20%";
    line2.style.opacity = "1";

    line1.style.transform = "rotate(0deg)";
    line3.style.transform = "rotate(0deg)";

    line1.style.top = "0";
    line3.style.top = "100%";

    content.style.opacity = "1";
  }
}

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    productsVisible() {
      if (this.counter == 0) {
        document.getElementById("counter").style.opacity = "1";
      }

      if (this.counter != 99) {
        this.counter++;
      }
    },
  },
}).mount("#app");
