// Объявляем все нужные переменные для инициализации календаря

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
const calendar = document.querySelector('.calendar__body');
const dateCells = document.querySelectorAll('.calendar__date');
const currMonthAndYear = document.querySelector('.month-control__month-name');
const buttonPrev = document.querySelector('.month-control__button--prev');
const buttonNext = document.querySelector('.month-control__button--next');
const addEvent = document.querySelector('.event-modal--new');
const addEventForm = addEvent.querySelector('.form')

// Получаем последний день месяца. 
// Функция принимает аргументами год, месяц и номер дня.
// В JS нумерация месяцев начинается с 0, дни с 1. Нулевой день месяца соответствует последнему дню предшествующего месяца. Поэтому, чтобы узнать последний день месяца, нужно получить нулевой день месяца, следующего за ним (mont + 1).

const getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// Получаем день недели, первого числа месяца. Дни недели в JS нумеруются с 0, причем неделя начинается с Вск, т.е. 0 === Вск.

const getFirstWeekDayOfMonth = (year, month) => {
  let date = new Date(year, month);
  return date.getDay();
}

// Получаем день недели последнего числа месяца
const getLastWeekDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDay();
} 

// Получаем количество элементов, которые нужно добавить в начало массива с датами месяца (количество дней предшествующего месяца, которые будут отображаться в календаре)

const getShiftElemNum = (year, month) => {
  let firstDay = getFirstWeekDayOfMonth(year, month);
  if (firstDay === 0) {
    return 6;
  }
  return firstDay - 1;
}

// Получаем количество элементов, которые нужно добавить конец массива с датами месяца (количество дней следующего месяца, которые будут отображаться в календаре)

const getPushElemNum = (year, month) => {
  let lastDay = getLastWeekDayOfMonth(year, month);
  if (lastDay === 0) {
    return 0;
  }
  return 7 - lastDay;
}

// Получаем числа предшествующего месяца, которые будут добавлены в начало массива с датами текущего месяца, которые отображаться в календаре

const getDaysOfPrevMonth = (year, month) => {
  let date = new Date(year, month, 0);
  let day = date.getDate();
  let result = [];
  while (result.length !== getShiftElemNum(year, month)) {
    result.push(day);
    day = day - 1;
  }
  result.reverse();
  return result;
}

// Получаем числа следующего месяца, которые будут добавлены в конец массива с датами текущего месяца, которые отображаться в календаре

const getDaysOfNextMonth = (year, month) => {
  let date = new Date(year, month, 1);
  let day = date.getDate();
  let result = [];
  while (result.length !== getPushElemNum(year, month)) {
    result.push(day);
    day = day + 1;
  }
  return result;
}

// Получаем массив дат (включая дни предшествующего месяца и дни следующего месяца), которые нужно отобразить в календаре

const getDates = (year, month) => {
  let result = [];
  let currMonthDays = [];
  let prevMonthDays = getDaysOfPrevMonth(year, month);
  let nextMonthDays = getDaysOfNextMonth(year, month);
  for (let i = 1; i <= getLastDayOfMonth(year, month); i++) {
    currMonthDays.push(i);
  } 
  result = prevMonthDays.concat(currMonthDays, nextMonthDays);
  return result;
}

// Преобразовываем число месяца в название месяца. i - номер месяца

const getMonthName = (i) => {
  let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'             
  ]
  return months[i];
}

// Склонение месяца 

const monthDeclension = (month) => {
  let monthName;
  if (month === 2 ||month == 7) {
    monthName = getMonthName(month).concat('а')
  } else {
    monthName = getMonthName(month).substring(0, getMonthName(month).length - 1).concat('я');
  }
  return monthName;
}

// Показываем в шапке текущий месяц и Год

const showCurrMonthAndYear = (year, month, element) => {
  element.textContent = `${getMonthName(month)} ${year}`;
}

// Получаем предыдущий месяц и год

const getPrevYear = (year, month) => {
  if (month === 0) {
    return year - 1;
  } else {
    return year;
  }
}

const getPrevMonth = (month) => {
  if (month === 0) {
    return 11;
  } else {
    return month - 1;
  }
}

// Получаем следующий месяц и год

const getNextYear = (year, month) => {
  if (month === 11) {
    return year + 1;
  } else {
    return year;
  }
}

const getNextMonth = (month) => {
  if (month === 11) {
    return 0;
  } else {
    return month + 1;
  }
}

// Функция для обработчика события кнопки перехода на предыдущий месяц

const showPrevMonthAndYear = () => {
  year = getPrevYear(year, month);
  month = getPrevMonth(month);
  element = calendar;
  if (addEvent.classList.contains('event-modal--show')) {
    addEvent.classList.remove('event-modal--show')
  }
  renderCalendar(year, month, element);
}

// Функция для обработчика события кнопки перехода на следующий месяц

const showNextMonthAndYear = () => {
  element = calendar;
  year = getNextYear(year, month);
  month = getNextMonth(month)
  renderCalendar(year, month, element);
  if (addEvent.classList.contains('event-modal--show')) {
    addEvent.classList.remove('event-modal--show')
  }
}

// Функция создания нового элемента

const createElement = (element, className, parent, text) => {
  let newElement = document.createElement(element);
  if (className) {
    newElement.classList.add(className);
  }
  if (text) {
    newElement.textContent += text;
  }
  parent.appendChild(newElement);
}

// Функция для добавления класса active и показа модального окна выбранной ячейке 

const showPopup = (arr, className) => {
  arr.forEach((element) => {
  element.addEventListener('click', () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains(className)) {
        arr[i].classList.remove(className);
      }
    }
    element.classList.add(className);
    addEvent.classList.add('event-modal--show');
    addEvent.style.left = element.getBoundingClientRect().right + 'px';
    addEvent.style.top = element.getBoundingClientRect().top + 'px';
    let closeFormButton = addEvent.querySelector('.event-modal__close-button');
    closeFormButton.addEventListener('click', () => {
      clearForm();
      element.classList.remove(className);
      addEvent.classList.remove('event-modal--show');
      addEvent.style.left = '';
      addEvent.style.top = '';
    });
    fillDate(element);
    addEventForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
  })
}) 
}


// Очищаем форму создания нового события

const clearForm = () => {
  let eventDate = addEvent.querySelector('.form__input--date');
  let eventTittle = addEvent.querySelector('.form__input--event');
  let eventPartisipants = addEvent.querySelector('.form__input--participants');
  eventTittle.value = '';
  eventPartisipants.value = '';
  eventDate.value = '';
}

// Функция автозаполнения даты в модальном окне добавления события 

const fillDate = (element) => {
  let eventDate = addEvent.querySelector('.form__input--date');
  let date = element.querySelector('.calendar__date');
  eventDate.value = `${date.textContent} ${monthDeclension(month)} ${year}`;
}

// Функция отрисовки тела календаря (таблицы)

const renderDates = (year, month, element) => {
  element.innerHTML = '';
  let weekday = [
    'Понедельник, ', 'Вторник, ', 'Среда, ', 'Четверг, ', 
    'Пятница, ', 'Суббота, ', 'Воскресенье, '
  ]
  let dates = getDates(year, month);
  createElement('table', 'calendar__month', calendar);
  let table = document.querySelector('.calendar__month');
  createElement('tbody', false, table);
  let tableBody = document.querySelector('tbody');
  for (let i = 0; i < Math.floor(dates.length / 7); i++) {
    createElement('tr', 'calendar__week', tableBody);
  }
  let weeks = document.querySelectorAll('.calendar__week');
  for (let i = 0; i < weeks.length; i++) {
    for (let j = 0; j < 7; j++) {
      createElement('td', 'calendar__day', weeks[i])
    };
  }
  let days = document.querySelectorAll('.calendar__day');
  for (let i = 0; i < weekday.length; i++) {
    createElement('span', 'calendar__weekday', days[i], weekday[i]);
  }
  for (let i = 0; i < dates.length; i++) {
    createElement('span', 'calendar__date', days[i], dates[i]);
  }
  showPopup(days, 'calendar__day--active');
};

// Функция отрисовки всего календаря

const renderCalendar = (year, month, element) => {
  renderDates(year, month, element);
  showCurrMonthAndYear(year, month, currMonthAndYear);
  buttonPrev.addEventListener('click', showPrevMonthAndYear);
  buttonNext.addEventListener('click', showNextMonthAndYear);
};

// Отрисовываем календарь
renderCalendar(year, month, calendar);