import { fetchReservations } from "./dataAccess.js";
import { ButtonsClown } from "./ButtonsClown.js";

const mainContainer = document.querySelector(".container");

const render = () => {
	fetchRequests().then(() => {
		mainContainer.innerHTML = ButtonsClown();
	});
};

render();