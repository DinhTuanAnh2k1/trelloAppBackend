import { getDB } from '../config/connectDB';
import { createNew } from '../models/board.model';

const postNewBoardService = async(data) => {
    let result = null;
    try {
        result = await createNew(data);
    } catch (error) {
        console.error("++++++++++++++")
        console.log(error);
        console.error("++++++++++++++")
    }
    return result;
}

module.exports = { postNewBoardService }