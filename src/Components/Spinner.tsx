import './Spinner.css';
function Spinner() {
  return (
    <div className="spinner-container">
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}

export default Spinner;