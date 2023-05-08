import { BlogPost } from './Component';
import { HeaderContent } from './list';

import './styles.css';

export const Blog = () => {
  return (
    <div className="blog">
      {HeaderContent.map(({ title, date, content, signature, position }) => (
        <BlogPost
          title={title}
          date={date}
          content={content}
          signature={signature}
          position={position}
        />
      ))}
    </div>
  );
};
