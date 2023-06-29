
$j("button").click(function () {
  $j.getJSON("books.json", function (result) {
    $j.each(result, function (i, field) {
      $j("#books").append(i + " " + field.title + "<br>");
    });
  });
});