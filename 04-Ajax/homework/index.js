/////// MOSTRAR LISTA ////////////////
$("#botonLista").click(() => {
  $("#lista").empty();
  $.get(
    "http://localhost:5000/amigos",
    (createListItems = function (response) {
      ///// RECIBE RESPUESTA DEL SERVIDOR (response)
      for (const amigo of response) {
        $(`<li>${amigo.name}</li>`).appendTo("#lista");
      }
    })
  );
});

///////// BUSCAR AMIGO X ID //////////
$("#search").click(() => {
  $("#amigos").empty();
  let id = $("#inputSearch")[0].value;

  $.get(`http://localhost:5000/amigos/${id}`, (response) => {
    $(`<li>Nombre: ${response.name}</li>
    <li>Edad: ${response.age}</li>
    <li>Email: ${response.email}</li>`).appendTo("#amigos");
  });
});

///////ELIMINAR AMIGO POR ID /////////////
$("#delete").click(() => {
  $("#successDelete").empty();
  let id = $("#inputDelete")[0].value;
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: `DELETE`,
    success: (response) => {
      $(`<li>Tu amigo fue borrado con exito</li>`).appendTo("#successDelete");
      $("#lista").empty();
      createListItems(response);
    },
  });
});

////////AGREGAR AMIGO////////////
$("#newAmigo").click(() => {
  $("#successNewAmigo").empty();
  let inputNewId = $("#inputNewId")[0].value;
  let inputNewName = $("#inputNewName")[0].value;
  let inputNewAge = $("#inputNewAge")[0].value;
  let inputNewEmail = $("#inputNewEmail")[0].value;

  $.ajax({
    url: `http://localhost:5000/amigos/`,
    type: `POST`,
    contentType: `application/json`,
    data: JSON.stringify({
      id: inputNewId,
      name: inputNewName,
      age: inputNewAge,
      email: inputNewEmail,
    }),
    success: (response) => {
      $(`<li>Tu amigo fue agregado con exito</li>`).appendTo(
        "#successNewAmigo"
      );
      $("#lista").empty();
      createListItems(response);
    },
  });
  $("#inputNewId")[0].value = ""; /// inputNewId.val()
  $("#inputNewName")[0].value = "";
  $("#inputNewAge")[0].value = "";
  $("#inputNewEmail")[0].value = "";
});
