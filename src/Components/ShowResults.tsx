import React from 'react'
import {FormState} from './FormContainer'
import ResultsList from './ResultsList'

interface FormProps extends FormState {
    data: number | undefined
}
export const showResults = (props: FormProps): JSX.Element => {
    return props.isLoaded && !props.data.length ? (
      <div>
        <hr />
        <p className="results-below-text">SEARCH Results</p>
        <h1 className="content">Your Search returned no results</h1>
      </div>
    ) : (
      <div>
        <hr />
        <p className="results-below-text">SEARCH Results</p>
        <ResultsList {...props} />
      </div>
    );
  };