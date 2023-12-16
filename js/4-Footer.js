const backToTop = document.querySelector(".backToTop")

backToTop.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"})
})

// Make sure to add "Dot" before scrollButtonName.
function scrollBtn(scrollButtonName) {

  document.querySelectorAll(scrollButtonName).forEach( (scrollButtonChild) => {
    scrollButtonChild.addEventListener("click", () => {

      switch (true) {
        case scrollButtonChild.className.includes("left") === true :
          scrollButtonChild.parentNode.children[3].scrollLeft -=600;
          break;

        case scrollButtonChild.className.includes("right") === true :
          scrollButtonChild.parentNode.children[3].scrollLeft +=600;
          break;
      }

    })
  })

}

scrollBtn(".btnLeft")
scrollBtn(".btnRight")

