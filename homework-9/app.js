const checkInput = () => {
    let inputName = document.querySelector('#nameService').value;
    let inputCoast = document.querySelector('#coastService').value;
    let inputDiscription = document.querySelector('#discriptionService').value;
    let inputDataStart = document.querySelector('#dateServiceStart').value;
    let inputDataEnd = document.querySelector('#dateServiceEnd').value;
    let inputImage = document.querySelector('#imageService').files[0];

    let button = document.querySelector('#taskBtn');
    if ( inputName !== "" && inputCoast !== "" && inputDiscription !== "" && inputDataStart !== "" && inputImage !== "" && inputDataEnd !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const addService = () => {
    let servicen = document.querySelector('#nameService').value;
    let servicec = document.querySelector('#coastService').value;
    let serviced = document.querySelector('#discriptionService').value;
    let serviceds = document.querySelector('#dateServiceStart').value;
    let servicede = document.querySelector('#dateServiceEnd').value;
    let servicei = document.querySelector('#imageService').files[0];

    let reader = new FileReader();

    reader.onload = function(event) {
        let imageUrl = event.target.result;

        let requestCard = document.createElement('div');
        requestCard.classList.add('card');

        requestCard.innerHTML = `
    <p><strong>Имя услуги:</strong> ${servicen}</p>
    <p><strong>Стоимость услуги:</strong> ${servicec}</p>
    <p><strong>Описание:</strong> ${serviced}</p>
    <p><strong>Продолжительность услуги<br> с:</strong> ${serviceds}</p>
    <p><strong>до:</strong> ${servicede}</p>
    <img src="${imageUrl}" width="200" height="200"> 
    `;

    document.querySelector('#requestList').appendChild(requestCard);
    document.querySelector('#taskBtn').disabled = false;
    }

    reader.readAsDataURL(servicei);
} 