import React from 'react'

export const ErrorMessage = (): JSX.Element => {
    console.log('hit')
    return (
        <div className="error">
        The stars input is asking for a numerical query such as greater than, less than, exactly a value or a range of values
        </div>
    )
}