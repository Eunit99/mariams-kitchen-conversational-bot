/**
 *
 * Your custom code Injection below
 *
 */


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
};


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

      // display the text "All rates are subject to change"

      // showPopup();
      // togglePopup();
    } else {
      console.error(`Error! Can't display cart popup. Pathname ${pathname} doesn't match with /cart`);
    }


    // Check for "/menu"
    if (pathname.includes("/menu")) {

      // if pathname matches 'menu'
      popupText.innerHTML = menuText;

      // display back button only in menu pageshow
      showBackBtn();
      // display the text "All rates are subject to change"

      // showPopup();
      // togglePopup();
    } else {
      console.error(`Error! Can't display menu popup. Pathname ${pathname} doesn't match with /menu`);
      console.info(`Info! Can't display back btn. Pathname ${pathname} doesn't match with /menu`);
    }


    // Match pathname with /checkout
    if (pathname === "/checkout" && search === search) {

      // if pathname matches 'checkout'
      popupText.innerHTML = checkoutText;
      // console.log(search);

      // showPopup();
      // togglePopup();
    } else {
      console.error(`Error! Can't display checkout popup. Pathname ${pathname} doesn't match with /checkout`);
    }


    // Match pathname with /order-now
    if (pathname === "/order-now") {

      // if pathname matches 'order-now'
      popupText.innerHTML = orderNowText;

      // showPopup();
      // togglePopup();
    } else {
      console.error(`Error! Can't display order-now popup. Pathname ${pathname} doesn't match with /order-now`);
    }

    // Match pathname with /
    if (pathname === "/") {


      // display the text "We are booked until --"

      // if pathname matches '/'
      popupText.innerHTML = overBookedText;

      // showPopup();
      // togglePopup();
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

    // display the newsletter popup

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



const showBackBtn = () => {

  // get the back button container
  const backBtn = document.getElementById("goBack");

  // set the style to display = "flex"
  backBtn.style.display = "flex";
}

//! Script to go back in history
function goBack() {
  history.back();
}



document.addEventListener("DOMContentLoaded", function () {
  try {
    MicroModal.init({
      awaitCloseAnimation: true, // set to false, to remove close animation
      onShow: function (modal, activeElement, event) {
        console.log("micromodal open");
        microModalShow(modal, activeElement, event);
        addModalContentHeight('short');
        /**************************
          For full screen scrolling modal, 
          uncomment line below & comment line above
         **************************/
        // addModalContentHeight('tall');
      },
      onClose: function (modal) {
        console.log("micromodal close");
      }
    });
  } catch (e) {
    console.log("micromodal error: ", e);
  }
});

function microModalShow(modal, activeElement, event) {
  if (modal.id === 'modal-1') {
    console.log("event target data bundle id: ", event.target.getAttribute("data-bundle-id"));
  }
}

function addModalContentHeight(type) {
  var type = (arguments[0] != null) ? arguments[0] : 'short';
  var modalContainer = $("#modal-container");
  var modalHeader = $("#modal-header");
  var modalContentContent = $("#modal-content-content");
  var modalContent = $("#modal-content");
  var modalFooter = $("#modal-footer");

  var modalIsDefined =
    modalContainer.length &&
    modalHeader.length &&
    modalContent.length &&
    modalFooter.length;

  if (modalIsDefined) {
    var modalContainerHeight = modalContainer.outerHeight();
    var modalHeaderHeight = modalHeader.outerHeight();
    var modalFooterHeight = modalFooter.outerHeight();

    // console.log("modalContainerHeight: ", modalContainerHeight);
    // console.log("modalHeaderHeight: ", modalHeaderHeight);
    // console.log("modalFooterHeight: ", modalFooterHeight);

    var offset = 80;

    var height = modalContainerHeight - (modalHeaderHeight + modalFooterHeight + offset);

    console.log('height: ', height);

    if (!isNaN(height)) {
      height = height > 0 ? height : 20;
      if (type == 'short') {
        modalContent.css({ 'height': height + 'px' });
      }
      else {
        modalContainer.css({ 'height': '100%', 'overflow-y': 'hidden', 'margin-top': '40px' });
        modalContentContent.css({ 'height': '100%', 'overflow-y': 'auto' });
        modalContent.css({ 'overflow-y': 'visible' });
        modalFooter.css({ 'margin-bottom': '120px' });
      }
      setTimeout(function () {
        modalContent.css({ 'display': 'block' });
        var modalContentDOM = document.querySelector('#modal-content');
        modalContentDOM.scrollTop = 0;
      });
    }

  }

}




console.info("Ξunit");


