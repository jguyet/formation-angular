export class Card {
    public id: string;
    constructor(
        public title: String,
        public description: String,
        public price: Number,
        public type: String
    ) { }
}