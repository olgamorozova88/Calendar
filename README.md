# Тестовое задание - верстка календаря по макету, частичная js логика.

[Опубликованная версия](https://olgamorozova88.github.io/Calendar/).

## Выполнено:

- Таблица календаря строится с помощью JavaScript в соответствии с текущей датой. Реализовано переключение между месяцами, в зависимости от месяца меняется количество отображаемых недель (рядов в таблице), например в Мае 2022г.
  При первой загрузке страницы отрисовывается пустой календарь. В дальнейшем, если в ячейку календаря было добавлено событие, это событие отрисуется в соответствующей ячейке календаря.

- **По нажатию на ячейку календаря:**

> если в ячейке еще нет события - открывается попап с формой добавления нового события, поле с датой события, заполняется автоматически. По клику на кнопку "Готово" в выбранную ячейку добавляется событие, с данными, введенными в поля "Событие" и "Имена участников", состояние ячейки сохраняется в `localStoreage`, поля формы очищаются и попап закрывается. По клику на иконку крестика, попап закрывается, поля формы очищаются.
> если в ячейке уже есть событие - открывается попап с формой просмотра деталей события. По клику на кнопку "Готово" попап закрывается, никаких изменений не происходит. По клику на кнопку "Удалить" событие из выбранной ячейки удаляется, состояние ячейки сохраняется в `localStoreage` и попап закрывается. По клику на иконку крестика, попап закрывается.

## Используемые инструменты

- `gulp` - объединение задач и слежение за изменением файлов.
- `sass`, `autoprefixer`, `csso` - сборка стилей.
- `terser` - минификация скриптов.

## Особенности реализации

- Для организации разметки и стилей использована методология БЭМ.
- `html` `css` проходят валидацию без ошибок на сервисе [W3C Markup Validation Service](https://validator.w3.org).
- Поддержка последних 2-х версий браузеров `Google Chrome`, `Mozila Firefox`, `Safari (macOS)`
- Pixel Perfect.
