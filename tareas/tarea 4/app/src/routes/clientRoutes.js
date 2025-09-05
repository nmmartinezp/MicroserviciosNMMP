import express from "express";
import { responseHandler } from "../middlewares/responseHandler.js";
import controller from "../controllers/clientController.js";

const router = express.Router();
router.use(responseHandler);

/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Obtiene todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida correctamente
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
 *                   example: Clientes obtenidos exitosamente
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       ci:
 *                         type: string
 *                         example: 12345678
 *                       nombres:
 *                         type: string
 *                         example: Juan
 *                       apellidos:
 *                         type: string
 *                         example: Pérez
 *                       sexo:
 *                         type: string
 *                         enum: [M,F,O]
 *                         example: M
 */
router.get("/clients", controller.getAllItems);

/**
 * @swagger
 * /clients/{id}:
 *   get:
 *     summary: Obtiene un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del cliente a consultar
 *     responses:
 *       200:
 *         description: Cliente encontrado
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
 *                   example: Cliente obtenido exitosamente
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     ci:
 *                       type: string
 *                       example: 12345678
 *                     nombres:
 *                       type: string
 *                       example: Juan
 *                     apellidos:
 *                       type: string
 *                       example: Pérez
 *                     sexo:
 *                       type: string
 *                       enum: [M,F,O]
 *                       example: M
 *       404:
 *         description: Cliente no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: fail
 *                 message:
 *                   type: string
 *                   example: No se encontró el cliente
 */
router.get("/clients/:id", controller.getItemById);

/**
 * @swagger
 * /clients:
 *   post:
 *     summary: Crea un nuevo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ci
 *               - nombres
 *               - apellidos
 *               - sexo
 *             properties:
 *               ci:
 *                 type: string
 *                 example: 87654321
 *               nombres:
 *                 type: string
 *                 example: Ana
 *               apellidos:
 *                 type: string
 *                 example: Gómez
 *               sexo:
 *                 type: string
 *                 enum: [M,F,O]
 *                 example: F
 *     responses:
 *       200:
 *         description: Cliente creado exitosamente
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
 *                   example: Cliente creado exitosamente
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     ci:
 *                       type: string
 *                       example: 87654321
 *                     nombres:
 *                       type: string
 *                       example: Ana
 *                     apellidos:
 *                       type: string
 *                       example: Gómez
 *                     sexo:
 *                       type: string
 *                       enum: [M,F,O]
 *                       example: F
 */
router.post("/clients", controller.createItem);

/**
 * @swagger
 * /clients/{id}:
 *   put:
 *     summary: Actualiza un cliente existente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del cliente a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ci:
 *                 type: string
 *                 example: 12345678
 *               nombres:
 *                 type: string
 *                 example: Juan
 *               apellidos:
 *                 type: string
 *                 example: Pérez
 *               sexo:
 *                 type: string
 *                 enum: [M,F,O]
 *                 example: M
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente
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
 *                   example: Cliente actualizado exitosamente
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     ci:
 *                       type: string
 *                       example: 12345678
 *                     nombres:
 *                       type: string
 *                       example: Juan
 *                     apellidos:
 *                       type: string
 *                       example: Pérez
 *                     sexo:
 *                       type: string
 *                       enum: [M,F,O]
 *                       example: M
 */
router.put("/clients/:id", controller.updateItem);

/**
 * @swagger
 * /clients/{id}:
 *   delete:
 *     summary: Elimina un cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del cliente a eliminar
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente
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
 *                   example: Cliente eliminado exitosamente
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     ci:
 *                       type: string
 *                       example: 12345678
 *                     nombres:
 *                       type: string
 *                       example: Juan
 *                     apellidos:
 *                       type: string
 *                       example: Pérez
 *                     sexo:
 *                       type: string
 *                       enum: [M,F,O]
 *                       example: M
 */
router.delete("/clients/:id", controller.deleteItem);

export default router;
