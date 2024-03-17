import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';

const Header = () => (
   <div className="max-w-6xl mx-4 md:mx-8 xl:mx-auto flex justify-between items-center py-6">
    <div>
      <Link href="/">
        <a className="flex text-3xl font-extrabold">Bukinator</a>
      </Link>
    </div>
    <div className="hidden lg:ml-10 lg:flex-1 lg:flex lg:items-center lg:justify-between">
      <nav className="flex space-x-10">
        <Link href="/estates/onerooms">
          <a className="text-base font-medium text-gray-500 hover:text-gray-900">전세, 월세</a>
        </Link>
        <Link href="/estates/officetels/buildings">
          <a className="text-base font-medium text-gray-500 hover:text-gray-900">오피스텔</a>
        </Link>
      </nav>
      <div className="flex items-center md:ml-12">
        <>
          <Link href="#">
            <a className="btn btn-sm btn-outline-secondary">로그인</a>
          </Link>
          <Link href="#">
            <a className="btn btn-sm btn-primary ml-4">회원가입</a>
          </Link>
        </>
      </div>
    </div>
  </div>
);

export default Header;
