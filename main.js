import "./modules/renderiTeams.mjs"
import "./modules/movement.mjs"
import { fieldsToPlay, renderFieldsToPlay } from "./modules/renderiTeams.mjs"
import { movement } from "./modules/movement.mjs"

+function renderTeams() {
    renderFieldsToPlay()
    console.log(fieldsToPlay)
    movement()


}()

// ZROBIC AKTUALIZACJĘ PLANSZY GRY, BO NIE CZYTA CLASS PO RUCHU PIONKA

//OGARNAC MOVEMENT BO JEST ROZPIERDOL



