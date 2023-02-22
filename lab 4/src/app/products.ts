export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating:number;
  images:Array<string>;
  link:string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 384270,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h10/46392663310366/apple-iphone-13-128gb-cernyj-102298404-3-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h37/46392664031262/apple-iphone-13-128gb-cernyj-102298404-4-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 2,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 128350,
    description: 'технология NFC: Да\n' +
        'цвет: серый\n' +
        'тип экрана: цветной AMOLED, сенсорный\n' +
        'диагональ: 6.67 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 732G\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 5020 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/he1/64487159201822/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hfc/64487160578078/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-3.jpg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 3,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
    price: 129855,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: Super AMOLED, сенсорный, Corning Gorilla Glass 5\n' +
        'диагональ: 6.4 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный Exynos 1280\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h14/h76/51215744040990/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/h50/51215744270366/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 374699,
    description: 'технология NFC: Да\n' +
        'цвет: белый\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h49/46392664621086/apple-iphone-13-128gb-belyj-102298420-3-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h44/46392664817694/apple-iphone-13-128gb-belyj-102298420-4-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ черный',
    price: 46360,
    description: 'технология NFC: Нет\n' +
        'цвет: черный\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.5 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: 8-ядерный Unisoc SC9863A\n' +
        'объем встроенной памяти: 32 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/hce/47719147929630/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h61/he7/51190896394270/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/hff/51190897442846/samsung-galaxy-a03-core-2-gb-32-gb-cernyj-103153817-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 13 128Gb розовый',
    price: 377000,
    description: 'технология NFC: Да\n' +
        'цвет: розовый\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h12/46392661344286/apple-iphone-13-128gb-rozovyj-102298145-3-Container.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdd/46392661540894/apple-iphone-13-128gb-rozovyj-102298145-4-Container.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ медный',
    price: 46625,
    description: 'технология NFC: Нет\n' +
        'цвет: бронзовый\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.5 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: 8-ядерный Unisoc SC9863A\n' +
        'объем встроенной памяти: 32 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/hf4/52423971995678/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hce/h56/52423972454430/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/hbc/52423972913182/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-3.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-mednyi-105772530/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 8,
    name: 'Смартфон Xiaomi Redmi Note 11S 8 ГБ/128 ГБ серый',
    price: 116609,
    description: 'технология NFC: Нет\n' +
        'цвет: серый\n' +
        'тип экрана: AMOLED, сенсорный, мультитач\n' +
        'диагональ: 6.43 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Mediatek Helio G96\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h50/49684457259038/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf9/h0e/49684457717790/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/he6/49684458176542/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-3.jpg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11s-8-gb-128-gb-seryi-104292774/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 9,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/64 ГБ белый',
    price: 80635,
    description: 'технология NFC: Да\n' +
        'цвет: белый\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Exynos 850\n' +
        'объем встроенной памяти: 64 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h27/49613726973982/smartfon-samsung-galaxy-a13-64gb-sm-a135fzwvskz-white-104253316-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2c/h66/49613727334430/smartfon-samsung-galaxy-a13-64gb-sm-a135fzwvskz-white-104253316-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h13/49613727858718/smartfon-samsung-galaxy-a13-64gb-sm-a135fzwvskz-white-104253316-4.jpg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-64-gb-belyi-104253316/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 14 128Gb серебристый',
    price: 421580,
    description: 'технология NFC: Да\n' +
        'цвет: серебристый\n' +
        'тип экрана: OLED, Super Retina XDR display\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3279 мАч',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h22/63072557236254/apple-iphone-14-128gb-belyj-106363144-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h3d/63072557465630/apple-iphone-14-128gb-belyj-106363144-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h8b/63076103716894/apple-iphone-14-128gb-belyj-106363144-3.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-serebristyi-106363144/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 11,
    name: 'MAGNIT АВ 6013 серый',
    price: 3300,
    description: 'тип: электрочайник\n' +
        'объем: 2.2 л\n' +
        'мощность: 2200 Вт\n' +
        'материал корпуса: нержавеющая сталь\n' +
        'фильтр от накипи: Нет\n' +
        'цвет: серый',
    rating: 4,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h69/48945856839710/cajnik-magnit-av-6013-seryj-103866740-1.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/h5d/48949882126366/cajnik-magnit-av-6013-seryj-103866740-2.jpg'],
    link: 'https://kaspi.kz/shop/p/magnit-av-6013-seryi-103866740/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  },
  {
    id: 12,
    name: 'Термопот Brando BR-TP68 черный',
    price: 12988,
    description: 'тип: термопот\n' +
        'объем: 6.8 л\n' +
        'мощность: 750 Вт\n' +
        'материал корпуса: металл/пластик\n' +
        'фильтр от накипи: Нет\n' +
        'цвет: черный',
    rating: 4,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/hf9/67937106788382/termopot-brando-br-tp68-chernyi-108462994-1.jpg'],
    link: 'https://kaspi.kz/shop/p/termopot-brando-br-tp68-chernyi-108462994/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXQi1FYoPvKMpHcv_KeXZBTEs_Q_OkuEUv2jBTghOGJKTyqeqKv4-JcaAsvtEALw_wcB#!/item'
  }
];
