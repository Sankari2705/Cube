//side menu
let sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-180px";
}


//Load Image

const mainImage =  document.getElementById("mainImg");
const smallImgGroup = document.querySelectorAll(".small-img");

smallImgGroup.forEach(img =>{
  img.onclick = () =>{
    mainImage.src = img.src;
    smallImgGroup.forEach(t =>
      t.classList.remove("active"));
      img.classList.add("active");
  };
});


//Default Subscribe

window.onload = function(){
  radioBtnSingle.checked = true;
  singleFragDetail.style.display = "block";
  bestSellerBtn.checked = true; //Choose fragrance
};

//Subscribe button

const radioBtnSingle = document.getElementById("radio-btn-single");
const radioBtnDouble = document.getElementById("radio-btn-double");

const singleFragDetail = document.getElementById("fragranceSingle");
const doubleFragDetail = document.getElementById("fragranceDouble");


const bestSellerBtn = document.getElementById("single-bestSeller");
const bestSellerBtn1 = document.getElementById("double-original");
const bestSellerBtn2 = document.getElementById("second-original");


radioBtnSingle.addEventListener("change", () =>{
  singleFragDetail.style.display = "block";
  doubleFragDetail.style.display = "none";
  radioBtnDouble.checked = false;
});

radioBtnDouble.addEventListener("change", () =>{
  doubleFragDetail.style.display = "block";
  singleFragDetail.style.display = "none";
  bestSellerBtn1.checked = true; //Choose fragrance1 
  bestSellerBtn2.checked = true; //Choose fragrance2
  
});


//Signature scents

document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".boxes").forEach(box => {
      box.classList.remove("active");
      box.querySelector(".toggle-btn").textContent = "+";
    });

    const box = btn.closest(".boxes");
    box.classList.add("active");
    btn.textContent = "−";
  });
});

