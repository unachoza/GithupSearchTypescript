import React from 'react'
import * as dataArr from './FormContainer'


const ResultsList = ({dataArr: []})   => {

    const repoInfo = dataArr.map((item:any, i:any ):any => {
        const {name, owner, description, html_url, stargazer_count, license, fork } = item
    }) 
    return <div>
        Results<br/>
        {repoInfo}
        </div>
}

export default ResultsList
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
//         return (
//             <div>She did this {this.renderList()}</div>
//         )
//     }
// }

// export default ResultsList