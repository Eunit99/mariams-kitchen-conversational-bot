/**
 *
 * Your custom code Injection below
 *
 */


// ArtibotApi

// ! function (t, e) {
// 	t.artibotApi = {
// 		l: [],
// 		t: [],
// 		on: function () {
// 			this.l.push(arguments);
// 		},
// 		trigger: function () {
// 			this.t.push(arguments);
// 		}
// 	};
// 	var a = !1,
// 		i = e.createElement("script");
// 	i.async = !0, i.type = "text/javascript", i.src = "https://app.artibot.ai/loader.js", e.getElementsByTagName("head")
// 		.item(0).appendChild(i), i.onreadystatechange = i.onload = function () {
// 			if (!(a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState)) {
// 				new window.ArtiBot({
// 					i: "b3d644c8-4c4d-417a-aa0f-1deac305c18e"
// 				});
// 				a = !0;
// 			}
// 		};
// }(window, document);


// FAQs
$(".dropdown h3").click(function () {
  $(this).nextUntil("h3").slideToggle("slow");
});

// Navigation

function toggleNav() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// Popup

// Show popup after 4mss
function showPopup() {
  setTimeout(() => {
    var popup = document.getElementById("popup");
    popup.classList.add("show");
  }, 400);
}


// When the user clicks on 'X', close the popup
function togglePopup() {
  var popup = document.getElementById("popup"),
    cross = document.getElementById("cross");
  cross.addEventListener("click", function () {
    popup.classList.toggle("show");
  });
}


// Timed newsletter email

function timePopup() {
  const timedPopupEmailAddrValue = document.getElementById("timed-popup-email").value;

  // check if timedPopupEmailAddrValue is empty

  if (timedPopupEmailAddrValue === "") {

  }
}

let stateCheck = setInterval(() => {
  if (document.readyState === "complete") {
    clearInterval(stateCheck);

    let popupText = document.getElementById("popupText"),
      menuText = "All rates are subject to change at anytime!",
      overBookedText = "We are booked until October 29<sup>th</sup>. Please fill out a <a href='/order-now'>catering form</a> for other enquiries.",
      cartText = "All rates are subject to change at anytime!",
      checkoutText = "Your order will be ready on or before 4 days time.",
      orderNowText = "Click <a target='_blank' href='https://calendly.com/mknyc/15min'>here</a> to view the earliest possible day for delivery.";


    // get the pathname of the page
    let pathname = window.location.pathname,
      search = window.location.search;

    // Match pathname with /cart
    if (pathname === "/cart") {

      // if pathname matches 'cart'
      popupText.innerHTML = cartText;

      // Uncomment below to display the text "All rates are subject to change"

      // showPopup();
      // togglePopup();
    } else {
      console.error(`Error! Can't display cart popup. Pathname ${pathname} doesn't match with /cart`);
    }


    // Match pathname with /menu
    if (pathname === "/menu") {

      // if pathname matches 'menu'
      popupText.innerHTML = menuText;

      // Uncomment below to display the text "All rates are subject to change"

      // showPopup();
      // togglePopup();
    } else {
      console.error(`Error! Can't display menu popup. Pathname ${pathname} doesn't match with /menu`);
    }


    // Match pathname with /checkout
    if (pathname === "/checkout" && search === search) {

      // if pathname matches 'checkout'
      popupText.innerHTML = checkoutText;
      // console.log(search);

      showPopup();
      togglePopup();
    } else {
      console.error(`Error! Can't display checkout popup. Pathname ${pathname} doesn't match with /checkout`);
    }


    // Match pathname with /order-now
    if (pathname === "/order-now") {

      // if pathname matches 'order-now'
      popupText.innerHTML = orderNowText;

      showPopup();
      togglePopup();
    } else {
      console.error(`Error! Can't display order-now popup. Pathname ${pathname} doesn't match with /order-now`);
    }

    // Match pathname with /
    if (pathname === "/") {


      // Uncomment below to display the text "We are booked until --"

      // if pathname matches '/'
      popupText.innerHTML = overBookedText;

      showPopup(); // display popupText
      togglePopup(); // toggle popupText
    } else {
      console.error(`Error! Can't display order-now popup. Pathname ${pathname} doesn't match with /`);
    }

  }
}, 100);


/**
 *
 * Timed popup
 *
 */

const timedPopupForFirstVisitor = () => {
  setTimeout(() => {

    // Uncomment below to display the newsletter popup

    /* showTimedPopupForFirstVisitor();
    addOverlay(); */

    // Uncomment above to display the newsletter popup

  }, 5000); // display the timed popup after 5s
};

const showTimedPopupForFirstVisitor = () => {
  const popupContainer = document.querySelector("#timed-popup");
  popupContainer.classList.remove("displayNone");

  hideTimedPopupForFirstVisitor();
};


const hideTimedPopupForFirstVisitor = (e) => {
  const hideTimedPopup = document.getElementById("hideTimedPopup");
  const popupContainer = document.querySelector("#timed-popup");

  hideTimedPopup.addEventListener("click", function (e) {
    e.preventDefault();
    popupContainer.classList.add("displayNone");
    removeOverlay();
  });

};

// validate email address
const validateTimePopupEmailAddress = () => {
  var timePopupEmailAddressValue = document.getElementById("timePopupEmailAddress").value;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const timePopupEmailAddress = document.getElementById("timePopupEmailAddress");

  if (timePopupEmailAddressValue === "") {
    console.log("Please input your email address.");
    validationResult("Please input your email address.", "error", "#d9534f");
    return false;
  } else if (timePopupEmailAddressValue.match(regexEmail)) {
    console.log("Email submitted successfully");
    validationResult("Email submitted successfully", "success", "#5cb85c");
    return true;
  } else {
    console.log("Invalid email address.");
    validationResult("Invalid email address.", "error", "#d9534f");
    return false;
  }

};

timedPopupForFirstVisitor();

const validationResult = (text, className, borderColor) => {
  const validationResultContainer = document.getElementById("validationResult");

  validationResultContainer.innerText = `${text}`;
  validationResultContainer.classList.add(`${className}`);
  timePopupEmailAddress.style.borderColor = `${borderColor}`;
};

const addOverlay = () => {
  const timedPopupOverlay = document.getElementById("timedPopupOverlay");
  timedPopupOverlay.classList.add("timed-popup-overlay");
};

const removeOverlay = () => {
  const timedPopupOverlay = document.getElementById("timedPopupOverlay");
  timedPopupOverlay.classList.remove("timed-popup-overlay");
};

console.info("Ξunit");
