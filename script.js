document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const mainContent = document.querySelector(".main-content");
    const themeBtn = document.getElementById("themeBtn");
    const notificationBtn = document.getElementById("notificationBtn");
    const notificationBox = document.getElementById("notificationBox");
    const searchInput = document.getElementById("searchInput");
    const tableRows = document.querySelectorAll("#activityTable tr");

    sidebarToggle.addEventListener("click", function () {
        if (window.innerWidth <= 991) {
            sidebar.classList.toggle("show");
        } else {
            sidebar.classList.toggle("hide");
            mainContent.classList.toggle("full");
        }
    });

    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });

    notificationBtn.addEventListener("click", function () {
        notificationBox.classList.toggle("show");
    });

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

    console.log("Admin Dashboard Day 2 Loaded Successfully!");
});