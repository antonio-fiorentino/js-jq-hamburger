function show(selettore){
  $(selettore).show();
}
function hide(selettore) {
  $(selettore).hide();
}

$('.fa-bars').dblclick(function () {
  show('.hamburger-menu');
})
$('.close').click(function () {
  hide('.hamburger-menu');
})
