# Тестовое задание - верстка календаря по макету, частичная js логика.

[Опубликованная версия](https://olgamorozova88.github.io/Calendar/).

---


## Выполненно:

* Таблица календаря строится с помощью JavaScript в соответствии с текущей датой. Реализовано переключение между месяцами, в зависимости от месяца меняется количество отображаемых недель (рядов в таблице), например в Мае 2022г.
* При нажатии на ячейку календаря открывается окно добавления нового события, поле с датой события, заполняется автоматически. По клику на иконку кретика, окно добавления нового события закрывается.

## Используемые инструменты

* `gulp` - объединение задач и слежение за изменением файлов.
* `sass`, `autoprefixer`, `csso` - сборка стилей.
* `terser` - минификация скриптов.

## Особенности реализации

* Для организации разметки и стилей использована методология БЭМ.
* `html` `css` проходят валидацию без ошибок на сервисе [W3C Markup Validation Service](https://validator.w3.org).
* Поддержка последних 2-х версий браузеров `Google Chrome`, `Mozila Firefox`, `Safari (macOS)`
* Pixel Perfect.

## Структура

* `build` - каталог для сборки. Не коммитится.
* `src` - каталог исходников.


## Установка

* Выполните команду `npm i`.


## Команды

* `npm run build` - сборка и минификация разметки и стилей. Оптимизация изображений.
* `npm start` - сборка и запуск в режиме раработки.
