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