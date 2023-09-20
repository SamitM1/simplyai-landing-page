// Style navbar at the top and hide background
const nav = $('[navbar="global"]');
const navBG = $('[navbar="background"]');
const navLogo = $('[navbar="logo"]');
const navBlog = $('[navbar-blog="true"]');
const navLabel = $('[navbar="label"]');

function navbarChange() {
  let scrollPos = $(window).scrollTop();

  if (scrollPos <= 80) {
    // nav.height(100);
    navBG.css("opacity", "0");
    navBlog.css("color", "black");
    navLabel.css("filter", "invert(1)");
  } else {
    // nav.height(80);
    navBG.css("opacity", "1");
    navBlog.css("color", "white");
    navLabel.css("filter", "invert(0)");
  }
}

window.onload = function () {
  // run on load
  navbarChange();
  // run on scroll
  window.onscroll = function () {
    navbarChange();
  };
};

// BLOG - Change label on hover HOME <> BLOG
navLogo
  .mouseover(function () {
    navLabel.html("HOME");
  })
  .mouseout(function () {
    navLabel.html("BLOG");
  });
