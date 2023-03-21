const initApp = () => {
    const humburgerBtn = document.getElementById('humburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        humburgerBtn.classList.toggle('toggle-btn')
    }


    humburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp);


// const tnslider = tns({
//     container: '.slider',
//     slideBy:1,
//     speed: 700,
//     nav: true,
//     navPosition: "bottom",
//     autoPlay : true,
//     autoPlayTimeout: 7000,
//     autoPlayButtonOutput: false,
//     constrolsContainer: "#controls",
//     prevButton: ".previous",
//     nextButton: '.next',
  
  
//   });

var slider = tns({
    container: '.slider',
    autoplay:true,
    speed:1000,
    autoplayText: false,
    edgePadding: 0,
    
    autoplayButtonOutput:false,
    items: 2,
    gutter: 15,
    controls: false,
    nav:false,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 3
      },
      700: {
        gutter: 30
      },
      900: {
        items: 4
      }
    }
  });