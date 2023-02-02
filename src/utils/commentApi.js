import tokenService from "./tokenService";

const BASE_URL = '/api'

export function create(comment, gameId) {
    return fetch(`${BASE_URL}/games/${gameId}/comments`, { // this route is from the routes file to know where we are going for the create function
        method: 'POST',
        body: JSON.stringify({content: comment}),
        headers: {
			Authorization: "Bearer " + tokenService.getToken(),
            'Content-Type': 'application/json'
			//this is how we grab the token from local storage
		}

    }).then(res => {
        if(res.ok) return res.json()
        console.log(res, ' <------ this is the response from the server!')
        throw new Error('Error creating a comment, check server terminal')
    })
}