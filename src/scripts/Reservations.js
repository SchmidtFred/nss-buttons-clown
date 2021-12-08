import { getReservations, deleteReservation } from "./dataAccess.js";

const mainContainer = document.querySelector(".container");

export const Reservations = () => {
    const reservations = getReservations();

    let html = `
        <ul>
            ${
                reservations.map(res => {
                    return `<li class="reservation">
                    <div class="reservationInfo">
                        <p><strong>Parent: </strong>${res.parentName} <strong>Child: </strong>${res.childName} <strong>Number: </strong>${res.headCount}</p>
                        <p><strong>Date: </strong>${res.date} <strong>Length: </strong>${res.eventLength} hours</p>
                        <p>${res.address}</p>
                    </div>
                    <button class="reservationDeny button" id="reservation--${res.id}"><span id="reservationSpan--${res.id}">Deny</span></button>
                    </li>`
                }).join("")
            }
        </ul>`

    return html;
}

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--") || click.target.id.startsWith("reservationSpan--")) {
        const [,reservationID] = click.target.id.split("--");
        deleteReservation(parseInt(reservationID));
    }
})