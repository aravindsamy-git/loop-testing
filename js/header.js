const menuButton = document.getElementById('toggle-button');
const menuButton1 = document.getElementById('toggle-button1');
const menuContainer = document.getElementById('menus');
const closeButton = document.getElementById('close-button');
const header = document.getElementById('header');

menuButton.addEventListener('click', () => {
    menuContainer.classList.add('active');
    menuContainer.style.transform = 'translate3d(0, 0, 0)';
});

closeButton.addEventListener('click', () => {
    menuContainer.style.transform = 'translate3d(100%, 0, 0)';
    setTimeout(() => {
        menuContainer.classList.remove('active');
    }, 500);
});

menuButton1.addEventListener('click', () => {
    menuContainer.classList.add('active');
    menuContainer.style.transform = 'translate3d(0, 0, 0)';
});

closeButton.addEventListener('click', () => {
    menuContainer.style.transform = 'translate3d(100%, 0, 0)';
    setTimeout(() => {
        menuContainer.classList.remove('active');
    }, 500);
});

window.addEventListener('resize', checkScreenWidth);

function checkScreenWidth() {
    const menus = document.getElementById('menus');
    const header = document.getElementById('header');

    if (window.innerWidth > 1010) {
        menus.classList.remove('active');
        menus.style.transform = 'translate3d(100%, 0, 0)';
    }
}

checkScreenWidth();


function redirection(targetId) {
    let redirectUrl;
    switch (targetId) {
      case "logo":
        redirectUrl = "/";
        break
      case "overview":
        redirectUrl = "/";
        break;
      case "plans":
        redirectUrl = "/plans";
        break;
      case "about":
        redirectUrl = "/about";
        break;
      case "signup":
        redirectUrl = "/signup";
        break;
      case "login":
        redirectUrl = "/login";
        break
      default:
        console.error(`Invalid element ID: ${targetId}`);
        return;
    }
  
    window.location.href = redirectUrl;
  }
  
