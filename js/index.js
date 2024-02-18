const herosection = document.getElementById('herosection')
const herosectioni = document.getElementById('herosection-i')

function heightassign() {
  const headerHeight = header.offsetHeight;
  herosectioni.style.height = `calc(100vh - ${headerHeight}px)`;
  herosection.style.height = `calc(100vh - ${headerHeight}px)`;
}

heightassign();
window.addEventListener('resize', heightassign);

