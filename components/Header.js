import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Avatar from '../components/Avatar';
import HeaderOptions from '../components/HeaderOptions';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    console.log(searchInputRef.current.value);
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
    e.preventDefault();
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push('/')}
          className="cursor-pointer"
        />
        <form
          action=""
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon
            className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
            onClick={search}
          />
        </form>
        <Avatar url="/avatar.png" className="ml-auto" />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
