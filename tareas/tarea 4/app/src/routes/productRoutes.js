import express from "express";
import { responseHandler } from "../middlewares/responseHandler.js";
import controller from "../controllers/productController.js";

const router = express.Router();
router.use(responseHandler);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Productos obtenidos exitosamente
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       nombre:
 *                         type: string
 *                         example: Televisor
 *                       descripcion:
 *                         type: string
 *                         example: Smart TV 55 pulgadas
 *                       marca:
 *                         type: string
 *                         example: Samsung
 *                       stock:
 *                         type: integer
 *                         example: 10
 */
router.get("/products", controller.getAllItems);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       404:
 *         description: Producto no encontrado
 */
router.get("/products/:id", controller.getItemById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - stock
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Televisor
 *               descripcion:
 *                 type: string
 *                 example: Smart TV 55 pulgadas
 *               marca:
 *                 type: string
 *                 example: Samsung
 *               stock:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       200:
 *         description: Producto creado exitosamente
 */
router.post("/products", controller.createItem);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Actualiza un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Televisor
 *               descripcion:
 *                 type: string
 *                 example: Smart TV 55 pulgadas
 *               marca:
 *                 type: string
 *                 example: Samsung
 *               stock:
 *                 type: integer
 *                 example: 15
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 */
router.put("/products/:id", controller.updateItem);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Elimina un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 */
router.delete("/products/:id", controller.deleteItem);

export default router;
