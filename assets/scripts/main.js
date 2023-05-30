
function humburgur_menu() {

    var humburgur_menu = document.getElementById("humburgur-menu-items");
    var mainContent = document.getElementById("main")
    var footer = document.getElementById("footer")
    var open = document.getElementById("open-humburgur-menu-items")
    var close = document.getElementById("close-humburgur-menu-items")

    if (humburgur_menu.style.display === "none") {

        humburgur_menu.style.display = "block";

        footer.style.display = "none";
        mainContent.style.display = "none";

        close.style.display = "block";
        open.style.display = "none";

    }

    else {

        humburgur_menu.style.display = "none";

        mainContent.style.display = "block"

        footer.style.display = "flex"

        close.style.display = "none";
        open.style.display = "block";

    }

}