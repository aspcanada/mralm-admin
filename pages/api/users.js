import { users } from "../../public/API-Data/users";

export default function handler(req, res) {
    try {
        res.status(200).json(users);
    } catch (err) {
        alert("Data is not fetch!!! Please check console!!!");
    }
}
