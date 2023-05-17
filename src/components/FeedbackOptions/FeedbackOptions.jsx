import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <ul className='feedbackBtns'>
        {options.map(option => {
            return <li key={option} className='feedbackBtn'>
                <button type="button" onClick={onLeaveFeedback} name={option}> {option}</button>
            </li>
        })
        }
    </ul>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func,
}