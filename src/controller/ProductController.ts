import { Request, Response } from "express";	
import * as jwt from "jsonwebtoken";	
import { createModuleResolutionCache } from "typescript";	

import config from "../config/token";	
import database from "../database";	

interface decoded {	
  id: number;	
}	

interface product{	
  idproduct:number;	
  product_name: string;	
  product_price: number;	
  product_amount: number;	
  user_iduser:number;	
  created_at:Date;	
  updated_at:Date;	
}	

export default {	
  async create(req: Request, res: Response) {	
    const { product_name, product_price, product_amount, departaments_iddepartament } = req.body;	
    const token = <string>req.headers["auth"];	

    if (!product_name || !departaments_iddepartament) {	
      return res.status(400).json({ error: "Falta dados" });	
    }	

    let decoded;	

    try {	
      decoded = <decoded>jwt.verify(token, config.secret);	
    } catch (error) {	
      return res.status(401).json({ error: "Usuário sem autorização" });	
    }	

    const user_iduser = decoded.id;	

    const product =<[number]>await database("product")	
      .insert({	
        product_name,	
        product_price,	
        product_amount,	
        user_iduser,	
      }).catch((err) => {	
        console.log(err);	
      });	

    await database('departaments_has_products').insert({departaments_iddepartament, products_idproducts:product[0]})	

    return res.json({	
      idproduct: product[0],	
      product_name: product_name || 0,	
      product_price: product_price || 0,	
      product_amount: product_amount || 1,	
    });	
  },	

  async read(req:Request, res:Response){	
    const {id} = req.params	

    if(id){	
      const product = await database('product').select('*').where({idproduct:id})	
      return res.json({id, product:product})	
    }	

    const products = await database('product').select('*')	
    return res.json({id, product:products})	
  },	

  async upload(req:Request, res:Response){	
    const {products_idproduct} = req.body;	

    await database('products_photos').insert({products_photos_dir:`/temp/img/${req.file.filename}`, products_idproduct})	

    return res.json({error:false, status:'Fotos inseridas com sucesso!'})	
  }	
};