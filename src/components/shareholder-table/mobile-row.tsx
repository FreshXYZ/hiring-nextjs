import { Row } from '@tanstack/react-table';
import Image from 'next/image';
import { FC } from 'react';
import { Shareholder } from '../../types/Shareholder';
import { formatNumber } from '../../utils/formatNumber';
import { getAvatarStyling } from '../../utils/getAvatarStyling';

type MobileRow = {
  row: Row<Shareholder>;
};
export const MobileRow: FC<MobileRow> = ({ row }) => {
  const { email, firstName, lastName, heldSince, postalCode, shareCount } =
    row?.original;
  const nameInitials = `${firstName?.charAt(0)?.toUpperCase() ?? ''}${
    lastName?.charAt(0)?.toUpperCase() ?? ''
  }`;
  const fullName = `${firstName ?? ''} ${lastName ?? ''}`;
  const avatarColor = getAvatarStyling();

  return (
    <div className="flex flex-col items-start w-full p-4 m-4 bg-white rounded md:hidden h-52">
      <div className="flex flex-row items-center">
        <span
          className={`flex items-center justify-center mr-4 text-xl font-medium rounded-full h-11 w-11 bg-chart-blue-light-3 text-chart-blue-dark ${avatarColor}`}
        >
          {nameInitials}
        </span>
        <span className="text-base font-semibold text-primary-dark-green">
          {fullName}
        </span>
      </div>

      <div className="flex flex-row my-1 ml-1">
        <div className="w-5 h-5 p-0.5 mr-1">
          <Image
            className=" text-typography-grey"
            src="/icons/mail.svg"
            alt="Mail Icon"
            width={20}
            height={20}
          />
        </div>
        <span className=" text-typography-grey">{email ?? 'N/A'}</span>
      </div>
      <div className="flex flex-row my-1 ml-1">
        <div className="w-5 h-5 p-0.5 mr-1">
          <Image
            className=" text-typography-grey"
            src="/icons/map.svg"
            alt="Map Icon"
            width={20}
            height={20}
          />
        </div>
        <span className=" text-typography-grey">{postalCode ?? 'N/A'}</span>
      </div>
      <div className="flex flex-row my-1 ml-1">
        <div className="w-5 h-5 p-0.5 mr-1">
          <Image
            className=" text-typography-grey"
            src="/icons/scale.svg"
            alt="Scale Icon"
            width={20}
            height={20}
          />
        </div>
        <span className=" text-typography-grey">
          {formatNumber(shareCount) ?? 'N/A'}
        </span>
      </div>
      <div className="my-1 ml-1">
        <span className="font-semibold text-typography-grey">
          Held Since
          <span className="ml-1">
            {new Date(heldSince).toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
          </span>
        </span>
      </div>
    </div>
  );
};
