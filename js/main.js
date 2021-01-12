function show(selettore){
  $(selettore).show();
}
function hide(selettore) {
  $(selettore).hide();
}

$('hamburger-menu').click(function () {
  show('hamburger-menu');
})
$('hamburger-menu').dblclick(function () {
  hide('hamburger-menu');
})
