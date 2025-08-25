document.addEventListener("DOMContentLoaded", () => {
    const faviconEl = document.getElementById("favicon");
    const siteNameEl = document.querySelector(".site-name");
    const DEFAULT_TITLE = "ATOMIX GAMES";
    const DEFAULT_FAVICON = "icons/default.png";

    const savedTitle = localStorage.getItem("tabTitle");
    if (savedTitle) {
        document.title = savedTitle;
        if (siteNameEl) siteNameEl.textContent = savedTitle;
    } else {
        document.title = DEFAULT_TITLE;
        if (siteNameEl) siteNameEl.textContent = DEFAULT_TITLE;
    }

    const savedFavicon = localStorage.getItem("tabFavicon");
    if (savedFavicon) {
        faviconEl.href = savedFavicon;
    } else {
        faviconEl.href = DEFAULT_FAVICON;
    }

    const titleInput = document.getElementById("titleInput");
    const saveTitleBtn = document.getElementById("saveTitleBtn");
    const faviconInput = document.getElementById("faviconInput");
    const saveFaviconBtn = document.getElementById("saveFaviconBtn");
    const resetBtn = document.getElementById("resetBtn");

    if (saveTitleBtn) {
        saveTitleBtn.addEventListener("click", () => {
            const newTitle = titleInput.value.trim();
            if (newTitle) {
                localStorage.setItem("tabTitle", newTitle);
                document.title = newTitle;
                if (siteNameEl) siteNameEl.textContent = newTitle;
                titleInput.value = "";
            }
        });
    }

    if (saveFaviconBtn) {
        saveFaviconBtn.addEventListener("click", () => {
            const newFavicon = faviconInput.value.trim();
            if (newFavicon) {
                localStorage.setItem("tabFavicon", newFavicon);
                faviconEl.href = newFavicon;
                faviconInput.value = "";
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            localStorage.removeItem("tabTitle");
            localStorage.removeItem("tabFavicon");

            document.title = DEFAULT_TITLE;
            faviconEl.href = DEFAULT_FAVICON;
            if (siteNameEl) siteNameEl.textContent = DEFAULT_TITLE;

            
            localStorage.setItem("resetTabs", Date.now());
        });
    }

    window.addEventListener("storage", (event) => {
        if (event.key === "tabTitle") {
            document.title = event.newValue || DEFAULT_TITLE;
            if (siteNameEl) siteNameEl.textContent = event.newValue || DEFAULT_TITLE;
        }
        if (event.key === "tabFavicon") {
            faviconEl.href = event.newValue || DEFAULT_FAVICON;
        }
        if (event.key === "resetTabs") {
            document.title = DEFAULT_TITLE;
            faviconEl.href = DEFAULT_FAVICON;
            if (siteNameEl) siteNameEl.textContent = DEFAULT_TITLE;
        }
    });
});
