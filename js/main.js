const date=new Date;let year=date.getFullYear(),month=date.getMonth();const calendar=document.querySelector(".calendar__body"),currMonthAndYear=document.querySelector(".month-control__month-name"),buttonPrev=document.querySelector(".month-control__button--prev"),buttonNext=document.querySelector(".month-control__button--next"),addEvent=document.querySelector(".popup--new"),closeAddEventPopup=addEvent.querySelector(".popup__close-button"),addEventForm=addEvent.querySelector(".form"),eventDate=addEvent.querySelector(".form__input--date"),eventTittle=addEvent.querySelector(".form__input--event"),eventParticipants=addEvent.querySelector(".form__input--participants"),reviewEvent=document.querySelector(".popup--review"),reviewEventTitle=reviewEvent.querySelector(".form-info__event-title"),reviewEventDate=reviewEvent.querySelector(".form-info__event-date"),reviewEventParticipants=reviewEvent.querySelector(".form-info__participants-name"),reviewEventForm=reviewEvent.querySelector(".form"),reviewInfoEventTitle=reviewEvent.querySelector(".form-info__event-title"),reviewInfoEventDate=reviewEvent.querySelector(".form-info__event-date"),reviewInfoEventParticipants=reviewEvent.querySelector(".form-info__participants-name"),closeReviewEventPopup=reviewEvent.querySelector(".popup__close-button"),deleteEventButton=reviewEvent.querySelector(".form__button--delete"),weekdays=["Понедельник, ","Вторник, ","Среда, ","Четверг, ","Пятница, ","Суббота, ","Воскресенье, "],getLastDayOfMonth=(e,t)=>new Date(e,t+1,0).getDate(),getFirstWeekDayOfMonth=(e,t)=>new Date(e,t).getDay(),getLastWeekDayOfMonth=(e,t)=>new Date(e,t+1,0).getDay(),getShiftElemNum=(e,t)=>{let n=getFirstWeekDayOfMonth(e,t);return 0===n?6:n-1},getPushElemNum=(e,t)=>{let n=getLastWeekDayOfMonth(e,t);return 0===n?0:7-n},getDaysOfPrevMonth=(e,t)=>{let n=new Date(e,t,0).getDate(),r=[];for(;r.length!==getShiftElemNum(e,t);)r.push(n),n-=1;return r.reverse(),r},getDaysOfNextMonth=(e,t)=>{let n=new Date(e,t,1).getDate(),r=[];for(;r.length!==getPushElemNum(e,t);)r.push(n),n+=1;return r},getDates=(e,t)=>{let n=[],r=[],o=getDaysOfPrevMonth(e,t),a=getDaysOfNextMonth(e,t);for(let n=1;n<=getLastDayOfMonth(e,t);n++)r.push(n);return n=o.concat(r,a),n},getMonthName=e=>["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"][e],monthDeclension=e=>{let t;return t=2===e||7==e?getMonthName(e).concat("а"):getMonthName(e).substring(0,getMonthName(e).length-1).concat("я"),t},showCurrMonthAndYear=(e,t,n)=>{n.textContent=`${getMonthName(t)} ${e}`},getPrevYear=(e,t)=>0===t?e-1:e,getPrevMonth=e=>0===e?11:e-1,getNextYear=(e,t)=>11===t?e+1:e,getNextMonth=e=>11===e?0:e+1,showPrevMonthAndYear=()=>{year=getPrevYear(year,month),month=getPrevMonth(month),element=calendar,addEvent.classList.contains("popup--show")&&addEvent.classList.remove("popup--show"),renderCalendar(year,month,element)},showNextMonthAndYear=()=>{element=calendar,year=getNextYear(year,month),month=getNextMonth(month),renderCalendar(year,month,element),addEvent.classList.contains("popup--show")&&addEvent.classList.remove("popup--show")},createElement=(e,t,n,r)=>{let o=document.createElement(e);t&&o.classList.add(t),r&&(o.textContent+=r),n.appendChild(o)},showPopup=(e,t)=>{e.forEach((n=>{n.addEventListener("click",(()=>{for(let n=0;n<e.length;n++)e[n].classList.contains(t)&&e[n].classList.remove(t);n.classList.add(t);const r=()=>{clearForm(),n.classList.remove(t),addEvent.classList.remove("popup--show"),addEvent.style.left="",addEvent.style.top="",closeAddEventPopup.removeEventListener("click",r),addEventForm.removeEventListener("submit",a)},o=()=>{clearForm(),n.classList.remove(t),reviewEvent.classList.remove("popup--show"),reviewEvent.style.left="",reviewEvent.style.top="",closeReviewEventPopup.removeEventListener("click",o)},a=e=>{e.preventDefault(),createElement("div","event",n);const o=n.querySelector(".event"),v=eventTittle.value,l=eventParticipants.value;createElement("span","event__tittle",o,v),createElement("span","event__description",o,l),n.classList.add("calendar__day--event"),clearForm(),n.classList.remove(t),addEvent.classList.remove("popup--show"),closeAddEventPopup.removeEventListener("click",r),addEventForm.removeEventListener("submit",a)},v=e=>{e.preventDefault(),n.classList.remove(t),reviewEvent.classList.remove("popup--show"),closeReviewEventPopup.removeEventListener("click",o),reviewEventForm.removeEventListener("submit",v)},l=()=>{const e=n.querySelector(".event");n.removeChild(e),n.classList.remove(t),n.classList.remove("calendar__day--event"),reviewEvent.classList.remove("popup--show"),reviewEvent.style.left="",reviewEvent.style.top="",closeReviewEventPopup.removeEventListener("click",o),reviewEventForm.removeEventListener("submit",v),deleteEventButton.removeEventListener("click",l)};n.classList.contains("calendar__day--event")?(reviewEvent.classList.add("popup--show"),reviewEvent.style.left=n.getBoundingClientRect().right+"px",reviewEvent.style.top=n.getBoundingClientRect().top+"px",fillReviewEventInfo(n),closeReviewEventPopup.addEventListener("click",o),reviewEventForm.addEventListener("submit",v),deleteEventButton.addEventListener("click",l)):(addEvent.classList.add("popup--show"),addEvent.style.left=n.getBoundingClientRect().right+"px",addEvent.style.top=n.getBoundingClientRect().top+"px",fillAddEventDate(n),closeAddEventPopup.addEventListener("click",r),addEventForm.addEventListener("submit",a))}))}))},clearForm=()=>{eventTittle.value="",eventParticipants.value="",eventDate.value=""},fillReviewEventInfo=e=>{const t=e.querySelector(".calendar__date");reviewInfoEventDate.textContent=`${t.textContent} ${monthDeclension(month)} ${year}`;const n=e.querySelector(".event"),r=n.querySelector(".event__tittle"),o=n.querySelector(".event__description");reviewEventTitle.textContent=r.textContent,reviewEventParticipants.textContent=o.textContent},fillAddEventDate=e=>{const t=e.querySelector(".calendar__date");eventDate.value=`${t.textContent} ${monthDeclension(month)} ${year}`},renderDates=(e,t,n)=>{n.innerHTML="";let r=getDates(e,t);createElement("table","calendar__month",calendar);let o=document.querySelector(".calendar__month");createElement("tbody",!1,o);let a=document.querySelector("tbody");for(let e=0;e<Math.floor(r.length/7);e++)createElement("tr","calendar__week",a);let v=document.querySelectorAll(".calendar__week");for(let e=0;e<v.length;e++)for(let t=0;t<7;t++)createElement("td","calendar__day",v[e]);let l=document.querySelectorAll(".calendar__day");for(let e=0;e<weekdays.length;e++)createElement("span","calendar__weekday",l[e],weekdays[e]);for(let e=0;e<r.length;e++)createElement("span","calendar__date",l[e],r[e]);var s,i;i="calendar__day--active",(s=l).forEach((e=>{e.addEventListener("click",(()=>{for(let e=0;e<s.length;e++)s[e].classList.contains(i)&&s[e].classList.remove(i);e.classList.add(i);const t=()=>{clearForm(),e.classList.remove(i),addEvent.classList.remove("popup--show"),addEvent.style.left="",addEvent.style.top="",closeAddEventPopup.removeEventListener("click",t),addEventForm.removeEventListener("submit",r)},n=()=>{clearForm(),e.classList.remove(i),reviewEvent.classList.remove("popup--show"),reviewEvent.style.left="",reviewEvent.style.top="",closeReviewEventPopup.removeEventListener("click",n)},r=n=>{n.preventDefault(),createElement("div","event",e);const o=e.querySelector(".event"),a=eventTittle.value,v=eventParticipants.value;createElement("span","event__tittle",o,a),createElement("span","event__description",o,v),e.classList.add("calendar__day--event"),clearForm(),e.classList.remove(i),addEvent.classList.remove("popup--show"),closeAddEventPopup.removeEventListener("click",t),addEventForm.removeEventListener("submit",r)},o=t=>{t.preventDefault(),e.classList.remove(i),reviewEvent.classList.remove("popup--show"),closeReviewEventPopup.removeEventListener("click",n),reviewEventForm.removeEventListener("submit",o)},a=()=>{const t=e.querySelector(".event");e.removeChild(t),e.classList.remove(i),e.classList.remove("calendar__day--event"),reviewEvent.classList.remove("popup--show"),reviewEvent.style.left="",reviewEvent.style.top="",closeReviewEventPopup.removeEventListener("click",n),reviewEventForm.removeEventListener("submit",o),deleteEventButton.removeEventListener("click",a)};e.classList.contains("calendar__day--event")?(reviewEvent.classList.add("popup--show"),reviewEvent.style.left=e.getBoundingClientRect().right+"px",reviewEvent.style.top=e.getBoundingClientRect().top+"px",fillReviewEventInfo(e),closeReviewEventPopup.addEventListener("click",n),reviewEventForm.addEventListener("submit",o),deleteEventButton.addEventListener("click",a)):(addEvent.classList.add("popup--show"),addEvent.style.left=e.getBoundingClientRect().right+"px",addEvent.style.top=e.getBoundingClientRect().top+"px",fillAddEventDate(e),closeAddEventPopup.addEventListener("click",t),addEventForm.addEventListener("submit",r))}))}))},renderCalendar=(e,t,n)=>{renderDates(e,t,n),showCurrMonthAndYear(e,t,currMonthAndYear),buttonPrev.addEventListener("click",showPrevMonthAndYear),buttonNext.addEventListener("click",showNextMonthAndYear)};renderCalendar(year,month,calendar);