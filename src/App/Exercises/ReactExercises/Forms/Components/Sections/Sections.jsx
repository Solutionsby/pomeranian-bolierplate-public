export const Sections = ({ children, SectionTitle }) => {
  return (
    <div className="form-section-wrapper">
      <h1 className="section-title">{SectionTitle}</h1>
      {children}
    </div>
  );
};
