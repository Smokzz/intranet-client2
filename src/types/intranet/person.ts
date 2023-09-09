/**
 * @openapi
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         discordId:
 *           type: string
 *           example: '123'
 *         firstname:
 *           type: string
 *           example: 'Jeanne'
 *         lastname:
 *           type: string
 *           example: 'Doe'
 *         birthDate:
 *           type: string
 *           format: date
 *           example: '01/01/1991'
 *         sex:
 *           type: string
 *           example: 'f'
 *         phoneNumber:
 *           type: string
 *           example: '051-0000'
 *         jobId:
 *           type: number
 *           example: 1
 *         jobName:
 *           type: string
 *           example: 'ems'
 */
export interface Person {
  id: number
  discordId: string
  firstname: string
  lastname: string
  birthDate: string
  sex: string
  phoneNumber: string
  jobId?: number
  jobName?: string
}
/**
 * @openapi
 * components:
 *   schemas:
 *     PersonShort:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         firstname:
 *           type: string
 *         lastname:
 *           type: string
 */
export interface PersonShort {
  id: number
  firstname: string
  lastname: string
}
