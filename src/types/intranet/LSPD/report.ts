import { ReportEvent } from 'types/intranet/LSPD/reportEvent'
import { LspdOfficerFileResponse } from 'types/intranet/LSPD/lspdOfficerFile'

export interface Report {
  id: number
  startDate: Date
  endDate?: Date
  lspdOfficerFileId: number
}

export interface ReportBDD {
  id: number
  startDate: Date
  endDate?: Date
  firstname: string
  lastname: string
  number: number
}

export interface ReportResponse {
  id: number
  startDate: Date
  endDate?: Date
  lspdOfficerFile: LspdOfficerFileResponse
}