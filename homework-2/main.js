let product = {
        name: "8BitDo Ultimate 2.4G",
        price: 4299,
        InStock: true,
        brand: "8BitDo",
        specifications: {
            battery: "480 мА*ч",
            connection_type: "беспроводной/проводной",
            supported_platforms: "Android, PC, iOS",
            color: "черный",
        },
        discount: {
            percentage: 25,
            expirationDate: "01.03.2024", 
        },
        customer: {
            name: "Станислав",
            budget: 4500, 
        }
    }


let resultsale = product.price - (product.price * product.discount.percentage / 100)

if (product.InStock === true) {
    console.log(`Товар ${product.name} находиться в наличии.`)
} else {
    console.log(`Товара ${product.name} нет в наличии.`)
} 

if (product.customer.budget < resultsale) {
    console.log(`Покупателю ${product.customer.name}, не хватает на товар ${product.name} который стоит ${product.price}, бюджет покупателя ${product.customer.budget}`)
} else {
    console.log(`Покупателю ${product.customer.name} с бюджетом ${product.customer.budget}, хватает на товар ${product.name} который стоит ${product.price}, но со скидкой итоговая цена составит ${resultsale}, акция будет действовать до ${product.discount.expirationDate}`)
    console.log(`Технические характеристики ${product.name}:
    батарея на ${product.specifications.battery}
    тип подключения ${product.specifications.connection_type},
    поддерживаемые устройства ${product.specifications.supported_platforms},
    цвет ${product.specifications.color}`)
}