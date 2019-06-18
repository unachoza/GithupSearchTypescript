


// export const handleQuery = async () => {
//     console.log(this.state);
//     const { text, license, forked, stars } = this.state;
//     if (text && license && stars) {
//       console.log("waiting");
//       await fetch(
//         `https://api.github.com/search/repositories?q=${text}+license:${license}+stars:${stars}+fork:${forked}&sort=stars&order=desc`
//       )
//         .then(res => res.json())
//         .then(data => {
//           this.setState({
//             isLoaded: true,
//             data: data.items
//           });
//         })
//         .catch(error => {
//           this.setState({ error });
//           return (
//             <div className="content">
//               <h1>
//                 There was a problem: <br />
//                 {this.state.error}
//               </h1>
//             </div>
//           );
//         });
//     } else {
//       console.log("no");
//       alert("please fill all inputs");
//     }
//   };

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