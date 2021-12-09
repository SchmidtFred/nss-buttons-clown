const applicationState = {
	reservations: [],
	clowns: [],
	completions: []
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

export const fetchClowns = () => {
	return fetch(`${API}/clowns`)
		.then((res) => res.json())
		.then((clowns) => {
			applicationState.clowns = clowns;
		});
};

export const fetchCompletedReservations = () => {
	return fetch(`${API}/completedReservations`)
		.then((res) => res.json())
		.then((completions) => {
			applicationState.completions = completions;
		});
};

//get from application state
export const getReservations = () => {
	return applicationState.reservations
		.map((res) => ({ ...res }))
		.map((res) => {
			res.completed = applicationState.completions.some((comp) => comp.reservationId === res.id)
			return res;
		})
		.sort((a,b) => a.completed - b.completed);
};

export const getClowns = () => {
	return applicationState.clowns.map((clown) => ({ ...clown }));
};

export const getCompletions = () => {
	return applicationState.completions.map((comp) => ({ ...comp }));
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

export const saveCompletion = (completion) => {
	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(completion)
	};

	return fetch(`${API}/completedReservations`, fetchOptions)
		.then((res = res.json()))
		.then(() => {
			mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
		});
};
