import { CHANGE_AUTH } from "./types";


export function authenthicate(isLoggedIn) {
    return { 
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}