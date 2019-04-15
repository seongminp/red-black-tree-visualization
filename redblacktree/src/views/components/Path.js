import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-lineto';


import { TweenMax } from 'gsap';

//import './Styles/Node.css';

class Path extends Component {

   componentDidUpdate(prevProps, prevState) {
       const el = this.container;
        console.log('here')
        console.log(this.props.fromX, this.props.fromY, this.props.toX, this.props.toY);
       TweenMax.fromTo(el, 0.3, 
           {x0: this.props.prevFromX, y0: this.props.prevFromY,
            x1: this.props.prevToX, y1: this.props.prevToY},

           {x0: this.props.fromX, y0: this.props.fromY,
            x1: this.props.toX, y1: this.props.toY}
       );
   }

    componentDidMount() {
        const el = this.container;

        console.log('here1')
        console.log(this.props.fromX, this.props.fromY, this.props.toX, this.props.toY);

        TweenMax.fromTo(el, 0.3, 
           {x0: this.props.fromX, y0: this.props.fromY,
            x1: this.props.toX, y1: this.props.toY,
           opacity: 0},

           {x0: this.props.fromX, y0: this.props.fromY,
            x1: this.props.toX, y1: this.props.toY,
           opacity: 1}
       );

    }
    
    render () {

        var styles = {
            position: 'absolute',
            stroke:'#000000'
        }

        return (

           <Line x0={this.props.fromX} y0={this.props.fromY} 
            x1={this.props.toX} y1={this.props.toY} 
            ref={c => this.container = c} 
            className='path'
            style={styles}/>
        )
    }
    

}


export default Path;