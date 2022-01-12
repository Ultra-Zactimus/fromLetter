$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    const name = $("input#yourName").val();
    const add1 = $("input#address1").val();
    const add2 = $("input#address2").val();

    $(".personName").text(name);
    $(".line1").text(add1);
    $(".line2").text(add2);

    $("#letter").show();
  });
});