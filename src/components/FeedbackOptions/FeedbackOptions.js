import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.btn_list}>
      {options.map((option, index) => (
        <li key={index} className={styles.btn_item}>
          <button name={option} type="button" onClick={onLeaveFeedback} className={styles.btn}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;