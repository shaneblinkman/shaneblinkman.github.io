function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(function(page) {
        page.classList.remove('active');
    });
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
}