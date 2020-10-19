import { Request, Response } from "express";
import database from "../database";

export default {
  async list(req: Request, res: Response) {
    const productInCart = await database("products_has_user")
      .select("product.*")
      .select("products_photos.products_photos_dir")
      .select("products_has_user.*")
      .where("products_has_user.user_iduser", req.iduser)
      .innerJoin(
        "product",
        "products_has_user.products_idproducts",
        "product.idproduct"
      )
      .innerJoin(
        "products_photos",
        "products_has_user.products_idproducts",
        "products_photos.products_idproduct"
      );

    return res.json({ message: productInCart });
  },
  async create(req: Request, res: Response) {
    const now = new Date();
    const { products_idproducts, product_qtd } = req.body;

    if (!products_idproducts) {
      return res.json({ error: true, message: "Falta selecionar o produto." });
    }

    const products_has_user_qtd: number = !!product_qtd ? product_qtd : 1;
    const productUser = await database("products_has_user")
      .select("*")
      .where({ user_iduser: req.iduser, products_idproducts });
    console.log(productUser);
    if (productUser.length >= 1) {
      const {
        products_has_user_qtd: Qtd,
        products_idproducts: productId,
      } = productUser[0];
      await database("products_has_user")
        .update({
          products_has_user_qtd: Number(Qtd) + Number(products_has_user_qtd),
        })
        .where({ products_idproducts: productId })
        .catch((err) => {
          if (err.code === "ER_NO_REFERENCED_ROW_2") {
            return res
              .status(401)
              .json({ error: true, message: "Produto inexistente" });
          }
          console.log(err);
          res
            .status(500)
            .json({
              error: true,
              message:
                "Aconteceu um erro fatal com o servidor, por favor, tesnte mais tarde.",
            });
        });

      return res.json({
        message: "Produto adicionado ao carrinho com sucesso.",
      });
    }

    await database("products_has_user")
      .insert({
        products_idproducts,
        user_iduser: req.iduser,
        products_has_user_date: now,
        products_has_user_qtd,
      })
      .catch((err) => {
        if (err.code === "ER_NO_REFERENCED_ROW_2") {
          return res
            .status(401)
            .json({ error: true, message: "Produto inexistente" });
        }
        console.log(err);
        res
          .status(500)
          .json({
            error: true,
            message:
              "Aconteceu um erro fatal com o servidor, por favor, tesnte mais tarde.",
          });
      });

    return res.json({ message: "Produto adicionado ao carrinho com sucesso!" });
  },

  async remove(req: Request, res: Response) {
    const { products_idproducts, qtd } = req.query;

    if (!qtd || !products_idproducts) {
      return res.status(401).json({ error: true, message: "Faltam dados" });
    }

    const productQtd = await database("products_has_user")
      .select("products_has_user_qtd")
      .where({ products_idproducts, user_iduser: req.iduser });
    if (!productQtd.length) {
      return res.status(404).json({ message: "Produto Inexistente" });
    }
    if (Number(qtd) > Number(productQtd[0].products_has_user_qtd)) {
      await database("products_has_user")
        .delete("*")
        .where({ user_iduser: req.iduser, products_idproducts });
      return res.json({ message: "Produto apagado com sucesso" });
    }

    await database("products_has_user")
      .update({
        products_has_user_qtd:
          productQtd[0].products_has_user_qtd - Number(qtd),
      })
      .where({ user_iduser: req.iduser, products_idproducts });

    return res.json({ message: "Produto apagado com sucesso" });
  },
};
