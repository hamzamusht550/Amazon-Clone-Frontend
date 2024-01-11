const navShow = document.querySelector("#navLogo i")
const navShowPC = document.querySelector("#navAll")
const navClose = document.querySelector(".navClose-btn")
const sideNav = document.querySelector(".sideNav")

navShow.addEventListener("click", () => {
  sideNav.style.left = '0'
  document.querySelector("html").style.overflow = 'hidden'
  document.querySelector(".sideNav-right").style.background = 'rgba(0,0,0, .7)'
})

navShowPC.addEventListener("click", () => {
  navClose.style = 'position: absolute; left: 16vw; top: -10vh;'
  sideNav.style.left = '0'
  document.querySelector(".left-2nd").style.boxShadow = 'inset -2px 5px 20px 6px #00000038'
  document.querySelector(".signin").style = 'float: left;'
  document.querySelector(".sideNav-left").style.width = '25vw'
  document.querySelector(".sideNav-right").style.width = '0'
})

navClose.addEventListener("click", () => {
  sideNav.style.left = '-100vw'
  document.querySelector("html").style.overflow = 'auto'
  document.querySelector(".sideNav-right").style.background = 'transparent'
})

