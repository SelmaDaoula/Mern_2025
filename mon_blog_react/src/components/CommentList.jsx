import CommentCard from './CommentCard';

function CommentList({ comments }) {
  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c3e50'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Commentaires ({comments.length})</h2>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          author={comment.author}
          text={comment.text}
          likes={comment.likes}
        />
      ))}
    </div>
  );
}

export default CommentList;