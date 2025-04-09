document.addEventListener('DOMContentLoaded', function() {
    var lastModified = new Date(document.lastModified);
    var formattedDate = lastModified.toLocaleDateString("en-SG"); // You can change 'en-US' to your preferred locale
    document.getElementById('last-modified-date').innerText += formattedDate;
});
