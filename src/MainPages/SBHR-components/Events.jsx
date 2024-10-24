import React from 'react';
import './SBHRCompo.css';
import ImageSlider from '../../Files/ImageSlider/ImageSlider';
import { eventHalls } from '../../Files/Store/ImagesStore';
import Footer from '../../Components/Footer/Footer';
import { SbhrFooter } from '../../Files/Store/Store';

const Events = () => {
  return (
    <div>
      <div className="slideshow">
        <ImageSlider images={eventHalls} />
      </div>
      <div className='fecilities'>
        <h2>Exceptional Wedding and Meeting Experience</h2>
        <p>
          Where exceptional dining meets a breathtaking environment, offering unparalleled dining experiences that cater to your every need.
        </p>

        <h3>Wedding and Convention Hall</h3>
        <p>
          Our wedding and convention hall is the centerpiece of our venue, providing an opulent setting for both weddings and large-scale events.
          With a versatile design, it can be transformed to suit the theme of your event, whether it’s a glamorous wedding reception or a professional conference.
        </p>
        <ul>
          <li><strong>Capacity:</strong> Accommodates up to 1,000 guests, ideal for grand weddings and large corporate events.</li>
          <li><strong>Modern Amenities:</strong> State-of-the-art audiovisual technology, including sound systems, projectors, and lighting options.</li>
          <li><strong>Customizable Layouts:</strong> Choose from various seating arrangements—banquet, theater, classroom, or cocktail style.</li>
          <li><strong>Catering Services:</strong> Range of customizable catering options featuring local and seasonal ingredients.</li>
          <li><strong>Decor Options:</strong> Work with in-house decorators to personalize the space with floral arrangements and lighting.</li>
        </ul>

        <h3>Chapel Meeting Space</h3>
        <p>
          The chapel meeting space is designed to provide a peaceful and reflective environment, making it ideal for spiritual gatherings, prayer meetings, and intimate ceremonies.
        </p>
        <ul>
          <li><strong>Capacity:</strong> Comfortable seating for up to 100 guests.</li>
          <li><strong>Serene Atmosphere:</strong> Calming decor, natural light, and soothing colors for a tranquil setting.</li>
          <li><strong>Multi-Purpose Use:</strong> Ideal for weddings, religious ceremonies, workshops, or retreats.</li>
          <li><strong>Support Services:</strong> Audio-visual assistance for presentations or ceremonies.</li>
              </ul>

              <h3>Conference Rooms</h3>
              <p>
                  Our conference rooms are designed for professional gatherings, workshops, and corporate meetings. These spaces combine comfort with functionality to ensure productivity and engagement.
              </p>
              <ul>
                  <li><strong>Variety of Sizes:</strong> Multiple conference rooms available, from intimate settings to larger presentation spaces.</li>
                  <li><strong>Equipped with Technology:</strong> High-speed Wi-Fi, projection screens, whiteboards, and teleconferencing capabilities.</li>
                  <li><strong>Flexible Arrangements:</strong> Rooms can be arranged in boardroom, U-shape, or classroom styles.</li>
                  <li><strong>Breakout Spaces:</strong> Adjacent areas for networking or refreshments during meetings.</li>
                  <li><strong>Catering Options:</strong> Catering services for coffee breaks, lunches, or receptions.</li>
              </ul>
          </div>
          <Footer {...SbhrFooter} />
    </div>
  );
};

export default Events;
