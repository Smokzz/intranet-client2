/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalRecordRequest:
 *       required:
 *         - firstname
 *         - lastname
 *         - phoneNumber
 *         - birthDate
 *         - bloodGroup
 *         - tobacco
 *         - alcool
 *         - drug
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
 *         address:
 *           type: string
 *           example: '7093'
 *         allergy:
 *           type: string
 *           example: 'Pollen'
 *         disease:
 *           type: string
 *           example: 'Cancer'
 *         specialInformation:
 *           type: string
 *           example: 'Lunette de vue'
 *         bloodType:
 *           type: string
 *           example: 'A+'
 *         job:
 *           type: string
 *           example: 'LSPD'
 *         emergencyContact:
 *           type: string
 *           example: 'Joe Doe: 051-0001'
 *         tobacco:
 *           type: string
 *           example: 'Non fumeur'
 *         alcohol:
 *           type: string
 *           example: 'Irrégulier'
 *         drug:
 *           type: string
 *           example: 'Non'
 *         emsStaffFileId:
 *           type: number
 *           example: 1
 *         comment:
 *           type: string
 *           example: 'À surveiller'
 *
 *     MedicalRecord:
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
 *         address:
 *           type: string
 *           example: '7093'
 *         allergy:
 *           type: string
 *           example: 'Pollen'
 *         disease:
 *           type: string
 *           example: 'Cancer'
 *         specialInformation:
 *           type: string
 *           example: 'Lunette de vue'
 *         bloodType:
 *           type: string
 *           example: 'A+'
 *         job:
 *           type: string
 *           example: 'LSPD'
 *         emergencyContact:
 *           type: string
 *           example: 'Joe Doe: 051-0001'
 *         tobacco:
 *           type: string
 *           example: 'Non fumeur'
 *         alcohol:
 *           type: string
 *           example: 'Irrégulier'
 *         drug:
 *           type: string
 *           example: 'Non'
 *         emsStaffFileId:
 *           type: number
 *           example: 1
 *         comment:
 *           type: string
 *           example: 'À surveiller'
 */
export interface MedicalRecord {
  medicalRecordId: number
  firstname: string;
  lastname: string;
  phoneNumber: string;
  birthDate: Date;
  address?: string;
  allergy?: string;
  disease?: string;
  specialInformation?: string;
  bloodType: string;
  job?: string;
  emergencyContact?: string;
  tobacco: string;
  alcohol: string;
  drug: string;
  emsStaffFileId?: number;
  comment?: string;
}