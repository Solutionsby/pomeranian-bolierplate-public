import './styles.css';

export const BlogHeader = ({ title, date }) => {
  return (
    <div className="blog-header">
      <p className="blog-text-date">{date}</p>
      <h1 className="blog-text-title">{title}</h1>
    </div>
  );
};
