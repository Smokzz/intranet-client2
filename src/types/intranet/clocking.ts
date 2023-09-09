import { PersonShort } from 'types/intranet/person'

/**
 * @openapi
 * components:
 *   schemas:
 *     ClockingResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         startDate:
 *           type: string
 *           format: date-time
 *           example: '2022-11-11 15:38:43'
 *         endDate:
 *           type: string
 *           format: date-time
 *           example: '2022-11-11 15:38:43'
 *         jobId:
 *           type: number
 *           example: 1
 *         personId:
 *           $ref: '#/components/schemas/PersonShort'
 *         updatedBy:
 *           $ref: '#/components/schemas/PersonShort'
 */
export interface Clocking {
  id: number
  startDate: Date
  endDate?: Date
  jobId: number
  person: PersonShort
  updatedBy?: PersonShort
}

export interface ClockingBDD {
  id: number
  start_date: Date
  end_date?: Date
  job_id: number
  person_id: number
  person_firstname: string
  person_lastname: string
  updated_by_id?: number
  updated_by_firstname?: string
  updated_by_lastname?: string
}

export function convertInClocking(clockingBDD: ClockingBDD): Clocking {
  const { start_date, end_date, job_id, person_id, person_firstname, person_lastname, updated_by_id, updated_by_firstname, updated_by_lastname, ...rest } = clockingBDD
  const clocking: Clocking = {
    ...rest,
    startDate: start_date,
    endDate: end_date,
    jobId: job_id,
    person: {
      id: person_id,
      firstname: person_firstname,
      lastname: person_lastname
    }
  }
  if(updated_by_id && updated_by_firstname && updated_by_lastname) {
    return {
      ...clocking,
      updatedBy: {
        id: updated_by_id,
        firstname: updated_by_firstname,
        lastname: updated_by_lastname
      }
    }
  }
  return clocking
}