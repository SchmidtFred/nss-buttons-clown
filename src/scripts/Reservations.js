import { getReservations, deleteReservation, getClowns, saveCompletion } from "./dataAccess.js";

const mainContainer = document.querySelector(".container");

export const Reservations = () => {
    const reservations = getReservations();
    const clowns = getClowns();

    let html = `
        <ul>
            ${
                reservations.map(res => {
                    return `<li class="reservation completed--${res.completed}">
                    <div class="reservationInfo">
                        <p><strong>Parent: </strong>${res.parentName} <strong>Child: </strong>${res.childName} <strong>Number: </strong>${res.headCount}</p>
                        <p><strong>Date: </strong>${res.date} <strong>Length: </strong>${res.eventLength} hours</p>
                        <p>${res.address}</p>
                    </div>
                    <select class="clowns" id="clowns">
                    <option value="">Choose</option>
                        ${
                            clowns.map(
                                clown => {
                                    return `<option value="${res.id}--${clown.id}">${clown.name}</option>`
                                }
                            ).join("")
                        }
                    </select>

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

mainContainer.addEventListener("change", (event) => {
    if (event.target.id === "clowns") {
        const [resId, clownId] = event.target.value.split("--")

        const completion = {
            reservationId: parseInt(resId),
            clownId: parseInt(clownId),
            dateCompleted: new Date().toDateString()
        }

        saveCompletion(completion);
    }
    
})