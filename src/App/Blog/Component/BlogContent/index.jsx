import './styles.css';

export const BlogContent = ({ content }) => {
  return (
    <div className="blogContent">
      <p className="blog-content-text">{content}</p>
    </div>
  );
};
