/**
 *
 * Your custom code Injection below
 *
 */


// ArtibotApi

! function (t, e) {
	t.artibotApi = {
		l: [],
		t: [],
		on: function () {
			this.l.push(arguments);
		},
		trigger: function () {
			this.t.push(arguments);
		}
	};
	var a = !1,
		i = e.createElement("script");
	i.async = !0, i.type = "text/javascript", i.src = "https://app.artibot.ai/loader.js", e.getElementsByTagName("head")
		.item(0).appendChild(i), i.onreadystatechange = i.onload = function () {
			if (!(a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState)) {
				new window.ArtiBot({
					i: "b3d644c8-4c4d-417a-aa0f-1deac305c18e"
				});
				a = !0;
			}
		};
}(window, document);

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
};


let stateCheck = setInterval(() => {
	if (document.readyState === "complete") {
		clearInterval(stateCheck);
		// console.log("Document is ready");

		let popupText = document.getElementById("popupText"),
			menuText = "All rates are subject to change at anytime!",
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
			showPopup();
			togglePopup();
		} else {
			console.error(`Error! Can't display cart popup. Pathname ${pathname} doesn't match with /cart`)
		}


		// Match pathname with /menu
		if (pathname === "/menu") {

			// if pathname matches 'menu'
			popupText.innerHTML = menuText;
			showPopup();
			togglePopup();
		} else {
			console.error(`Error! Can't display menu popup. Pathname ${pathname} doesn't match with /menu`)
		}


		// Match pathname with /checkout
		if (pathname === "/checkout" && search === search) {

			// if pathname matches 'checkout'
			popupText.innerHTML = checkoutText;
			// console.log(search);

			showPopup();
			togglePopup();
		} else {
			console.error(`Error! Can't display checkout popup. Pathname ${pathname} doesn't match with /checkout`)
		}


		// Match pathname with /order-now
		if (pathname === "/order-now") {

			// if pathname matches 'order-now'
			popupText.innerHTML = orderNowText;

			showPopup();
			togglePopup();
		} else {
			console.error(`Error! Can't display order-now popup. Pathname ${pathname} doesn't match with /order-now`)
		}

	};
}, 100);