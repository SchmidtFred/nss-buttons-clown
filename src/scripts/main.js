import { fetchReservations } from "./dataAccess.js";
import { ButtonsClown } from "./ButtonsClown.js";

const mainContainer = document.querySelector(".container");

const render = () => {
	fetchReservations().then(() => {
		mainContainer.innerHTML = ButtonsClown();
	});
};

render();

mainContainer.addEventListener("stateChanged", customEvent => { render() });