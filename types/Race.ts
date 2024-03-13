export type Race = {
    round? : number,
    season? : number,
    raceName : string,
    Circuit? : {
        circuitName : string,
        Location : {
            locality: string,
            country: string
        }
    },
    date? : string,
}
