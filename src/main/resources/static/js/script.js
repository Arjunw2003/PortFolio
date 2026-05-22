$(document).ready(function() {

	$(".contact-form").submit(function(e) {

		e.preventDefault();

		// INPUT VALUES
		let name = $("#name").val().trim();
		let email = $("#email").val().trim();
		let subject = $("#subject").val().trim();
		let message = $("#message").val().trim();

		// EMAIL REGEX
		let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// VALIDATION
		if (name === "") {

			alert("Please Enter Your Name");
			$("#name").focus();
			return;
		}

		if (name.length < 3) {

			alert("Name Must Be At Least 3 Characters");
			$("#name").focus();
			return;
		}

		if (email === "") {

			alert("Please Enter Your Email");
			$("#email").focus();
			return;
		}

		if (!emailPattern.test(email)) {

			alert("Please Enter Valid Email");
			$("#email").focus();
			return;
		}

		if (subject === "") {

			alert("Please Enter Subject");
			$("#subject").focus();
			return;
		}

		if (subject.length < 2) {

			alert("Subject Must Be At Least 2 Characters");
			$("#subject").focus();
			return;
		}

		if (message === "") {

			alert("Please Enter Message");
			$("#message").focus();
			return;
		}

		if (message.length < 3) {

			alert("Message Must Be At Least 3 Characters");
			$("#message").focus();
			return;
		}

		// OBJECT
		let contactData = {

			name: name,
			email: email,
			subject: subject,
			message: message
		};

		// AJAX
		$.ajax({

			url: "http://localhost:8082/api/contact/save",

			type: "POST",

			contentType: "application/json",

			data: JSON.stringify(contactData),

			success: function(response) {

				alert(response.message);

				$(".contact-form")[0].reset();
			},

			error: function(error) {

				alert("Message Not Sent");

				console.log(error);
			}
		});
	});
});

// ================= SKILLS DROPDOWN =================

const skillContent = document.querySelectorAll(".skills-content");

skillContent.forEach((item) => {

	const header = item.querySelector(".skills-header");

	header.addEventListener("click", () => {

		item.classList.toggle("active");

	});

});



// ================= QUALIFICATION TABS =================

const tabs = document.querySelectorAll(".qualification-button");
const contents = document.querySelectorAll(".qualification-content");

tabs.forEach(tab => {

	tab.addEventListener("click", () => {

		const target = tab.getAttribute("data-target");

		// Remove Active Button

		tabs.forEach(btn => {
			btn.classList.remove("active-tab");
		});

		tab.classList.add("active-tab");

		// Hide All Content

		contents.forEach(content => {
			content.classList.remove("qualification-active");
		});

		// Show Selected Content

		document.getElementById(target)
			.classList.add("qualification-active");

	});

});

/* ================= DARK LIGHT MODE ================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

	document.body.classList.toggle("dark-theme");

	// Icon Change

	if (document.body.classList.contains("dark-theme")) {

		themeToggle.classList.remove("fa-moon");
		themeToggle.classList.add("fa-sun");

	} else {

		themeToggle.classList.remove("fa-sun");
		themeToggle.classList.add("fa-moon");

	}

});

