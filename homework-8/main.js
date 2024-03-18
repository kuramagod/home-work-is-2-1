const calculate = () => {
    const inputPricem = parseInt(document.querySelector('#price-m').value);
    const inputPricee = parseInt(document.querySelector('#price-e').value);
    const inputPricev = parseInt(document.querySelector('#price-v').value);

    const inputQuantitym = parseInt(document.querySelector('#quantity-m').value);
    const inputQuantitye = parseInt(document.querySelector('#quantity-e').value);
    const inputQuantityv = parseInt(document.querySelector('#quantity-v').value);

    if( isNaN(inputPricem) || isNaN(inputPricee) || isNaN(inputPricev) || isNaN(inputQuantitym) || isNaN(inputQuantitye) || isNaN(inputQuantityv)) {
        alert('Заполните все поля!')
        return
    }

    let productsSum = (inputPricem * inputQuantitym) + (inputPricee * inputQuantitye) + (inputPricev * inputQuantityv)

    const  sumobj = {
        'm': (inputPricem * inputQuantitym),
        'e': (inputPricee * inputQuantitye),
        'v': (inputPricev * inputQuantityv),
    }

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `
        <p>Итоговая стоимость молока: ${sumobj['m']}</p>
        <p>Итоговая стоимость яиц: ${sumobj['e']}</p>
        <p>Итоговая стоимость овощей: ${sumobj['v']}</p>
        <h1>Итог: ${productsSum} рублей</h1>
    `
}