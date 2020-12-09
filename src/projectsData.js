import multiform from "./img/3.png";
import netflix from "./img/1.png";
import musicapp from "./img/2.png";

import multiformSec from "./img/multi.png";
import netflixSec from "./img/netflix.png";
import musicappSec from "./img/waves.png";


export const projectsList = () => {
  return [
    {
      title: "Netflix Clone",
      mainImg: netflix,
      secondaryImg: netflixSec,
      id: 1,
      url: "/projects/netflix",
      address: "https://nextflix-clone-7bc43.web.app/",
      technology: [
        {
          title: "React",
          description: "A JavaScript library for building user interfaces",
        },
        {
          title: "StyledComponent",
          description:
            "Visual primitives for the component age Use the best bits of ES6 and CSS to style your apps without stress",
        },
        {
          title: "Firebase",
          description: "Cloud Storage",
        },
      ],
    },
    {
      title: "Multi-Step Form",
      mainImg: multiform,
      secondaryImg: multiformSec,
      id: 2,
      url: "/projects/multi-form",
      address: "https://pavel97107.github.io/multisteps-register-form/",
      technology: [
        {
          title: "React",
          description: "A JavaScript library for building user interfaces",
        },
      ],
    },
    {
      title: "Music App",
      mainImg: musicapp,
      secondaryImg: musicappSec,
      id: 3,
      url: "/projects/music-app",
      address: "https://pavel97107.github.io/music_app/",
      technology: [
        {
          title: "React",
          description: "A JavaScript library for building user interfaces",
        },
      ],
    },
  ];
};
