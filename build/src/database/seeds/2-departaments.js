"use strict";
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('departaments').del()
        .then(function () {
        // Inserts seed entries
        return knex('departaments').insert([
            { departaments_name: 'Eletrônicos', departaments_image: './temp/img/dep/departamento-eletronicos.png' },
            { departaments_name: 'Informática', departaments_image: './temp/img/dep/departamento-informatica.png' },
            { departaments_name: 'Sapataria', departaments_image: './temp/img/dep/departamento-sapataria.png' },
        ]);
    });
};
