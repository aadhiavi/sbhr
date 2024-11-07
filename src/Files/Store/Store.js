import { SectionBody } from "../../MainPages/Components/HomeBody";
import { GunterStay, GunturDine, GunturEvents, HydDine, HydStay, HydEvents } from "../../MainPages/Components/HomeContent";
import { GntrDineImages, GntrEveImages, GntrStayImages, HydDineImages, HydEveImages, HydStayImages } from "./ImagesStore";
import '../../SubPages/SubRoute.css'
import Footer from "../../Components/Footer/Footer";
import { MdClose } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";


export const SbhrFooter = {
  subline: "SBHR Suhana Beulah Hotels and Resorts manages both Samadhana Sadhan and Samaikyatha Sadhan, offering large Christian resorts and versatile convention halls. Their expertise ensures exceptional wedding retreats and event experiences. With a focus on elegance and serenity, they create memorable gatherings for every occasion.",
  address: "Plot No 128, Gate Number 6, Sitaram Nagar, Gunrock Enclave, Secunderabad, Telangana 500009",
  number: "+91 7793979849",
  email1: "arthi@tradesyndicate.in",
  email2: "sbhrhyd@gmail.com",
  mapSrc: "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d336.40208977723216!2d78.49508776037399!3d17.461859078468652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m4!1s0x3bcb9be4b194fbcf%3A0x620048d26732a53d!3m2!1d17.4618616!2d78.4953422!4m5!1s0x3bcb9be4b194fbcf%3A0x620048d26732a53d!2sTrade%20Syndicate%20Corporate%20office%2C%20Plot%20No%20128%2C%20Gate%20Number%206%2C%20Sitaram%20Nagar%2C%20Gunrock%20Enclave%2C%20Secunderabad%2C%20Telangana%20500009!3m2!1d17.4618616!2d78.4953422!5e0!3m2!1sen!2sin!4v1728539257457!5m2!1sen!2sin"
}
export const HydFooter = {
  subline: "Samadhana Sadan is a year-round conference and retreat center located at Ponallu Village near Shameerpate at a beautiful green non pollution environment.",
  address: "Ponallu Village, Shameerpet, Medchal-Malkajgiri district, Hyderabad 500078",
  number: "+91 9347905709",
  email1: "info@samadhanasadan.com",
  email2: "info@samadhanasadan.com",
  mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d672.2996711521291!2d78.62870644214287!3d17.597926209737842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8334028a9c07%3A0xffe3b944f5835deb!2sSamadhana%20Sadan%20-%20Telugu%20District%20of%20SIAG!5e0!3m2!1sen!2sin!4v1728538642126!5m2!1sen!2sin"
}
export const GntrFooter = {
  subline: "Samaikyatha Sadhan is a year-round conference and retreat center located at Chowdavaram near Guntur at a beautiful green non pollution environment.",
  address: "782C+F2J,Opposite St. ANN'S COLLEGE OF NURSING COLLEGE Chowdavaram, Andhra Pradesh 522529",
  number: "+91 9347905709",
  email1: "info@samadhanasadan.com",
  email2: "info@samadhanasadan.com",
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.8108787242235!2d80.32004204531017!3d16.251285547879537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a77003f17cbb3%3A0xd50c36043bf616ed!2sSAMAIKYATHA%20SADAN!5e1!3m2!1sen!2sin!4v1728538952042!5m2!1sen!2sin"
}


export const stayDetails = {
  hyderabad: {
    description:
      <div className="top">
        <SectionBody images={HydStayImages[0]} content={HydStay[0].content} />
        <SectionBody images={HydStayImages[1]} content={HydStay[1].content} />
        <SectionBody images={HydStayImages[2]} content={HydStay[2].content} />
        <Footer {...HydFooter} />
      </div>,
    popularStays: [
      'Taj Falaknuma Palace',
      'The Park Hyderabad',
      'ITC Kakatiya'
    ],
    tips: 'Be sure to explore local landmarks like Charminar and Golconda Fort, which are in close proximity to many hotels.'
  },
  guntur: {
    description:
      <div className="top">
        <SectionBody images={GntrStayImages[0]} content={GunterStay[0].content} />
        <SectionBody images={GntrStayImages[1]} content={GunterStay[1].content} />
        <SectionBody images={GntrStayImages[2]} content={GunterStay[2].content} />
        <Footer {...GntrFooter} />
      </div>,
    popularStays: [
      'Hotel Grand Krishna',
      'The Surya Grand',
      'Hotel Swagath'
    ],
    tips: 'Check out local markets for traditional items and enjoy authentic Andhra meals at local restaurants.'
  },

};




export const dineDetails = {
  hyderabad: {
    description:
      <div className="top">
        <SectionBody images={HydDineImages[0]} content={HydDine[0].content} />
        <SectionBody images={HydDineImages[1]} content={HydDine[1].content} />
        <SectionBody images={HydDineImages[2]} content={HydDine[2].content} />
        <Footer {...HydFooter} />
      </div>,
    popularRestaurants: [
      'Paradise Restaurant',
      'Bawarchi',
      'Shadab Restaurant'
    ],
    tips: 'Don’t miss the iconic Hyderabadi Biryani, and be sure to try the local street food in areas like Mohammed Ali Road and Charminar.'
  },
  guntur: {
    description:
      <div className="top">
        <SectionBody images={GntrDineImages[0]} content={GunturDine[0].content} />
        <SectionBody images={GntrDineImages[1]} content={GunturDine[2].content} />
        <Footer {...GntrFooter} />
      </div>,
    popularRestaurants: [
      'Sree Annapurna Restaurant',
      'Madhura Restaurant',
      'Vasudev Adiga\'s'
    ],
    tips: 'Try the spicy Andhra meals and enjoy traditional dishes like Gongura Pachadi and Guntur Chilli Chicken. Local eateries offer a taste of authentic Andhra flavors.'
  },
};

export const weddingHalls = {
  hyderabad: {
    description:
      <div className="top">
        <SectionBody images={HydEveImages[0]} content={HydEvents[0].content} />
        <SectionBody images={HydEveImages[1]} content={HydEvents[1].content} />
        <SectionBody images={HydEveImages[2]} content={HydEvents[2].content} />
        <Footer {...HydFooter} />
      </div>,
    popularHalls: [
      'Taj Falaknuma Palace',
      'The Sheraton Hyderabad',
      'Radisson Blu Plaza Hotel'
    ],
    tips: 'Consider venues with historic charm for a grand celebration, or opt for modern facilities for a more contemporary event. Be sure to book well in advance, especially during peak wedding seasons.'
  },
  guntur: {
    description:
      <div className="top">
        <SectionBody images={GntrEveImages[0]} content={GunturEvents[0].content} />
        <SectionBody images={GntrEveImages[1]} content={GunturEvents[1].content} />
        <SectionBody images={GntrEveImages[2]} content={GunturEvents[2].content} />
        <Footer {...GntrFooter} />
      </div>,
    popularHalls: [
      'Hotel Grand Krishna',
      'The Surya Grand',
      'Hotel Swagath'
    ],
    tips: 'Look for venues that offer complete wedding packages, including catering and decoration. Local wedding planners can assist with arranging traditional ceremonies and catering to local tastes.'
  },
};


export const Overview = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false)

  const pargraphStyles = {
    WebkitLineClamp: 9,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: '-webkit-box',

  }
  return (
    <div style={isOpen ? null : pargraphStyles} className="overview">
      <span><MdClose onClick={onClose} /></span>
      <h3>We Have</h3>
      <ul>
        <li onClick={onClose}><Link to='/event'>Convention Halls</Link></li>
        <li onClick={onClose}><Link to='/event'>Mezzanine Chapel</Link></li>
        <li onClick={onClose}><Link to='/dining'>Indoor-Outdoor Dining</Link></li>
        <li>Baptismal Pool</li>
        <li> Photography Lawn</li>
        <li>Ample Parking Facility</li>
        <li onClick={onClose}><Link to='/event'>Conference & Training Rooms</Link></li>
        <li>Outdoor Amphitheater</li>
        <li>Recreation Pond</li>
        <li>Natural Garden</li>
        <li onClick={onClose}><Link to='/rooms'>Executive Rooms Suits</Link></li>
        <li onClick={onClose}><Link to='/rooms'>Luxury-Bedrooms</Link></li>
        <li onClick={onClose}><Link to='/rooms'>Delegate Rooms</Link></li>
        <li onClick={onClose}><Link to='/rooms'>Shared Rooms with 4 Beds</Link></li>
        <li onClick={onClose}><Link to='/rooms'>Shared Rooms with 8 Beds </Link></li>
        <li onClick={onClose}><Link to='/rooms'>50-Bed Dormitory</Link></li>
      </ul>
      <div className="overview-btn-btn" onClick={() => setIsOpen(!isOpen)}>
        <Link>{isOpen ? 'Read less...' : 'Read More...'}</Link>
      </div>
    </div>
  )
}

export const OverviewButton = ({ onClose }) => {
  return (
    <div className="overview-btn">
      <button onClick={onClose}><FaAngleRight /></button>
    </div>
  )
}

export const OverviewHyd = ({ onClose }) => {
  return (
    <div className="overview">
      <span><MdClose onClick={onClose} /></span>
      <h3>Useful Links</h3>
      <ul>
        <li onClick={onClose}><Link to='/hyderabad/Wedding&Events'>Convention Hall - Capacity: 500 </Link></li>
        <li onClick={onClose}><Link to='/hyderabad/Wedding&Events'>Mezzanine Chapel - Capacity: 100</Link></li>
        <li onClick={onClose}><Link to='/hyderabad/Dine'>Dining Complex, Outdoor - Capacity: 600</Link></li>
        <li>Baptismal Pool</li>
        <li> Photography Lawn</li>
        <li>Ample Parking Facility - Capacity: 300</li>
        <li onClick={onClose}><Link to='/hyderabad/Wedding&Events'>Conference & Training Rooms - Capacity: 100</Link></li>
        <li>Outdoor Amphitheater - Capacity: 300-600</li>
        <li>Recreation Pond</li>
        <li>Natural Garden</li>
        <li onClick={onClose}><Link to='/hyderabad/Stay'>Executive Rooms Suits</Link></li>
        <li onClick={onClose}><Link to='/hyderabad/Stay'>Luxury Two-Bedroom Apartments</Link></li>
        <li onClick={onClose}><Link to='/hyderabad/Stay'>Delegate Rooms</Link></li>
        <li onClick={onClose}><Link to='/hyderabad/Stay'>Shared Rooms with 4 Beds - for Girls & Boys</Link></li>
        <li onClick={onClose}><Link to='/hyderabad/Stay'>Shared Rooms with 8 Beds </Link></li>
        <li onClick={onClose}><Link to='/hyderabad/Stay'>40-Bed Dormitory</Link></li>
      </ul>
    </div>
  )
}

export const OverviewButtonHyd = ({ onClose }) => {
  return (
    <div className="overview-btn">
      <button onClick={onClose}><FaAngleRight /></button>
    </div>
  )
}

export const OverviewGntr = ({ onClose }) => {
  return (
    <div className="overview">
      <span><MdClose onClick={onClose} /></span>
      <h3>Useful Links</h3>
      <ul>
        <li onClick={onClose}><Link to='/guntur/Wedding&Events'>Convention Hall - Capacity: 3000 </Link></li>
        <li onClick={onClose}><Link to='/guntur/Dine'>Dining Complex, Outdoor - Capacity: 1500</Link></li>
        <li>Baptismal Pool</li>
        <li> Photography Lawn</li>
        <li>Ample Parking Facility - Capacity: 300</li>
        <li onClick={onClose}><Link to='/guntur/Wedding&Events'>Conference & Training Rooms - Capacity: 30</Link></li>
        <li onClick={onClose}><Link  to='/guntur/Wedding&Events'>Outdoor Amphitheater - Capacity: 1000</Link></li>
        <li>Recreation Pond</li>
        <li>Natural Garden</li>
        <li onClick={onClose}><Link to='/guntur/Stay'>Executive Rooms Suits</Link></li>
        <li onClick={onClose}><Link to='/guntur/Stay'>Luxury Two-Bedroom Apartments</Link></li>
        <li onClick={onClose}><Link to='/guntur/Stay'>Delegate Rooms</Link></li>
        <li onClick={onClose}><Link to='/guntur/Stay'>Shared Rooms with 4 Beds - for Girls & Boys</Link></li>
        <li onClick={onClose}><Link to='/guntur/Stay'>Shared Rooms with 8 Beds </Link></li>
        <li onClick={onClose}><Link to='/guntur/Stay'>50-Bed Dormitory</Link></li>
      </ul>
    </div>
  )
}

export const OverviewButtonGntr = ({ onClose }) => {
  return (
    <div className="overview-btn">
      <button onClick={onClose}><FaAngleRight /></button>
    </div>
  )
}