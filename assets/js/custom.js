$(document).ready(function () {
  // Contact Sidebar Start
  $(".contact-activity-btn").click(function (e) {
    e.stopPropagation();
    $(".contact-sidebar").toggleClass("contact-sidebar-open");
  });

  $(".contact-sidebar-close").click(function (e) {
    e.stopPropagation();
    $(".contact-sidebar").removeClass("contact-sidebar-open");
  });

  $(".contact-sidebar").click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function () {
    $(".contact-sidebar").removeClass("contact-sidebar-open");
  });
  // Contact Sidebar End

  // Header menu Start
  $(".header-hamburger").click(function () {
    $("body").toggleClass("menu-list-open");
  });
  // Header menu End

  // Duty Sidebar Start
  $(".header-duty").click(function (event) {
    event.stopPropagation();
    $(".header-middle").toggleClass("header-middle-open");
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".header-middle, .header-duty").length) {
      $(".header-middle").removeClass("header-middle-open");
    }
  });

  $(".header-activity-item").click(function () {
    $(".header-middle").removeClass("header-middle-open");
  });

  // Duty Sidebar End

  // Currect job Start
  $(".header-currect-job").click(function (event) {
    event.stopPropagation(); 
    $(".bottom-header-body").toggleClass("bottom-header-body-open");
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".bottom-header-body, .header-duty").length) {
      $(".bottom-header-body").removeClass("bottom-header-body-open");
    }
  });
  // Currect job End

  // Chat Sidebar Start
  $(".chat-activity-btn").click(function (e) {
    e.stopPropagation();
    $(".chat-sidebar").toggleClass("chat-sidebar-open");
  });

  $(".contact-sidebar-close").click(function (e) {
    e.stopPropagation();
    $(".chat-sidebar").removeClass("chat-sidebar-open");
  });
  // Chat Sidebar End 

  // History Sidebar Start

  $(".history-activity-btn").click(function (e) {
    e.stopPropagation();
    $(".history-sidebar").toggleClass("history-sidebar-open");
  });

  $(".history-sidebar-close").click(function (e) {
    e.stopPropagation();
    $(".history-sidebar").removeClass("history-sidebar-open");
  });

  $(".history-sidebar").click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function () {
    $(".history-sidebar").removeClass("history-sidebar-open");
  });


  
  $('.histort-months span.active').click(function () {
    $('.history-month-content').addClass('history-month-content-open')
  })
  $('.history-month-close').click(function () {
    $('.history-month-content').removeClass('history-month-content-open')
  })
  $('.history-month-date').click(function () {
    $('.history-details').addClass('history-details-open')
  })
  $('.history-date-close').click(function () {
    $('.history-details').removeClass('history-details-open')
  })
  // History Sidebar End

  // Calendar Sidebar Start
  $(".calendar-activity-btn").click(function (e) {
    e.stopPropagation();
    $(".calendar-sidebar").toggleClass("calendar-sidebar-open");
  });

  $(".calendar-sidebar-close").click(function (e) {
    e.stopPropagation();
    $(".calendar-sidebar").removeClass("calendar-sidebar-open");
  });

  $(".calendar-sidebar").click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function () {
    $(".calendar-sidebar").removeClass("calendar-sidebar-open");
  });
  // Calendar Sidebar End

  // invites Sidebar Start
  $(".invites-activity-btn").click(function (e) {
    e.stopPropagation();
    $(".invites-sidebar").toggleClass("invites-sidebar-open");
  });

  $(".contact-sidebar-close").click(function (e) {
    e.stopPropagation();
    $(".invites-sidebar").removeClass("invites-sidebar-open");
  });

  $(".invites-sidebar").click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function () {
    $(".invites-sidebar").removeClass("invites-sidebar-open");
  });
  // invites Sidebar End

});

// Year Selector Start

const input = document.getElementById("yearInput");
const minYear = 1980;
const maxYear = new Date().getFullYear();
input.max = maxYear;
input.value = maxYear; // default to current year

function changeYear(direction) {
  let year = parseInt(input.value) || maxYear;
  year += direction;
  if (year >= minYear && year <= maxYear) {
    input.value = year;
  }
}

function validateYear(field) {
  let val = parseInt(field.value);
  if (val < minYear) field.value = minYear;
  if (val > maxYear) field.value = maxYear;
}

// Year Selector End

// Calendar Start
const calendarBody = document.getElementById("calendarBody");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();
const today = new Date();
today.setHours(0, 0, 0, 0); 

const events = {
  "2025-05-06": ["meeting"],
  "2025-05-17": ["service"],
  "2025-05-31": ["repair"]
};

function renderCalendar(date) {
  const y = date.getFullYear(), m = date.getMonth();
  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const daysInPrevMonth = new Date(y, m, 0).getDate();

  calendarBody.innerHTML = "";
  monthYear.textContent = new Date(y, m).toLocaleDateString("en-US", { year: "numeric", month: "long" });

  let row = document.createElement("tr");

  for (let i = firstDay - 1; i >= 0; i--) {
    const td = document.createElement("td");
    td.textContent = daysInPrevMonth - i;
    td.classList.add("inactive"); 
    row.appendChild(td);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const cellDate = new Date(y, m, d);
    const dateStr = `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const td = document.createElement("td");
    td.textContent = d;

    if (cellDate < today) td.classList.add("past");
    if (cellDate.getTime() === today.getTime()) td.classList.add("today");

    (events[dateStr] || []).forEach(color => {
      const dot = document.createElement("span");
      dot.className = `event-dot ${color}`;
      td.appendChild(dot);
    });

    row.appendChild(td);
    if ((d + firstDay) % 7 === 0 || d === daysInMonth) {
      calendarBody.appendChild(row);
      row = document.createElement("tr");
    }
  }
}

[prevMonth, nextMonth].forEach((btn, i) => {
  btn.onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + (i ? 1 : -1));
    renderCalendar(currentDate);
  };
});

renderCalendar(currentDate);

// Calendar End

