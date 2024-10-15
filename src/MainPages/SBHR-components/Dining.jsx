import React from 'react';
import './SBHRCompo.css';
import ImageSlider from '../../Files/ImageSlider/ImageSlider';
import { dine } from '../../Files/Store/ImagesStore';

const Dining = () => {
    return (
        <div>
            <div className="slideshow">
                <ImageSlider images={dine} />
            </div>
            <div className='fecilities'>
                <h2>Exceptional Dining Experience</h2>
                <p>
                    Where exceptional dining meets a breathtaking environment, offering unparalleled culinary experiences that cater to your every need.
                </p>

                <h3>Dining Facilities</h3>
                <p>
                    Our dining halls provide an opulent setting for both intimate gatherings and large-scale events. With a versatile design, they can be tailored to suit any occasion.
                </p>
                <ul>
                    <li><strong>Capacity:</strong> Accommodates 300 to 1500 guests, ideal for family gatherings, corporate events, and celebrations.</li>
                    <li><strong>Ambiance:</strong> Elegant decor with comfortable seating arrangements.</li>
                    <li><strong>Setup Options:</strong> Flexible seating configurations (theater, banquet, or casual).</li>
                </ul>

                <h3>Culinary Offerings</h3>
                <p>
                    Our diverse menu features a range of South Indian dishes, Hyderabad biryani, and customizable veg and non-veg options to satisfy every palate.
                </p>
                <ul>
                    <li><strong>South Indian Cuisine:</strong> Traditional thali, idli, dosa, and more.</li>
                    <li><strong>Hyderabad Biryani:</strong> Signature Hyderabadi Dum Biryani, both veg and non-veg.</li>
                    <li><strong>Customizable Menus:</strong> Personalized menus based on dietary restrictions and preferences.</li>
                    <li><strong>Desserts:</strong> Traditional sweets and fresh fruit platters.</li>
                </ul>

                <h3>Customization Options</h3>
                <p>
                    Tailored experiences for special themed dinners and personalized menus based on client preferences.
                </p>

                <h3>Additional Services</h3>
                <ul>
                    <li><strong>Catering Services:</strong> Available for outdoor events and special occasions.</li>
                    <li><strong>Buffet and A La Carte Options:</strong> Flexibility in dining styles based on guest preferences.</li>
                </ul>
            </div>
        </div>
    )
}

export default Dining