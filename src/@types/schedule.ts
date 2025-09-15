export type schedule = {
    id: string,
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