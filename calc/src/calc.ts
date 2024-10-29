import {Field} from './field';
import {Generation} from './data/interface';
import {Move} from './move';
import {Pokemon} from './pokemon';
import {Result} from './result';

import {calculateRBYGSC} from './mechanics/gen12';
import {calculateADV} from './mechanics/gen3';
import {calculateDPP} from './mechanics/gen4';
import {calculateBWXY} from './mechanics/gen56';
import { calculateSMSSSV } from './mechanics/gen78';
import { calculateSMSS } from './mechanics/gen789';

const MECHANICS = [
  () => {},
  calculateRBYGSC,
  calculateRBYGSC,
  calculateADV,
  calculateDPP,
  calculateBWXY,
  calculateBWXY,
  calculateSMSSSV,
  calculateSMSSSV,
  calculateSMSSSV,
  calculateSMSS,
  calculateSMSS,
  calculateSMSS,
];

export function calculate(
  gen: Generation,
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
  field?: Field,
) {
  console.log(gen.num);
  console.log(attacker);
  console.log(defender);
  console.log(move);
  console.log(field);
  
  return calculateSMSSSV(
    gen,
    attacker.clone(),
    defender.clone(),
    move.clone(),
    field ? field.clone() : new Field()
  ) as Result;
}
