import { useRouter } from 'next/router';
import { ImAngry } from "react-icons/im";


const SidebarLogo = () => {
    const router = useRouter();

    return (
        <div 
            onClick={() => router.push('/')}
            className='
                rounded-full
                h-14
                w-14
                p-4
                flex
                items-center
                justify-center
                hover:bg-emerald-500
                hover:bg-opacity-10
                cursor-pointer
                transition
        '>
            <ImAngry size={28} color='white' />
        </div>
    );
  }
  
  export default SidebarLogo;
  