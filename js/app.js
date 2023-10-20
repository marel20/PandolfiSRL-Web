(function(){
    const listElements = document.querySelectorAll('.menu_item--show');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburguer');


    const addClick = () => {
        listElements.forEach(element => {
            element.addEventListener('click', () => {

                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu_item--active');

                if (window.innerWidth > 800) {
                    height = 100;
                } else {
                    if (subMenu.clientHeight === 0) {
                        height = subMenu.scrollHeight;
                    } 
   
                    subMenu.style.height = `${height}px`;
                }

            });
        });
    }

    const deleteStyleHeight = () =>{
        listElements.forEach(element => {
            if (element.children[1].getAttribute('style')) {
                element.children[1].removeAttribute('style');
                element.classList.remove('menu_item--active');
            }
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            deleteStyleHeight();
            if(list.classList.contains('menu_links--show'))
            list.classList.remove('menu_links--show');
        } else {
            addClick();
        }
    });

    if (window.innerWidth <= 800) {
        addClick()
    }

    menu.addEventListener('click', () => list.classList.toggle('menu_links--show'));

})();


// btn-up
window.addEventListener('scroll', btnUp)

function btnUp() {
    const nav = document.getElementById('nav')
if(window.scrollY > nav.offsetHeight + 2100) {
    this.document.getElementById('up').style.display = 'block';
} else {
    document.getElementById('up').style.display = 'none';
}
}


$(".option").click(function(){
    $(".option").removeClass("active-projects");
    $(this).addClass("active-projects");
    
});

//Hero effect
var handleScroll = function() {
    // Get the height of the hero section
    var heroHeight = document.querySelector('#hero').offsetHeight;
    var diagonal = document.querySelector('.hero-diagonal polygon');
    // Calculate the skew value
    var skew = (window.scrollY / heroHeight) * 100;
    // Assign the skew value to the polygon points attr
    // The value needs to be set as an array
    diagonal.setAttribute('points', [0,100, 100, skew, 100,100]);
  }
  window.addEventListener("scroll", handleScroll);

   /*---------- Start Picture Galery --------*/
   $(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });

  /*-------- End Picture Galery ----------*/