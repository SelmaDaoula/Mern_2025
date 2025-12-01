function CommentCard({ author, text, likes }) {
  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#f9f9f9'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const authorStyle = {
    fontWeight: 'bold',
    color: '#2c3e50',
    fontSize: '16px'
  };

  const likesStyle = {
    color: '#e74c3c',
    fontSize: '14px'
  };

  const textStyle = {
    color: '#34495e',
    lineHeight: '1.5'
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <span style={authorStyle}>{author}</span>
        <span style={likesStyle}>❤️ {likes} likes</span>
      </div>
      <p style={textStyle}>{text}</p>
    </div>
  );
}

export default CommentCard;