import React from 'react';

/**
 * Functional react component for the congratulations message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if success prop is false)
 */

const Congrats = (props) => {
    if(props.success){
        return(
            <div data-test='component'>
                <span data-test='congrats-message'>
                    Congratulations!  You guessed the word!
                </span>
            </div>
        )
    } else{
        return(
            <div data-test='component-congrats'>
            
            </div>
        )
    }
}

export default Congrats