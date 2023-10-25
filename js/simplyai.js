if (window.innerWidth > 991) {
  // Set up your timeline
  const timeline = gsap.timeline();
  const markersToggle = false;
  const scrollTrigger = ".ai-hero_videos";
  const customEase = CustomEase.create("custom", "M0,0 C0,0 0,1 1,1 ");

  // Video Size
  // timeline.to(".ai-hero_videos-frame", {
  //   scrollTrigger: {
  //     trigger: ".ai-video",
  //     start: "top 25%",
  //     end: "top top",
  //     scrub: true,
  //     ease: customEase,
  //     markers: markersToggle,
  //   },
  //   minWidth: "100dvw",
  //   minHeight: "100dvh",
  //   top: "0",
  //   borderRadius: "0",
  // });

  // Video Deco
  // timeline.to(".ai-hero_video-deco-bg, .ai-hero_video-deco-line", {
  //   scrollTrigger: {
  //     trigger: scrollTrigger,
  //     start: "top 25%",
  //     end: "top top",
  //     scrub: true,
  //     ease: customEase,
  //     markers: markersToggle,
  //   },
  //   opacity: "0",
  // });

  // Video Loop
  timeline.to(".ai-video", {
    scrollTrigger: {
      trigger: ".ai-video",
      start: "top 15%",
      end: "top top",
      scrub: true,
      ease: customEase,
      markers: markersToggle,
    },
    width: "100%",
    height: "100%",
    opacity: "0.05",
  });

  // // Content
  // timeline.fromTo(
  //   "[ai-video-teaser-title]",
  //   {
  //     opacity: "0",
  //     scale: "1.25",
  //   },
  //   {
  //     opacity: "1",
  //     scale: "1",
  //     scrollTrigger: {
  //       trigger: scrollTrigger,
  //       start: "20% 40%",
  //       end: "20% top",
  //       scrub: true,
  //       ease: customEase,
  //       markers: markersToggle,
  //     },
  //   }
  // );

  // Video Mask
  // timeline.to("[ai-video-teaser-title]", {
  //   scrollTrigger: {
  //     trigger: scrollTrigger,
  //     start: "60% center",
  //     end: "70% center",
  //     scrub: true,
  //     ease: customEase,
  //     markers: markersToggle,
  //   },
  //   filter: "blur(10rem)",
  // });

  // Text Blur
  timeline.to(".ai-video.is-mask", {
    scrollTrigger: {
      trigger: scrollTrigger,
      start: "60% center",
      end: "70% center",
      scrub: true,
      ease: customEase,
      markers: markersToggle,
    },
    opacity: "1",
  });

  // Glow
  timeline.fromTo(
    ".section_ai-details-img",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".section_ai-details-img",
        start: "top 75%",
        end: "top 25%",
        scrub: true,
        ease: customEase,
        markers: markersToggle,
      },
    }
  );

  // Time Savers
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  const phrases = [
    "research any topic faster",
    "generate human-like text",
    "condense articles",
    "summarize videos",
    "summarize PDFs",
    "summarize images",
    "craft tailored quizzes",
    "learn anything"
  ];

  const el = document.querySelector("[ai-time-savers] > span");
  const fx = new TextScramble(el);

  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2000);
    });
    counter = (counter + 1) % phrases.length;
  };

  next();
}


gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray("#special").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 50%",
    end: "bottom 1%",
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});
gsap.to(".nav_bg", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".nav_bg",  // Triggers the animation based on this element's position
    start: "top -90%",    // Start the animation when the top of the element is 75% from the top of the viewport
    end: "top 25%",      // End the animation when the top of the element is 25% from the top of the viewport
    scrub: true,         // Make the animation play smoothly with the scroll
  }
});




