import React from "react";
import Card from "./Card"
import Button from "./Button"

export default class TableList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsSelected: [],
        };

      }
     
     modalHandler  = ev => {
         let target = ev.target.querySelector("p").innerText;
         console.log(target);

         if (target !== null) {
            let itemsSelected = this.state.itemsSelected;
            itemsSelected.push(target);
            this.setState({itemsSelected: itemsSelected});   
         }
     }

     clickHandler() {
         console.log("Received");
         console.log(this.state.itemsSelected);
    }
    
    render () {
        return (
            <React.Fragment>

            <div class="row">
            {["Bag","Coffee","Shampoo"].map(letter =>  <div onClick={this.modalHandler} class="col"><Card text={letter}/></div> )}
            </div>

            <div class="row">
            {["Smoothie","Food","Chips"].map(letter =>  <div onClick={this.modalHandler} class="col"><Card text={letter}/></div> )}
            </div>   

            <div class="row">
            {["Container","Cutlery","Box"].map(letter =>  <div onClick={this.modalHandler} class="col"><Card text={letter}/></div> )}
            </div>      

            <Button handler={this.clickHandler.bind(this)} type={"btn btn-primary"}/>     

            </React.Fragment> 
        );
    }
}