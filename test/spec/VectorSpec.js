describe("Vector", function () {

    it("returns u & v values", function () {
        let vector = new Vector(0.0, 0.1);
        expect(vector.u).toEqual(0.0);
        expect(vector.v).toEqual(0.1);
    });

    it("calculates its magnitude", function () {
        let vector = new Vector(0.0, 0.1);
        expect(vector.magnitude()).toEqual(0.1);

        // upper-right corner @ test.json
        let v = new Vector(0.215018898248672, -0.00158081843983382);
        expect(v.magnitude()).toBeCloseTo(0.215025, 6);
    });

    it("calculates its directionTo / directionFrom", function () {
        expect(new Vector(0, 1).directionTo()).toEqual(0);
        expect(new Vector(0, 1).directionFrom()).toEqual(180);

        expect(new Vector(1, 1).directionTo()).toEqual(45);
        expect(new Vector(1, 1).directionFrom()).toEqual(225);

        expect(new Vector(1, 0).directionTo()).toEqual(90);
        expect(new Vector(1, 0).directionFrom()).toEqual(270);

        expect(new Vector(1, -1).directionTo()).toEqual(135);
        expect(new Vector(1, -1).directionFrom()).toEqual(315);

        expect(new Vector(0, -1).directionTo()).toEqual(180);
        expect(new Vector(0, -1).directionFrom()).toEqual(0);

        expect(new Vector(-1, -1).directionTo()).toEqual(225);
        expect(new Vector(-1, -1).directionFrom()).toEqual(45);

        expect(new Vector(-1, 0).directionTo()).toEqual(270);
        expect(new Vector(-1, 0).directionFrom()).toEqual(90);

        expect(new Vector(-1, 1).directionTo()).toEqual(315);
        expect(new Vector(-1, 1).directionFrom()).toEqual(135);
    });
});
