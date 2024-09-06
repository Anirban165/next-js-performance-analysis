import Image from 'next/image';
import logoWithSideName from '@/assets/logo-with-side-name.png';
import { CgProfile } from 'react-icons/cg';

export default function NavBar() {
 return (
  <div className={'flex w-full justify-between items-center'}>
   <Image
    src={logoWithSideName}
    alt={'quilog'}
    width={250}
    height={250}
    className={''}
   />
   <div className={'flex items-center gap-3'}>
    <h1 className={' hidden sm:block text-2xl font-semibold'}>
     Login or SignUp
    </h1>
    <CgProfile className={'h-10 w-10 mt-1'} />
   </div>
  </div>
 );
}
