import express from "express";
import { responseHandler } from "../middlewares/responseHandler.js";
import controller from "../controllers/detailController.js";

const router = express.Router();
router.use(responseHandler);

/**
 * @swagger
 * /details:
 *   get:
 *     summary: Obtiene todos los detalles de facturas
 *     tags: [Detalles]
 *     responses:
 *       200:
 *         description: Lista de detalles obtenida correctamente
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
 *                   example: Detalles obtenidos exitosamente
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       factura_id:
 *                         type: integer
 *                         example: 1
 *                       producto_id:
 *                         type: integer
 *                         example: 1
 *                       cantidad:
 *                         type: integer
 *                         example: 2
 *                       precio:
 *                         type: number
 *                         format: float
 *                         example: 199.99
 */
router.get("/details", controller.getAllItems);

/**
 * @swagger
 * /details/{id}:
 *   get:
 *     summary: Obtiene un detalle por ID
 *     tags: [Detalles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del detalle a consultar
 *     responses:
 *       200:
 *         description: Detalle encontrado
 *       404:
 *         description: Detalle no encontrado
 */
router.get("/details/:id", controller.getItemById);

/**
 * @swagger
 * /details:
 *   post:
 *     summary: Crea un nuevo detalle de factura
 *     tags: [Detalles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - factura_id
 *               - producto_id
 *               - cantidad
 *               - precio
 *             properties:
 *               factura_id:
 *                 type: integer
 *                 example: 1
 *               producto_id:
 *                 type: integer
 *                 example: 2
 *               cantidad:
 *                 type: integer
 *                 example: 3
 *               precio:
 *                 type: number
 *                 format: float
 *                 example: 149.99
 *     responses:
 *       201:
 *         description: Detalle creado exitosamente
 */
router.post("/details", controller.createItem);

/**
 * @swagger
 * /details/{id}:
 *   put:
 *     summary: Actualiza un detalle existente
 *     tags: [Detalles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del detalle a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               factura_id:
 *                 type: integer
 *                 example: 1
 *               producto_id:
 *                 type: integer
 *                 example: 2
 *               cantidad:
 *                 type: integer
 *                 example: 5
 *               precio:
 *                 type: number
 *                 format: float
 *                 example: 129.99
 *     responses:
 *       200:
 *         description: Detalle actualizado exitosamente
 */
router.put("/details/:id", controller.updateItem);

/**
 * @swagger
 * /details/{id}:
 *   delete:
 *     summary: Elimina un detalle por ID
 *     tags: [Detalles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del detalle a eliminar
 *     responses:
 *       200:
 *         description: Detalle eliminado exitosamente
 */
router.delete("/details/:id", controller.deleteItem);

export default router;
