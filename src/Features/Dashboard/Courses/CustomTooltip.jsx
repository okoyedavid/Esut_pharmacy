import Wrapper from "../../../ui/Wrapper";

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <Wrapper>
        <p className="font-semibold">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {getGrade(entry.name, entry.value)}
          </p>
        ))}
      </Wrapper>
    );
  }
  return null;
}
export default CustomTooltip;

function getGrade(name, value) {
  if (name === "Grade")
    return value === 100
      ? "A"
      : value === 80
      ? "B"
      : value === 60
      ? "C"
      : value === 40
      ? "D"
      : value === 20
      ? "E"
      : value === 0
      ? "F"
      : "AR";

  return value / 20;
}
