export interface InformationCard {
    date: {
        from: Date,
        to: Date
    },
    location: string,
    position: string,
    organization: string,
    descriptions: string[],
    professional: boolean
}
