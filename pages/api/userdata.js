// import { alluserData } from "../../public/API-Data/alluser";
import { users } from "../../public/API-Data/fakeUsers";

export default function handler(req, res) {
    try {
        res.status(200).json(users);
    } catch (err) {
        alert("Data is not fetch!!! Please check console!!!");
    }
}
