
const boxes = document.querySelectorAll("aside div");
const btn = document.querySelector(".generatebtn");
// Function to generate random HEX color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
btn.addEventListener("click",()=>{
    boxes.forEach(box => {
        let clr=getRandomColor();
       box.style.backgroundColor=clr;
       box.innerText=clr;
    });
    
})

// copy
boxes.forEach(box => {
  box.addEventListener("click", () => {
    const colorCode = box.innerText; // get color code
    navigator.clipboard.writeText(colorCode); // copy to clipboard

    const originalText = box.innerText;
    box.innerText = "Copied!";
    box.style.color = "#fff";
    box.style.transition = "0.5s";

    // // Reset after 1 second
    setTimeout(()=>{
        box.innerText=originalText;
        box.style.color="#000";
    },500);
  });
});