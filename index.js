const plus1 = document.getElementById("plus1");

const plus2 = document.getElementById("plus2");

const plus3 = document.getElementById("plus3");

const moins1 = document.getElementById("moins1");

const moins2 = document.getElementById("moins2");

const moins3 = document.getElementById("moins3");

const quantity = document.getElementsByClassName("quantity");

function plus(quan) {
  let q = parseInt(quan.textContent);

  if (isNaN(q)) {
    console.error("The current value is not a valid number.");
    q = 0; //
  }

  q++;

  return (quan.textContent = `${q}`);
}
function moins(quan) {
  let q = parseInt(quan.textContent);

  if (isNaN(q)) {
    console.error("The current value is not a valid number.");
    q = 0; //
  }

  q--;

  if (q < 0) {
    q = 0;
  }

  return (quan.textContent = `${q}`);
}
plus1.addEventListener("click", () => {
  plus(quantity[0]);
  price();
});
plus2.addEventListener("click", () => {
  plus(quantity[1]);
  price();
});
plus3.addEventListener("click", () => {
  plus(quantity[2]);
  price();
});

moins1.addEventListener("click", () => {
  moins(quantity[0]);
  price();
});

moins2.addEventListener("click", () => {
  moins(quantity[1]);
  price();
});

moins3.addEventListener("click", () => {
  moins(quantity[2]);
  price();
});

function price() {
  const totalPrice = document.getElementById("total");

  let p1 = parseInt(quantity[0].textContent) * 100;
  let p2 = parseInt(quantity[1].textContent) * 20;
  let p3 = parseInt(quantity[2].textContent) * 50;

  let p = p1 + p2 + p3;

  return (totalPrice.textContent = `${p} $`);
}

const del1 = document.getElementById("del1");
const del2 = document.getElementById("del2");
const del3 = document.getElementById("del3");

const card = document.getElementsByClassName("card");


del1.addEventListener('click', ()=>{
     card[0].style.display = 'none';
     quantity[0].textContent = '0';
     price();
     
})
del2.addEventListener('click', ()=>{
    card[1].style.display = 'none';
    quantity[1].textContent = '0';
     price();
    
})
del3.addEventListener('click', ()=>{
    card[2].style.display = 'none';
    quantity[2].textContent = '0';
     price();
    
})





