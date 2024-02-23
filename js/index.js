const herosection = document.getElementById('herosection')
const herosectioni = document.getElementById('herosection-i')

function heightassign() {
  const headerHeight = header.offsetHeight;
  herosectioni.style.height = `calc(100vh - ${headerHeight}px)`;
  herosection.style.height = `calc(100vh - ${headerHeight}px)`;
}

heightassign();
window.addEventListener('resize', heightassign);


function scrolltotop() {
  const targetPixelPosition = 1;
  window.scroll({ top: targetPixelPosition, left: 0, behavior: 'smooth' });
}
