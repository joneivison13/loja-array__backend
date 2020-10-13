import 'dotenv/config'
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

import database from "../database/index";
import config from '../config/token.js'


interface Iuser {
  user_pass:string
  user_name:string
  user_email:string
  user_whatsapp:string
  user_photo:string
  user_city:string
  user_state:string
  user_district:string
  user_postalcode:string
  user_cpf:string
  user_lastname:string
  iduser:string
}

export default {
  async create(req: Request, res: Response) {
    const {
      user_name,
      user_lastname,
      user_cpf,
      user_email,
      user_pass,
      user_whatsapp,
      user_photo,
      user_city,
      user_state,
      user_district,
      user_postalcode,
    } = req.body;

    if (
      !user_name ||
      !user_lastname ||
      !user_cpf ||
      !user_email ||
      !user_pass
    ) {
      return res.status(400).json({ error: "Falta dados" });
    }

    const salt = bcrypt.genSaltSync(12);
    const hash = await bcrypt.hashSync(user_pass, salt);

    await database("user")
      .insert({
        user_name,
        user_lastname,
        user_cpf,
        user_email,
        user_pass: hash,
        user_whatsapp,
        user_photo,
        user_city,
        user_state,
        user_district,
        user_postalcode,
      })
      .catch((err) => {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).json({ error: "usuário já cadastrado" });
        } else {
          console.log(err);
          return res
            .status(500)
            .json({
              error:
                "Aconteceu um erro inesperado no servidor.\n Por favor, retorne mais tarde",
            });
        }
      });

    return res.json({
      user_name,
      user_lastname,
      user_cpf,
      user_email,
      user_whatsapp,
      user_photo,
      user_city,
      user_state,
      user_district,
      user_postalcode,
    });
  },

  async read(req: Request, res: Response) {
    const { id } = req.params;

    if (id) {
      const user = await database("user").select("*").where({ iduser: id });

      return res.json({ user: user[0] });
    }

    const user = await database("user").select("*");

    return res.json({ user: user });
  },

  async login(req: Request, res: Response) {
    const { user_email, user_pass } = req.body;

    if (!user_email || !user_pass) {
      return res.status(400).json({ error: "usuário não existe" });
    }

    const user = await database("user").select("*").where({user_email}).first();

    if (!user) {
      return res.status(404).json({ error: "Usuário inexistente." });
    }

    const {
      user_pass: password,
      user_name,
      user_email: email,
      user_whatsapp,
      user_photo,
      user_city,
      user_state,
      user_district,
      user_postalcode,
      user_cpf,
      user_lastname,
      iduser,
    } = user;

    const matchPass = await bcrypt.compareSync(user_pass, password);

    if(!matchPass){
      return res.status(404).json({error:'usuário/senha incorretos.'})
    }

    const token = jwt.sign(
      {id:iduser},
      config.secret,
      { expiresIn: "7d" }
    );

    return res.json({
      user: {
        iduser,
        user_name,
        email,
        user_whatsapp,
        user_photo,
        user_city,
        user_state,
        user_district,
        user_postalcode,
        user_cpf,
        user_lastname,
      },token
    });
  },

  async detele(req:Request, res:Response){
    const {id} = req.params;

    await database('user').delete('*').where({iduser:id})

    return res.json({message:'usuário apagado com sucesso.'})
  }
};
