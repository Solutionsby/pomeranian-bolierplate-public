import { OwnerData } from '../Components/OwnerData/OwnerData';
import { OwnerDataList } from '../Components/DataComponents/DataList';
import './styles.css';
import { DashboardBlocks } from '../Components/DashboardBlocks/DashBoardBlocks';
import { DataBlocksTable } from '../Components/DataComponents/DataBloks';
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-welcome">
        <h2>Hej, tu {OwnerDataList.name}</h2>
        <p>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności
        </p>
      </div>
      <div className="dashboard-blocks-wraper">
        {DataBlocksTable.map(({ title, icon, textContent, link }) => (
          <DashboardBlocks
            title={title}
            icon={icon}
            text={textContent}
            link={link}
          />
        ))}
      </div>
      <OwnerData
        name={OwnerDataList.name}
        surname={OwnerDataList.surname}
        city={OwnerDataList.city}
        email={OwnerDataList.email}
        phone={OwnerDataList.phoneNumber}
      />
    </div>
  );
};
