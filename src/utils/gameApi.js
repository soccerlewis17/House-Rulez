import tokenService from "./tokenService";

const BASE_URL = '/games'

export function getAllGames() {
    return fetch(`${BASE_URL}/`, { // this route is from the routes file to know where we are going for the create function
        method: 'GET',
        headers: {
			Authorization: "Bearer " + tokenService.getToken() 
			//this is how we grab the token from local storage
		}

    }).then(res => {
        if(res.ok) return res.json()
        console.log(res, ' <------ this is the response from the server!')
        throw new Error('Error getting all games, check server terminal')
    })
}

export function getOneGame(gameId) {
    return fetch(`${BASE_URL}/${gameId}`, {
        method: 'GET',
        headers: {
			Authorization: "Bearer " + tokenService.getToken() 
			//this is how we grab the token from local storage
		}
    }).then(res => {
        if(res.ok) return res.json()
        console.log(res, ' <------ this is the response from the server!')
        throw new Error('Error creating a like, check server terminal')
    })
}