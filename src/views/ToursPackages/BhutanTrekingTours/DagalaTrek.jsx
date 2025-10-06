import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/trekking/dagala1.png";
import hidden from "../../../assets/trekking/dagala2.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const DagalaTrek = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro",
      details: `The flight to Paro is considered one of the most spectacular mountain flights in the world, offering a constantly changing panorama of some of the highest peaks on earth. Upon arrival, our representative will greet you at the airport after customs formalities. Following lunch, enjoy afternoon sightseeing around Paro, including a visit to the Ta Dzong Museum, which houses numerous religious relics, works of art, and handicrafts, providing an excellent introduction to Bhutan’s historical, cultural, and religious heritage. 
          Next, visit Rimpong Dzong, where you can admire the paintings of the great saint Milarepa. Dzongs, large monasteries and district administrative centers, were originally built as strategic forts. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 02: Paro",
      details: `After breakfast, hike to the iconic Taktsang Monastery, a walk of approximately 1.5 to 2 hours uphill that ascends nearly a kilometer above the Paro valley floor. For those unable to hike, horses can be arranged for transfer up to the cafeteria. 
      In the afternoon, visit the almost fully reconstructed Drukgyel Dzong, originally built by Shabdrung in 1644 to commemorate his victory against invading Tibetans, though destroyed by fire in 1951. Overnight at your hotel in Paro.`,
    },
    {
      day: "Day 03:  Paro - Gur",
      details: `Drive to the village of Genekha (2,800m) to begin the trek. After crossing a bridge over the Wang Chu (Thimphu River), follow a well-marked track steadily upward through oak forest to a rocky platform, an ideal resting spot. Continue gradually through birch and bamboo forests to reach the campsite in a meadow at Gur (3,350m). Overnight at the campsite.`,
    },
    {
      day: "Day 04: Gur - Watching",
      details: `From Gur, we ascend along a good trail into the alpine zone, enjoying open views down the valley. After a couple of hours, we reach a potential campsite at Gibze Kebze (3,710m), where we may stop to acclimatize, as the 360m altitude gain can start to be felt. From there, continue ascending to a stone yak herder’s hut at Watching (4,100m) and set up camp for the night.`,
    },
    {
      day: "Day 05: Watching - Labatama",
      details: `From Wataching, the trail crosses several ridges, gradually entering more rugged terrain, and follows a broad valley known locally as Labatama, dotted with yak herders’ huts. The trek continues along the valley to its end, reaching a dramatic campsite below cliffs near Utsho Lake (4,250m), famous for its golden trout. Juniper may be burned along the way, and locals might request a stop at the lower peak (4,530m) as a mark of respect. Overnight at campsite.`,
    },
    {
      day: "Day 06: Labatama - Panka",
      details: `Leaving Labatama, we cross Labajong La Pass (4,400m). For those with energy to spare, a short detour of approximately 30 minutes leads to a viewpoint with spectacular scenery. From the pass, several campsites are available, and depending on water availability, the camps may vary pre- and post-monsoon. Our aim is to reach Panka, and if we climb, we may take a different route to get there. Overnight at campsite.`,
    },
    {
      day: "Day 07: Panka - Talakha Monastery",
      details: `A clear early morning offers breathtaking views of Kanchenjunga, Chomolhari, and Jichu Drake, along with many other Himalayan peaks. The trail continues through rhododendron forests, home to Himalayan pheasants, before reaching the massive cairns at Chole La Pass (4,100m).
       On clear days, the surrounding peaks are visible in all their glory. From Talakha Peak, the trail descends steadily—at times steeply—into a mixed forest of fir, juniper, rhododendron, rose, bamboo, and birch. The day concludes at Talakha Monastery, where the shy monks, panoramic views over the Thimphu valley, and a rustic outdoor bathtub create a truly memorable stay. Overnight at a campsite near the monastery.`,
    },
    {
      day: "Day 08: Talakha Monastery - Thimphu",
      details: `It’s only an hour’s walk down to the roadhead, after which we drive through apple orchards to reach Thimphu, the capital of Bhutan. Upon checking into your hotel, take some time to unwind and enjoy lunch before beginning sightseeing around Thimphu, once a rustic village nestled in a broad river valley and now the nation’s bustling capital. 
        Highlights include the National Memorial Chorten, completed by the Royal Queen Mother as a memorial stupa for the Third King, followed by visits to the 12th - century Changangkha Temple and the Zilukha Nunnery.Overnight at your hotel in Thimphu.`,
    },
    {
      day: "Day 9: Thimphu",
      details: `Continue your sightseeing in Thimphu with visits to the School for Arts and Crafts, the National Library housing Bhutanese scriptures dating back to the 8th century, the Traditional Paper Factory, and a fascinating replica of a medieval farmhouse at the Folk Heritage Museum. 
        Time permitting, you may also visit the Takin enclosure, home to Bhutan’s national animal, and explore Tashichhodzong, the “Fortress of the Glorious Religion,” which houses several ministries, His Majesty’s Secretariat, and the central monk body.Additional options include a hike to the ancient Tango and Cheri Monasteries(approximately 45 minutes) or a stroll through the Thimphu Market if your visit falls on a weekend.Overnight at your hotel in Thimphu.`,
    },
    {
      day: "Day 10: Thimphu - Punakha",
      details: `Drive over the Dochu-La Pass (3,100 meters), which on a clear day offers spectacular views of the Himalayan peaks, before descending into the lush Punakha Valley (approximately 3 hours’ drive). 
        Punakha, the ancient capital of Bhutan, is home to the magnificent Punakha Dzong, the “Palace of Great Happiness,” built in 1637 by the Shabdrung Ngawang Namgyal, the ‘Unifier of Bhutan.’
         Situated at the confluence of the Mo Chu and Pho Chu(Mother and Father Rivers), the Dzong serves as the winter headquarters for the Je Khenpo and hundreds of monks who relocate from Thimphu during the colder months.After lunch, take a leisurely walk to Chimi Lhakhang, the temple dedicated to Drukpa Kuenly, also known as the Divine Madman.Overnight at your hotel in Punakha or Wangduephodrang.`,
    },
    {
      day: "Day 11: Punakha - Thimphu",
      details:
        "In the morning, drive to Yabesa village and hike through scenic rice fields up to Khamsum Yueley Namgyal Chorten, built by Her Majesty Queen Ashi Tshering Yangdon Wangchuk. Perched atop a hill overlooking the river, the Chorten features exquisite paintings reflecting the Nyingmapa tradition. Enjoy a picnic lunch by the riverside before taking a leisurely walk through farmland and along the picturesque riverbank back to Punakha Dzong. In the afternoon, drive back to Thimphu, with an opportunity to explore handicraft and souvenir shops. Overnight at your hotel in Thimphu.",
    },
    {
      day: "Day 12: Thimphu - Paro",
      details:
        "Spend the day at leisure to relax in Thimphu, or return to Paro early to further explore the scenic Paro Valley. Overnight at your hotel in Paro.",
    },

    {
      day: "Day 13: Depart from Paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
    },
  ];

  const tripHighlights = [
    {
      key: "Trek along ancient trails filled with mountain lakes, experiencing Bhutan's untouched wilderness.",
    },
    {
      key: "Wander through beautiful trails adorned with Himalayan wildflowers.",
    },
    {
      key: "Visit historic Buddhist monasteries and Lhakhangs (temples), deepening your spiritual journey.",
    },
    {
      key: "Experience daily life through a visit to a traditional Bhutanese farmhouse.",
    },
    {
      key: "Hike to Paro Taktsang, the iconic Tiger’s Nest Monastery, a highlight of any Bhutan trip.",
    },
    {
      key: "Enjoy stunning views of the Himalayas, mountain lakes, and untouched landscapes.",
    },
  ];

  const tourDetails = {
    duration: " 12 Nights/13 Days",
    groupSize: "2 & above",
    difficulty: "Moderate/hard",
    accommodation: "Hotels/Camp",
    walkingHours: "4 - 5 Hours",
    bestSeason: "March to June/Sep to Nov",
    distance: "8 - 11km",
    altitude: "43500m",
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
            Dagala Thousand Lakes Trek
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
        Bhutan’s Serene Alpine Journey{" "}
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        The Dagala Thousand Lakes Trek offers a breathtaking Bhutanese
        adventure, winding through pristine trails dotted with numerous alpine
        lakes, lush meadows, and traditional yak herder camps. This
        high-altitude trek provides an intimate glimpse into the lives of
        Bhutan’s nomadic communities, along with opportunities to observe
        diverse wildlife against the stunning backdrop of the Himalayan peaks.
        The journey also includes a cultural immersion tour of Thimphu and Paro,
        allowing you to experience Bhutan’s rich heritage. The ideal seasons for
        this trek are from April to September and in October.
      </Typography>
      {/* ===== Trip Highlights & Tour Info Section ===== */}
      <TourInfo
        tripHighlights={tripHighlights}
        tourDetails={tourDetails}
        image={hidden}
      />
      <Itinerary itinerary={itinerary} />
      <TourServices />
    </Box>
  );
};

export default DagalaTrek;
