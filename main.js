const numOneColor = document.querySelectorAll(".num__one-color");

numOneColor.forEach((element) => {
  element.addEventListener("click", () => {
    const style = window.getComputedStyle(element);

    document.body.style.backgroundColor = style.backgroundColor;
  });
});

const numTwoColor = document.querySelectorAll(".num__two-color"),
  squares = document.querySelectorAll(".square");

numTwoColor.forEach((element) => {
  element.addEventListener("click", () => {
    const style = window.getComputedStyle(element);

    squares.forEach((square) => {
      square.style.backgroundColor = style.backgroundColor;
    });
  });
});
