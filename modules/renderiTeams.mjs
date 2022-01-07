import { Field} from "./movement.mjs"

export const fieldsToPlay = [];

let column = 0;
let Row = 1;
let numberOfClass
let x = 0
let flag = 0

export function renderFieldsToPlay() {
    for (let i=1; i < 33; i++) {
        if (i<12) numberOfClass = 0;
        else if (i>12 && i<20) numberOfClass = 2;
        else if ( i > 20) numberOfClass = 1

            column += 2
            const field = new Field (column, Row, numberOfClass)
            fieldsToPlay.push(field)
            x++

            if (x % 4 == 0) {
                if (!flag) {
                    Row++
                    column = -1
                    flag++
                } else {
                    Row++
                    column = 0
                    flag--
                }
            }
    }
}