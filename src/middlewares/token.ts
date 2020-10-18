import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/token";

interface UserInformationData {
  user_email:string;
  iduser:number;
}

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["auth"];
  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, config.secret, (err, decoded) => {
      if(err) return res.status(401).json({error:true, message:'Erro na autenticação'})
      const {user_email, iduser} = decoded as UserInformationData;
      req.user_email = user_email;
      req.iduser = iduser;
      next();
    });
  } catch (error) {
    res.status(401).json({ error: "Falha na autenticação" });
    return;
  }

};