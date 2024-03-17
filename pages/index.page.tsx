import type { NextPage } from 'next';
import React, {useState} from "react";
import { useQuery } from 'react-query';
import { Estate } from '@interfaces/estate';
import Main from '@layout';
import EstateCard from '@components/estates/Card';
import {useEstatesListByLocation} from "@api/estates";

interface EstateFilterProps {
    locationQuery: string;
}

const Home: NextPage = () => {
    const [locationQuery, setLocationQuery] = useState<string>('');
    const [filterValues, setFilterValues] = useState<EstateFilterProps>({
        locationQuery
    });


    const { data: oneroomEstatesList } = useQuery<Estate[]>(
        `location-${filterValues.locationQuery}`,
        useEstatesListByLocation(filterValues.locationQuery, '원룸'),
        { enabled: !!filterValues.locationQuery },
    );

  return (
    <Main>
        <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            원하는 조건의 집을 찾아보세요
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            당신에게 딱 맞는 조건을 설정하고, 빠르게 매물을 찾아보세요
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                원하는 지역을 검색해보세요
                            </label>
                            <input type="text"
                                   className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                   placeholder="지역 입력"
                                   onChange={async (e) => {
                                       setLocationQuery(e.target.value);
                                   }}
                            />
                            <button
                                type="submit"
                                onClick={async (e: React.MouseEvent) => {
                                    e.preventDefault();
                                    setFilterValues((values) => ({
                                        locationQuery: locationQuery,
                                    }));
                                }}
                                className="flex-none rounded-md ring-1 ring-white/10 bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm"
                            >
                                검색
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        { filterValues.locationQuery && (
            <div className="pt-8 pb-4 text-2xl font-bold">
                '{filterValues.locationQuery}' 검색 결과
            </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {oneroomEstatesList &&
              oneroomEstatesList?.map((estate: Estate, index) => (
                <EstateCard key={index} estate={estate} />
          ))}
        </div>
    </Main>
  );
};

export default Home;
