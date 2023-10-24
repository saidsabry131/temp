                   
let left = document.getElementById("btn-left");
let right = document.getElementById("btn-right");
let image = document.querySelectorAll(".image-item");
let start = 0;
let end = (image.length - 1 ) * 100;



function handleRightBtn() {
    if (start >= -end + 100) {
        start= start - 100;
    }
    image.forEach(element => {
        element.style.transform = `translateX(${start}%)`;
    })

}
function handleLeftBtn() {
    if (start < 0) {
        start = start + 100;
    }
    image.forEach(element => {
        element.style.transform = `translateX(${start}%)`;
    })
}

right.addEventListener("click", handleRightBtn)

left.addEventListener("click", handleLeftBtn)

