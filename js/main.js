const modal = document.querySelector(".modal");
const previewImg = document.querySelectorAll(".gallery img");
const originalImg = document.querySelector(".ill-full-image");
const imageText = document.querySelector(".caption");

// const test = document.getElementById("frank")


// console.log(test.getAttribute("data-original"));

previewImg.forEach((preview) =>{
    preview.addEventListener("click", () =>{
        modal.classList.add("open");
        originalImg.classList.add("open");

        const originalSource  = preview.getAttribute("data-original");
        originalImg.src = `images/${originalSource}`;

        const captionText = preview.alt;
        imageText.innerHTML = captionText;
    });
});

modal.addEventListener('click', (e) =>{
    if(e.target.classList.contains('modal')){
        modal.classList.toggle("open");
        originalImg.classList.remove("open");
        originalImg.src = '';
    }
});
