import React, { Component } from "react";
import "../App.css";

interface State {
    isLoaded: boolean,
    data: [],
    forked: boolean, 
    error: string
}


class FormContainer extends Component <State> {
    state = {
        isLoaded: false,
        data: [],
        forked: false, 
        error: ""
    }
    render(){
        return(
            <div>
                <form action="">
                </form>
            </div>
        )
    }
}
