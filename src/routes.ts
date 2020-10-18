import {Router} from 'express'
import multer from 'multer'
import CartController from './controller/CartController';

import ProductController from './controller/ProductController';

import UserController from './controller/UserController'

import {checkJwt} from './middlewares/token'
import storage from './middlewares/upload'

const routes = Router();

const upload = multer({storage})

routes.get('/', (req, res) => {
  res.json({message:'servidor rodando com sucesso'})
})

// user
routes.post('/user', UserController.create)

routes.post('/login', UserController.login)

routes.get('/user', UserController.read)

routes.get('/user/:id', UserController.read)

routes.delete('/user/:id', checkJwt, UserController.detele)

// products
routes.post('/product', checkJwt, ProductController.create)

routes.get('/product', ProductController.read)

routes.get('/product/:id', ProductController.read)

// products ------ images
  routes.post('/image', checkJwt, upload.single('file'), ProductController.upload)

// cart
routes.get('/cart', checkJwt, CartController.list)

routes.post('/cart', checkJwt, CartController.create)
routes.delete('/cart',checkJwt, CartController.remove)

export default routes