function TimeContainer({ value, label }) {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20 text-center">
      <div className="sm:text-3xl text-2xl font-bold">{value}</div>
      <div className="text-xs uppercase">{label}</div>
    </div>
  );
}
export default TimeContainer;
