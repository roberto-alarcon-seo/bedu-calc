import React from 'react';
import './calc.styles.css';

class Calc extends React.Component{

    
    constructor(){
        super();
        this.state = {
            result:0,
            val_a:0,
            val_b:0
        }

        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleSum = this.handleSum.bind(this);
    }

    updateInputValue = (evt) => {
   
        switch (evt.target.name) {
            case "val_a":
                this.setState({
                    val_a: evt.target.value
                });
                break;

            case "val_b":
                    this.setState({
                        val_b: evt.target.value
                    });
                    break;
        }

      }


    handleSum = ( e )=>{
        e.preventDefault();
        const val_a = parseInt(this.state.val_a);
        const val_b = parseInt(this.state.val_b);

        this.setState(
            {
                result: val_a + val_b
            }
        );
    }

    handleDiff = ( e )=>{
        e.preventDefault();
        const val_a = parseInt(this.state.val_a);
        const val_b = parseInt(this.state.val_b);

        this.setState(
            {
                result: val_a - val_b
            }
        );
    }

    handleMul = ( e )=>{
        e.preventDefault();
        const val_a = parseInt(this.state.val_a);
        const val_b = parseInt(this.state.val_b);

        this.setState(
            {
                result: val_a * val_b
            }
        );
    }

    handleDiv = ( e )=>{
        e.preventDefault();
        const val_a = parseInt(this.state.val_a);
        const val_b = parseInt(this.state.val_b);

        this.setState(
            {
                result: val_a / val_b
            }
        );
    }


    render(){
        
        return (
            <div className="container-sm calc_container">

                <h1>Mi Calculadora con React</h1>
                <div className="d-flex">
                    <input type="text" name="val_a" defaultValue={ this.state.val_a } onChange={this.updateInputValue} placeholder="Agrega un numero"/>
                    <input type="text" name="val_b" defaultValue={ this.state.val_b } onChange={this.updateInputValue} placeholder="Agrega un numero"/>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={this.handleSum}> Suma </button>
                    <button className="btn btn-primary" onClick={this.handleDiff}> Resta </button>
                    <button className="btn btn-primary" onClick={this.handleMul}> Multiplicación </button>
                    <button className="btn btn-primary" onClick={this.handleDiv}> División </button>
                </div>  
                <div className="calc_result">
                    { this.state.result }
                </div>

            </div>

        )

    }

}

export default Calc;