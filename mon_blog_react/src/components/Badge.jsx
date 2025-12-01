function Badge({ text, color = "blue" }) {
  const badgeStyle = {
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: color,
    color: 'white',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold'
  };

  return (
    <span style={badgeStyle}>
      {text}
    </span>
  );
}

export default Badge;