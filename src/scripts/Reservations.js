import { getReservations } from "./dataAccess.js";

const mainContainer = document.querySelector(".container");

export const Reservations = () => {
    const reservations = getReservations();

    let html = `
        <ul>
            ${
                reservations.map(res => {
                    return `<li>
                    <p><strong>Parent: </strong>${res.parentName} <strong>Child: </strong>${res.childName} <strong>Number: </strong>${res.headCount}</p>
                    <p><strong>Date: </strong>${res.date} <strong>Length: </strong>${res.eventLength} hours</p>
                    <p>${res.address}</p>
                    </li>`
                }).join("")
            }
        </ul>`

    return html;
}