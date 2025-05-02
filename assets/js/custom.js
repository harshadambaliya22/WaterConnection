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
  
    // Jab header-activity-item pe click ho
    $(".header-activity-item").click(function () {
      $(".header-middle").removeClass("header-middle-open");
    });
  
    // Duty Sidebar End
  
    // Currect job Start
    $(".header-currect-job").click(function (event) {
      event.stopPropagation(); // ye click ko upar propagate hone se rokta hai
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
 
    // History Sidebar End

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



  
//   document.addEventListener('DOMContentLoaded', function () {
//     const startYear = 1998;
//     const currentYear = new Date().getFullYear();
//     const selector = document.getElementById('yearSelector');

//     // Clear all options
//     while (selector.firstChild) {
//         selector.removeChild(selector.firstChild);
//     }

//     // Add default "Select Year"
//     const defaultOption = document.createElement('option');
//     defaultOption.value = "";
//     defaultOption.text = "Select Year";
//     selector.appendChild(defaultOption);

//     // Add year options
//     for (let year = startYear; year <= currentYear; year++) {
//         const option = document.createElement('option');
//         option.value = year;
//         option.text = year;
//         if (year === currentYear) {
//           option.selected = true; 
//         }
//         selector.appendChild(option);
//     }

//     // 🔄 Refresh selectpicker (Bootstrap-select)
//     $(selector).selectpicker('refresh');
// });
  // Year Selector End