import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/festival/wangdi.png";
import hidden from "../../../assets/festival/wangdi3.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const WangdueTsechu = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro ",
      details: `The flight to Paro offers a breathtaking journey across the Himalayan Mountains, providing spectacular views of some of Bhutan’s most sacred peaks, including Jumolhari and Jichu Drake. For those arriving via Kathmandu, it is even possible to glimpse Mount Everest and Mount Kanchenjunga. Upon arrival in Paro, you will be warmly greeted by our representative and transferred to your hotel. In the afternoon, enjoy sightseeing around Paro, beginning with a visit to the Paro Dzong, built in 1646, which currently houses government offices and religious institutions. You will cross a traditional wooden bridge to reach the Dzong, followed by a tour of the National Museum, formerly the Dzong’s watchtower, which displays an impressive collection of fine arts, paintings, thangkas, statues, and antiques. The day continues with a visit to Kichu Lhakhang, Bhutan’s oldest temple, before an evening stroll through the Paro market and town. Overnight stay is at your hotel in Paro.`,
    },
    {
      day: "Day 02: Paro - Thimphu",
      details: `After breakfast, embark on an excursion to Taktsang, also known as the “Tiger’s Nest,” perched dramatically 900 meters above the Paro valley floor. Take time to meditate at this sacred site, where Guru Rimpoche is said to have flown on the back of a tigress and meditated for three months. Lunch will be served at the cafeteria. Afterwards, return to Paro and drive to Thimphu, the capital of Bhutan, along the scenic route through Paro Valley to the confluence of the Paro and Thimphu rivers at Chuzomsa, adorned with three distinct styles of chortens. Visit Tachogang Lhakhang, built in the 15th century by Thangthong Gyelpo, the pioneer of iron bridges in Bhutan, and Simtokha Dzong, the oldest Dzong in Bhutan, constructed by Shabdrung in the 17th century. Upon arrival in Thimphu, check into your hotel and enjoy an evening exploring the city, including visits to local handicraft shops. Overnight stay is at your hotel in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu",
      details: `After breakfast, visit the King’s Memorial Chorten, built in memory of Bhutan’s third King (1952–1972), followed by Buddha Point, Changgangkha Monastery, and the radio tower offering panoramic views of Thimphu Valley and Thimphu Dzong. Stop by the zoo to see the national animal, the takin. Continue to the nunnery temple, the National Library housing ancient manuscripts, and the School of Arts and Crafts (painting school). After a relaxing lunch, explore the National Institute of Traditional Medicine, a traditional paper factory, and the majestic Tashichhodzong. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 04: Thimphu - Punakha",
      details: `Drive over the Dochu-La Pass (3,100 meters), which on a clear day offers stunning views of the Himalayan peaks, before descending into the warm and scenic Punakha Valley (approximately 3 hours of driving). Punakha, the ancient capital of Bhutan, welcomes you with its iconic Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Shabdrung, the ‘Unifier of Bhutan,’ as foretold by Guru Rinpoche. After lunch, drive about 12 km and take a walk across rice fields and a river to reach the Khamsum Yulley Namgyal Chorten, perched on the hillock of Ngezergang, featuring exquisite Nyingmapa-style paintings and statues. Continue to Metshina Village and enjoy a 20-minute walk through rice fields to Chimi Lhakhang, a fertility temple where you may receive a special blessing. Overnight stay in Punakha.`,
    },
    {
      day: "Day 05: Punakha - Wangduephodrang",
      details: `After breakfast, depart for Wangduephodrang Dzong to attend the vibrant local festival, experiencing the colorful masked dances and cultural celebrations.`,
    },
    {
      day: "Day 06: Wangduephodrang - Gantey",
      details: `After breakfast, begin the day with a drive to Gangtey, passing through dense oak and rhododendron forests before arriving at Gangtey village. Explore the scenic Phobjikha Valley, Bhutan’s most beautiful valley, and visit the Education Center maintained by the Royal Society for the Protection of Nature (RSPN). Overnight stay at a hotel in Gangtey.`,
    },
    {
      day: "Day 07: Gantey",
      details: `After breakfast, visit Gangtey Gompa, the only Nyingmapa monastery in western Bhutan and a highly spiritual site. From there, enjoy views of the scenic Black Mountain range and the Phobjikha Valley, home to black-necked cranes during the winter. Overnight stay at a hotel in Gangtey.`,
    },
    {
      day: "Day 08: Gantey - Paro",
      details: `After breakfast, begin the drive to Paro, stopping for lunch in Wangdue Phodrang along the way. Overnight stay at a hotel in Paro.`,
    },
    {
      day: "Day 09: Depart from Paro",
      details: "Drive to the Airport for the departure.",
    },
  ];

  const via_pling = [
    {
      day: "Day 1: Arrival at Phuentsholing via Bagdora Airport",
      details: `Our representative will pick you up from the aforementioned location and transport you to Phuentsholing. Upon arriving in Jaigaon, your private guide and driver will greet you in the border town and transfer you to Phuentsholing after completing immigration and customs procedures at the Phuentsholing Border checkpoint. Phuentsholing, located in the southwest, serves as the gateway to western Bhutan, while Jaigaon in West Bengal, India, is its Indian counterpart. These border towns form the main trade connection between India and Bhutan. Afterward, visit the Zangthopelri Lhakhang temple situated in the town center. You will have the evening to unwind—consider taking a stroll through the lively Phuentsholing town, Bhutan’s busiest commercial area. In the evening, enjoy a welcome drink and dinner with BGT. 
      Overnight stay at a hotel in Phuntsholing.`,
    },
    {
      day: "Day 02: Phuntsholing - Thimphu",
      details: `After breakfast, depart from Phuentsholing and travel approximately 171 km, taking 4-5 hours, to Thimphu, the capital of Bhutan with around 138,736 residents. Along the way, enjoy photo stops on Bhutan’s first highway, built in 1962 by the Indian border roads organization DANTAK. Stop at Kharbandi Gonpa temple, constructed in 1967 by the late Queen Ashi Phuntsho Choden, before reaching the Rinchending checkpoint (10 km). Continue through Gedu (43 km), known for the Gedu College of Business Studies founded in 2008. Follow the recently opened Damchu-Chhukha double-lane bypass (29 km) to Chhukha, home to Bhutan’s first hydroelectric plant with a 336-MW capacity and a 6.5-km tunnel. Next, reach Chhuzom (59 km), a key junction where the Pachhu and Wangchhu Rivers meet, connecting routes to Thimphu, Haa, and Paro. Take the right turn towards Thimphu (30 km), a city located 2,300 meters above sea level, set in a picturesque rural valley with traditional Bhutanese architecture. Notably, Bhutan has no traffic lights; instead, police manage traffic with intricate hand signals at intersections. Use your free time in the evening to relax or explore Thimphu’s streets. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu",
      details: `Spend a full day exploring Thimphu’s highlights, beginning with the magnificent Buddha Dordenma Statue, followed by the National Memorial Chorten. Continue to the 12th-century Changangkha Temple and The National Library, which preserves Bhutanese scriptures dating back to the 8th century. Conclude your sightseeing at Tashichhodzong, a majestic fortress that houses several government ministries, His Majesty’s secretariat, and the central monk body.`,
    },
    {
      day: "Day 04: Thimphu - Punakha",
      details: `Depart Thimphu early after breakfast and drive up to Dochu-La Pass (3,100 meters) to witness the spectacular Druk Wangyal Festival, a highlight of Bhutanese cultural celebrations. Afterwards, continue to the Royal Botanical Park at Lamperi, which spans an altitude range of 2,100m to 3,800m and covers 47 square kilometers, serving as a biological corridor connecting Jigme Dorji and Jigme Singye Wangchuck National Parks. Proceed to Punakha, where you can spend the rest of the day at leisure, enjoying a stroll through the town in the evening. Overnight stay at a hotel in Punakha.`,
    },
    {
      day: "Day 05: Punakha",
      details: `Punakha, the ancient capital of Bhutan, is home to the impressive Punakha Dzong, also known as the “Palace of Great Happiness,” built in 1637 by the Shabdrung. After lunch, enjoy a leisurely walk to Chimi Lhakhang, the temple of the revered Drukpa Kuenly, popularly known as the Divine Madman.`,
    },
    {
      day: "Day 06: Punakha - Paro",
      details: `In the morning, drive to Yabesa village and hike through rice fields up to Khamsum Yueley Namgyal Chorten, built by Her Majesty Queen Ashi Tshering Yangdon Wangchuk. On the way to Paro, stop at Semtokha Dzong, built in 1627 and the oldest Dzong in Bhutan, now home to the Institute for Language and Culture Studies. Upon arrival in Paro, check into your hotel for an overnight stay.`,
    },
    {
      day: "Day 07: Paro",
      details: `After breakfast, embark on a hike to Taktsang Monastery. The broad trail takes approximately 2 hours uphill, reaching nearly a kilometer above the Paro valley floor; for those unable to hike, a horse can be arranged to the viewing point. In the afternoon, drive to the nearly fully reconstructed Drukgyel Dzong.`,
    },
    {
      day: "Day 08: Paro - Thimphu - Paro",
      details: `After an early breakfast, drive back to Thimphu to witness the National Day celebrations at Changlimithang Ground alongside the locals. Bhutan observes 17th December as National Day, commemorating the enthronement of Gongsar Ugyen Wangchuck as the first hereditary monarch in 1907. The day features a variety of cultural and sporting activities and concludes with a Tashi Lebay, a prayer for many more prosperous and joyous days for Bhutan and its people. After the celebrations, drive back to Paro and overnight at your hotel.`,
    },
    {
      day: "Day 09: Paro - Phuentsholing/Drop",
      details:
        "In the morning, visit to National Museum and Rinpung Dzong and then Drive to Phuntsholing.",
    },
  ];

  const tripHighlights = [
    {
      key: "Enjoy majestic views of the Himalayan mountains from Dochula Pass.",
    },
    {
      key: "Embark on a hike to the famous Tiger’s Nest Monastery (Paro Taktsang), a cultural landmark sitting dramatically on a cliffside.",
    },
    {
      key: "Explore genuine Bhutanese villages and understand authentic rural life in Bhutan.",
    },
    {
      key: "Witness the Wangdue Phodrang Festival's grand Raksha Mangcham, or ‘Dance of the Dead.’",
    },
    {
      key: "Journey through the gorgeous and serene valleys of Thimphu, Paro, Punakha, and Gangtey.",
    },
  ];

  const tourDetails = {
    duration: "8 Nights / 9 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–5 Hours",
    bestSeason: "Sep-Oct",
  };

  return (
    <Box loading="lazy" sx={{ width: "100%", overflow: "hidden" }}>
      <div>
        <Box
          loading="lazy"
          sx={{
            width: "100%",
            height: "60vh",
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="900"
            gutterBottom
            textAlign="center"
            color="#fff"
            sx={{
              py: "7%",
              mt: { xs: "40%", sm: "20%", md: "20%", lg: "10%" },
              fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.7rem" },
            }}
          >
            Wangdue Phodrang Festival
          </Typography>
        </Box>
      </div>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        color="black"
        textAlign="center"
        sx={{ p: 2, fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.6rem" } }}
      >
        An Autumn Celebration of Bhutanese Heritage
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        The Wangduephodrang Tshechu is a vibrant autumn festival celebrating
        Bhutanese heritage at the historic Wangduephodrang Dzong. Held over
        three days, the event features sacred masked dances, including the
        renowned Raksha Mangcham (Dance of the Ox), traditional music, and
        colorful Bhutanese attire. The festival’s spiritual highlight is the
        grand unveiling of the Guru Tshengye Thongdrol tapestry. Attending this
        event offers a profound cultural experience, connecting visitors with
        Bhutanese traditions, rural life, and the stunning local landscapes.
      </Typography>
      {/* ===== Trip Highlights & Tour Info Section ===== */}
      <TourInfo
        tripHighlights={tripHighlights}
        tourDetails={tourDetails}
        image={hidden}
      />
      <Itinerary itinerary={itinerary} via_pling={via_pling} show={true} />
      <TourServices />
    </Box>
  );
};

export default WangdueTsechu;
