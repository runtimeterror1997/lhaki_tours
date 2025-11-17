import React from "react";
import { Box, Typography } from "@mui/material";
import "../../home.css";
import background from "../../../assets/home/sakteng.png";
import hidden from "../../../assets/home/rural.png";
import TourServices from "../../TourServices";
import Itinerary from "../../Itinerary";
import TourInfo from "../../TourInfo";

const EastWestHeritageTours = () => {
  const itinerary = [
    {
      day: "Day 01: Arrival in Paro",
      details: `The flight to Paro crosses the Himalayas, offering breathtaking views of majestic peaks, including Bhutan’s sacred Jomolhari and Jichu Drake. If arriving via Kathmandu, Mount Everest and Mount Kanchenjunga may also be visible. Upon arrival, meet our representative and transfer to your hotel.
In the afternoon, visit Paro Dzong, built in 1646, which houses government offices and religious institutions. Cross a traditional wooden bridge on the way. Continue to Kyichu Lhakhang, Bhutan’s oldest temple, followed by Drukgyel Dzong (Bhutan Victory Fort), also built in 1646 to commemorate Bhutan’s victory over Tibetan invaders. On clear days, Mount Jomolhari (7,329 m) can be seen from the village below the dzong. In the evening, explore Paro town and market. Overnight stay in Paro.`,
    },
    {
      day: "Day 02: Paro - Thimphu",
      details: `After breakfast, hike to Taktsang (Tiger’s Nest) Monastery, Bhutan’s most iconic monastery. According to legend, Guru Rinpoche flew here on a tigress from Singye Dzong in Lhuntse and meditated in a cave where the monastery now stands. Perched on a cliff edge about 900 m above Paro Valley, the hike to the viewpoint makes for a rewarding half-day excursion.
In the afternoon, drive to Thimphu. In the evening, explore Bhutan’s capital, experience local life, and visit handicraft shops. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 03: Thimphu",
      details: `After breakfast, visit the King’s Memorial Chorten, built in honor of Bhutan’s third king (1952–1972), followed by Changangkha Monastery, the radio tower with panoramic views of Thimphu Valley and Thimphu Dzong, and the zoo, home to Bhutan’s national animal, the takin. Continue to the nunnery temple, the National Library housing ancient manuscripts, and the School of Arts and Crafts (painting school).
After a relaxing lunch, explore the National Institute of Traditional Medicine, a traditional paper factory, the impressive Tashichhodzong, and Simtokha Dzong, Bhutan’s oldest fortress. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 04: Travel from Thimphu to Wangdue Phodrang, with an afternoon visit to Punakha.",
      details: `After breakfast, drive to Wangdue Phodrang, stopping en route for tea at Dochu La Pass (3,100 m), where clear weather offers spectacular Himalayan views. After lunch, continue to Punakha, the former capital of Bhutan, and visit Punakha Dzong, one of the country’s most beautiful dzongs, built by the first Shabdrung in 1637. On the return journey, stop at Metshina Village and take a 20-minute walk through rice fields to Chimi Lhakhang, a fertility temple, where you may receive a special blessing. Overnight stay in Wangdue Phodrang.`,
    },
    {
      day: "Day 05: Wangduephodrang – Trongsa, with stops in Gantey",
      details: `Start the day with a drive to Gangtey, passing through dense oak and rhododendron forests. Arrive at Gangtey village and visit Gangtey Gompa, the only Nyingmapa monastery in western Bhutan. Enjoy views of the scenic Black Mountain range and Phobjikha Valley, the winter home of black-necked cranes.
Continue to Trongsa, the ancestral home of the royal family, along a winding route crossing Pele La Pass (3,300 m), where yaks may be spotted seasonally. In the afternoon, explore Trongsa town and its shops. Overnight stay in Trongsa.`,
    },
    {
      day: "Day 06: Trongsa – Bumthang",
      details: `In the morning, visit Trongsa Dzong, a masterpiece of Bhutanese architecture, and Ta Dzong, the watchtower built to protect it. After lunch, continue to Bumthang, Bhutan’s spiritual heartland, with its lush valleys and forested hills. En route, stop at a yathra (textile weaving) factory to see patterns unique to Bumthang and watch artisans at work.
Spend the afternoon sightseeing in Bumthang, including Jakar Dzong, the valley’s administrative center; the Udey woodcarving factory; Jambey Lhakhang, one of Bhutan’s oldest monasteries; and Kurjey Lhakhang, a sacred site where Guru Rinpoche left his body imprint in a cave during meditation. In the evening, stroll through Bumthang town. Overnight stay in Bumthang.`,
    },
    {
      day: "Day 07: Bumthang",
      details: `Take a day excursion to Ura Valley, a route slightly off the main road, offering lovely views of Jakar Dzong. Stop in Ura village for lunch and explore its main temple and charming streets. Ura retains a medieval feel with cobblestone lanes, and local women often wear traditional sheepskin shawls.
On the return journey, visit Mebar Tsho (Burning Lake), where Guru Rinpoche’s treasures were discovered in the 15th century by Pema Lingpa—a serene spot for meditation. Also tour Tamshing Lhakhang, known for its remarkable Buddhist paintings, and stop at the Swiss cheese factory. In the evening, browse local shops. Overnight stay in Bumthang.`,
    },
    {
      day: "Day 08: Bumthang",
      details: `Bumthang comprises four valleys—Chumey, Choekhar, Tang, and Ura—ranging in altitude from 2,600 to 4,000 m, and is home to numerous important Buddhist temples and monasteries. Today, hike to Tharpaling Monastery, starting in the morning for the roughly three-hour trek through scenic forest trails.
The monastery is spacious, with several temples, and about 100 monks reside in nearby huts. Enjoy panoramic views of Chumey Valley and a relaxing lunch amid the scenery. In the evening, unwind in Bumthang town. Overnight stay in Bumthang.`,
    },
    {
      day: "Day 09: Bumthang - Mongar",
      details: `Begin your journey to eastern Bhutan, a region distinct from western and central Bhutan in culture and lifestyle. The area’s steep terrain offers dramatic scenery, including rushing waterfalls and sheer cliffs. Today’s drive is an exciting 8-hour journey, highlighted by Thrumshing La Pass at 3,750 m. In the evening, explore Mongar town and enjoy a relaxing dinner. Overnight stay in Mongar.`,
    },
    {
      day: "Day 10: Mongar - Tashigang",
      details: `In the morning, visit Mongar Dzong, a relatively modern dzong built in 1953 at the request of Bhutan’s third king, though it retains traditional architecture. Continue the drive to Trashigang, passing through several villages along the way. In the afternoon, visit Trashigang Dzong and explore the town, experiencing the local culture of eastern Bhutan. Overnight stay in Trashigang.`,
    },
    {
      day: "Day 11: Trashigang, with an excursion to Tashiyangtse",
      details:
        "Today, visit Tashiyangtse, a small, serene town known for its expertly crafted wooden bowls and containers. Just below the town lies Chorten Kora. On the way, stop at Gom Kora temple, behind which is a large black rock where Guru Rinpoche is said to have meditated; the rock bears impressions of his thumb, hat, and body. Also visit the abandoned iron chain-link bridge near Duksum, believed to be the last of the 15th-century bridges built by Tibetan engineer Thangtong Gyalpo. Later, relax in Trashigang and enjoy a pleasant dinner. Overnight stay in Trashigang.",
    },
    {
      day: "Day 12: Trashigang – Mongar",
      details:
        "In the morning, visit the weaving center in Khaling, run by the National Women’s Association of Bhutan, followed by Sherubtse College in Kanglung, Bhutan’s first college, and Zangdopelri Monastery. Afterwards, return to Mongar. Overnight stay in Mongar.",
    },
    {
      day: "Day 13: Mongar – Bumthang",
      details:
        "Drive back to Bumthang along a scenic 8-hour route, stopping for lunch and tea in local villages. Overnight stay in Bumthang.",
    },
    {
      day: "Day 14: Bumthang – Wangduephodrang",
      details:
        "Start the day at Bumthang Market, then drive to Wangdue Phodrang. Explore the town, visit local shops, and discover nearby villages known for slate and stone carvings as well as bamboo crafts. Overnight stay in Wangdue Phodrang.",
    },
    {
      day: "Day 15: Wangduephodrang – Thimphu",
      details:
        "In the morning, drive back to Thimphu. After lunch, visit the Textile Museum and the Folk Heritage Museum, and explore the local handicraft shops. Overnight stay in Thimphu.",
    },
    {
      day: "Day 16: Thimphu",
      details: `In the morning you can hike to Tango Monastery, which was built by the “Divine Madman” in the 15th century. It’s a center of study for monks, and it affords a great view of the Thimphu Valley. On the grounds of the monastery is a “sin-testing” tunnel–it is said that if you have sinned, you will get stuck in
the tunnel, and if you are without sin, you will go through with ease! After lunch, you can hike to Cheri Monastery, which was built in 1620 and housed the first monk body. The Shabdrung’s father’s ashes are contained inside the monastery. Overnight in Thimphu.`,
    },
    {
      day: "Day 17: Thimphu – Paro",
      details:
        "Spend the morning shopping in Thimphu. If it’s a weekend, explore the market to see local foods like baskets of fiery chilies, fresh cheese, and mangoes, along with Bhutanese handicrafts and household items. In the afternoon, drive to Paro and visit the National Museum, formerly the Paro Dzong watchtower, now showcasing fine arts, paintings, thankas, statues, and antiques. In the evening, visit a traditional farmhouse and enjoy a hot-stone bath and a typical Bhutanese dinner if you wish. Overnight stay in Paro.",
    },
    {
      day: "Day 18: Depart from paro",
      details:
        "After breakfast at the hotel, transfer to the airport for your onward flight.",
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
      details: `After breakfast, visit the King’s Memorial Chorten, built in honor of Bhutan’s third king (1952–1972), followed by Changangkha Monastery, the radio tower with panoramic views of Thimphu Valley and Thimphu Dzong, and the zoo, home to Bhutan’s national animal, the takin. Continue to the nunnery temple, the National Library housing ancient manuscripts, and the School of Arts and Crafts (painting school).
After a relaxing lunch, explore the National Institute of Traditional Medicine, a traditional paper factory, the impressive Tashichhodzong, and Simtokha Dzong, Bhutan’s oldest fortress. Overnight stay in Thimphu.`,
    },
    {
      day: "Day 04: Travel from Thimphu to Wangdue Phodrang, with an afternoon visit to Punakha.",
      details: `After breakfast, drive to Wangdue Phodrang, stopping en route for tea at Dochu La Pass (3,100 m), where clear weather offers spectacular Himalayan views. After lunch, continue to Punakha, the former capital of Bhutan, and visit Punakha Dzong, one of the country’s most beautiful dzongs, built by the first Shabdrung in 1637. On the return journey, stop at Metshina Village and take a 20-minute walk through rice fields to Chimi Lhakhang, a fertility temple, where you may receive a special blessing. Overnight stay in Wangdue Phodrang.`,
    },
    {
      day: "Day 05: Wangduephodrang – Trongsa, with stops in Gantey",
      details: `Start the day with a drive to Gangtey, passing through dense oak and rhododendron forests. Arrive at Gangtey village and visit Gangtey Gompa, the only Nyingmapa monastery in western Bhutan. Enjoy views of the scenic Black Mountain range and Phobjikha Valley, the winter home of black-necked cranes.
Continue to Trongsa, the ancestral home of the royal family, along a winding route crossing Pele La Pass (3,300 m), where yaks may be spotted seasonally. In the afternoon, explore Trongsa town and its shops. Overnight stay in Trongsa.`,
    },
    {
      day: "Day 06: Trongsa – Bumthang",
      details: `In the morning, visit Trongsa Dzong, a masterpiece of Bhutanese architecture, and Ta Dzong, the watchtower built to protect it. After lunch, continue to Bumthang, Bhutan’s spiritual heartland, with its lush valleys and forested hills. En route, stop at a yathra (textile weaving) factory to see patterns unique to Bumthang and watch artisans at work.
Spend the afternoon sightseeing in Bumthang, including Jakar Dzong, the valley’s administrative center; the Udey woodcarving factory; Jambey Lhakhang, one of Bhutan’s oldest monasteries; and Kurjey Lhakhang, a sacred site where Guru Rinpoche left his body imprint in a cave during meditation. In the evening, stroll through Bumthang town. Overnight stay in Bumthang.`,
    },
    {
      day: "Day 07: Bumthang",
      details: `Take a day excursion to Ura Valley, a route slightly off the main road, offering lovely views of Jakar Dzong. Stop in Ura village for lunch and explore its main temple and charming streets. Ura retains a medieval feel with cobblestone lanes, and local women often wear traditional sheepskin shawls.
On the return journey, visit Mebar Tsho (Burning Lake), where Guru Rinpoche’s treasures were discovered in the 15th century by Pema Lingpa—a serene spot for meditation. Also tour Tamshing Lhakhang, known for its remarkable Buddhist paintings, and stop at the Swiss cheese factory. In the evening, browse local shops. Overnight stay in Bumthang.`,
    },
    {
      day: "Day 08: Bumthang",
      details: `Bumthang comprises four valleys—Chumey, Choekhar, Tang, and Ura—ranging in altitude from 2,600 to 4,000 m, and is home to numerous important Buddhist temples and monasteries. Today, hike to Tharpaling Monastery, starting in the morning for the roughly three-hour trek through scenic forest trails.
The monastery is spacious, with several temples, and about 100 monks reside in nearby huts. Enjoy panoramic views of Chumey Valley and a relaxing lunch amid the scenery. In the evening, unwind in Bumthang town. Overnight stay in Bumthang.`,
    },
    {
      day: "Day 09: Bumthang - Mongar",
      details: `Begin your journey to eastern Bhutan, a region distinct from western and central Bhutan in culture and lifestyle. The area’s steep terrain offers dramatic scenery, including rushing waterfalls and sheer cliffs. Today’s drive is an exciting 8-hour journey, highlighted by Thrumshing La Pass at 3,750 m. In the evening, explore Mongar town and enjoy a relaxing dinner. Overnight stay in Mongar.`,
    },
    {
      day: "Day 10: Mongar - Tashigang",
      details: `In the morning, visit Mongar Dzong, a relatively modern dzong built in 1953 at the request of Bhutan’s third king, though it retains traditional architecture. Continue the drive to Trashigang, passing through several villages along the way. In the afternoon, visit Trashigang Dzong and explore the town, experiencing the local culture of eastern Bhutan. Overnight stay in Trashigang.`,
    },
    {
      day: "Day 11: Trashigang, with an excursion to Tashiyangtse",
      details:
        "Today, visit Tashiyangtse, a small, serene town known for its expertly crafted wooden bowls and containers. Just below the town lies Chorten Kora. On the way, stop at Gom Kora temple, behind which is a large black rock where Guru Rinpoche is said to have meditated; the rock bears impressions of his thumb, hat, and body. Also visit the abandoned iron chain-link bridge near Duksum, believed to be the last of the 15th-century bridges built by Tibetan engineer Thangtong Gyalpo. Later, relax in Trashigang and enjoy a pleasant dinner. Overnight stay in Trashigang.",
    },
    {
      day: "Day 12: Trashigang – Mongar",
      details:
        "In the morning, visit the weaving center in Khaling, run by the National Women’s Association of Bhutan, followed by Sherubtse College in Kanglung, Bhutan’s first college, and Zangdopelri Monastery. Afterwards, return to Mongar. Overnight stay in Mongar.",
    },
    {
      day: "Day 13: Mongar – Bumthang",
      details:
        "Drive back to Bumthang along a scenic 8-hour route, stopping for lunch and tea in local villages. Overnight stay in Bumthang.",
    },
    {
      day: "Day 14: Bumthang – Wangduephodrang",
      details:
        "Start the day at Bumthang Market, then drive to Wangdue Phodrang. Explore the town, visit local shops, and discover nearby villages known for slate and stone carvings as well as bamboo crafts. Overnight stay in Wangdue Phodrang.",
    },
    {
      day: "Day 15: Wangduephodrang – Thimphu",
      details:
        "In the morning, drive back to Thimphu. After lunch, visit the Textile Museum and the Folk Heritage Museum, and explore the local handicraft shops. Overnight stay in Thimphu.",
    },
    {
      day: "Day 16: Thimphu",
      details: `In the morning you can hike to Tango Monastery, which was built by the “Divine Madman” in the 15th century. It’s a center of study for monks, and it affords a great view of the Thimphu Valley. On the grounds of the monastery is a “sin-testing” tunnel–it is said that if you have sinned, you will get stuck in
the tunnel, and if you are without sin, you will go through with ease! After lunch, you can hike to Cheri Monastery, which was built in 1620 and housed the first monk body. The Shabdrung’s father’s ashes are contained inside the monastery. Overnight in Thimphu.`,
    },
    {
      day: "Day 17: Thimphu – Paro",
      details:
        "Spend the morning shopping in Thimphu. If it’s a weekend, explore the market to see local foods like baskets of fiery chilies, fresh cheese, and mangoes, along with Bhutanese handicrafts and household items. In the afternoon, drive to Paro and visit the National Museum, formerly the Paro Dzong watchtower, now showcasing fine arts, paintings, thankas, statues, and antiques. In the evening, visit a traditional farmhouse and enjoy a hot-stone bath and a typical Bhutanese dinner if you wish. Overnight stay in Paro.",
    },
    {
      day: "Day 18: Paro - Phuentsholing/Drop",
      details:
        "In the morning, visit to National Museum and Rinpung Dzong and then Drive to Phuntsholing.",
    },
  ];
  const via_east = [
    {
      day: "Day 1: Arrival in Samdrup Jongkhar via Guwahati, India",
      details: `After completing immigration and customs formalities at Lokpriya Gopinath Bordoloi International Airport in Guwahati, you will be welcomed by your Bhutanese guide along with the local Indian representative. The journey begins with a 100 km drive (about 3 hours) to the Indo-Bhutan border town of Samdrup Jongkhar, passing through the lush Assam tea gardens and crossing the mighty Brahmaputra River.
Samdrup Jongkhar, bordering the Indian state of Assam, serves as the main gateway for visitors entering eastern Bhutan overland. It is the largest urban center in eastern Bhutan. The rest of the day is free for you to explore the town or relax. Enjoy a welcome drink and dinner. Overnight in Samdrup Jongkhar.`,
    },
    {
      day: "Day 02: Samdrup Jongkhar - Trashigang",
      details: `Start early for a scenic 180 km drive (about 7 hours) to Trashigang, situated at 1,500m. Along the way, enjoy views of langur monkeys, kingfishers, eagles, and other birdlife.
Visit Dewathang (18 km from Samdrup Jongkhar), the site where Bhutan’s First King led his soldiers in their last battle against the British in 1884. Historically, British Political Officers traveling from Sikkim entered Bhutan through this point.
Continue through Orong, where you can see the famed Mithun (Bos frontalis) at the Regional Mithun Breeding Farm. Passing Narphung (41 km), a well-known local trading stop, you’ll find fresh produce, crafts, cereals, and dairy products.
Lunch will be at Wamrong (29 km), halfway to Trashigang, before continuing toward Khaling (27 km) over Kharungla Pass (2,350m). Visit the National Handloom Development Centre, where rural women receive weaving training with support from the National Women’s Association of Bhutan. Also nearby is Muenselling Institute, the country’s only school for the visually impaired.
Before reaching Trashigang, you’ll pass Sherubtse College in Kanglung (28 km), Bhutan’s first university. As you enter the town, you may encounter semi-nomadic communities from Merak and Sakteng who often visit for shopping.
Overnight in Trashigang.`,
    },
    {
      day: "Day 03: Trashigang - Trashi Yangtsi - Trashigang",
      details: `Begin the day with a visit to Trashigang Dzong, built in 1659 and historically one of the region’s strongest fortresses. After exploring the dzong, travel 54 km (about 2.5 hours) to Trashiyangtse (1,750m), an ethnically diverse valley that became a separate district in 1992.
Two roads lead from Chazam (10 km from Trashigang). You'll take the right route that follows the river toward Trashiyangtse. Along the way, stop at the Goenkora Lhakhang, a sacred temple where Guru Rinpoche is said to have meditated to subdue a demon.
The next section of the drive (30 km) brings you to Duksom and then to the old Trashiyangtse Dzong, founded by Terton Pema Lingpa in the 15th century. Later, visit the College of Zorig Chusum (established in 1997), where students train in Bhutan’s 13 traditional arts and crafts.
The final highlight is the famous Chorten Kora, inspired by Nepal’s Boudhanath Stupa. Built over 12 years around 1740, the stupa is believed to contain the remains of an 8-year-old Dakpa girl who offered herself as a living sacrifice.
Spend the evening exploring the peaceful Trashiyangtse town and return back to Trashigang.
Overnight in Trashigang.`,
    },
    {
      day: "Day 04 & 05: Sightseeing Around Trashigang → Merak",
      details: `Today’s program takes you northwest of Trashigang to explore several scenic villages, including the semi-nomadic community of Merak—one of the highlight experiences of this trip.
Your journey begins with a drive through the charming Bidung villages (10 km), followed by a beautiful countryside ride (13 km) to Rangjung, a lively local trading center. Here, visit the Rangjung Woesel Choeling Monastery, situated on a hilltop overlooking the Rangjung valley. Built in 1989 in Tibetan architectural style, the monastery houses a monastic school that serves the Buddhist community. You may encounter semi-nomadic people from Merak and Sakteng who often visit the area for trade.
Continue to Radhi village, fondly known as “The Rice Bowl of the East”, famous for its skilled artisans who weave exquisite raw silk textiles. Enjoy a relaxed walk through the peaceful village landscape before heading to a traditional Bhutanese farmhouse for an authentic local lunch.
In the afternoon, proceed to Merak (3,500m) via Khardung village (38 km) on a 4-hour scenic drive. Along the way, stop to capture panoramic views, meet villagers, and get a glimpse of the area’s farming lifestyle.
Merak and nearby Sakteng are home to the Brokpa people, one of Bhutan’s least-visited semi-nomadic tribes, offering a rare cultural experience.
Upon reaching Merak, spend the evening visiting tribal homes, interacting with locals, and gaining insight into their traditions.
Tonight, you will stay in a local farmhouse, a colorful and traditionally decorated 2-storey village home equipped with basic but comfortable amenities such as clean toilets, showers, and hot-stone baths. These homestays are run by families trained in hospitality, hygiene, and guest care.
A farmhouse stay provides a completely new and enriching experience—your host will prepare meals just as they do for their own family, and you’ll have the chance to join in daily rural activities, like learning to cook a Bhutanese dish if you wish.
This unforgettable encounter with Merak’s unique culture will surely become one of the most memorable moments of your journey!`,
    },

    {
      day: "Day 6: Merak - Trashigang",
      details:
        "After breakfast, retrace your route from Merak back to Trashigang, enjoying scenic views of mountain ridges, open meadows, and grazing yaks. Spend the rest of the afternoon relaxing in Trashigang town or exploring nearby villages. Overnight in Trashigang.",
    },
    {
      day: "Day 7: Trashigang - Mongar",
      details:
        "Today’s journey leads west toward Mongar (91 km), taking around 3–4 hours. Descend from Chazam (10 km), then turn toward Mongar. Along the way, visit the centuries-old Drametse Lhakhang (18 km), perched on a ridge and famous as the birthplace of the “Ngacham” Drum Mask Dance—now recognized by UNESCO as an Intangible Cultural Heritage. Continue through Sherichu (35 km), then climb toward Yadi before ascending the dramatic zigzag bends to Kori La Pass (2,289 m). Mongar town, built in 1930, has a charming traditional layout with decorative wooden façades and rows of eucalyptus trees. Overnight in Mongar.",
    },
    {
      day: "Day 8: Mongar - Lhuentse - Bumthang",
      details:
        "Travel north to Lhuentse, the ancestral homeland of Bhutan’s royal family. Pass through Autsho (920 m), follow the Kurichu River, and cross vast fields and villages. Visit the towering 154-ft Guru Padmasambhava statue overlooking the valley, then continue to Khoma village—renowned for its exquisite Kishuthara textiles, woven by highly skilled local women. Explore Lhuentse Dzong, dramatically perched above the river and rich in sacred artifacts. After the visit, begin your long and scenic 206-km drive to Bumthang (about 7 hours). The route offers stunning views of rivers, waterfalls, cliffs, and snow-capped peaks along the East–West Highway. Stop at Yongkola, Bhutan’s famous sub-tropical birding hotspot; continue to Namling (3,000 m), a favorite viewpoint; and enjoy lunch at Sengor (3,500 m), home to the Himalayan Monal. Climb through dense rhododendron and hemlock forests to the high Thrumshingla Pass (3,880 m), then descend toward Ura (3,100 m), a picturesque village of clustered homes. Arrive in Bumthang by evening. Overnight in Bumthang.",
    },
    {
      day: "Day 9: Bumthang",
      details:
        "Discover the pristine Bumthang Valley—often called the spiritual heart of Bhutan—home to ancient temples and monasteries. Begin with a short drive to Jambay Lhakhang, one of the oldest temples in the Himalayas, believed to date back to the 7th century. Continue to Kurjey Lhakhang, where Guru Rinpoche left his sacred body imprint while subduing an evil spirit. Enjoy a gentle walk across farmland leading to Tamshing Lhakhang, a centuries-old temple known for rare wall paintings. The valley’s peaceful atmosphere, combined with its rich history, makes this day a memorable spiritual experience. Overnight in Bumthang.",
    },
    {
      day: "Day 10: Bumthang - Gantey",
      details:
        "The journey from Bumthang to Phobjikha takes you across one of Bhutan’s most scenic highland routes. As you leave Bumthang’s cultural valleys behind, the road climbs through dense blue-pine forests, open meadows, and sweeping mountain ridges. Approaching Phobjikha, the landscape widens into a vast glacial valley known for its serene beauty and the arrival of the endangered black-necked cranes during winter. The cool air and peaceful environment make it a perfect place to unwind after the long drive.",
    },
    {
      day: "Day 11: Gantey - Punakha",
      details: `Travelling from Phobjikha to Punakha takes you from the cool alpine valley down into the warmer, subtropical climate of Western Bhutan. The route winds through forests, small villages, and mountain passes before descending toward Punakha’s lush rice fields. As the valley opens up, the sight of the Pho Chhu and Mo Chhu rivers merging below the majestic Punakha Dzong creates a breathtaking welcome. The change in temperature and scenery makes this journey especially refreshing.`,
    },
    {
      day: "Day 12: Punakha - Thimphu",
      details:
        "The drive from Punakha to Thimphu crosses the famous Dochula Pass, offering a spectacular panoramic view of the eastern Himalayas on a clear day. The 108 Druk Wangyal Chortens at the pass stand as a serene landmark, making it a perfect stopping point. After the pass, the road slowly descends into the Thimphu valley, where traditional Bhutanese charm blends with modern urban life. The capital welcomes visitors with its vibrant markets, monasteries, and cultural landmarks.",
    },
    {
      day: "Day 13: Thimphu",
      details:
        "A tour of Thimphu offers a mix of culture, history, and modern Bhutanese lifestyle. Key highlights include the National Memorial Chorten, Tashichho Dzong, the Buddha Dordenma statue overlooking the entire valley, and the Folk Heritage Museum. Visitors can also explore local craft bazaars, textile museums, and cafés that showcase Bhutan’s growing urban culture. Thimphu is the best place to experience the balance between tradition and modernity.",
    },
    {
      day: "Day 14: Thimphu - Haa",
      details:
        "The road from Thimphu to Haa takes you over the stunning Chelela Pass, one of the highest motorable passes in Bhutan. The journey offers sweeping views of snow-capped peaks, fluttering prayer flags, and thick forests of fir and rhododendron. As the road descends, the peaceful Haa Valley comes into view — known for its simple village life, traditional homes, and historical sites like Lhakhang Karpo and Lhakhang Nagpo. The untouched beauty of the valley makes the journey rewarding.",
    },
    {
      day: "Day 15: Haa - Paro",
      details:
        "Travelling from Haa to Paro once again takes you over the scenic Chelela Pass, but this time with descending views into Paro’s iconic valley. The road winds down into Paro’s pine forests and farmland, eventually opening to views of Paro Dzong and the gentle Paro River. The town offers access to some of Bhutan’s most important attractions, including the famed Tiger’s Nest Monastery. This final stretch beautifully completes the western Bhutan journey.",
    },
    {
      day: "Day 16: Paro(End of Tour)",
      details:
        "In the morning, visit to National Museum and Rinpung Dzong and then Drive to Phuntsholing.",
    },
  ];

  const tripHighlights = [
    {
      key: "Enjoy panoramic Himalayan views from Dochula Pass.",
    },
    {
      key: "Experience rural Bhutan by visiting traditional villages.",
    },
    {
      key: "Explore renowned textile weaving centers in the area.",
    },
    {
      key: "Relish authentic Bhutanese farmhouse meals with local families.",
    },
    {
      key: "Visit historic Buddhist monasteries that have shaped Bhutan’s heritage.",
    },
    {
      key: "Hike to the iconic Tiger’s Nest Monastery (Paro Taktsang), a cliffside spiritual landmark.",
    },
  ];

  const tourDetails = {
    duration: "17 Nights / 18 Days",
    groupSize: "2 & above",
    difficulty: "Easy",
    accommodation: "Hotels",
    walkingHours: "4–6 Hours",
    bestSeason: "Mar–May / Sep–Nov",
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
            color="white"
            sx={{
              py: "7%",
              mt: { xs: "40%", sm: "20%", md: "20%", lg: "10%" },
              fontSize: { xs: "1.2rem", sm: "1.1rem", md: "1.7rem" },
            }}
          >
            A Scenic and Cultural Journey Through Bhutan
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
        A Cultural and Historical Exploration of Central Bhutan
      </Typography>
      <Typography
        variant="h6"
        color="black"
        textAlign="center"
        paddingX={5}
        paddingBottom={2}
        sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
      >
        Discover the richness of Bhutan on this immersive east-to-west tour.
        Experience the country’s stunning biodiversity, from untouched forests
        to unique native wildlife. Eastern Bhutan captivates with dramatic
        landscapes, cascading waterfalls, and extraordinary photo opportunities.
        This unforgettable journey offers a perfect blend of cultural immersion
        and natural beauty.
      </Typography>
      {/* ===== Trip Highlights & Tour Info Section ===== */}
      <TourInfo
        tripHighlights={tripHighlights}
        tourDetails={tourDetails}
        image={hidden}
      />
      <Itinerary
        itinerary={itinerary}
        via_pling={via_pling}
        via_east={via_east}
        show={true}
        isFromEast={true}
      />
      <TourServices />
    </Box>
  );
};

export default EastWestHeritageTours;
