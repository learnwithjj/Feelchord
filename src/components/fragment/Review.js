import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = (props)  => {
  const [state, setState] = useState({ name: '', data: ''});
  
  useEffect(() => {
    const { steps } = props;
    const { name,data } = steps;
    setState({ name,data});
    console.log(state)
  }, [props])

  const { name,data} = state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>data</td>
              <td>{data.value}</td>
            </tr>
            
          </tbody>
        </table>
        </div>
    );
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;