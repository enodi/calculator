export default calculator = (
  type,
  value,
  setCurrentValue,
  setOperator,
  setPreviousValue,
  currentValue,
  operator,
  previousValue,
  resetState
) => {
  switch (type) {
    case "number":
      return handleNumber(value, currentValue, setCurrentValue);
    case "operator":
      return (
        setOperator(value), setPreviousValue(currentValue), setCurrentValue(0)
      );
    case "equal":
      return handleEqual(
        currentValue,
        setCurrentValue,
        previousValue,
        resetState,
        operator
      );
    case "percentage":
      return setCurrentValue(`${parseFloat(currentValue) * 0.01}`);
    case "posneg":
      return setCurrentValue(`${parseFloat(currentValue) * -1}`);
    default:
      return resetState();
  }
};

const handleNumber = (value, currentValue, setCurrentValue) => {
  setCurrentValue((prevValue) => {
    if (currentValue === "0") return value;
    return `${prevValue}${value}`;
  });
};

const handleEqual = (
  currentValue,
  setCurrentValue,
  previousValue,
  resetState,
  operator
) => {
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);

  if (operator === "/") {
    setCurrentValue(previous / current);
    resetState();
  }

  if (operator === "*") {
    setCurrentValue(previous * current);
    resetState();
  }

  if (operator === "-") {
    setCurrentValue(previous - current);
    resetState();
  }

  if (operator === "+") {
    setCurrentValue(previous + current);
    resetState();
  }
};
