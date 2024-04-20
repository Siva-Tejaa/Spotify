//Featured Charts
import TopSongsGlobal from "../../assets/featuredCharts/region_global_large.jpg";
import TopSongsIndia from "../../assets/featuredCharts/region_in_large.jpg";
import Top50Global from "../../assets/featuredCharts/region_global50_large.jpg";
import Top50India from "../../assets/featuredCharts/region_in50_large.jpg";
import Viral50Global from "../../assets/featuredCharts/region_viral50global_large.jpg";
import Viral50India from "../../assets/featuredCharts/region_viral50in_large.jpg";

//Sounds of Indian Cities
import TheSoundOfIndia from "../../assets/soundsofIndia/TheSoundofIndia.jpg";
import TheSoundOfDelhi from "../../assets/soundsofIndia/TheSoundofDelhi.jpg";
import TheSoundOfKolkata from "../../assets/soundsofIndia/TheSoundofKolkata.jpg";
import TheSoundOfMumbai from "../../assets/soundsofIndia/TheSoundofMumbai.jpg";
import TheSoundOfAhmedabad from "../../assets/soundsofIndia/TheSoundofAhmedabad.jpg";
import TheSoundOfBengaluru from "../../assets/soundsofIndia/TheSoundofBengaluru.jpg";
import TheSoundOfChennai from "../../assets/soundsofIndia/TheSoundofChennai.jpg";
import TheSoundOfHyderabad from "../../assets/soundsofIndia/TheSoundofHyderabad.jpg";

//Side Nav Bar
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";

export const featuredCharts = [
  {
    title: "Top Songs - Global",
    description:
      "Your weekly update of the most played tracks right now - Global.",
    playListId: "37i9dQZEVXbNG2KDcFcKOF",
    image: TopSongsGlobal,
  },
  {
    title: "Top Songs - India",
    description:
      "Your weekly update of the most played tracks right now - India.",
    playListId: "37i9dQZEVXbMWDif5SCBJq",
    image: TopSongsIndia,
  },
  {
    title: "Top 50 - Global",
    description:
      "Your daily update of the most played tracks right now - Global.",
    playListId: "37i9dQZEVXbMDoHDwVN2tF",
    image: Top50Global,
  },
  {
    title: "Top 50 - India",
    description:
      "Your daily update of the most played tracks right now - India.",
    playListId: "37i9dQZEVXbLZ52XmnySJg",
    image: Top50India,
  },
  {
    title: "Viral 50 - Global",
    description:
      "Your daily update of the most viral tracks right now - Global.",
    playListId: "37i9dQZEVXbLiRSasKsNU9",
    image: Viral50Global,
  },
  {
    title: "Viral 50 - India",
    description:
      "Your daily update of the most viral tracks right now - India.",
    playListId: "37i9dQZEVXbK4NvPi6Sxit",
    image: Viral50India,
  },
];

export const theSoundOfSpotifyPlaces = [
  {
    title: "The Sound of India",
    description: "The songs that define, unite and distinguish India.",
    playListId: "0h85PBTc5q8PAJ6O5AG4mp",
    image: TheSoundOfIndia,
  },
  {
    title: "The Sound of Delhi IN",
    description: "The songs that define, unite and distinguish Delhi, IN.",
    playListId: "10istDPCOPLqoiSUPuFhkg",
    image: TheSoundOfDelhi,
  },
  {
    title: "The Sound of Kolkata IN",
    description: "The songs that define, unite and distinguish Kolkata IN.",
    playListId: "6V9jhLfmJXsdkaCtdLoiZr",
    image: TheSoundOfKolkata,
  },
  {
    title: "The Sound of Mumbai IN",
    description: "The songs that define, unite and distinguish Mumbai IN.",
    playListId: "3MSEZ4IGrSMnWNIwnYmPtd",
    image: TheSoundOfMumbai,
  },
  {
    title: "The Sound of Ahmedabad IN",
    description: "The songs that define, unite and distinguish Ahmedabad IN.",
    playListId: "4Q0qGuROwjdj5TvYNJjM6U",
    image: TheSoundOfAhmedabad,
  },
  {
    title: "The Sound of Bengaluru IN",
    description: "The songs that define, unite and distinguish Bengaluru IN.",
    playListId: "6J01WgQNYVsItQHFl9t8hD",
    image: TheSoundOfBengaluru,
  },
  {
    title: "The Sound of Chennai IN",
    description: "The songs that define, unite and distinguish Chennai IN.",
    playListId: "08QV4kzSYj9EkLhFlBpr47",
    image: TheSoundOfChennai,
  },
  {
    title: "The Sound of Hyderabad IN",
    description: "The songs that define, unite and distinguish Hyderabad IN.",
    playListId: "3Z4MwJ8En69rUvBVPIIzGQ",
    image: TheSoundOfHyderabad,
  },
];

export const sideNav = [
  {
    id: 1,
    title: "Home",
    icon: <GoHomeFill fontSize="1.4em" />,
  },
  {
    id: 2,
    title: "Search",
    icon: <FaSearch fontSize="1.4em" />,
  },
];

export const topNav = [
  {
    id: 1,
    title: "Account",
  },
  {
    id: 2,
    title: "Profile",
  },
  {
    id: 3,
    title: "Settings",
  },
];

export const library = [
  {
    id: 1,
    title: "Create your first playlist",
    subtitle: "It's easy, we'll help you",
    button: "Create playlist",
  },
  {
    id: 2,
    title: "Let's find some podcasts to follow",
    subtitle: "We'll keep you updated on new episodes",
    button: "Browse podcasts",
  },
];
