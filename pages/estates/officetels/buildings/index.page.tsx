import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import { Building } from '@interfaces/building';
import { useOfficetelBuildingList } from '@api/estates';
import Main from '@layout';
import BuildingCard from '@components/estates/BuildingCard';

const OfficetelBuildingIndexPage: NextPage = () => {
  const {
    data: officetelBuildingList,
    isLoading,
    isSuccess,
  } = useQuery<Building[]>('officetelBuildingList', useOfficetelBuildingList);

  return (
    <Main>
      <ul role="list" className="divide-y divide-gray-100">
        {officetelBuildingList &&
          officetelBuildingList?.map((officetelBuilding: Building, index) => (
            <BuildingCard key={index} building={officetelBuilding} />
          ))}
      </ul>
    </Main>
  );
};

export default OfficetelBuildingIndexPage;
