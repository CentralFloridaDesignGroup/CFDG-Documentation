window.onload = function() {
    var element = document.getElementById('copyright');
    var today = new Date();
    var year = today.getFullYear();
    element.innerText = '© ' + year + ' - Central Florida Design Group'
}