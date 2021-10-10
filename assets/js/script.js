
(function () {
  "use strict";


  var tnt = $(window);


  // *******************************
  // :: 1.0 Preloader Active Code
  // *******************************

  tnt.on('load', function () {
    $('#preloader').fadeOut('1000', function () {
      $(this).remove();
    });
  });





  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)




  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });


  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  window.addEventListener("load", function () {

    showPopup();
    // setTimeout(function(){
    //   loginPopup.classList.add("show");
    // },5000)

  })


  function showPopup() {
    const timeLimit = 1 // seconds;
    let i = 0;
    const timer = setInterval(function () {
      i++;
      if (i == timeLimit) {
        clearInterval(timer);
        loginPopup.classList.add("show");
      }
      console.log(i)
    }, 1000);
  }

  close.addEventListener("click", function () {
    loginPopup.classList.remove("show");
  })



  







})()

