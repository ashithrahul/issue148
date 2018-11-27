import React from "react";
import { connect } from 'react-redux';

const Home = (props) => {
  console.log(props)
  return(
  <div onClick={()=>props.dispatch({type:'ACTION_GET_CURRENT_USER'})}>
    This is a home page
  </div>
)};


const mapStateToProps = (state) => {
  return {
    runs: state.get('runs'),
  };
}

export default connect(mapStateToProps)(Home)
