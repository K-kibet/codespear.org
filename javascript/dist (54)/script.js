let mainHeading = document.getElementById('mainHeading')
window.addEventListener("resize", e => {
  if (window.innerWidth < 768) mainHeading.innerHTML = 'JS'
  else mainHeading.innerHTML = 'JavaScript'
});