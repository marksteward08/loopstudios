var button = document.getElementById('dropdown');
var menu = document.getElementById('menu');

button.addEventListener('click', function() {
    if (!button.classList.contains('open')) {
        button.classList.add('open');
    } else {
        button.classList.remove('open');
    }

    if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
    }
})