import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import { Estate } from '@interfaces/estate';
import { useOneroomEstatesList } from '@api/estates';
import Main from '@layout';
import EstateCard from '@components/estates/Card';

const OneroomIndexPage: NextPage = () => {
  const {
    data: oneroomEstatesList,
    isLoading,
    isSuccess,
  } = useQuery<Estate[]>('oneroomEstatesList', useOneroomEstatesList);

  return (
    <Main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {oneroomEstatesList &&
          oneroomEstatesList?.map((oneroomEstate: Estate, index) => (
            <EstateCard key={index} estate={oneroomEstate} />
          ))}
      </div>
    </Main>
  );
};

export default OneroomIndexPage;
