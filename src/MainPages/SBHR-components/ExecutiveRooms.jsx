import React from 'react';
import './SBHRCompo.css';
import ImageSlider from '../../Files/ImageSlider/ImageSlider';
import Footer from '../../Components/Footer/Footer';
import { SbhrFooter } from '../../Files/Store/Store';
import { suits } from '../../Files/Store/ImagesStore';

const ExecutiveRooms = () => {

  const rooms = [
    {
      title: "Meeting/Delegate Rooms",
      description: "Accommodates from 10 to 1,000 participants, suitable for small group meetings, large conferences, and everything in between.",
      features: [
        "Modern audiovisual technology",
        "High-speed internet access",
        "Customizable seating arrangements"
      ]
    },
    {
      title: "Executive Double Occupancy Rooms",
      description: "Designed for comfort and elegance, featuring contemporary decor.",
      amenities: [
        "King-size bed",
        "En-suite bathroom with premium toiletries",
        "Work desk and seating area",
        "Flat-screen TV and complimentary Wi-Fi"
      ]
    },
    {
      title: "Luxury 2 BHK Accommodations",
      description: "Ideal for families or groups, offering two separate bedrooms.",
      amenities: [
        "Fully furnished living area",
        "Kitchenette for light meal preparation",
        "Private bathrooms with luxury fittings",
        "Air conditioning and heating controls"
      ]
    },
    {
      title: "4-Bedded Occupancy Rooms",
      description: "Perfect for small groups or families with comfortable sleeping arrangements.",
      amenities: [
        "Four single beds or two double beds",
        "Shared bathroom facilities",
        "Lockers for personal belongings"
      ]
    },
    {
      title: "8-Bedded Occupancy Rooms",
      description: "Designed for larger groups, offering shared accommodations.",
      amenities: [
        "Eight single beds",
        "Shared bathrooms",
        "Common area for relaxation"
      ]
    },
    {
      title: "40-Bedded Dorms",
      description: "A cost-effective solution for large groups, ideal for retreats or youth camps.",
      amenities: [
        "Bunk beds to maximize space",
        "Shared bathrooms and common areas",
        "Secure storage for personal items"
      ]
    },
    {
      title: "5 Luxury Furnished Rooms",
      description: "Exquisite rooms providing an upscale experience.",
      amenities: [
        "Air conditioning and heating",
        "Luxury king-size beds with premium linens",
        "Entertainment options, including cable TV and high-speed internet",
        "Private bathrooms with luxury bathing amenities"
      ]
    }
  ];

  const facilities = [
    {
      title: "Dining Facilities",
      description: "Cafeteria serving a variety of cuisines, including local specialties like Hyderabadi Biryani."
    },
    {
      title: "Recreational Activities",
      description: "Outdoor spaces for leisure, team-building exercises, and sports facilities like badminton and volleyball."
    },
    {
      title: "Event Coordination Services",
      description: "Dedicated staff to assist with event planning and customization."
    },
    {
      title: "Common Areas",
      description: "Well-maintained restrooms and comfortable lounge areas for relaxation."
    },
    {
      title: "Laundry Services",
      description: "On-site laundry facilities or services for guest convenience."
    }
  ];


  return (
    <div>
      <div className="slideshow">
        <ImageSlider images={suits} />
      </div>
      <div className='fecilities'>
        <h2>Rooms and Facilities</h2>
        {rooms.map((room, index) => (
          <div key={index}>
            <h3>{room.title}</h3>
            <p>{room.description}</p>
            {room.features && (
              <ul>
                {room.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
            {room.amenities && (
              <ul>
                {room.amenities.map((amenity, i) => (
                  <li key={i}>{amenity}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <h2>Facilities</h2>
        {facilities.map((facility, index) => (
          <div key={index}>
            <h3>{facility.title}</h3>
            <p>{facility.description}</p>
          </div>
        ))}
      </div>
      <Footer {...SbhrFooter} />
    </div>
  );
};

export default ExecutiveRooms;


