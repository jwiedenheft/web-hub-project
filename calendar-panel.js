function makeCalendar() {
    // Array representing days of the week
    const days = new Array('Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa');

    const lengthofmonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)

    // Today's date
    var today = new Date();
    if (today.getFullYear() % 4 == 0) lengthofmonth[1] += 1;

    const monthlength = lengthofmonth[today.getMonth()];

    // Get the current day of the week (0 = Su, 6 = Sa)
    const day = today.getDay();
    // Get the current date
    const date = today.getDate();
    // Find the difference in days of the week between 
    // the first day of the month and today's date
    var daymod = (date % 7) - 1;

    // Subtract that difference from today's date and make sure it falls withing
    // the 0 - 6 range, to represent the first day of the month
    var newday = day - daymod;
    if (newday > 6) newday = newday % 6;
    if (newday < 0) newday = 6 + (newday + 1);

    // And convert that to a string with the days of the week array
    var firstofmonth = days[newday];

    var calendar = document.createElement("table");

    // A row with makers for each day of the week
    var daysrow = document.createElement("tr");
    for (var k = 0; k < 7; k++) {
        var column = document.createElement("td");
        column.className = "calendar-column";
        column.style.textDecoration = "underline";
        column.innerHTML = days[k];
        daysrow.appendChild(column);
    }
    calendar.appendChild(daysrow);

    // The first row of the calendar
    var firstrow = document.createElement("tr");
    var daycount = 0;
    for (var l = 0; l < 7; l++) {
        var column = document.createElement("td");
        if (l >= newday) {
            daycount++;
            column.className = "calendar-column";
            if (daycount == date) column.classList.add("calendar-circled")
            column.innerHTML = daycount;
            firstrow.appendChild(column);
        } else {
            column.className = "calendar-dull";
            const previousmonth = today.getMonth() - 1;
            if (previousmonth < 0) previousmonth = 12 - (previousmonth + 1);
            column.innerHTML = lengthofmonth[previousmonth] - l;
            firstrow.appendChild(column);
        }
    }
    calendar.appendChild(firstrow);

    for (var i = 0; i <= 3; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j <= 6; j++) {
            daycount++
            var column = document.createElement("td");
            column.innerHTML = daycount % monthlength;
            if (daycount == date) column.classList.add("calendar-circled")
            if (daycount == monthlength) column.innerHTML = daycount;
            if (daycount > monthlength) {
                column.className = "calendar-dull";
            }
            row.appendChild(column);
        }
        calendar.appendChild(row);
    }
    calendar.id = "cal";
    calendar.className = "calendar"
    return calendar;
}


$(document).ready(function () {
    var cal = makeCalendar();
    $(".panel").hover(function () {
        $(this).stop();
        $(this).animate({ height: '400px' });
        $(this).css("backgroundColor", '#2e0b3fa8');
        $(this).append(cal);
    }, function () {
        $(this).stop();
        $(this).animate({ height: '200px' });
        $(this).css("backgroundColor", '#47306b8a');
        $("#cal").remove();
    }
    );
});