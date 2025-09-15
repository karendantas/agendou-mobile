export type schedule = {
    id: number,
    customer: string
    service: string
    date: string,
    time: string,
    status: 'agendado' | 'concluído' | 'cancelado'
}

export type scheduleSection = {
    title: string,
    data: schedule[]
}