
var navigation = document.getElementById("nav");
var menuToggle = document.getElementById("menu-toggle");
var links = document.getElementById("nav-links");
menuToggle.addEventListener("click", function () {
    links.classList.toggle("show");
    if (links.classList.contains("show")) {
        navigation.classList.add("SmallHeight");
        navigation.classList.add("gap");
    } else {
        navigation.classList.remove("SmallHeight");
        navigation.classList.remove("gap");
    }
});



function toggleSwitch() {
    var ball = document.getElementById('ball');

    document.body.classList.toggle('darkMode');

    if (document.body.classList.contains("darkMode")) {
        ball.src = "https://img.icons8.com/?size=100&id=54382&format=png&color=FA5252"; 
    } else {
        ball.src = "https://img.icons8.com/?size=100&id=GIywaBFJCJiI&format=png&color=FA5252";
    }
}



// var aboutOffSet = document.getElementById("about").offsetTop;

// window.addEventListener("scroll", function () {
//   var scrollTop = window.scrollY;

//   if (scrollTop > aboutOffSet - 70) {
//     document.querySelector("nav").style.backgroundColor = "rgb(56,56,56)";
//   } else {
//     document.querySelector("nav").style.backgroundColor = "transparent";
//   }
// });



var tabs = document.querySelectorAll(".tab");
for (var i = 0 ; i < tabs.length ; i++) { 
    tabs[i].addEventListener("click", function () {
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}


var Menu = [
    { name: "Cappuccion", price: "$12", description: "a classic Italian coffee drink made with equal parts espresso, steamed milk, and milk foam." },
    { name: "Americano", price: "$15", description: "simple coffee drink made by diluting a shot (or more) of espresso with hot water." },
    { name: "Macchiato", price: "$20", description: "made by pulling a shot of rich espresso and then “staining” it with just a small amount of foamed milk (for an Espresso Macchiato) or steamed milk (for a Latte Macchiato)." },
    { name: "Mocha", price: "$20", description: "rich coffee-based drink that combines espresso, steamed milk, and chocolate (usually cocoa powder or chocolate syrup)." },
    { name: "Piccolo Latte", price: "$15", description: "small, concentrated coffee drink made with a single espresso shot and topped with warm, silky milk, usually served in a small glass." },
    { name: "Ristretto", price: "$10", description: "concentrated espresso shot made with the same amount of coffee grounds as a regular espresso but extracted with half the water." }
];

function showMenu(list) {
  var menu = document.getElementById("menu");
  menu.innerHTML = "";

  for (var i = 0; i < list.length; i++) {
    var item = list[i];

    var wordBox = document.createElement("div");
    wordBox.className = "sentence-box";
    wordBox.style.fontSize = "2rem";
    wordBox.style.marginBottom = "20px";

    var CoffeeName = document.createElement("div");
    CoffeeName.className = "MenuName";
    CoffeeName.textContent = item.name;

    var coffeePrice = document.createElement("div");
    coffeePrice.className = "  MenuPrice";
    coffeePrice.textContent = item.price;

    
    var description = document.createElement("div");
    description.className = " col-9 col-md-9 col-sm-9 MenuDesc";
    description.textContent = item.description;


    var content = document.createElement("div");
    content.className = "content col-8 col-md-8 col-sm-8";
    content.appendChild(CoffeeName);
    content.appendChild(coffeePrice);

    wordBox.appendChild(content);
    wordBox.appendChild(description);
    menu.appendChild(wordBox);
  }
}


document.getElementById("tab1").addEventListener("click", function () {
  showMenu(Menu);
});

document.getElementById("tab2").addEventListener("click", function () {
  showMenu([Menu[0], Menu[3]]);
});


document.getElementById("tab3").addEventListener("click", function () {
  showMenu([Menu[4]]);
});

document.getElementById("tab4").addEventListener("click", function () {
  showMenu([Menu[1]]);
});

document.getElementById("tab5").addEventListener("click", function () {
  showMenu([Menu[2]]);
});

document.getElementById("tab6").addEventListener("click", function () {
  showMenu([Menu[5]]);
});






var myform = document.getElementById("myForm");
myform.addEventListener("submit", function (e) {
    e.preventDefault();

    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("phone").value;

    document.getElementById("nameError").textContent = '';
    document.getElementById("emailError").textContent = '';
    document.getElementById("mobileerror").textContent = '';


    var nameReg = /^[a-zA-Z]{2,10}$/;
    if (!nameReg.test(username)) {
        document.getElementById("nameError").textContent = "Please enter a correct name (2-10 letters)";
        return;
    }

    var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a correct email";
        return;
    }

    var mobilereg = /^(010|011|012|015)[0-9]{8}$/;
    if (!mobilereg.test(mobile)) {
        document.getElementById("mobileerror").textContent = "Please enter a correct mobile number";
        return;
    }


        myform.submit();
});




var developers = document.querySelectorAll(".developer");
var dots = document.querySelectorAll(".dot");

var index = 0;

function showDevelopers(i) {
  for (var j = 0; j < developers.length; j++) {
    developers[j].classList.remove("active");
    dots[j].classList.remove("active");
  }

  developers[i].classList.add("active");
  dots[i].classList.add("active");
}


for (var k = 0; k < dots.length; k++) {
  dots[k].setAttribute("data-index", k);

  dots[k].addEventListener("click", function () {
    index = Number(this.getAttribute("data-index"));
    showDevelopers(index);
  });
}


setInterval(function () {
    if (index < developers.length - 1) { 
        index++;
    } else {
        index = 0;
    }
    showDevelopers(index);
}, 4000);



document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // 
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let valid = true;

  // Validation 
  const namePattern = /^[A-Za-z\s]+$/;
  if (name.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    valid = false;
  } else if (!namePattern.test(name.value.trim())) {
    nameError.textContent = "Name can only contain letters and spaces.";
    valid = false;
  }

  //
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // 
  if (message.value.trim() === "") {
    messageError.textContent = "Please enter your message.";
    valid = false;
  }

  // 
  if (valid) {
    alert("Thanks! We’ll get back soon.");
    this.reset();
  }
});