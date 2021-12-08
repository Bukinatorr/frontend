import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';

const Header = () => (
  <>
    <div className="bg-hero-pattern opacity-80 bg-cover w-full h-56 md:h-80">
      <div className="container text-center break-normal mx-auto pt-16 md:pt-32">
        <p className="text-black font-extrabold text-3xl md:text-5xl">
          Wisotge
        </p>
        <p className="text-xl md:text-2xl text-gray-600 mt-4">
          Welcome to my Blog
        </p>
      </div>
    </div>
    <nav className="w-full max-w-6xl mx-auto">
      <div className="container mx-auto flex items-center">
        <div className="flex w-1/2 pl-4 text-sm">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-2">
              <Link href="/">
                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2">
                  홈
                </a>
              </Link>
            </li>
            <li className="mr-2">
              <Link href="/posts/create">
                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2">
                  게시글 작성
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex w-1/2 justify-end content-center">
          <a
            href="https://twitter.com/intent/tweet?url=#"
            className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
          >
            <SiMinutemailer />
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=#"
            className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
