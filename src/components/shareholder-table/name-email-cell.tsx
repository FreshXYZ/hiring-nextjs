import Image from 'next/image';
import { FC } from 'react';
import { getAvatarStyling } from '../../utils/getAvatarStyling';

type NameEmailCell = {
  nameInitials: string;
  fullName: string;
  email: string;
};
export const NameEmailCell: FC<NameEmailCell> = ({
  nameInitials,
  fullName,
  email,
}) => {
  const avatarColor = getAvatarStyling();
  return (
    <div className="flex flex-row items-center">
      <span
        className={`flex items-center justify-center mr-4 text-xl font-medium rounded-full h-11 w-11 ${avatarColor}`}
      >
        {nameInitials}
      </span>
      <div className="flex flex-col   md:min-w-[300px]">
        <span className="text-base font-semibold text-primary-dark-green">
          {fullName}
        </span>
        <div className="flex flex-row ">
          <div className="w-5 h-5 p-0.5 mr-1">
            <Image
              className=" text-typography-grey"
              src="/icons/mail.svg"
              alt="Mail Icon"
              width={20}
              height={20}
            />
          </div>
          <span className="text-typography-grey">{email ?? 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};
