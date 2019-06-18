import axios from 'axios'
import { async } from 'q';

export const fetchGithub = async (): Promise<any> => {
        await axios.get("https://api.github.com/search/repositories?q=happy+license:mit+stars:>10+fork:true&sort=stars&order=desc")
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
        })

}