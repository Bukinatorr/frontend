import React from 'react';
import Link from 'next/link';
import { Building } from '@interfaces/building';
import { FaBuilding } from 'react-icons/fa';

interface BuildingCardProps {
  building: Building;
}

const BuildingCard = ({ building }: BuildingCardProps) => (
  <li key={building.id} className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <div className="h-12 w-12 flex place-content-center place-items-center rounded-full bg-gray-50">
        <FaBuilding />
      </div>
      <Link
        href={{
          pathname: '/estates/officetels',
          query: { buildingId: building.id },
        }}
      >
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{building.name}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{building.local1} {building.local2} {building.local3}</p>
        </div>
      </Link>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">{building.established} 준공 / {building.floor} / {building.household}</p>
      <p className="mt-1 text-xs leading-5 text-gray-500">
        {building.count}개의 매물 보기
      </p>
    </div>
  </li>
);

export default BuildingCard;
