function show(selettore){
  $(selettore).show();
}
function hide(selettore) {
  $(selettore).hide();
}

$('hamburger-menu').dblclick(function () {
  show('hamburger-menu');
})
$('hamburger-menu').click(function () {
  hide('hamburger-menu');
})
