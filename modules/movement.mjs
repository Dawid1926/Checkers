import  "./renderiTeams.mjs"
import { fieldsToPlay } from "./renderiTeams.mjs";
export const board = document.querySelector(".board");


export class Field {
    constructor (Column, Row, i) {
        this.Cords = {X: Column , Y: Row};
        this.classNumber = i;
        this.class = ["redPawn", "whitePawn", "empty", "green"];
        this.place = this.createPlace()
    }
    createPlace() {
        const place = document.createElement("div");
        place.style.gridColumnStart = this.Cords.X;
        place.style.gridRowStart = this.Cords.Y;
        place.style.className = ''
        place.classList.add(this.class[this.classNumber]);
        board.appendChild(place)
        return place
    }

    addClass (numberOfClass) {
        
        this.place.classList.add(this.class[numberOfClass])
        this.classNumber = numberOfClass;

         
    }
    removeClass(numberOfClass) {
        this.place.classList.remove(this.class[numberOfClass])
        
    }
}






export function movement() {
const allowFields = [];

    console.log(allowFields)
    

    
    const redTeam = fieldsToPlay.filter(field => field.classNumber == 0)
    console.log(redTeam)


    
    redTeam.forEach(clickedfield => clickedfield.place.addEventListener("click", function 
    moveRedPawn(){
        console.log(allowFields)
        if (allowFields.length > 0) {
            allowFields.forEach(greenField => greenField.removeClass(3))
            allowFields.splice(0, allowFields.length)
        }
        console.log(allowFields)


        console.log("KLIKNIĘTY CZERWONY")
        console.log(fieldsToPlay)
        fieldsToPlay.forEach( function(field) {

            if (((clickedfield.Cords.X + 1 == field.Cords.X && clickedfield.Cords.Y + 1 == field.Cords.Y && field.classNumber == 2) || (clickedfield.Cords.X - 1 == field.Cords.X && clickedfield.Cords.Y + 1 == field.Cords.Y && field.classNumber == 2)) || ((clickedfield.Cords.X + 1 == field.Cords.X && clickedfield.Cords.Y + 1 == field.Cords.Y && field.classNumber == 3) || (clickedfield.Cords.X - 1 == field.Cords.X && clickedfield.Cords.Y + 1 == field.Cords.Y && field.classNumber == 3))) {
                    if (field.classNumber == 0) {
                        return
                    } 

                    
                    field.addClass(3)


                    allowFields.push(field)
                    console.log(allowFields)
                    if (allowFields.length == 2 || allowFields.length == 1) {

                        allowFields.forEach(greenField => greenField.place.addEventListener("click", function() {
                            console.log(field)
                            clickedfield.removeClass(0)
                            clickedfield.addClass(2)
                            let index = allowFields.indexOf(greenField);
                            console.log(this)
                            console.log(index)
                            greenField.addClass(0)
                            greenField.removeClass(2)
                            console.log(this)
                            console.log(allowFields)
                            allowFields.forEach(greenField => greenField.removeClass(3))
                            allowFields.splice(0, allowFields.length)
                            movement()

                        }))






                    }
                // }
            }
        })





    }))



}


