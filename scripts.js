// Функции для открытия и закрытия модального окна
function openModal() {
    document.getElementById('callbackModal').style.display = 'block'; // Открытие модального окна
}

function closeModal() {
    document.getElementById('callbackModal').style.display = 'none'; // Закрытие модального окна
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    var modal = document.getElementById('callbackModal');
    if (event.target == modal) {
        modal.style.display = 'none'; // Закрытие модального окна
    }
}
