import React, { useState } from "react";
import "./faq.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Modal, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import drinkmenu from "../../assets/bar.jpg";
import { Link } from "react-router-dom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = drinkmenu;
    link.download = "wedding-drink-menu.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const faqs = [
    {
      question: "What is the dress code?",
      answer: (
        <>
          <p>Formal Attire</p>
          <p>
            Also, we kindly ask all guests to please wear all black attire, for
            example, for the men, a black suit with a white or black dress shirt
            and a neutral-toned tie, and for the ladies, a black floor-length
            gown, an elegant cocktail dress, or a dressy pantsuit. Patterns are
            welcome as long as the overall color is black.
          </p>
        </>
      ),
    },
    {
      question: "What time should I arrive?",
      answer: "We kindly ask all guests to arrive by 4:30pm.",
    },
    {
      question: "Are children allowed?",
      answer:
        "Yes, children are welcome, but please note that due to limited space at the venue, any children invited will be listed on your invitation.",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Due to limited space at our venue, we are only able to invite those specifically named on your invitation. We appreciate your understanding and can't wait to celebrate together!",
    },
    {
      question: "Is the wedding indoors or outdoors?",
      answer: "Both the ceremony and reception will be held indoors.",
    },
    {
      question: "Will the ceremony and reception be at the same location?",
      answer:
        "Yes, both the ceremony and reception will take place at the same venue. However, there will be a brief 1 hour and 30 minute intermission between the two events as the space is reset for the reception, and while we take a few wedding photographs.",
    },
    {
      question: "What should I do in between the ceremony and reception?",
      answer: (
        <>
          <p>
            Here are some local spots all within walking distance or a short
            drive of the venue, where you can have a few drinks, drink some
            coffee, or explore unique artwork and trendy shops:
          </p>
          <ul>
            <li>
              <a
                href="https://www.thedustlandbar.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Dustland Bar
              </a>
            </li>
            <li>
              <a
                href="https://velveteenrabbitlv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Velveteen Rabbit
              </a>
            </li>
            <li>
              <a
                href="https://www.winegardenlv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Wine Garden
              </a>
            </li>
            <li>
              <a
                href="https://tapnashsocialclub.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tap N' Ash Social Club
              </a>
            </li>
            <li>
              <a
                href="https://www.darksisterlv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dark Sister
              </a>
            </li>
            <li>
              <a
                href="https://echolv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Echo Taste & Sound
              </a>
            </li>
            <li>
              <a
                href="https://www.horsetrailerhideout.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Horse Trailer Hideout
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/barbohemelv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bar Boheme
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/straypiratelv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stray Pirate
              </a>
            </li>
            <li>
              <a
                href="https://corkandthorn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cork and Thorn
              </a>
            </li>
            <li>
              <a
                href="https://chocolatecitycigarlounge.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chocolate City Cigar Lounge
              </a>
            </li>
            <li>
              <a
                href="https://www.servehzah.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Servehzah Bottle Shop and Tap Room
              </a>
            </li>
            <li>
              <a
                href="https://www.soulbellybbq.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Soul Belly BBQ
              </a>
            </li>
            <li>
              <a
                href="https://www.estherslv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Esther's Kitchen
              </a>
            </li>
            <li>
              <a
                href="https://mainstprovisions.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Main St. Provisions
              </a>
            </li>
            <li>
              <a
                href="https://www.tacotarianlv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tacotarian
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/davyslv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Davy's
              </a>
            </li>
            <li>
              <a
                href="https://goodpie.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Good Pie
              </a>
            </li>
            <li>
              <a
                href="https://districtdelilv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                District Deli
              </a>
            </li>
            <li>
              <a
                href="https://cornishpastyco.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cornish Pasty Co
              </a>
            </li>
            <li>
              <a
                href="https://braeswoodbbq.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Braeswood Barbecue
              </a>
            </li>
            <li>
              <a
                href="https://www.nevadabrewworks.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nevada Brew Works
              </a>
            </li>
            <li>
              <a
                href="https://www.crafthausbrewery.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CraftHaus Brewery
              </a>
            </li>
            <li>
              <a
                href="https://www.ablebakerbrewing.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Able Baker Brewing
              </a>
            </li>
            <li>
              <a
                href="https://hudlbrewing.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HUDL Brewing Company
              </a>
            </li>
            <li>
              <a
                href="https://houstonshotchicken.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Houston's Hot Chicken
              </a>
            </li>
            <li>
              <a
                href="https://yuormi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                YU-OR-MI Sushi Bar
              </a>
            </li>
            <li>
              <a
                href="https://garagistelv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garagiste Wine Room
              </a>
            </li>
            <li>
              <a
                href="https://www.mezclalv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mezcla
              </a>
            </li>
            <li>
              <a
                href="https://www.bungalowcoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bungalow Coffee
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/petitebohemelv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Petite Boheme
              </a>
            </li>
            <li>
              <a
                href="https://www.vestacoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vesta Coffee Roasters
              </a>
            </li>
            <li>
              <a
                href="https://www.digitcoffeeco.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dig It! Coffee Co.
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/iwanacoffee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                I Wana Coffee
              </a>
            </li>
            <li>
              <a
                href="https://www.freedsbakery.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freed's Dessert Shop
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What is the Las Vegas Arts District like?",
      answer: (
        <>
          <p>
            Great question! It's one of the most exciting neighborhoods in Las
            Vegas—full of local charm, street art, and culture. CNN recently
            featured it in this great article:{" "}
            <a
              href="https://www.cnn.com/travel/arts-district-las-vegas/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.cnn.com/travel/arts-district-las-vegas/index.html
            </a>
            .
          </p>
        </>
      ),
    },
    {
      question: "Is there parking available at the venue?",
      answer: (
        <>
          <p>
            The recommended parking lot is located on the corner of Commerce &
            Utah streets, directly across the street from our venue. The address
            is: 1502 S. Commerce St., Las Vegas, NV 89102. They have the
            capacity to accommodate up to 111 cars, and it is only 30 seconds
            from our entrance.
          </p>
          <p>
            In addition to this lot, there are eight more parking lots within a
            five-minute walk of the venue. Street parking is also available on
            Utah, Commerce, and Main Street.
          </p>
          <p>
            Parking in the city lot is metered at $2 per hour and can be paid
            via the Flowbird App.{" "}
            <a
              href="https://www.flowbirdapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to download it.
            </a>
          </p>
          <p>
            <strong>Additional Nearby Parking Lots:</strong>
          </p>
          <ul>
            <li>1326 S Main St, Las Vegas, NV 89104</li>
            <li>1401 S Commerce St, Las Vegas, NV 89104</li>
            <li>1415 S Commerce St, Las Vegas, NV 89104</li>
            <li>1409 S Casino Center Blvd, Las Vegas, NV 89104</li>
            <li>1501 S Main St, Las Vegas, NV 89104</li>
            <li>1519 S Main St, Las Vegas, NV 89104</li>
            <li>15 E Oakey Blvd, Las Vegas, NV 89104</li>
            <li>1300 S Commerce St, Las Vegas, NV 89102</li>
          </ul>
          <p>
            <em>Note: The recommended parking lot is a paid parking lot.</em>
          </p>
        </>
      ),
    },
    {
      question: "Will there be an Uber/Lyft/taxi option near the venue?",
      answer:
        "Yes! Uber, Lyft, and taxis are all easily accessible near the venue.",
    },
    {
      question: "What is on the menu for the wedding?",
      answer: (
        <>
          <p>
            We'll be serving authentic Mexican tacos with your choice of three
            meats: Pollo (chicken), Carne Asada (grilled steak), or Al Pastor
            (marinated pork). Sides will include rice, beans, and your choice of
            Sonoran hot dog (bacon-wrapped), ceviche, or a quesadilla. We will
            also be offering a selection of horchata & aguas frescas, in
            addition to regular drinks.
          </p>
        </>
      ),
    },
    {
      question: "Will there be alcohol?",
      answer:
        "Yes, we'll be providing drinks for our guests throughout the evening. We've set aside a generous tab at the bar, and if it runs out, drinks will still be available for purchase.",
    },
    {
      question: "Is smoking allowed?",
      answer:
        "The inside of our venue is strictly NON-SMOKING, including vape pens and e-cigarettes. Smoking is only permitted outside the venue.",
    },
    {
      question: "Does the venue have an outdoor area?",
      answer:
        "Yes! It has a small fenced-in patio with romantic string lights—perfect for enjoying the Vegas weather.",
    },
    {
      question: "Are there restrooms?",
      answer:
        "Yes! The venue includes two private ADA-accessible restrooms, each with two stalls—one for men and one for women.",
    },
    {
      question: "What time will the reception end?",
      answer: "The celebration will wrap up by 11pm.",
    },
    {
      question: "Are there nearby hotels or accommodations you'd recommend?",
      answer: (
        <>
          <p>
            <strong>Waldorf Astoria Las Vegas</strong>
            <br />
            Location: 3752 S. Las Vegas Blvd (The Strip)
            <br />
            Highlights: Non-gaming, non-smoking, luxury spa, and panoramic Strip
            views.
            <br />
            Average Rate: $345/night.
          </p>
          <p>
            <strong>Wynn Las Vegas</strong>
            <br />
            Location: 3131 S. Las Vegas Blvd (The Strip)
            <br />
            Highlights: Elegant rooms, fine dining, upscale casino, and golf
            course.
            <br />
            Average Rate: $352/night.
          </p>
          <p>
            <strong>Fontainebleau Las Vegas</strong>
            <br />
            Location: 2777 S. Las Vegas Blvd (North Strip)
            <br />
            Highlights: New luxury resort with upscale dining, nightlife, and
            spa experiences.
            <br />
            Average Rate: $329/night.
          </p>
          <p>
            <strong>ARIA Resort & Casino</strong>
            <br />
            Location: 3730 S. Las Vegas Blvd (The Strip)
            <br />
            Highlights: Modern design, multiple dining options, and a vibrant
            casino.
            <br />
            Average Rate: $207/night.
          </p>
          <p>
            <strong>Resorts World Las Vegas</strong>
            <br />
            Location: 3000 S. Las Vegas Blvd (The Strip)
            <br />
            Highlights: A mega-resort with three Hilton-affiliated hotels,
            diverse dining, and a modern casino.
            <br />
            Average Rate: $220–$280/night depending on the tower.
          </p>
          <p>
            <strong>Circa Resort & Casino</strong>
            <br />
            Location: 8 Fremont St (Downtown Las Vegas)
            <br />
            Highlights: Adults-only, rooftop pool amphitheater, and retro Vegas
            charm with modern flair.
            <br />
            Average Rate: $230/night.
          </p>
          <p>
            <strong>Hilton Vacation Club Polo Towers Las Vegas</strong>
            <br />
            Location: 3745 S. Las Vegas Blvd (The Strip)
            <br />
            Highlights: Family-friendly suites with kitchenettes and rooftop
            pool.
            <br />
            Average Rate: $127/night.
          </p>
          <p>
            <strong>The English Hotel, Las Vegas</strong>
            <br />
            Location: 921 S. Main St (Arts District)
            <br />
            Highlights: Boutique hotel with modern amenities and close proximity
            to the venue.
            <br />
            Average Rate: $180/night.
          </p>
          <p>
            <strong>Sahara Las Vegas</strong>
            <br />
            Location: 2535 S. Las Vegas Blvd (North Strip)
            <br />
            Highlights: Sleek, recently renovated rooms, rooftop pools, and a
            modern casino.
            <br />
            Average Rate: $140/night.
          </p>
          <p>
            <strong>The STRAT Hotel, Casino & Tower</strong>
            <br />
            Location: 2000 S. Las Vegas Blvd (closest to venue)
            <br />
            Highlights: Iconic tower with observation deck, thrill rides, and
            affordable rooms.
            <br />
            Average Rate: $111/night.
          </p>
          <p>
            <em>
              Note: For guests traveling in groups or seeking a more home-like
              experience, VRBO and Airbnb offer excellent alternatives. These
              platforms provide a variety of options, from entire homes to
              spacious condos, often at competitive rates. They are especially
              ideal for families or friends who wish to stay together and enjoy
              amenities like full kitchens, multiple bedrooms, and private
              living spaces. Many listings are available near the Arts District
              and The Strip, offering convenience and comfort.
            </em>
          </p>
        </>
      ),
    },
    {
      question: "What airport should I fly into?",
      answer: "Please fly into Harry Reid International Airport (LAS).",
    },
    {
      question: "When is the RSVP deadline?",
      answer:
        "The RSVP deadline is September 27, 2025 (six weeks before our wedding on November 8, 2025).",
    },
    {
      question: "How do I RSVP?",
      answer: (
        <>
          Please RSVP by visiting the RSVP section of our website{" "}
          <Link to="/rsvp">[Click here]</Link>
          or by following the instructions included on your invitation.
        </>
      ),
    },
    {
      question: "How can we support the bride and groom?",
      answer: (
        <>
          Your presence is the greatest gift of all! However, if you'd like to
          contribute to our new life together, please visit our registry{" "}
          <a
            href="https://www.zola.com/registry/alexaandromell"
            target="_blank"
            rel="noopener noreferrer"
          >
            [Click here]
          </a>
        </>
      ),
    },
    {
      question: "View drink Menu",
      answer: (
        <>
          <p></p>
          <Button
            style={{ background: "#000", color: "#fff" }}
            onClick={showModal}
          >
            Click to View Drink Menu
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="faq_container">
      <div className="faq_cover">
        <h2 className="faq_title">Frequently Asked Questions</h2>
      </div>
      <div className="faq_card_section">
        {faqs.map((faq, index) => (
          <div className="faq_sub_card" key={index}>
            <div className="faq_top" onClick={() => toggleAccordion(index)}>
              <div className="faq_top_t">
                <h2 className="faq_qs">{faq.question}</h2>
              </div>
              <div className="faq_top_t">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            <div className="line"></div>
            {activeIndex === index && (
              <div className="faq_ans">
                <div className="faq_ans_p">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Drink Menu Modal */}
      <Modal
        title="Wedding Drink Menu"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="download"
            icon={<DownloadOutlined />}
            onClick={handleDownload}
          >
            Download Menu
          </Button>,
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
        width={800}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={drinkmenu}
            alt="Drink Menu"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <p style={{ marginTop: "20px" }}>
            Our curated selection of beverages for your enjoyment!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Faq;
