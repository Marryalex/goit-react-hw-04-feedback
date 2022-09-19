import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
(
    <ul className="statistics_list">
        <li className="statistics_item">
            <span>Good: {good}</span>
        </li>
        <li className="statistics_item">
            <span>Neutral: {neutral}</span>
        </li>
        <li className="statistics_item">
            <span>Bad: {bad}</span>
        </li>
        <li className="statistics_item">
            <span>Total: {total}</span>
        </li>
        <li className="statistics_item">
            <span>Positive feedback: {positivePercentage}%</span>
        </li>
    </ul>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics