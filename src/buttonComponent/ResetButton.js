import React from 'react';
import "./buttons.css";
import {resetEasyGame, resetNormalGame} from '../actions'; 
import {useDispatch} from 'react-redux'; 


export default function ResetButton(props){
    const dispatch = useDispatch(); 

    const dispatchGame = () =>{
    props.typeOfReset === "easy" ? dispatch(resetEasyGame()) : dispatch(resetNormalGame());
    }

    return(
        <button className = "resetButton" onClick={() => dispatchGame()}> Reset Game </button>
        )
}