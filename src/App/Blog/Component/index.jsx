import './styles.css';
import { BlogHeader } from './BlogHeader';
import { BlogContent } from './BlogContent';
import { BlogSignature } from './BlogFooter';

export const BlogPost = ({ title, date, content, position, signature }) => {
  return (
    <div className="post-wrapper">
      <BlogHeader title={title} date={date} />
      <BlogContent content={content} />
      <BlogSignature signature={signature} position={position} />
    </div>
  );
};
