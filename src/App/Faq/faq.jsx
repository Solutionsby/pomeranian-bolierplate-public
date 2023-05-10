import { FaqComponent } from './Component/faqComponent';
import { faqText } from './faqList';
import './styles.css';

export const Faq = () => {
  return (
    <div className="faq">
      {faqText.map(({ title, content }) => (
        <FaqComponent title={title} content={content} />
      ))}
    </div>
  );
};
