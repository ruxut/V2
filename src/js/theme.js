document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("themeSelector");

    // Always check localStorage for theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    // If we are on settings.html (where the dropdown exists), sync it
    if (selector) {
        selector.value = savedTheme;
        selector.addEventListener("change", () => {
            const newTheme = selector.value;
            localStorage.setItem("theme", newTheme);
            applyTheme(newTheme);
        });
    }
});

function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
    }
}
