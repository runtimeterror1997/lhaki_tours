import React from "react";
import { Box, Typography } from "@mui/material";

import background from "../assets/home/footer.png";

const lodgingOptions = [
  {
    title: "Hotels",
    description:
      "From comfortable 3-star establishments to opulent 5-star accommodations like Amankora or Taj Tashi, all government-approved hotels typically offer amenities such as televisions, room service, and Wi-Fi. Note that luxury hotels may involve additional charges.",
  },
  {
    title: "Farm Stays",
    description:
      "Experience authentic Bhutanese rural life by staying with local families in traditional farmhouses. These stays provide insights into age-old farming practices, complemented by home-cooked meals and warm hospitality.",
  },
  {
    title: "Camping",
    description:
      "Ideal for multi-day treks, camping allows immersion in Bhutan's pristine natural landscapes. A dedicated guide and support team, including cooks and pack animals, ensure a comfortable and well-organized experience.",
  },
];

const TravelInfo = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Content Section */}

      <div>
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "25% 75%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="900"
            gutterBottom
            textAlign="center"
            color="white"
            sx={{
              py: 3,
              mt: { xs: "40%", sm: "20%", md: "20%", lg: "10%" },
              fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.7rem" },
            }}
          >
            Bhutan Travel Information
          </Typography>
        </Box>
        <Box
          sx={{
            paddingY: 5,
            paddingX: "15%",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            paddingX={5}
            color="black"
            sx={{ mt: "4%" }}
          >
            Bhutan Visa
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
            paragraph
          >
            Travelers intending to visit Bhutan must secure a visa prior to
            arrival, with the exception of citizens from India, Bangladesh, and
            the Maldives. To initiate the visa application, provide a copy of
            your passport's photo page (ensuring at least six months' validity)
            to your tour operator, who will facilitate the process on your
            behalf. Once approved, you'll receive a visa clearance letter via
            email. Present this letter upon arrival in Bhutan to have the visa
            stamped into your passport, valid for the duration of your planned
            itinerary.​ Indian nationals can present a valid passport or voter
            ID card, while Bangladeshi and Maldivian citizens need only their
            passports to obtain a free permit upon entry. ​
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            paddingX={5}
            color="black"
            sx={{ mt: "2%" }}
          >
            Accommodation
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
          >
            A range of lodging options is available in Bhutan:
            <br />
            <span paddingTop={2}>Hotels:</span>
            <br /> From comfortable 3-star establishments to opulent 5-star
            accommodations, all government-approved hotels typically offer
            amenities such as televisions, room service, and Wi-Fi. Note that
            luxury hotels may involve additional charges.​
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
          >
            Farm Stay:
            <br /> Experience authentic Bhutanese rural life by staying with
            local families in traditional farmhouses. These stays provide
            insights into age-old farming practices, complemented by home-cooked
            meals and warm hospitality.
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
          >
            Camping:
            <br /> Ideal for multi-day treks, camping allows immersion in
            Bhutan's pristine natural landscapes. A dedicated guide and support
            team, including cooks and pack animals, ensure a comfortable and
            well-organized experience.
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            paddingX={5}
            color="black"
            sx={{ mt: "2%" }}
          >
            Cuisine
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
          >
            Cuisine Bhutanese cuisine is renowned for its bold flavors, with
            chilies playing a central role in most dishes. Inform your server
            about your spice preference to tailor the heat level to your
            comfort. Signature dishes include:​
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
          >
            Ema Datshi: <br />A spicy blend of chilies and cheese, considered
            the national dish.
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
            paddingY={2}
          >
            ​Kewa Datshi: <br />A comforting combination of potatoes and
            cheese.​
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
          >
            Shamu Datshi:
            <br /> Mushrooms cooked in a rich cheese sauce.​ These dishes are
            often accompanied by red or white rice and lentil stew (dhal),
            staples in the Bhutanese diet.​
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
            paddingTop={1}
          >
            These dishes are often accompanied by red or white rice and lentil
            stew (dhal), staples in the Bhutanese diet.
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            paddingX={5}
            color="black"
            sx={{ mt: "2%" }}
          >
            Dress Code
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
            paragraph
          >
            While Bhutanese citizens don the traditional Gho (for men) and Kira
            (for women) in official settings, tourists are encouraged to dress
            modestly, especially when visiting religious sites such as Dzongs,
            monasteries, and temples. Appropriate attire includes long pants and
            collared shirts with sleeves for both genders, ensuring shoulders
            and legs are covered. It's customary to remove hats and shoes before
            entering sacred spaces. For cooler regions, carrying a jacket is
            advisable. Purchasing and wearing traditional Bhutanese attire can
            enrich your cultural experience and is often appreciated by locals,
            who may assist you in donning it correctly.​
          </Typography>

          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            paddingX={5}
            color="black"
            sx={{ mt: "2%" }}
          >
            Religion
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
            paragraph
          >
            Bhutan predominantly practices Mahayana Buddhism, distinguishing it
            as the only nation to do so. In southern regions, Hinduism is also
            prevalent. The country upholds religious freedom and tolerance,
            allowing visitors to observe and respect diverse spiritual
            practices.​
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            paddingX={5}
            color="black"
            sx={{ mt: "2%" }}
          >
            Communication
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
            paragraph
          >
            Bhutan boasts a reliable telecommunications network. Wi-Fi access is
            commonly available in hotels and cafes. While international roaming
            is possible, acquiring a local SIM card in cities like Thimphu or
            Paro is a cost-effective method to stay connected during your visit.
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            paddingX={5}
            color="black"
            sx={{ mt: "2%" }}
          >
            Climate
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
            paragraph
          >
            September to March:
            <br /> Cooler temperatures with potential frost and snowfall at
            elevations above 3,000 meters. Packing warm clothing is recommended.
            <br />
            June to August: <br />
            Warmer conditions accompanied by monsoon rains.
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            paddingX={5}
            color="black"
            sx={{ mt: "2%" }}
          >
            Currency
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
            paragraph
          >
            The official currency is the Ngultrum (Nu.), pegged to the Indian
            Rupee, which is also widely accepted. It's advisable to carry US
            Dollars for exchange upon arrival at airport currency exchange
            counters or ATMs. Major towns feature ATMs that accept Visa and
            Mastercard. While credit cards are accepted in upscale hotels and
            select handicraft stores, carrying cash is practical for everyday
            transactions.
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            paddingX={5}
            color="black"
            sx={{ mt: "2%" }}
          >
            Transportation
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
            paragraph
          >
            Bhutan offers a fleet of comfortable tourist vehicles, ranging from
            spacious Toyota Coaster buses for larger groups to smaller Hiace
            buses, SUVs like the Tucson, and even Land Cruisers. Experienced,
            licensed drivers and guides accompany you throughout your journey,
            ensuring a seamless and enjoyable travel experience.​
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            paddingX={5}
            color="black"
            sx={{ mt: "2%" }}
          >
            Language
          </Typography>
          <Typography
            variant="h6"
            color="black"
            //textAlign="center"
            paddingX={5}
            paragraph
          >
            Dzongkha is the national language, but English is widely spoken,
            facilitating communication with shopkeepers, taxi drivers, and hotel
            staff. This linguistic accessibility ensures a comfortable
            experience for English-speaking visitors.​ By familiarizing yourself
            with these guidelines, you can anticipate a culturally enriching and
            memorable journey through the captivating
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default TravelInfo;
