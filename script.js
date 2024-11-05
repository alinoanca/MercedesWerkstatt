document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const part = document.getElementById('part').value;
    const quantity = document.getElementById('quantity').value;

    if (part && quantity > 0) {
        document.getElementById('confirmation').innerText = `Vielen Dank für Ihre Bestellung! Sie haben ${quantity} Stück des Ersatzteils "${part}" bestellt.`;
    } else {
        document.getElementById('confirmation').innerText = 'Bitte geben Sie gültige Informationen ein.';
    }
});
