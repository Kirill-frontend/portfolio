import { ReactIcon, AngularIcon, LayoutIcon, NextIcon, NodeIcon } from '../../components/Icons';


export type project = {
  img: string;
  title: string;
  description: string;
  link: string;
  category: string;
  icon: React.ReactElement;
}

export const projects: project[] = [
  {
    img: "/images/cartlist.png",
    title: "Product List",
    description: "This is a solution to the Product list with cart challenge on Frontend Mentor.",
    link: "https://github.com/Kirill-frontend/FM-cart-list",
    category: 'React',
    icon: <ReactIcon />,
  },
  {
    img: "/images/anilist.png",
    title: "Anilist",
    description: "Similar to to-do list but for anime.Using kitsu API",
    link: "https://github.com/Kirill-frontend/anilist",
    category: 'nextjs',
    icon: <NextIcon />,
  },
  {
    img: "/images/weather.png",
    title: "Weather App (api from openweather)",
    description: "Simple weather app",
    link: "https://github.com/Kirill-frontend/angular-weather",
    category: 'angular',
    icon: <AngularIcon />,
  },
  {
    img: "/images/wallpaper.png",
    title: "Image Hoisting",
    description: "Fullstack app for hoisting images",
    link: "https://github.com/Kirill-frontend/wallpaper-typescript",
    category: 'nodejs',
    icon: <NodeIcon />,
  },
  {
    img: "/images/layout-1.png",
    title: "Minimalistic Layout",
    description: "Simple layout",
    link: "https://kirill-frontend.github.io/smart-agnecy/",
    category: 'layouts',
    icon: <LayoutIcon />,
  },
  {
    img: "/images/layout-2.png",
    title: "Web-Office Portfolio Layout",
    description: "layout",
    link: "https://kirill-frontend.github.io/webPortfolio/",
    category: 'layouts',
    icon: <LayoutIcon />,
  },
  {
    img: "/images/layout-3.png",
    title: "Robirurk Landing page",
    description: "layout",
    link: "https://kirill-frontend.github.io/robirurk-landing-page/",
    category: 'layouts',
    icon: <LayoutIcon />,
  },
  {
    img: "/images/layout-3.png",
    title: "Tajam Layout",
    description: "layout",
    link: "https://kirill-frontend.github.io/tajam/",
    category: 'layouts',
    icon: <LayoutIcon />,
  },
]

export type checkboxesType = {
  icon: React.ReactElement;
  label: string;
  checked: boolean;
}

export const checkboxes: checkboxesType[] = [
  {icon: <ReactIcon />, label: 'React', checked: false},
  {icon: <AngularIcon />, label: 'Angular', checked: false},
  {icon: <LayoutIcon />, label: 'Layouts', checked: false},
  {icon: <NextIcon />, label: 'NextJS', checked: false},
  {icon: <NodeIcon />, label: 'NodeJS', checked: false},
]