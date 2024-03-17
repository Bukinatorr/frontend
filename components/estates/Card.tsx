import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Estate } from '@interfaces/estate';

interface EstateCardProps {
  estate: Estate;
}

const EstateCard = ({ estate }: EstateCardProps) => (
  <div
    key={estate.item_id}
    className="rounded overflow-hidden shadow-sm border-2 border-gray-50"
  >
    <Image
      src={estate.images_thumbnail}
      width="1024"
      height="1024"
      className="w-full object-center object-cover rounded-md"
      placeholder="blur"
      blurDataURL="/assets/img/gray.png"
    />
    <div className="px-4 py-4 border-t-2 border-gray-50">
      <Link href={`/estates/onerooms/${estate.item_id}`}>
        <div className="font-bold text-base mb-2 truncate ...">{estate.title}</div>
      </Link>
      <p className="text-gray-700 text-sm  h-24 truncate-2-lines ...">
        {estate.address}
      </p>
      <p className="text-gray-700 text-sm  h-24 truncate-2-lines ...">
        금액: {estate.deposit}/{estate.rent}
        <br/>
        공급면적: {estate.size_m2} m² · {estate.floor_string}층 / {estate.building_floor}층
      </p>
    </div>
    <div className="px-3 py-2">
      <span className="normal-chip">{estate.sales_type}</span>
      <span className="normal-chip">{estate.item_bm_type}</span>
    </div>
  </div>
);

export default EstateCard;
