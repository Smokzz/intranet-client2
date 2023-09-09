import { OffenseType } from 'types/intranet/LSPD/offenseType'

/**
 * @openapi
 * components:
 *   schemas:
 *     CriminalRecordLineRequest:
 *       required:
 *         - criminalRecordId
 *         - offenseTypeId
 *         - fine
 *         - date
 *       type: object
 *       properties:
 *         criminalRecordId:
 *           type: number
 *           example: 1
 *         offenseTypeId:
 *           type: number
 *           example: 1
 *         fine:
 *           type: number
 *           example: 600
 *         cellTime:
 *           type: number
 *           example: 90
 *         date:
 *           type: string
 *           format: date-time
 *           example: '2022-11-11 15:38:43'
 *
 *     CriminalRecordLinePutRequest:
 *       required:
 *         - offenseTypeId
 *         - fine
 *         - date
 *       type: object
 *       properties:
 *         offenseTypeId:
 *           type: number
 *           example: 1
 *         fine:
 *           type: number
 *           example: 600
 *         cellTime:
 *           type: number
 *           example: 90
 *         date:
 *           type: string
 *           format: date-time
 *           example: '2022-11-11 15:38:43'
 */
export interface CriminalRecordLineRequest {
  criminalRecordId: number
  offenseTypeId: number
  fine: number
  cellTime?: number
  date: Date
  lspdOfficerId: number
  updatedBy?: number
}

export interface CriminalRecordLineBDD {
  id: number
  fine: number
  date: Date
  cell_time?: number
  date_end: Date
  officer_firstname: string
  officer_lastname: string
  offense_type_id: number
  offense_type_label: string
  offense_type: number
}
/**
 * @openapi
 * components:
 *   schemas:
 *     CriminalRecordLine:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         fine:
 *           type: number
 *           example: 600
 *         cellTime:
 *           type: number
 *           example: 60
 *         date:
 *           type: string
 *           format: date-time
 *           example: '2022-11-11 15:38:43'
 *         dateEnd:
 *           type: string
 *           format: date-time
 *           example: '2022-11-11 16:38:43'
 *         officerFirstname:
 *           type: string
 *           example: 'Jeanne'
 *         officerLastname:
 *           type: string
 *           example: 'Doe'
 *         offenseType:
 *           $ref: '#/components/schemas/OffenseType'
 */
export interface CriminalRecordLine {
  id: number
  fine: number
  cellTime?: number
  date: Date
  dateEnd?: Date
  officerFirstname: string
  officerLastname: string
  offenseType: OffenseType
}

export function convertInCriminalRecordLine(criminalRecordLineBDD: CriminalRecordLineBDD): CriminalRecordLine {
  const { date_end, cell_time, officer_firstname, officer_lastname, offense_type_id, offense_type_label, offense_type, ...rest } = criminalRecordLineBDD
  return {
    ...rest,
    dateEnd: date_end,
    cellTime: cell_time,
    officerFirstname: officer_firstname,
    officerLastname: officer_lastname,
    offenseType: {
      id: offense_type_id,
      label: offense_type_label,
      type: offense_type
    }
  }
}

export function getDateEnd(date: Date, cellTime: number): Date {
  return new Date(new Date(date).getTime() + cellTime * 60000)
}