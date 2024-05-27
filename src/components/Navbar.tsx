import Link from 'next/link'
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import MenuItem from './MenuItem'

function Navbar() {
    return (
        <div className='stickey bg-gray-500'>
            <div className="flex justify-between p-2 max-w-6xl mx-auto items-center ">
                <div className='flex gap-4'>
                    <MenuItem title={'Home'} address={'/'} Icon={AiFillHome} />
                    <MenuItem title={'About'} address={'/about'} Icon={AiFillInfoCircle} />
                    <MenuItem title={'Trending'} address={'/?genre=fetchTrending'} Icon={AiFillInfoCircle} />
                    <MenuItem title={'Top Rated'} address={'/?genre=fetchTopRated'} Icon={AiFillInfoCircle} />


                </div>
                <Link href={"/"} className='flex gap-1 bg-gray-800 w-min rounded-lg'>
                    <span className='text-2xl font-bold bg-amber-600 py-1 px-3 rounded-lg'>RCHRd</span>
                    <span className='text-xl font-bold text-white py-1 px-3 rounded-lg'>hub</span>

                </Link>
            </div>

        </div>
    )
}


export default Navbar

