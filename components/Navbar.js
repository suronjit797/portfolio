import { Box } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Navbar = () => {
    const [nav, setNav] = useState(false)

    useEffect(()=>{
        if (nav){
            document.body.classList.add('blur')
        }else{
            // document.body.classList.remove('blur')
        }
    },[nav])

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <div className='nav-logo'>
                <h2> <Link href="/"> SP </Link> </h2>
            </div>
            <Box className='main_nav' >
                <ul>
                    <li><a href="#"> <span>01.</span> About </a></li>
                    <li><a href="#"> <span>02.</span> Experience </a></li>
                    <li><a href="#"> <span>03.</span> work </a></li>
                    <li><a href="#"> <span>04.</span> contact </a></li>
                    <li><a href="#" download className='primaryBtn'> resume  </a></li>
                </ul>
            </Box>

            <Box className='bars' onClick={() => setNav(!nav)}>
                <span></span>
                <span></span>
                <span></span>
            </Box>

        </nav>
    );
};

export default Navbar;