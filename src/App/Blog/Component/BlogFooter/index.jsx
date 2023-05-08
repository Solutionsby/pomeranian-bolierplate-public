import './styles.css';

export const BlogSignature = ({ signature, position }) => {
  return (
    <div className="blog-signature">
      <p className="blog-text-signature">{signature}</p>
      <p className="blog-text-position">{position}</p>
    </div>
  );
};
