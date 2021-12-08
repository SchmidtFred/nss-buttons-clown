import { sendReservation } from "./dataAccess.js";

export const ReservationForm = () => {
	let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="headCount">How Many Children</label>
            <input type="number" name="headCount" class="input">
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input">
        </div>
        <div class="field">
            <label class="label" for="date">Event Date</label>
            <input type="date" name="date" class="input">
        </div>
        <div class="field">
            <label class="label" for="eventLength">Length of Event (hours)</label>
            <input type="number" name="eventLength" class="input">
        </div>
        
        <button class="button" id="submitReservation">Submit Reservation</button>`;

	return html;
};

//event listener stuff to create the reservation object and send it to the api
const mainContainer = document.querySelector(".container");

mainContainer.addEventListener("click", (clickEvent) => {
	if (clickEvent.target.id === "submitReservation") {
		//grab the things typed into fields so we can use them to create a reservation object
		const userParentName = document.querySelector(
			"input[name='parentName']"
		).value;
		const userChildName = document.querySelector(
			"input[name='childName']"
		).value;
		const userHeaadCount = document.querySelector(
			"input[name='headCount']"
		).value;
		const userAddress = document.querySelector(
			"input[name='address']"
		).value;
		const userDate = document.querySelector("input[name='date']").value;
		const userEventLength = document.querySelector(
			"input[name='eventLength']"
		).value;

		//make an object now out of all those grabbed values
		const dataToSendToAPI = {
			parentName: userParentName,
			childName: userChildName,
			headCount: userHeaadCount,
			address: userAddress,
			date: userDate,
			eventLength: userEventLength
		};

		//now send it off to the api
        sendReservation(dataToSendToAPI);
	}
});
