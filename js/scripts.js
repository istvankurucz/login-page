const chars = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"a",
	"á",
	"b",
	"c",
	"d",
	"e",
	"é",
	"f",
	"g",
	"h",
	"i",
	"í",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"ó",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"ú",
	"ü",
	"ű",
	"v",
	"w",
	"x",
	"y",
	"z",
];
const generatePW = () => {
	let password = "";

	for (let i = 0; i < 8; i++) {
		let index = Math.floor(Math.random() * chars.length);
		let isUpper = Math.floor(Math.random() * chars.length) % 2 === 0;
		if (isUpper) password += chars[index].toUpperCase();
		else password += chars[index];
	}

	return password;
};

$(document).ready(function () {
	// input animation
	$(".input-field input").on("focus", function () {
		$(this).addClass("focus");
	});
	$(".input-field input").on("blur", function () {
		if ($(this).val() === "") $(this).removeClass("focus");
	});

	// hide / show password + change the eye icon
	$(".fa-eye-slash").hide();
	$(".fa-eye").click(function () {
		$(this).hide(200);
		$(".fa-eye-slash").show(200);

		$(".password input").attr("type", "text");
	});
	$(".fa-eye-slash").click(function () {
		$(this).hide(200);
		$(".fa-eye").show(200);

		$(".password input").attr("type", "password");
	});

	// auto-generate a password
	$(".pw-generate").click(function () {
		$(".password input").addClass("focus");
		$(".password input").attr("type", "text").val(generatePW());
		$(".fa-eye").hide(200);
		$(".fa-eye-slash").show(200);
	});
});
