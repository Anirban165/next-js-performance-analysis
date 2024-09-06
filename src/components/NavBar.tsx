import Image from 'next/image';
import Link from 'next/link';
import logoWithSideName from '@/assets/logo-with-side-name.png';
import { CgProfile } from 'react-icons/cg';

export default function NavBar() {
  return (
    <div className="flex justify-between items-center backdrop-blur-lg bg-white/20 mt-2 py-2 px-6 shadow-md rounded-lg z-50">
      <Image
        src={logoWithSideName}
        alt="quilog"
        width={150}
        height={150}
        className=""
      />
      <Link href="/login">
        <div className="flex items-center gap-3">
          <h1 className="hidden sm:block text-2xl font-semibold">
            Login or SignUp
          </h1>
          <CgProfile className="h-10 w-10 mt-1" />
        </div>
      </Link>
    </div>
  );
}