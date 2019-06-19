import React, { Component } from "react";
import { State } from "./FormContainer";

interface ResultsProps {
  text: string;
  data: any
}

class ResultsList extends Component<ResultsProps> {
  constructor(props: ResultsProps) {
    super(props);
  }
  render() {
      const mapping = this.props.data.map((item:any) => {
          console.log(item.id)
          return (
              <div>
              <h1 key={item.id}>{item.id} {item.name} {item.owner.login} {item.description} </h1>

              </div>
          )})
      
  console.log(this.props.data)

    // console.log(this.state);
    // if (this.state.data.length){
    //     console.log('something')
    // }

    return <div>She did this <br/>
    {mapping}
    </div>;
  }
}

//     const repoInfo = dataArr.map((item:any, i:any ):any => {
//         const {name, owner, description, html_url, stargazer_count, license, fork } = item
//     })
//     return <div>
//         Results<br/>
//         {repoInfo}
//         </div>
// }

// export default ResultsList
// interface Results {
//     results: []
// }
// interface Props {
//     results: []
// }

// class ResultsList extends React.Component{

//     onButtonClick = (): void => {
//         console.log("clicked")
//     }

//     renderList(): JSX.Element[] {
//         return this.props.results.map((result:Results) => {
//             return <div key={result.id}>{result.title}</div>
//         })
//     }
//     render() {

// }

export default ResultsList;
