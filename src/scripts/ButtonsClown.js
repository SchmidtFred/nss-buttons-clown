import { ReservationForm } from "./ReservationForm.js";

export const ButtonsClown = () => {
    return `
        <h1>Buttons and Lollipop the Clowns Reservations</h1>
        <section class="reservationForm">
            ${ReservationForm()}
        </section>
        `
}