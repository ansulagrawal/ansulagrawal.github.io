const Portfolio = function () {
	function makeWords() {
		var words = [
			{
				text: "es6+",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "mongoDB",
				weight: 7
			}, {
				text: "react",
				weight: 15
			}, {
				text: "nodeJS",
				weight: 9
			}, {
				text: "html5",
				weight: 10
			}, {
				text: "full-stack",
				weight: 7
			}, {
				text: "sql",
				weight: 9
			}, {
				text: "api",
				weight: 13
			}, {
				text: "ui/ux design",
				weight: 8
			}, {
				text: "product planning",
				weight: 10
			}, {
				text: "int'l money transfer",
				weight: 4
			}, {
				text: "scrum",
				weight: 6
			}, {
				text: "end-to-end product oversight",
				weight: 5
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, { delay: 120 });
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function () {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 1000; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a 21 year Btech CSE student",
				"loves coding,",
				"working as Full-Stack Web Developer.",  
				"also solve complex problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function () {
				setTimeout(() => { typeAnimation() }, 500)
			},
			preStringTyped: function () { },
			onStringTyped: function () { }
		});
	}

	function typeAnimation2() {
		Typed.new("#writing-skillset", {
			strings: [
				"Languages I speak",
				"Technolgies I love",
				"Toolbox I use"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function () {
				setTimeout(() => { typeAnimation2() }, 500)
				// $("#writing-skillset").css({ "color": "#fff", "background-color": "#C8412B" });
			},
			preStringTyped: function () { },
			onStringTyped: function () { }
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation,
		typeAnimation2: typeAnimation2
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
Portfolio.typeAnimation2()
