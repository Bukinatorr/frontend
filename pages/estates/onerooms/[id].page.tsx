import Main from "@layout";
import axios from "axios";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useEstate } from "@api/estates";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {EstateDetail} from "@interfaces/estateDetail";
import Image from "next/image";
import React from "react";

interface OneroomShowPageProps {
    id: string;
}

const OneroomShowPage = ({ id }: OneroomShowPageProps) => {
    const {
        data: oneroomDetail
    } = useQuery<EstateDetail>(`oneroom-${id}`, useEstate(id), {
        enabled: !!id
    });

    console.log(oneroomDetail)

    return (
        <Main>
            { oneroomDetail &&
                <div>
                    <Image
                        src={oneroomDetail.item.image_thumbnail}
                        width="256"
                        height="256"
                        className="w-full object-center object-cover rounded-md"
                        placeholder="blur"
                        blurDataURL="/assets/img/gray.png"
                    />
                    <div className="px-4 sm:px-0">
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            <span className="mr-1">{oneroomDetail.danji.local1}</span>
                            <span className="mr-1">{oneroomDetail.danji.local2}</span>
                            <span className="mr-1">{oneroomDetail.danji.local3}</span>
                        </p>
                        <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                            {`${oneroomDetail.item.sales_type} ${oneroomDetail.item.price.deposit} / ${oneroomDetail.item.price.rent}`}
                        </h2>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            {oneroomDetail.item.title}
                        </p>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">정보</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    - {`계약 ${oneroomDetail.item.area.contract_area}m² / 전용 ${oneroomDetail.item.area.dedicate_area}m²`}
                                </dd>
                                <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    - {oneroomDetail.item.room_type}
                                </dd>
                                <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    - {oneroomDetail.item.parking_available_text}
                                </dd>
                                <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    - {`${oneroomDetail.item.floor.floor}층 / ${oneroomDetail.item.floor.all_floors}층`}
                                </dd>
                                <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    - {oneroomDetail.item.movein_date}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">관리비</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {oneroomDetail.item.manage_cost.amount} 만원
                                </dd>
                                <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    [포함] {oneroomDetail.item.manage_cost.includes}
                                </dd>
                                <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    [불포함] {oneroomDetail.item.manage_cost.not_includes}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">옵션 정보</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {oneroomDetail.item.options}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">설명</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {oneroomDetail.item.description.replace(/\\/g, '\\\\')}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">중개사 정보</dt>
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <AiOutlineInfoCircle className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">
                                                        {oneroomDetail.agent.agent_title} / {oneroomDetail.agent.agent_name}
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <AiOutlineInfoCircle className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">
                                                        {oneroomDetail.agent.agent_address}
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <AiOutlineInfoCircle className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <div dangerouslySetInnerHTML={{ __html: oneroomDetail.agent.agent_intro }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <AiOutlineInfoCircle className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">
                                                        {oneroomDetail.agent.agent_phone}
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            }
        </Main>
    );
}

export async function getServerSideProps({ params }: any) {
    const { id } = params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(["estate", id], async () => {
        const result = await axios(`http://localhost:8080/real_estates/${id}`);
        return result.data;
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            id,
        },
    };
}

export default OneroomShowPage;

