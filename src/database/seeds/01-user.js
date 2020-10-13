exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {
          user_name: "jhonis",
          user_lastname: "oliver",
          user_cpf: "12345678901",
          user_email: "joneivison355@gmail.com",
          user_pass: "$2a$12$eaPNICyYAc/bLvXELxJUKeJqnP.0JBgo9izZWcibJ2jgHXJpP/NJu",
          user_whatsapp: "739999999999",
          user_photo: "/temp/foto",
          user_city: "ubaitaba",
          user_state: "bahia",
          user_district: "belavista",
          user_postalcode: "45545000",
        },
        {
          user_name: "jhonis1",
          user_lastname: "oliver1",
          user_cpf: "12345678901",
          user_email: "joneivison355@gmail.com1",
          user_pass: "$2a$12$eaPNICyYAc/bLvXELxJUKeJqnP.0JBgo9izZWcibJ2jgHXJpP/NJu",
          user_whatsapp: "7399999999991",
          user_photo: "/temp/foto1",
          user_city: "ubaitaba1",
          user_state: "bahia1",
          user_district: "belavista1",
          user_postalcode: "455450001",
        },
        {
          user_name: "jhonis2",
          user_lastname: "oliver2",
          user_cpf: "12345678902",
          user_email: "joneivison355@gmail.com2",
          user_pass: "$2a$12$eaPNICyYAc/bLvXELxJUKeJqnP.0JBgo9izZWcibJ2jgHXJpP/NJu",
          user_whatsapp: "7399999999992",
          user_photo: "/temp/foto2",
          user_city: "ubaitaba2",
          user_state: "bahia2",
          user_district: "belavista2",
          user_postalcode: "455450002",
        },
      ]);
    });
};
