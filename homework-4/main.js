let data_camera = {
    camera: {
    model: 'Sony Alpha ZV-E10',
    resolution: {
        widht: 6000,
        height: 4000,
    },
    lens: 'беззеркальный фотоаппарат',
    matrix: 'CMOS',
    price: '84 499р',
},
    camera2: {
    model: 'DEXP VC A01',
    resolution: {
        widht: 1920,
        height: 1080,
    },
    lens: 'беззеркальный фотоаппарат',
    matrix: 'CMOS',
    price: '1 750р',
},
    camera3: {
    model: 'Rekam DVC-560',
    resolution: {
        widht: 1280,
        height: 720,
    },
    lens: 'беззеркальный фотоаппарат',
    matrix: 'CMOS',
    price: '750р',
},
}


for (let i in data_camera) {
    console.log('Характеристики фотокамеры:')
    console.log(`Модель - ${data_camera[i].model}, \nРазрешение - ${data_camera[i].resolution.widht}x${data_camera[i].resolution.height}, \nТип линзы - ${data_camera[i].lens}, \nТип матрицы - ${data_camera[i].matrix},\nЦена - ${data_camera[i].price} `)
    if (data_camera[i].resolution.widht >= 3840) {
        console.log('Качество фото будет наилучшее')
    } else if (data_camera[i].resolution.widht >= 2560) {
        console.log('Качество фото будет отличное')
    } else if (data_camera[i].resolution.widht >= 1920) {
        console.log('Качество фото будет хорошее')
    } else if (data_camera[i].resolution.widht >= 1280) {
        console.log('Качество фото будет плохое')
    } else {
        console.log('Качество фото будет худшее')
    }
    console.log('')
}
