
interface Position {
    x: number;
    y: number;
}

interface Object {
    getPosition(): Position;
};

class Cube implements Object {

    private position = { x: 0, y: 0 } as Position;

    constructor(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }

    public getPosition(): Position {
        return this.position;
    }
}
