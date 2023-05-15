import './styles.css';

export const OwnerData = ({ name, surname, city, email, phone }) => {
  return (
    <div className="wrapper-dashboard-data">
      <div className="photo-icon"></div>
      <div className="dashboard-data">
        <div className="dashboard-name-city">
          <h2>
            {name} {surname}
          </h2>
          <p>{city}</p>
        </div>
        <div className="dashboard-email-contact">
          <p>e-mail:</p>
          <p onClick={() => (window.location = `mailto:${email}`)}>{email}</p>
        </div>
        <div className="dashboard-phone-contact">
          <p>telefon:</p>
          <p onClick={() => (window.location = `tel:+48${phone}`)}>{phone}</p>
        </div>
      </div>
    </div>
  );
};
