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

export function getOneGame(likeId) {
    return fetch(`${BASE_URL}likes/${likeId}`, {
        method: 'DELETE',
        headers: {
			Authorization: "Bearer " + tokenService.getToken() 
			//this is how we grab the token from local storage
		}
    }).then(res => {
        // this gets called when we get a response from the 
        // express server - this case it's the deleteLike controller function
        if(res.ok) return res.json() // taking json and turning into javascript object
        throw new Error('Error creating a like, check server terminal')
    })
}