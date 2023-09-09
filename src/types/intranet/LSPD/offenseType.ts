/**
 * @openapi
 * components:
 *   schemas:
 *     OffenseTypeRequest:
 *       required:
 *         - firstname
 *         - lastname
 *       type: object
 *       properties:
 *         label:
 *           type: string
 *           example: 'Véhicule non en état'
 *         type:
 *           type: number
 *           example: 1
 *
 *     OffenseType:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         label:
 *           type: string
 *           example: 'Véhicule non en état'
 *         type:
 *           type: number
 *           example: 1
 */
export interface OffenseType {
  id: number
  label: string
  type: number
}
