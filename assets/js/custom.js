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
    
  });
  