const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nvmenu');
const nvlogo = document.querySelector('#nvlogo');

//display mobile menu//

    const mobilemenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    };

    menu.addEventListener('click', mobilemenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem= document.querySelector('.highlight')
    const homeMenu= document.querySelector('#home-page')
    const portofolioMenu= document.querySelector('#portofolio-page')
    const aboutMenu= document.querySelector('#about-page')
    const educationtMenu= document.querySelector('#education-page')
    const contactMenu= document.querySelector('#contact-page')
    let scrolPos = wiindwo.scrollY
    //adds highlight class to my menu
    
    
}



