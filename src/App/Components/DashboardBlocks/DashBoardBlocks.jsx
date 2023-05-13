import './styles.css';

export const DashboardBlocks = ({ title, icon, text, link }) => {
  return (
    <div className="blocks-wrapper">
      <h2>{title}</h2>
      <div className="blocks-icon">{icon}</div>
      <p>{text}</p>
      <p>{link}</p>
    </div>
  );
};
