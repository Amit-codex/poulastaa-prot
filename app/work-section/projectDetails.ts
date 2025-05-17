export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "kyoku",
    description:
      "Kyoku is a music streaming application like Spotify or apple music. It is using HLS protocol to stream music,music streaming application like Spotify with onw database entry over 70 thousand.",
    technologies: ["Jetpack Compose", "Ktor", "HLS"],
    github: "https://github.com/POULASTAAdAS/Kyoku",
    demo: "https://www.figma.com/design/9P5gHYSzu2LtQocpmQ0dBF/Kyoku?node-id=0-1",
    image: require(".//../../public/projects/kyuko.png"),
    available: true,
  },
  {
    id: 1,
    name: "Leave-M-System",
    description:
      "An navite android application build using jetpack compose with ktor powered backend to bring collegs leave managements system online.",
    technologies: ["Jetpack Compose", "Ktor"],
    github: "https://github.com/POULASTAAdAS/Leave-Management-System",
    demo: "https://github.com/POULASTAAdAS/Leave-Management-System",
    image: require(".//../../public/projects/lms.png"),
    available: true,
  },
  {
    id: 2,
    name: "mFlix",
    description:
      "A Movie Browsing navite android Application build using jetpack compose and custom backend build using ktor (used only for Authentication)",
    technologies: ["Jetpack Compose", "Ktor", "OkHttp"],
    github: "https://github.com/POULASTAAdAS/Movie-Browsing-App",
    demo: "https://github.com/POULASTAAdAS/Movie-Browsing-App",
    image: require(".//../../public/projects/mFlix.png"),
    available: true,
  },
  {
    id: 3,
    name: "Note-2.0",
    description:
      "A note taking application build using jetpack compose which stores all it's notes to a backend server devoloped using ktor.",
    technologies: ["Jetpack Compose", "Ktor", "Exposed"],
    github: "https://github.com/POULASTAAdAS/Note-2.0",
    demo: "https://github.com/POULASTAAdAS/Note-2.0",
    image: require(".//../../public/projects/note.png"),
    available: true,
  },
];
