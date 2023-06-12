export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button onClick={onLeaveFeedback}>{options}</button>
    </>
  );
};
