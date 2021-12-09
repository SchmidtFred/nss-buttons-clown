import { fetchReservations, fetchClowns, fetchCompletedReservations } from "./dataAccess.js";
import { ButtonsClown } from "./ButtonsClown.js";

const mainContainer = document.querySelector(".container");

const render = () => {
	Promise.all([fetchReservations(), fetchClowns(), fetchCompletedReservations()])
	.then(() => {
		mainContainer.innerHTML = ButtonsClown();
	});
};

render();

mainContainer.addEventListener("stateChanged", customEvent => { render() });