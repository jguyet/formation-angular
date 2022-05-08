
export class Response {
    constructor(
        public key: string,
        public value: string,
        public valid?: boolean
    ) { }
}

export class Question {
    constructor(
        public id: string,
        public q: string,
        public r: Response[],
    ) { }
}