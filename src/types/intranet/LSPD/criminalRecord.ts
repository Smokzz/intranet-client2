import {
  CriminalRecordLine,
  CriminalRecordLineBDD,
  convertInCriminalRecordLine
} from 'types/intranet/LSPD/criminalRecordLine'
import CriminalRecordLineRepository from 'repositories/intranet/LSPD/CriminalRecordLineRepository'

/**
 * @openapi
 * components:
 *   schemas:
 *     CriminalRecordRequest:
 *       required:
 *         - firstname
 *         - lastname
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: 'Jeanne'
 *         lastname:
 *           type: string
 *           example: 'Doe'
 *         phoneNumber:
 *           type: string
 *           example: '051-0000'
 *         birthDate:
 *           type: string
 *           format: date
 *           example: '01/01/1991'
 *         job:
 *           type: string
 *           example: 'Gang'
 *         comment:
 *           type: string
 *           example: 'Habite en 7093'
 *
 *     CriminalRecord:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         firstname:
 *           type: string
 *           example: 'Jeanne'
 *         lastname:
 *           type: string
 *           example: 'Doe'
 *         phoneNumber:
 *           type: string
 *           example: '051-0000'
 *         birthDate:
 *           type: string
 *           format: date
 *           example: '01/01/1991'
 *         job:
 *           type: string
 *           example: 'Gang'
 *         comment:
 *           type: string
 *           example: 'Habite en 7093'
 *         lastCriminalRecordLine:
 *           $ref: '#/components/schemas/CriminalRecordLine'
 */
export interface CriminalRecord {
  id: number
  firstname: string
  lastname: string
  phoneNumber?: string
  birthDate?: string
  job?: string
  comment?: string
  lastCriminalRecordLine?: CriminalRecordLine
}

export async function addLastCriminalRecordLine(criminalRecord: CriminalRecord): Promise<CriminalRecord> {
  const criminalRecordLineBDD: CriminalRecordLineBDD = await CriminalRecordLineRepository.getLastByCriminalRecordId(criminalRecord.id)
  let criminalRecordLine
  if (criminalRecordLineBDD) {
    criminalRecordLine = convertInCriminalRecordLine(criminalRecordLineBDD)
  }
  return {
    ...criminalRecord,
    lastCriminalRecordLine: criminalRecordLine
  }
}