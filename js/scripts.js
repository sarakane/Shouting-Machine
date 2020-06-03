$(document).ready(function(){
  $("#sentence").submit(function(){
    const inputOne = ($("input#text").val()).toUpperCase();

    $(".text").text(inputOne);

    $(".output").show();

    event.preventDefault();

  });
});