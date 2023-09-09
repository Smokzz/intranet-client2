export interface ReportEvent {
  id: number
  reportId: number
  type: string
  comment: string
  date: Date
  important: boolean
}