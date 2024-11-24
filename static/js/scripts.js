// Sidebar Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("wrapper").classList.toggle("toggled");
});

// File Preview
document.getElementById("files").addEventListener("change", (event) => {
    const previewContainer = document.getElementById("preview");
    previewContainer.innerHTML = ""; // Reset preview container
    const files = Array.from(event.target.files);

    files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const previewItem = document.createElement("div");
            previewItem.classList.add("preview-item", "d-inline-block", "me-2", "mb-2");
            previewItem.innerHTML = `
                <div class="position-relative">
                    <img src="${e.target.result}" alt="Preview" class="img-thumbnail">
                    <button class="btn btn-danger btn-sm position-absolute top-0 end-0 remove-btn" data-index="${index}">
                        ×
                    </button>
                </div>
            `;
            previewContainer.appendChild(previewItem);
        };
        if (file.type.startsWith("image/")) {
            reader.readAsDataURL(file);
        }
    });

    // Remove files
    previewContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const index = e.target.dataset.index;
            files.splice(index, 1);
            event.target.files = new DataTransfer().files; // Reset file input
            e.target.parentElement.parentElement.remove();
        }
    });
});




// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-wrapper');
    const overlay = document.querySelector('.overlay');
    const burgerIcon = document.querySelector('.burger-icon');
    const pageContent = document.getElementById('page-content-wrapper');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    pageContent.classList.toggle('active');
}

// Close sidebar when overlay is clicked (for mobile screens)
document.querySelector('.overlay').addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar-wrapper');
        const pageContent = document.getElementById('page-content-wrapper');
        sidebar.classList.remove('active');
        pageContent.classList.remove('active');
    }
});

// Close sidebar when a menu item is clicked (for mobile screens)
document.querySelectorAll(".list-group-item").forEach(item => {
    item.addEventListener('click', function() {
        if (window.innerWidth <= 768) {  // Only for mobile screens
            const sidebar = document.getElementById('sidebar-wrapper');
            const pageContent = document.getElementById('page-content-wrapper');
            sidebar.classList.remove('active');
            pageContent.classList.remove('active');
        }
    });
});


