document.addEventListener("DOMContentLoaded", function () {

    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const mainContent = document.querySelector(".main-content");

    const themeBtn = document.getElementById("themeBtn");

    const notificationBtn = document.getElementById("notificationBtn");
    const notificationBox = document.getElementById("notificationBox");

    const searchInput = document.getElementById("searchInput");
    const tableRows = document.querySelectorAll("#activityTable tr");

    const profileBtn = document.querySelector(".profile-btn");
    const profileDropdown = document.getElementById("profileDropdown");

    const backTop = document.getElementById("backToTop");

    /* PRELOADER */

    setTimeout(() => {

        const preloader = document.getElementById("preloader");

        if (preloader) {
            preloader.style.display = "none";
        }

    }, 700);

    /* TOAST */

    function showToast(message) {

        const toastBox = document.getElementById("toastBox");

        if (!toastBox) return;

        const toast = document.createElement("div");

        toast.className = "custom-toast";

        toast.innerText = message;

        toastBox.appendChild(toast);

        setTimeout(() => {

            toast.remove();

        }, 2500);

    }

    /* SIDEBAR */

    sidebarToggle.addEventListener("click", function () {

        if (window.innerWidth <= 991) {

            sidebar.classList.toggle("show");

        } else {

            sidebar.classList.toggle("hide");

            mainContent.classList.toggle("full");

        }

    });

    /* DARK MODE */

    if (localStorage.getItem("adminTheme") === "dark") {

        document.body.classList.add("dark");

        themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("adminTheme", "dark");

            themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;

            showToast("Dark Mode Enabled");

        } else {

            localStorage.setItem("adminTheme", "light");

            themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;

            showToast("Light Mode Enabled");

        }

    });

    /* NOTIFICATION */

    notificationBtn.addEventListener("click", function () {

        notificationBox.classList.toggle("show");

    });

    /* PROFILE */

    profileBtn.addEventListener("click", function () {

        profileDropdown.classList.toggle("show");

    });

    /* SEARCH */

    searchInput.addEventListener("keyup", function () {

        const value = searchInput.value.toLowerCase();

        tableRows.forEach((row) => {

            const text = row.textContent.toLowerCase();

            if (text.includes(value)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

    /* EXPORT */

    document.querySelectorAll(".panel-header button")
        .forEach((button) => {

            if (button.innerText.includes("Export")) {

                button.addEventListener("click", function () {

                    showToast("Report Exported Successfully");

                });

            }

        });

    /* BACK TO TOP */

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    console.log("Admin Dashboard Day 3 Loaded Successfully!");

});
