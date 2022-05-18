export class Stats {
    constructor(
        public data: { [key: string]: { [key: string]: string|number } },
        public participants: number
    ) { }
}
