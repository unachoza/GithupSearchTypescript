import React from 'react'
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
import State from './FormContainer'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export const LoadingBounce = (loading: any) => {
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

export default LoadingBounce