import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
import { JSXElement } from '@babel/types';
import { State } from './FormContainer'

 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 

// export const LoadingBounce = (loading: any): JSX.Element => {
//     console.log('hit')
//     return (
//         <div>
//             <h1>loading</h1>
//             <div className='sweet-loading'>
//         <ClipLoader
//         //    css={override}
//           sizeUnit={"px"}
//           size={150}
//           color={'#123abc'}
//           loading={loading}
//         />
//       </div> 
//          </div>
//      )
      
// } 
 
//  export default LoadingBounce

interface loadingState {
    loading: boolean
}
export namespace ReactSpinners {
    interface CommonProps {
        color?: string;
        loading?: boolean;
        css?: any;
    }
}
  export const AwesomeComponent = (loading:boolean) => {
        
            return (
                <div className='sweet-loading'>
                    <ClipLoader
                        //   css={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={loading}
                    />
                </div>
            )
        }
    