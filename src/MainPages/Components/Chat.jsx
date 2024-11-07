import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import { MdClose } from 'react-icons/md';
import { IoMdSend } from "react-icons/io";
import { MdChat } from "react-icons/md";
import chat from '../../Assets/chat.svg';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import bothead from '../../Assets/bothead.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { botResponse: "Welcome to Suhana Beulah Hotels & Resorts!" },
    { botResponse: 
      (
        <ul>
          <li>You can connect with us at</li>
          <li>Phone: <a style={{textDecoration:'underline',color:'red'}} href='tel:+91 7793979849'>+91 7793979849</a></li>
          <li>Email: <a style={{textDecoration:'underline',color:'red'}} href="mailto:arthi@tradesyndicate.in">arthi@tradesyndicate.in</a></li>
          <li>We're here to help!</li>
        </ul>
      )
     },
    { botResponse: "How can I assist you?" },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [visible, setVisible] = useState(false);
  const messagesEndRef = useRef(null);
  let userName = '';

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const botResponse = (message) => {
    const greetings = ['hi', 'hello', 'hey', 'greetings'];
    const farewellKeywords = ['bye', 'goodbye', 'see you', 'take care', 'thank you'];
    const hotelInquiryKeywords = ['hotel', 'resort', 'venues', 'accommodations'];
    const retreatKeywords = ['retreat', 'booking', 'schedule tour'];
    const contactKeywords = ['contact', 'phone', 'mail', 'connect', 'number'];
    const addressKeywords = ['address', 'location'];
    const samadhanaKeywords = ['samadhana', 'hyderabad'];
    const samaikyathaKeywords = ['samaikyatha', 'guntur'];
    const roomKeywords = ['rooms', 'accommodations', 'lodging'];
    const facilityKeywords = ['facilities', 'technology', 'amenities'];
    const diningKeywords = ['dining', 'food', 'catering', 'menu', 'restaurant'];
    const eventKeywords = ['wedding', 'meeting', 'event', 'conference', 'gathering', 'halls'];
    const amenitiesKeywords = ['amenities', 'features', 'services'];
    const activitiesKeywords = ['activities', 'recreation', 'entertainment'];
    const pricingKeywords = ['pricing', 'cost', 'rates', 'charges'];
    const bookingKeywords = ['booking', 'reserve', 'availability'];
    const cancellationKeywords = ['cancellation', 'refund', 'policy'];

    if (greetings.some(greet => message.toLowerCase().includes(greet))) {
      if (!userName) {
        return "Hi there! What's your name?";
      } else {
        return `Hello, ${userName}! Welcome to Suhana Beulah Hotels & Resorts. How can I assist you today?`;
      }
    } 

    else if (message.toLowerCase().startsWith('my name is ')) {
      userName = message.slice(11).trim();
      return `Nice to meet you, ${userName}! What information are you looking for?`;
    }

    else if (hotelInquiryKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return "We offer two beautiful venues: Samadhana Sadhan in Hyderabad and Samaikyatha Sadhan in Guntur. What specific information are you looking for?";
    }

    else if (retreatKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return "Both venues are designed for retreats, accommodating groups from 10 to 1,000 people, with lodging, recreational activities, and expert coordinators.";
    }

    else if (roomKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li><strong>Executive Double Occupancy Rooms</strong>: King-size beds, en-suite bathrooms, and a work desk.</li>
          <li><strong>Luxury 2 BHK Accommodations</strong>: Separate bedrooms and kitchenette for families or groups.</li>
          <li><strong>4-bedded and 8-bedded Rooms</strong>: Ideal for smaller groups.</li>
          <li><strong>40-bedded Dorms</strong>: Great for retreats or youth camps.</li>
          <li> <a style={{textDecoration:'underline',color:'red'}} href="/rooms">See more...</a></li>
        </ul>
      );
    }

    else if (facilityKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li>Meeting and delegate rooms with modern audiovisual technology.</li>
          <li>Flexible seating arrangements.</li>
          <li>On-site laundry services and comfortable lounge areas.</li>
        </ul>
      );
    }

    else if (diningKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li>Our dining halls can accommodate 300 to 1,500 guests.</li>
          <li>A diverse menu featuring local dishes like Hyderabadi Dum Biryani.</li>
          <li>Customizable menus for dietary restrictions.</li>
          <li>Catering services for outdoor events.</li>
          <li><a style={{textDecoration:'underline',color:'red'}} href="/dining">See more...</a></li>
        </ul>
      );
    }

    else if (eventKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li>We have a stunning Wedding and <strong>Convention hall</strong> for large events, accommodating up to 1,000 guests.</li>
          <li><strong>Chapel Meeting Space</strong>: Seats up to 100 guests for intimate gatherings.</li>
          <li><strong>Conference rooms</strong> equipped with high-speed Wi-Fi and projection screens. <a style={{textDecoration:'underline',color:'red'}} href="/event">See More</a></li>
        </ul>
      );
    }

    else if (samadhanaKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li><strong>Samadhana Sadhan</strong>:</li>
          <li>Location: <a style={{textDecoration:'underline',color:'red'}} href="https://maps.app.goo.gl/wp3v8rnGhKWAS9V29">Ponallu Village, Shameerpet, Medchal-Malkajgiri district, Hyderabad 500078</a></li>
          <li>Capacity: Accommodates groups from 10 to 1,000 people</li>
          <li>Facilities: Comfortable lodging, recreational activities, and expert event coordinators.</li>
          <li>Phone: <a style={{textDecoration:'underline',color:'red'}} href='tel:+91 7793979849'>+91 7793979849</a></li>
          <li>Email: <a style={{textDecoration:'underline',color:'red'}} href="mailto:arthi@tradesyndicate.in">arthi@tradesyndicate.in</a></li>
          <li><a style={{textDecoration:'underline',color:'blue'}} href="/hyderabad">See more...</a></li>
        </ul>
      );
    }

    else if (samaikyathaKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li><strong>Samaikyatha Sadhan</strong>:</li>
          <li>Location: <a style={{textDecoration:'underline',color:'red'}} href="https://maps.app.goo.gl/SHgHaUJjXuVBF7cz7">782C+F2J, Opposite St. ANN'S COLLEGE OF NURSING COLLEGE, Chowdavaram, Andhra Pradesh 522529</a> </li>
          <li>Capacity: Ideal for large gatherings and events</li>
          <li>Facilities: Spacious halls, dining area, and outdoor spaces for events.</li>
          <li>Phone: <a style={{textDecoration:'underline',color:'red'}} href='tel:+91 9347905709'>+91 9347905709</a></li>
          <li>Email: <a style={{textDecoration:'underline',color:'red'}} href="mailto:samaikyathasadan@gmail.com">samaikyathasadan@gmail.com</a></li>
          <li><a style={{textDecoration:'underline',color:'blue'}} href="/guntur">See more...</a></li>
        </ul>
      );
    }

    else if (contactKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return(
        <ul>
          <li>You can connect with us at</li>
          <li>Phone: <a style={{textDecoration:'underline',color:'red'}} href='tel:+91 7793979849'>+91 7793979849</a></li>
          <li>Email: <a style={{textDecoration:'underline',color:'red'}} href="mailto:arthi@tradesyndicate.in">arthi@tradesyndicate.in</a></li>
          <li>We're here to help!</li>
        </ul>
      )
    }

    else if (addressKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li>Here is Addresses with Map Links</li>
          <li><strong>Head Office</strong>: <a style={{textDecoration:'underline',color:'red'}} href="https://maps.app.goo.gl/ekJ5NjkqTk3cxztXA"> Plot No 128, Gate Number 6, Sitaram Nagar, Gunrock Enclave, Secunderabad, Telangana 500009</a></li>
          <li><strong>Samadhana Sadhan</strong>: <a style={{textDecoration:'underline',color:'red'}} href="https://maps.app.goo.gl/wp3v8rnGhKWAS9V29">Ponnal Village, Shameerpet, Medchal-Malkajgiri district, Hyderabad 500078</a> </li>
          <li><strong>Samaikyatha Sadhan</strong>: <a style={{textDecoration:'underline',color:'red'}} href="https://maps.app.goo.gl/SHgHaUJjXuVBF7cz7">782C+F2J, Opposite St. ANN'S COLLEGE OF NURSING COLLEGE, Chowdavaram, Andhra Pradesh 522529</a> </li>
        </ul>
      );
    }

    else if (farewellKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return `Goodbye ${userName || ''}! We look forward to assisting you again!`;
    }

    else if (amenitiesKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li><strong>Free Wi-Fi</strong>: Available throughout the property.</li>
          <li><strong>Swimming Pool</strong>: A large pool with a relaxation area.</li>
          <li><strong>Fitness Center</strong>: Equipped with modern machines.</li>
          <li><strong>Conference Facilities</strong>: Equipped for meetings and corporate events.</li>
        </ul>
      );
    }

    else if (activitiesKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li><strong>Outdoor Games</strong>: Volleyball, badminton, and more.</li>
          <li><strong>Yoga and Meditation Sessions</strong>: Available on request.</li>
          <li><strong>Guided Nature Walks</strong>: Explore the local flora and fauna.</li>
        </ul>
      );
    }

    else if (pricingKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li>Our rates vary based on the season and room type.</li>
          <li><strong>Executive Rooms</strong>: Starting from ₹3,000 per night.</li>
          <li><strong>Luxury Accommodations</strong>: Starting from ₹5,000 per night.</li>
          <li>For group bookings, special discounts may apply.</li>
        </ul>
      );
    }

    else if (bookingKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li>For Bookings call us directly.</li>
          <li>For group bookings, please contact us for personalized service.</li>
        </ul>
      );
    }

    else if (cancellationKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
      return (
        <ul>
          <li>Free cancellation is available up to 48 hours before check-in.</li>
          <li>For cancellations made within 48 hours, a one-night charge will apply.</li>
        </ul>
      );
    }

    return `Sorry, I didn't quite understand this "${message}". Could you please explain it in more detail?`; 
  };

  const sendMessage = () => {
    if (!input) return;

    setMessages(prevMessages => [...prevMessages, { userMessage: input }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const response = botResponse(input);
      setMessages(prevMessages => [
        ...prevMessages,
        { botResponse: response },
      ]);
      scrollToBottom();
    }, 2000);

    setInput('');
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  const phoneNumber = '917793979849';
  const message = 'Hello!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(()=>{
    AOS.init({duration:2000});
})
  return (
    <div className="bot-container">
      <div className="bot-shortcut" onClick={handleClick}>
        {!visible ? <MdChat /> : <MdClose />}
      </div>
      <div data-aos="fade-up" data-aos-duration="200" className={visible ? "chat-container" : 'chat-container-inactive'}>
        <div className="chat-header">
          <div className='head-heading'><img src={bothead} alt="" /><h1>SBHR</h1></div>
          <p className="typing-indicator">{isTyping ? "Typing..." : "Active now"}</p>
          <div onClick={() => { setVisible(false) }} className="clear-button"><MdClose /></div>
        </div>
        <img className='bot-bgm' src={chat} alt="" />
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className="message-container">
              {msg.userMessage && (
                <div className="message user-message">
                  <p className="message-text">{msg.userMessage}</p>
                </div>
              )}
              {msg.botResponse && (
                <div className="message bot-message">
                  <p className="message-text">{msg.botResponse}</p>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} /> 
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button onClick={sendMessage} className="send-button"><IoMdSend /></button>
        </div>
      </div>
      <div className={!visible ? "icon-chat-inactive" : "icon-chat"}>
        <a style={{ color: 'blue' }} href='tel:+91-7793979849'>
          <IoMdCall />
        </a>
        <a style={{ color: 'green' }} href={whatsappUrl} target='_blank' rel='noopener noreferrer'>
          <IoLogoWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Chat;
