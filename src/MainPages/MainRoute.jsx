import React, { useEffect } from 'react';
import { Route, Routes, useLocation, NavLink } from 'react-router-dom';
import SubRoute from '../SubPages/SubRoute';
import './MainRoute.css';
import Hyderabad from './Components/Hyderabad';
import Guntur from './Components/Guntur';
import Bangalore from './Components/Bangalore';
import samaikya from '../Assets/gg.jpg'
import sama from '../Assets/samadhana.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const headings = ['Stay', 'Dine', 'Wedding&Events'];

const MainRoute = ({ route }) => {
   

    const location = useLocation();

    const mainRouteName = {
        'hyderabad': 'Welcome to SAMADHANA SADHAN',
        'guntur': 'Welcome to SAMAIKYATHA SADHAN',
        'bangalore': 'Welcome to SBHR Bangalore',
        'pondicherry': 'Welcome to SBHR Pondicherry'
    }[route];
    const mainRouteDiscription = {
        'hyderabad': "Nestled in serene Ponalla Village, Shamshabad, Samadana Sadhan offers a unique dining experience and tranquil retreat on 12 picturesque acres. With versatile seating for any occasion and exquisite cuisine, it’s perfect for intimate gatherings or grand celebrations. Designed for relaxation and well-being.",
        'guntur': 'An esteemed Christian resort centre and one of the premiere exclusive use venues located just 9km from Guntur, in Chowdavaram. Wheater you are organizing a wedding, birthday party, anniversary celebration, over night retreat or any other Christian event. Samaikyatha Sadhan offers a magnificent setting with a 12 acres of private countryside for your guests to enjoy',
        'bangalore': 'Welcome to SBHR Bangalore',
        'pondicherry': 'Welcome to SBHR Pondicherry'
    }[route];
    const introImage = {
        'hyderabad': sama,
        'guntur': samaikya,
    }[route];

    const isSubRoute = headings.some(heading => location.pathname.endsWith(heading));

    useEffect(()=>{
        AOS.init({duration:2000});
    })
    return (
        <div>
            <nav className='SubNav'>
                <ul>
                    {headings.map(heading => (
                        <li key={heading}>
                            <NavLink to={`/${route}/${heading}`}>{heading}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className='mini-heading'>
                {!isSubRoute &&
                    <div className='main-image'>
                        <img src={introImage} alt="" />
                    </div>
                }
                {!isSubRoute &&
                    <div className='heading-main'>
                        <h1>{mainRouteName}</h1>
                        <p className='heading-main-discri'>{mainRouteDiscription}</p>
                    </div>
                }
                {!isSubRoute && (
                    <>
                        {route === 'hyderabad' && <Hyderabad />}
                        {route === 'guntur' && <Guntur />}
                        {route === 'bangalore' && <Bangalore />}
                    </>
                )}
                <Routes>
                    {headings.map(heading => (
                        <Route
                            key={heading}
                            path={heading}
                            element={<SubRoute route={route} heading={heading} />}
                        />
                    ))}
                </Routes>
            </div>
        </div>
    );
}

export default MainRoute;