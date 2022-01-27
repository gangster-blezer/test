YMaps.jQuery(function () {
            // Создание экземпляра карты и его привязка к созданному контейнеру
            var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

            // Установка для карты ее центра и масштаба
            map.setCenter(new YMaps.GeoPoint(37.64, 55.76), 10);
            map.addControl(new YMaps.Zoom());
            map.enableDblClickZoom(true);
            map.enableScrollZoom();

            // Создание стиля для значка метки
            var s = new YMaps.Style();
            s.iconStyle = new YMaps.IconStyle();
            s.iconStyle.href = "img/placeholder.png";
            s.iconStyle.size = new YMaps.Point(53, 53);
            // Создание метки и добавление ее на карту
            var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.605176,55.609629), {style: s});
            var placemark2 = new YMaps.Placemark(new YMaps.GeoPoint(37.438037,55.885481), {style: s});
            var placemark3 = new YMaps.Placemark(new YMaps.GeoPoint(37.355722,55.702835), {style: s});

            placemark.name = 'Магазин в ТЦ "ГРАНД ЮГ"';
            placemark.description = "Адрес: Москва, м.Пражская, ул. Кировоградская, д.15</br>Тел. салона: +7 (909) 641 28 78</br>Email: akossta.grand-south@mail.ru";

            placemark2.name = 'Магазин в ТЦ "ГРАНД"';
            placemark2.description = "Адрес: Ленинградское шоссе, 100 метров от МКАД (в сторону области) г. Химки, Бутаково 4</br>Местоположение в комплексе: Центр детской мебели, цокольный этаж (вход рядом с маг. \"Эльдорадо\")</br>Тел. салона: +7 (495) 780-33-33 доб. 44.41</br>Email: akosstagrand@mail.ru";

            placemark3.name = 'Магазин в ТЦ "ТРИ КИТА"';
            placemark3.description = 'Адрес: Московская обл., Одинцовский р-н, Новоивановское пгт, ул. Луговая, 1</br>Местоположение в комплексе: этаж 4, отдел "Детская мебель"</br>Тел.: +7 (495) 780-37-37 доб. 2749</br>Email: akossta-kit@mail.ru';

            map.addOverlay(placemark);
            map.addOverlay(placemark2);
            map.addOverlay(placemark3);

        });

function select(a,b){
    YMaps.jQuery(function () {
            // Создание экземпляра карты и его привязка к созданному контейнеру
            var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

            // Установка для карты ее центра и масштаба
            map.setCenter(new YMaps.GeoPoint(a,b), 15);
            map.addControl(new YMaps.Zoom());
            map.enableDblClickZoom(true);
            map.enableScrollZoom();

            // Создание стиля для значка метки
            var s = new YMaps.Style();
            s.iconStyle = new YMaps.IconStyle();
            s.iconStyle.href = "img/placeholder.png";
            s.iconStyle.size = new YMaps.Point(53, 53);
            // Создание метки и добавление ее на карту
            var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.605176,55.609629), {style: s});
            var placemark2 = new YMaps.Placemark(new YMaps.GeoPoint(37.438037,55.885481), {style: s});
            var placemark3 = new YMaps.Placemark(new YMaps.GeoPoint(37.355722,55.702835), {style: s});

            placemark.name = 'Магазин в ТЦ "ГРАНД ЮГ"';
            placemark.description = "Адрес: Москва, м.Пражская, ул. Кировоградская, д.15</br>Тел. салона: +7 (909) 641 28 78</br>Email: akossta.grand-south@mail.ru";

            placemark2.name = 'Магазин в ТЦ "ГРАНД"';
            placemark2.description = "Адрес: Ленинградское шоссе, 100 метров от МКАД (в сторону области) г. Химки, Бутаково 4</br>Местоположение в комплексе: Центр детской мебели, цокольный этаж (вход рядом с маг. \"Эльдорадо\")</br>Тел. салона: +7 (495) 780-33-33 доб. 44.41</br>Email: akosstagrand@mail.ru";

            placemark3.name = 'Магазин в ТЦ "ТРИ КИТА"';
            placemark3.description = 'Адрес: Московская обл., Одинцовский р-н, Новоивановское пгт, ул. Луговая, 1</br>Местоположение в комплексе: этаж 4, отдел "Детская мебель"</br>Тел.: +7 (495) 780-37-37 доб. 2749</br>Email: akossta-kit@mail.ru';

            map.addOverlay(placemark);
            map.addOverlay(placemark2);
            map.addOverlay(placemark3);
            
        });
}