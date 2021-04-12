import React, { Component } from 'react';
import styles from './Card.module.scss';

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.card}>
        <h1>{this.props.pokemon.name}</h1>
        <img alt='' src={this.props.pokemon.sprites.front_default}></img>
        <p>Types</p>
        <hr/>
        <h2>{this.props.pokemon.order}</h2>
         
      </div>
    )
  }
}
