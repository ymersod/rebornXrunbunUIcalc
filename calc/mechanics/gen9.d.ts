import { Generation } from "../data/interface";
import { Field } from "../field";
import { Move } from "../move";
import { Pokemon } from "../pokemon";
import { Result } from "../result";
export declare const strikerdmg: any;
export declare const magdmg: any;
export declare function calculateSMSSSV(gen: Generation, attacker: Pokemon, defender: Pokemon, move: Move, field: Field): Result;
