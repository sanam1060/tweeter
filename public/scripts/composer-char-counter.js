$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    let inputLength = $(this).val().length; // length of the input that the user types
    $("#counter").val(140 - inputLength);
  });
});
