import multiform from "./img/multi.png";
import netflix from "./img/netflix.png";
import musicapp from "./img/waves.png";

export const projectsList = () => {
  return [
    {
      title: "Netflix Clone",
      mainImg: netflix,
      secondaryImg: netflix,
      id: 1,
      url: "/projects/netflix",
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
      secondaryImg: multiform,
      id: 2,
      url: "/projects/multi-form",
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
      secondaryImg: musicapp,
      id: 3,
      url: "/projects/music-app",
      technology: [
        {
          title: "React",
          description: "A JavaScript library for building user interfaces",
        },
      ],
    },
  ];
};
