import { ReservationForm } from "./ReservationForm.js";
import { Reservations } from "./Reservations.js";

export const ButtonsClown = () => {
    return `
        <h1>Buttons and Lollipop the Clowns Reservations</h1>
        <section class="reservationForm">
            ${ReservationForm()}
        </section>
        
        <section class="reservationsList">
            <h2>Reservations</h2>
            ${Reservations()}
        </section>
        `
}