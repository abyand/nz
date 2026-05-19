// ============================================================
//  ITINERARY DATA — edit this file to update your trip
//  Then just refresh itinerary.html in your browser
// ============================================================

const ITINERARY = {
  title: "New Zealand Road Trip",
  subtitle: "South Island · Aotearoa",
  dates: "May 23 – June 2, 2026",
  stats: [
    { value: "11", label: "Days" },
    { value: "19", label: "Places" },
    { value: "4",  label: "Bases" },
    { value: "🚗", label: "By Car" }
  ],

  // Accommodation summary shown in the overview strip
  bases: [
    {
      name:      "Lake Tekapo",
      accomName: "Lake Tekapo Lodge",
      nights:    1,
      dates:     "May 23–24",
      days:      [1],
      address:   "Lake Tekapo, New Zealand",
      coords:    { lat: -44.005, lng: 170.483 },
      link:      "https://placeholder.com"
    },
    {
      name:      "Twizel",
      accomName: "Mackenzie Country Inn",
      nights:    1,
      dates:     "May 24–25",
      days:      [2],
      address:   "Twizel, New Zealand",
      coords:    { lat: -44.259, lng: 170.103 },
      link:      "https://placeholder.com"
    },
    {
      name:      "Wanaka",
      accomName: "Wanaka Haven Lodge",
      nights:    1,
      dates:     "May 25–26",
      days:      [3],
      address:   "Wanaka, New Zealand",
      coords:    { lat: -44.700, lng: 169.136 },
      link:      "https://placeholder.com"
    },
    {
      name:      "Queenstown",
      accomName: "Queenstown Central Hotel",
      nights:    5,
      dates:     "May 26–31",
      days:      [4, 5, 6, 7, 8],
      address:   "Queenstown, New Zealand",
      coords:    { lat: -45.031, lng: 168.663 },
      link:      "https://placeholder.com"
    },
    {
      name:      "Te Anau",
      accomName: "Te Anau Lakeview Hotel",
      nights:    1,
      dates:     "May 31–Jun 1",
      days:      [9],
      address:   "Te Anau, New Zealand",
      coords:    { lat: -45.414, lng: 167.719 },
      link:      "https://placeholder.com"
    },
    {
      name:      "Queenstown",
      accomName: "Queenstown Lakeside Resort",
      nights:    1,
      dates:     "Jun 1–2",
      days:      [10],
      address:   "Queenstown, New Zealand",
      coords:    { lat: -45.031, lng: 168.663 },
      link:      "https://placeholder.com"
    }
  ],

  // Saved places from your Google Maps list
  savedPlaces: [
    { name: "Moke Lake",              day: 6  },
    { name: "Rob Roy Glacier Track",  day: 4  },
    { name: "Mitre Peak Cruises",     day: 10 },
    { name: "Lake Pukaki",            day: 2  },
    { name: "Lindis Pass",            day: 3  },
    { name: "Lake Hāwea",             day: 5  },
    { name: "Skyline Queenstown",     day: 6  },
    { name: "Onsen Hot Pools",        day: 8  },
    { name: "Fergburger",             day: 5  },
    { name: "Queenstown Tennis Club", day: 8  }
  ],

  // TikTok-trending additions — fit the existing route with no detours
  trendingPlaces: [
    { name: "Lake Tekapo",         day: 1, why: "Most viral NZ spot on TikTok — Church of the Good Shepherd, turquoise lake, Dark Sky Reserve. On the road from Christchurch to Twizel." },
    { name: "Blue Pools Makarora", day: 4, why: "Trending for glacier-blue water & swing bridge. On the route to Rob Roy from Wanaka — easy morning stop." },
    { name: "Arrowtown",           day: 8, why: "Peak autumn colours in late May — golden trees, gold-rush village, Arrow River. Only 20 min from Queenstown." },
    { name: "Omarama Clay Cliffs", day: 3, why: "Going viral for its otherworldly white/grey clay canyon walls — looks like the moon but sits right off SH8 between Twizel and Wanaka. Easy 2 km return walk, free entry." },
    { name: "Deer Park Heights",   day: 9, why: "TikTok obsession for highland cows and sweeping panoramic views over Queenstown — 286K+ views on a single video. Drive-up wildlife park, just 10 min above town. Bring $2 coins for animal feed." },
    { name: "Shotover Jet",        day: 7,  why: "Queenstown's most iconic adrenaline activity going viral again — 25-min jet boat ride through the narrow Shotover Canyon gorge. 360° spins, sheer cliffs, pure adrenaline. Book ahead at shotoverjet.com." },
    { name: "Bob's Cove",          day: 9,  why: "Crystal-clear turquoise cove right on the Glenorchy road — 70K+ views and 1.5K bookmarks. Free 10-min walk from a roadside car park, often called Queenstown's best hidden gem. Zero detour required." },
    { name: "Kiwi Birdlife Park",  day: 7,  why: "Queenstown's 5-acre native sanctuary — one of the few places in NZ to see a live kiwi bird up close, plus tuatara & 20 native species. Conservation shows run daily. 71K views on TikTok." },
    { name: "Ayrburn",             day: 7,  why: "Queenstown's most viral food & wine destination — 974K TikTok views, 8.4K bookmarks. A stunning former farmstead turned restaurant and bar complex (Canyon Restaurant, Burr Bar, Kinross winery). Perfect farewell lunch." }
  ],

  days: [
    {
      day: 1,
      date: "May 23",
      weekday: "Saturday",
      title: "Christchurch → Lake Tekapo",
      overnight: "Lake Tekapo",
      tags: ["Arrival Day", "~3 hr total drive", "📱 TikTok Trending", "🌌 Dark Sky Reserve"],
      schedule: [
        { time: "12:55 PM", activity: "Land at Christchurch Airport" },
        { time: "~2:00 PM", activity: "Collect luggage & pick up rental car" },
        { time: "~2:30 PM", activity: "Lunch in Christchurch, then depart south via SH1 → SH79" },
        { time: "~4:30 PM", activity: "Arrive Lake Tekapo — check in, then Church of the Good Shepherd on the lakeshore, turquoise lake views, short lakefront walk", link: "https://www.churchofthegoodshepherd.org.nz", coords: { lat: -44.005, lng: 170.483 } },
        { time: "~6:30 PM", activity: "Dinner in Tekapo village" },
        { time: "~8:30 PM", activity: "Stargazing at the Mt John Observatory area — UNESCO Dark Sky Reserve, one of the best stargazing spots in the Southern Hemisphere", coords: { lat: -44.005, lng: 170.465 } }
      ],
      notes: "📱 Lake Tekapo is one of the most viral NZ spots on TikTok — the Church of the Good Shepherd framed against the turquoise lake is unmissable. Staying the night unlocks the Dark Sky Reserve stargazing — late May skies are long and dark. Check the weather forecast; clear skies are magic here."
    },
    {
      day: 2,
      date: "May 24",
      weekday: "Sunday",
      title: "Lake Tekapo → Lake Pukaki → Mt Cook",
      overnight: "Twizel",
      tags: ["⭐ Highlight", "Scenic Drive", "⚠️ Hooker Valley Closed"],
      schedule: [
        { time: "9:30 AM",   activity: "Relaxed breakfast in Tekapo, check out" },
        { time: "~10:15 AM", activity: "Drive to Lake Pukaki eastern shore (~45 min) — turquoise glacial lake with Aoraki/Mt Cook backdrop, one of NZ's most iconic views", coords: { lat: -44.022, lng: 170.153 } },
        { time: "~11:00 AM", activity: "Drive to Aoraki/Mt Cook National Park (~1 hr from Pukaki)" },
        { time: "~12:00 PM", activity: "Tasman Glacier Lake — easy 20-min walk to a viewpoint where icebergs float in a milky-blue glacial lake. Flat path, jaw-dropping.", link: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/things-to-do/tracks/tasman-glacier-view-track/", coords: { lat: -43.795, lng: 170.105 } },
        { time: "~12:45 PM", activity: "Lunch at The Hermitage café or Mt Cook Village" },
        { time: "~1:45 PM",  activity: "Explore Mt Cook Village — coffee at The Hermitage with a direct face-on view of Aoraki, browse the Alpine Visitor Centre" },
        { time: "~2:30 PM",  activity: "Optional: Kea Point Track — relaxed 1.5 hr return walk to a glacial lake platform with Mt Cook towering above. Flat, well-formed path.", link: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/things-to-do/tracks/kea-point-track/", coords: { lat: -43.735, lng: 170.096 } },
        { time: "~4:00 PM",  activity: "Drive to Twizel (~1 hr) — check in" },
        { time: "~5:00 PM",  activity: "Optional: Kayaking at Lake Ruataniwha (~$20/hr hire from Ruataniwha Rides) or free lakeside walk", coords: { lat: -44.262, lng: 170.095 } },
        { time: "~7:00 PM",  activity: "Dinner in Twizel" }
      ],
      notes: "⚠️ Hooker Valley Track is CLOSED until late July/August 2026 — replaced with two easy walks: Tasman Glacier Lake (icebergs, flat path) and Kea Point (glacier lake platform, relaxed 1.5 hrs). Both are beautiful and low effort. Lake Pukaki is stunning at any time of day — the turquoise glacial colour doesn't depend on sunrise."
    },
    {
      day: 3,
      date: "May 25",
      weekday: "Monday",
      title: "Lindis Pass → Wanaka",
      overnight: "Wanaka",
      tags: ["Scenic Drive Day", "~2.5 hr drive", "📱 TikTok Trending"],
      schedule: [
        { time: "9:30 AM", activity: "Depart Twizel toward Wanaka" },
        { time: "~10:00 AM", activity: "Drive through Omarama (~30 min)" },
        { time: "~10:15 AM", activity: "Omarama Clay Cliffs — alien-looking white clay canyon walls, 2 km return walk (~45 min). Free entry. 3 km off SH8, gravel road, standard car fine.", link: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/omarama-clay-cliffs/", coords: { lat: -44.493, lng: 170.007 } },
        { time: "~11:15 AM", activity: "Stop at Lindis Pass summit (963 m) — golden tussock hills, great photo stop", coords: { lat: -44.574, lng: 169.643 } },
        { time: "~12:15 PM",  activity: "Arrive Wanaka — check in" },
        { time: "Afternoon", activity: "Wanaka waterfront, That Wanaka Tree, Puzzling World", link: "https://www.puzzlingworld.co.nz", coords: { lat: -44.697, lng: 169.131 } },
        { time: "~4:30 PM",  activity: "Drive to Lake Hāwea lookout (~15 min) — evening light", coords: { lat: -44.517, lng: 169.267 } },
        { time: "~6:00 PM",  activity: "Dinner in Wanaka" }
      ],
      notes: null
    },
    {
      day: 4,
      date: "May 26",
      weekday: "Tuesday",
      title: "Blue Pools + Rob Roy Glacier Track",
      overnight: "Queenstown",
      tags: ["Full Day", "Hike + Swimming Hole", "📱 TikTok Trending"],
      schedule: [
        { time: "9:30 AM", activity: "Check out of Wanaka — luggage in car, depart toward Lake Hāwea via SH6" },
        { time: "~9:45 AM", activity: "Lake Hāwea — The Wall viewpoint, lakeside walk (~1 hr). On the route north to Makarora.", coords: { lat: -44.512, lng: 169.272 } },
        { time: "~10:45 AM", activity: "Continue to Makarora (~45 min)" },
        { time: "~11:30 AM", activity: "Blue Pools, Makarora — swing bridge over glacier-blue water, 1.5 km return walk (~1–1.5 hrs)", link: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/mount-aspiring-national-park/things-to-do/tracks/blue-pools-track/", coords: { lat: -44.213, lng: 169.249 } },
        { time: "~12:00 PM",  activity: "Drive to Raspberry Creek carpark for Rob Roy (~30 min)" },
        { time: "~12:30 PM",  activity: "Rob Roy Glacier Track — 10 km return, ~3–3.5 hrs, easy-to-moderate. Mostly flat valley floor walk to a hanging glacier with waterfalls. Well-formed track.", link: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/mount-aspiring-national-park/things-to-do/tracks/rob-roy-track/", coords: { lat: -44.476, lng: 168.654 } },
        { time: "~4:00 PM",  activity: "Return to carpark — drive directly to Queenstown (~2 hrs via Crown Range Road)" },
        { time: "~6:00 PM",  activity: "Arrive Queenstown — check in, dinner" }
      ],
      notes: "⚠️ ROAD WARNING: The access road to Raspberry Creek carpark is 30 km of gravel with multiple creek/ford crossings. After rain these fords can flood and become impassable for standard rental cars — some travellers have had to turn back entirely. Check conditions the morning of and confirm your rental car covers gravel roads. If the road is closed, Aspiring Helicopters (search 'Aspiring Helicopters Wanaka') flies scenic tours over the Rob Roy / Matukituki Valley as an alternative. Also check DOC for late May snow/ice on the track itself. Bring warm layers."
    },
    {
      day: 5,
      date: "May 27",
      weekday: "Wednesday",
      title: "Hari Raya Haji + Tennis + Onsen",
      overnight: "Queenstown",
      tags: ["🌙 Hari Raya Haji", "Book Onsen in advance"],
      schedule: [
        { time: "Morning",   activity: "Eid al-Adha prayer — at hotel or nearest prayer space in Queenstown" },
        { time: "9:30 AM",  activity: "Tennis court stop (~1.5 km southwest of town centre)", coords: { lat: -45.0374, lng: 168.6446 } },
        { time: "~11:00 AM", activity: "Queenstown Tennis Club — 4 hard courts in Queenstown Gardens, mountain & lake views", coords: { lat: -45.040, lng: 168.663 } },
        { time: "~12:30 PM", activity: "Light snack before Onsen" },
        { time: "1:00 PM",   activity: "Onsen Hot Pools at Arthurs Point (~10 min from town) — private cedar hot tub, mountain & gorge views ⭐ check availability for this slot", link: "https://www.onsen.co.nz", coords: { lat: -45.011, lng: 168.716 } },
        { time: "~2:15 PM",  activity: "Queenstown waterfront stroll, explore town", coords: { lat: -45.031, lng: 168.662 } },
        { time: "~3:30 PM",  activity: "Patagonia Chocolates — artisan ice cream & hot chocolate on the waterfront", link: "https://www.patagoniaicecream.co.nz", coords: { lat: -45.031, lng: 168.661 } },
        { time: "~6:00 PM",  activity: "Hari Raya Haji dinner — celebrate at a halal-friendly restaurant in Queenstown 🎉" }
      ],
      notes: "🌙 Hari Raya Haji (Eid al-Adha) — 27 May 2026. No mosque in Queenstown; pray at your hotel or find a quiet outdoor space. Halal food options: Turkish restaurants in the Queenstown town centre. ⚠️ Check Onsen availability for 1 PM on May 27 at onsen.co.nz — the booked 6:15 PM slot was for May 28."
    },
    {
      day: 6,
      date: "May 28",
      weekday: "Thursday",
      title: "Arrowtown",
      overnight: "Queenstown",
      tags: ["Autumn Colours", "📱 TikTok Trending"],
      schedule: [
        { time: "9:30 AM",  activity: "Drive to Arrowtown (~20 min from Queenstown) — peak autumn foliage in late May" },
        { time: "~10:00 AM", activity: "Arrowtown: Arrow River walk, Chinese Settlement ruins, old stone main street — allow 2 hrs", link: "https://www.arrowtown.com", coords: { lat: -44.939, lng: 168.830 } },
        { time: "~12:00 PM", activity: "Lunch in Arrowtown (The Fork & Tap or Provisions café)" },
        { time: "~1:30 PM",  activity: "Return to Queenstown — afternoon free, explore town, lakefront" },
        { time: "~3:30 PM",  activity: "Fergburger — expect a queue, go between 2–4 PM to avoid the worst of it", coords: { lat: -45.030, lng: 168.661 } },
        { time: "~6:00 PM",  activity: "Dinner in Queenstown" }
      ],
      notes: "Late May is the best time to visit Arrowtown — the autumn colours along the Arrow River are TikTok-famous and genuinely stunning."
    },
    {
      day: 7,
      date: "May 29",
      weekday: "Friday",
      title: "Shotover Jet + Kiwi Birdlife + Ayrburn",
      overnight: "Queenstown",
      tags: ["Adrenaline Day", "📱 TikTok Trending"],
      schedule: [
        { time: "9:30 AM", activity: "Shotover Jet — 25-min jet boat ride through the narrow Shotover Canyon gorge. 360° spins, sheer rock walls. Book ahead (~1.5 hrs total with transfer)", link: "https://www.shotoverjet.com", coords: { lat: -45.022, lng: 168.702 } },
        { time: "~11:00 AM", activity: "Kiwi Birdlife Park — 5-acre native sanctuary in town. See live kiwi birds (nocturnal house), tuatara & 20 native species. Conservation shows at 12pm & 3pm.", link: "https://www.kiwibird.co.nz", coords: { lat: -45.029, lng: 168.658 } },
        { time: "~12:30 PM",  activity: "Ayrburn — stunning former farmstead turned wine estate & restaurant complex, 15 min from town. Burr Bar for cocktails, Canyon Restaurant for lunch with mountain views. NZ's most viral food destination.", link: "https://www.ayrburn.co.nz", coords: { lat: -45.065, lng: 168.710 } },
        { time: "~3:00 PM",  activity: "Lakefront walk, souvenir shopping" },
        { time: "~6:00 PM",  activity: "Dinner — Rata, The Bunker, or Sherwood" }
      ],
      notes: "⚠️ Book Shotover Jet in advance at shotoverjet.com — sells out fast. Ayrburn is 974K TikTok views and 8.4K bookmarks — arguably Queenstown's best lunch spot right now. Book a table in advance."
    },
    {
      day: 8,
      date: "May 30",
      weekday: "Saturday",
      title: "Skyline + Moke Lake",
      overnight: "Queenstown",
      tags: ["Queenstown Day"],
      schedule: [
        { time: "9:30 AM", activity: "Skyline Queenstown — gondola up Ben Lomond, luge rides, panoramic views of the Remarkables", link: "https://www.skyline.co.nz/en/queenstown/", coords: { lat: -45.028, lng: 168.668 } },
        { time: "~11:30 AM", activity: "Lunch in Queenstown" },
        { time: "~12:30 PM",  activity: "Drive to Moke Lake (~25–30 min, last section gravel road, standard car fine)" },
        { time: "~1:00 PM",  activity: "Moke Lake — peaceful alpine lake, walk around the shore (~1.5 hrs)", coords: { lat: -45.089, lng: 168.785 } },
        { time: "~3:00 PM",  activity: "Return to Queenstown — dinner, relax" }
      ],
      notes: null
    },
    {
      day: 9,
      date: "May 31",
      weekday: "Sunday",
      title: "Glenorchy Road → Te Anau",
      overnight: "Te Anau",
      tags: ["Scenic Drive", "Base Change", "~45 min from QT", "📱 TikTok Trending"],
      schedule: [
        { time: "9:30 AM", activity: "Drive to Glenorchy (~45 min along Lake Wakatipu — one of NZ's most scenic roads)" },
        { time: "~9:50 AM", activity: "Bob's Cove — pull over for a 10-min walk to a hidden turquoise cove right off the Glenorchy road. Free, stunning, no detour.", link: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/queenstown-area/things-to-do/bobs-cove-track/", coords: { lat: -45.017, lng: 168.579 } },
        { time: "~10:30 AM", activity: "Glenorchy village, Paradise location (Lord of the Rings filming site), Lake Sylvan walk", coords: { lat: -44.852, lng: 168.395 } },
        { time: "~1:00 PM",  activity: "Return to Queenstown" },
        { time: "~1:30 PM",  activity: "Deer Park Heights — drive-up wildlife park with highland cows, elk & deer. Sweeping panoramic views over Queenstown and The Remarkables (~1.5 hrs). Bring $2 coins for animal feed. Book ahead.", link: "https://www.deerparkheights.co.nz", coords: { lat: -45.032, lng: 168.621 } },
        { time: "~3:30 PM",  activity: "Head back into Queenstown — grab coffee or snacks for the road" },
        { time: "~4:30 PM",  activity: "Drive to Te Anau (~2 hrs) — setting up for Milford Sound tomorrow" },
        { time: "~6:30 PM",  activity: "Arrive Te Anau — check in, dinner" }
      ],
      notes: "⚠️ Book Deer Park Heights ahead — spots can fill up. The highland cows are a TikTok sensation with 286K+ views. Drive to Te Anau this evening keeps tomorrow's Milford Sound day relaxed."
    },
    {
      day: 10,
      date: "June 1",
      weekday: "Monday",
      title: "Milford Sound — Mitre Peak Cruises",
      overnight: "Queenstown",
      tags: ["⭐ Highlight", "Book cruise in advance"],
      schedule: [
        { time: "9:30 AM", activity: "Depart Te Anau → Milford Sound (~2 hrs through Fiordland National Park)" },
        { time: "~10:15 AM", activity: "Stop at Mirror Lakes (~45 min from Te Anau)", link: "https://www.newzealand.com/us/plan/business/mirror-lakes/", coords: { lat: -44.849, lng: 168.025 } },
        { time: "~11:00 AM", activity: "Stop at The Chasm — dramatic waterfall, 10-min walk", coords: { lat: -44.695, lng: 168.067 } },
        { time: "~11:30 AM", activity: "Arrive Milford Sound — lunch at café" },
        { time: "~12:30 PM",  activity: "Mitre Peak Cruises — ~2 hr cruise (Mitre Peak, Bowen Falls, seals, dolphins). Smallest boat in Milford Sound, max 75 passengers.", link: "https://www.mitrepeak.com", coords: { lat: -44.637, lng: 167.904 } },
        { time: "~2:30 PM",  activity: "Cruise ends — drive back to Queenstown (~4 hrs via Te Anau)" },
        { time: "~6:30 PM",  activity: "Arrive Queenstown — farewell dinner" }
      ],
      notes: "⚠️ Book Mitre Peak Cruises in advance at mitrepeak.com. Mitre Peak operates the smallest boats in Milford Sound (~75 passengers max) — gets closer to the waterfalls and cliffs than any other operator."
    },
    {
      day: 11,
      date: "June 2",
      weekday: "Tuesday",
      title: "Departure — Queenstown",
      overnight: null,
      tags: ["Departure Day", "Flight 15:15"],
      schedule: [
        { time: "Morning",   activity: "Relaxed breakfast, last walk around Queenstown" },
        { time: "~10:00 AM", activity: "Check out of accommodation" },
        { time: "~1:30 PM",  activity: "Drop off rental car at Queenstown Airport (~5–10 min from town)" },
        { time: "3:15 PM",   activity: "✈ Departure from Queenstown Airport" }
      ],
      notes: null
    }
  ]
};
