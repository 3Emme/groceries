$(document).ready(function () {
  $("form#groceries-form").submit(function (event) {
    const item1 = $("input#item1").val();
    const item2 = $("input#item2").val();
    const item3 = $("input#item3").val();
    const itemarray = [item1, item2, item3];
    const alphacaparray = []

    alphacaparray.push(itemarray[1], itemarray[0], itemarray[2]);

    itemarray.forEach(function (element) {
      $("ul#grocery-list").append('<li>' + element + '</li>');
    });


    if (!item1 || !item2 || !item3) {
      alert("Please fill out all fields. I wouldn't want you to go hungry!")
    } else {
      $("div#grocery-input-section").hide();
      $("div#grocery-output-section").show();
    }
    event.preventDefault();

  });
});
