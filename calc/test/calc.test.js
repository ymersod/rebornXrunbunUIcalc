"use strict";
exports.__esModule = true;
var helper_1 = require("./helper");
describe('calc', function () {
    describe('Multi-Gen', function () {
        (0, helper_1.inGens)(4, 7, function (_a) {
            var gen = _a.gen, calculate = _a.calculate, Pokemon = _a.Pokemon, Move = _a.Move;
            test("Grass Knot (gen ".concat(gen, ")"), function () {
                var result = calculate(Pokemon('Groudon'), Pokemon('Groudon'), Move('Grass Knot'));
            });
        });
        (0, helper_1.inGens)(4, 7, function (_a) {
            var gen = _a.gen, calculate = _a.calculate, Pokemon = _a.Pokemon, Move = _a.Move;
            test("Arceus Plate (gen ".concat(gen, ")"), function () {
                var result = calculate(Pokemon('Arceus', { item: 'Meadow Plate' }), Pokemon('Blastoise'), Move('Judgment'));
            });
        });
    });
});
//# sourceMappingURL=calc.test.js.map