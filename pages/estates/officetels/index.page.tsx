import {NextPage} from "next";
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Estate } from '@interfaces/estate';
import { useOfficetelEstatesList } from '@api/estates';
import Main from '@layout';
import EstateCard from '@components/estates/Card';

const OfficetelIndexPage: NextPage = () => {
  const router = useRouter()
  const { buildingId } = router.query

  const {
    data: officetelEstatesList,
    isLoading,
    isSuccess,
  } = useQuery<Estate[]>(['officetelEstatesList', buildingId], useOfficetelEstatesList(buildingId), {
    enabled: !!buildingId,
  });

  return (
    <Main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {officetelEstatesList &&
          officetelEstatesList?.map((officetelEstate: Estate, index) => (
            <EstateCard key={index} estate={officetelEstate} />
          ))}
      </div>
    </Main>
  )
}

export default OfficetelIndexPage;
