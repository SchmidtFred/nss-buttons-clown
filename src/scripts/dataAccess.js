const applicationState = {
	reservations: []
};

const API = "http://localhost:8088";

//get from api
export const fetchReservations = () => {
	return fetch(`${API}/reservations`)
		.then((res) => res.json())
		.then((reservations) => {
			//grab those reservations to put in application state
			applicationState.reservations = reservations;
		});
};

//get from application state
export const getReservations = () => {
	return applicationState.reservations.map((res) => ({ ...res }));
};

//grab the main containrer
const mainContainer = document.querySelector(".container");

//poost change to API and then call over to us the new state
export const sendReservation = (userReservation) => {
	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(userReservation)
	};

	return fetch(`${API}/reservations`, fetchOptions)
		.then((res) => res.json())
		.then(() => {
			mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
		});
};

export const deleteReservation = (id) => {
	return fetch(`${API}/reservations/${id}`, { method: "DELETE" }).then(() =>
		mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
	);
};
