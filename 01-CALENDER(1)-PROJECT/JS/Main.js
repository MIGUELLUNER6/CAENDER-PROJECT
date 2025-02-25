// Making date dynamic
const currentDate =  document.querySelector('.current_date'),
      daysTag = document.querySelector('.days'),
      prevNextButton = document.querySelectorAll('.icons span');

let date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth();

// Setting the array of months 

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const renderCalender = () => {
    // Showing month year 
    // Making days dynamic
    
    let firstDayOfMonth = new Date(year, month, 1).getDay(),
        lastDateOfMonth = new Date(year, month + 1, 0).getDate(),
        lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay(),
        lastDateOfLastMonth = new Date(year, month, 0).getDate();

    let liTag = '';

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `
        <li class='inactive'>${lastDateOfLastMonth - i + 1}</li>
        `; 
    }
    
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? 'active' : ``;
        liTag += `
        <li class='${isToday}'>${i}</li>
        `;
    }
    
    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `
        <li class='inactive'>${i - lastDayOfMonth + 1}</li>
        `; 
    }
    currentDate.innerText = `${months[month]} ${year}`;
    daysTag.innerHTML = liTag;
}
renderCalender();

// lets make the prevNextButton have a function

prevNextButton.forEach(icon => {
    icon.addEventListener('click', () => {
        // Adding a click event on bth icons

        month = icon.id === 'prev' ? month - 1 : month + 1;
        // If the prev icon or next icon is clicked it reduces/adds a month 


        if (month < 0 || month > 11) {
            date = new Date(year, month);
            year = date.getFullYear();
            month = date.getMonth();
        }else{
            date = new Date();
        }
        renderCalender();
    });
});