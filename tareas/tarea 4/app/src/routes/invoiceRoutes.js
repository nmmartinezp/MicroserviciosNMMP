import express from "express";
import { responseHandler } from "../middlewares/responseHandler.js";
import controller from "../controllers/invoiceController.js";

const router = express.Router();
router.use(responseHandler);

/**
 * @swagger
 * /invoices:
 *   get:
 *     summary: Obtiene todas las facturas
 *     tags: [Facturas]
 *     responses:
 *       200:
 *         description: Lista de facturas obtenida correctamente
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
 *                   example: Facturas obtenidas exitosamente
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       fecha:
 *                         type: string
 *                         format: date
 *                         example: 2025-09-04
 *                       cliente_id:
 *                         type: integer
 *                         example: 1
 */
router.get("/invoices", controller.getAllItems);

/**
 * @swagger
 * /invoices/{id}:
 *   get:
 *     summary: Obtiene una factura por ID
 *     tags: [Facturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID de la factura a consultar
 *     responses:
 *       200:
 *         description: Factura encontrada
 *       404:
 *         description: Factura no encontrada
 */
router.get("/invoices/:id", controller.getItemById);

/**
 * @swagger
 * /invoices:
 *   post:
 *     summary: Crea una nueva factura
 *     tags: [Facturas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fecha
 *               - cliente_id
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: 2025-09-04
 *               cliente_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Factura creada exitosamente
 */
router.post("/invoices", controller.createItem);

/**
 * @swagger
 * /invoices/{id}:
 *   put:
 *     summary: Actualiza una factura existente
 *     tags: [Facturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID de la factura a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: 2025-09-05
 *               cliente_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Factura actualizada exitosamente
 */
router.put("/invoices/:id", controller.updateItem);

/**
 * @swagger
 * /invoices/{id}:
 *   delete:
 *     summary: Elimina una factura por ID
 *     tags: [Facturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID de la factura a eliminar
 *     responses:
 *       200:
 *         description: Factura eliminada exitosamente
 */
router.delete("/invoices/:id", controller.deleteItem);

export default router;
