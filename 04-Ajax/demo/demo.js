$(".boton").click(function () {
  // GET AJAX
  $.get("https://jsonplaceholder.typicode.com/photos", (response) => {
    for (const photo of response) {
      $(`<img src=${photo.url}>`).appendTo("#respuesta");
    }
  });
});
