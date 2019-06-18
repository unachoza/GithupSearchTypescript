import axios from "axios";
import { async } from "q";

export const fetchGithub = async (props: any): Promise<any> => {
  await axios
    .get(
      `https://api.github.com/search/repositories?q=${props.text}+license:mit+stars:>10+fork:true&sort=stars&order=desc`
    )
    .then(response => {
      results: response.data.items;
    })
    .catch(error => {
      console.log(error);
    });
};
