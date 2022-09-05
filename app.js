// const lodePhone = () => {
//   const url = " https://openapi.programming-hero.com/api/phones?search=iphone";
//   fetch(url)
//     .then((rest) => rest.json())
//     .then((data) => console.log(data.data));
// };

// lodePhone();

console.log('hello')
const lodePhone = async (searchText , dataLemit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data , dataLemit);
  console.log(data.data)
};
const displayPhone = (phones , dataLemit) => {
  const phoneContner = document.getElementById("display-phone");
  phoneContner.textContent = "";
  //   only 18 phone shoiw

  const morButton  = document.getElementById("mor-buttom");
  if (phones.length > dataLemit){
    phones = phones.slice(0, dataLemit);
    morButton.classList.remove('d-none')
  }
  else{
    morButton.classList.add('d-none')
  }
  //phone scearch not fund
  const nophone = document.getElementById("no-phone");
  if (phones.length === 0) {
    nophone.classList.remove("d-none");
  }
  //all phone
  else {
    nophone.classList.add("d-none");
  }
//loop and cret html
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
    <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="" />
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">
               ${phone.brand}
            </p>
        </div>
    </div>
    `;
    phoneContner.appendChild(phoneDiv);
  });

  //stop loder
  toggoleSpring(false);
};

const toggoleSpring = (loding) => {
 const logingSpring = document.getElementById('loding-spring')
  if (loding) {
    logingSpring.classList.remove("d-none");
  } else {
    logingSpring.classList.add("d-none");
  }
};

const processSerch = (dataLemit)=> {
   //start loder
   toggoleSpring(true);
   const searchValue = document.getElementById("phone-search-input");
   const searchRasult = searchValue.value;
   lodePhone(searchRasult , dataLemit);
    //  console.log(searchRasult);
}

document.getElementById("Phone-Search-btn").addEventListener("click", () => {
  processSerch(18)
});

document.getElementById('show-all').addEventListener('click', ()=>{
  processSerch();
})
