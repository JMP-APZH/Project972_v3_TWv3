import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

// objectives:
    // 1. Showing progress dynamically
    // 2. % of completion shown in Text
    // 3. customization of ColorPropType, width
    // cf for styling: HTML5 progress Element (https://css-tricks.com/html5-progress-element/)
        // 1. control the width

const Container = Styled.div`
    progress {
        margin-right: 8px;
    }

    progress[value] {
        width: ${props => props.width};
        /* height: 20px; */
        -webkit-appearance: none;
        appearance:none;
    }

    progress[value]::-webkit-progress-bar {
        height: 10px;
        border-radius: 20px;
        background-color: #eee;
    }

    progress[value]::-webkit-progress-value {
        height: 10px;
        border-radius: 20px;
        background-color: ${props => props.color};
    }

`;

function ProgressBar({ value, max, color, width }) {
  return (
    <div className="flex flex-col justify-center items-center pt-60">
        
        <div className="p-4"> ProgressBar </div>

        <Container
            className="flex flex-col justify-center items-center"
            color={color} 
            width={width} >

            <progress 
                value={value} 
                max={max}
            />

            <span className="p-4"> 
                {value/max * 100}% 
            </span>

        </Container>

    </div>
  )
};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
}

ProgressBar.defaultProps = {
    max: 100,
    color: "lightBlue",
    width: '250px',
}

export default ProgressBar