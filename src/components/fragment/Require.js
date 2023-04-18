import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Sentiment from 'sentiment';
import {RiGhostSmileFill} from "react-icons/ri";

const Require = (props)  => {
  const [state, setState] = useState({ senti:''});
  const [result,getresult]=useState('');
  useEffect(() => {
    const { steps } = props;
    const { senti } = steps;
    setState({senti});
    // console.log(state.senti.message);
  }, [props])
const getSentiment=()=>
{
  var ab=require('sentiment');
  var s=new ab();
  const res=s.analyze(state.senti.message);
  getresult(res.score);

}
  const { senti} = state;
  React.useEffect(()=>
  {
    getSentiment()
  },[state])
    return (
      <div >
        <div style={{fontSize:"16px"}}>Thanks for your data!<RiGhostSmileFill style={{width:"30px",height:"20px"}}/> </div>
        </div>
    );
}

Require.propTypes = {
  steps: PropTypes.object,
};

Require.defaultProps = {
  steps: undefined,
};

export default Require;