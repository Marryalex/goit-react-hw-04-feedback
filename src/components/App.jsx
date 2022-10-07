import {useState} from 'react'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


export default function App() {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const onLeaveFeedback = (e) => {
    const { name } = e.target
switch(name) {
  case 'good':
    return setGood((prev) => prev + 1);
    case 'bad':
    return setBad((prev) => prev + 1);
    case 'neutral':
    return setNeutral((prev) => prev + 1);
    default:
      return;
}
    };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };



  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  
  const total = countTotalFeedback();
  const name = { good, neutral, bad }
  const objKey = Object.keys(name);
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className='wrapper'>
      <Section title="Please leave feedback">
      <FeedbackOptions 
        options={objKey}
        onLeaveFeedback={onLeaveFeedback}
      />
      </Section>
      <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
  )
}

