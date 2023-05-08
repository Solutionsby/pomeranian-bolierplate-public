import './styles.css';

export const BlogContent = ({ content }) => {
  return (
    <div className="blog-content">
      <p className="blog-content-text">{content}</p>
    </div>
  );
};
