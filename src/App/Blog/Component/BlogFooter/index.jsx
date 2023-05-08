import './styles.css';

export const BlogSignature = ({ signature, position }) => {
  return (
    <div className="blogSignature">
      <p className="blog-text-signature">{signature}</p>
      <p className="blog-text-position">{position}</p>
    </div>
  );
};
