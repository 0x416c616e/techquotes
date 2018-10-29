if (!localStorage.bannerClosed) {
  $('.privacy-banner').css('display', 'inherit');
} else {
  $('.privacy-banner').css('display', 'none');
}
$('.privacy-banner button').click(function() {
  $('.privacy-banner').css('display', 'none');
  localStorage.bannerClosed = 'true';
});
$('.banner-accept').click(function() {
  $('.privacy-banner').css('display', 'none');
  localStorage.bannerClosed = 'true';
});
if (navigator.userAgent.match(/Opera|OPR\//)) {
  $('.privacy-banner').css('display', 'inherit');
}
//this is the breakpoint for the GDPR thing
//adds more spacing because of share buttons on bottom
//the share buttons only change at the breakpoint of 1024
//makes the GDPR bar have more space on the bottom
$(window).resize(function() {
    if ($(window).width() > 1024) {
       document.getElementById("gdprSpacer").classList.add("gdprSpacing");
       document.getElementById("gdprSpacer2").classList.add("gdprSpacing");
       document.getElementById("backToTopButton").classList.remove("backToTopButtonNarrow");
        
    }
   else {
      document.getElementById("gdprSpacer").classList.remove("gdprSpacing");
      document.getElementById("gdprSpacer2").classList.remove("gdprSpacing");
      document.getElementById("backToTopButton").classList.add("backToTopButtonNarrow");
   }
  });

if ($(window).width() > 1024) {
  document.getElementById("gdprSpacer").classList.add("gdprSpacing");
  document.getElementById("gdprSpacer2").classList.add("gdprSpacing");
  document.getElementById("backToTopButton").classList.remove("backToTopButtonNarrow");
} else {
  document.getElementById("gdprSpacer").classList.remove("gdprSpacing");
  document.getElementById("gdprSpacer2").classList.remove("gdprSpacing");
  document.getElementById("backToTopButton").classList.add("backToTopButtonNarrow");
}