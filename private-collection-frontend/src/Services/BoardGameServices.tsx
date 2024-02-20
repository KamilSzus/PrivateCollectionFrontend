import axios from "axios"
import { BoardGame } from "../Models/BoardGame"

const localhost = "https://localhost:7067/api/BoardGame/"

export const BoardGamesGetAll = async () => {
    try {
        const response = await axios.get<BoardGame>(localhost);
        console.log(response);

        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (axios.isAxiosError(error)) {
                console.log("error message ", error.message);
                console.log(error);
                return error.message;
            } else {
                console.log("unexpected error occured: ", error);

                return error;
            }
        }
    }
}

export const BoardGamesGetByTitle = async (title: string) => {
    try {
        const response = await axios.get<BoardGame>(localhost + "title/" + `${title}`);
        console.log(response);

        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (axios.isAxiosError(error)) {
                console.log("error message ", error.message);
                console.log(error);
                return error.message;
            } else {
                console.log("unexpected error occured: ", error);

                return error;
            }
        }
    }
}