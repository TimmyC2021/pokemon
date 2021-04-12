import React, { Component } from 'react';
import styles from './SearchBar.module.scss';

export default class SearchBar extends Component {

  // 1. Event handler -> onChange on the input run a function
  // 2. Store "searchText" in state
  // 3. Run a set/update state function passed down as props
  // 4. 
  //Call



  render() {
    return (
      <div className={styles.searchBar}>
        <label htmlFor='searchText'>Who's that Pokemon? </label>
        <input list='namesList' id='searchText' onChange={(e) => this.props.fetchData(e)} />
        <datalist id='namesList'>
          {this.props.namesList.map((name, index) => {
            return <option key={index} value={name} />
          })}
        </datalist>
      </div>
    )}
}
