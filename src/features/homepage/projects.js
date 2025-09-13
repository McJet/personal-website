import { newTabSvg } from "./svgs";

const projects = [
  {
    title: "Saddleback.com",
    image: "/src/features/homepage/assets/saddleback.png",
    span: "Aug 2023 - Current",
    description:
      "I am currently working for Saddleback Church as a Full-Stack Web Developer. Maintaining and building features within the website are a few of the things that I do on a daily basis.",
    skills: [
      {
        name: "ASP.NET Core",
        link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
      },
      {
        name: "Umbraco CMS",
        link: "https://umbraco.com/products/umbraco-cms/",
      },
      {
        name: "Sass",
        link: "https://sass-lang.com/",
      },
      {
        name: "Vue.js",
        link: "https://vuejs.org/",
      },
      {
        name: "Javascript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
    ctas: [
      {
        label: "Visit",
        link: "https://saddleback.com",
        svg: newTabSvg,
      },
    ],
  },
  {
    title: "ATM.com",
    image: "/src/features/homepage/assets/atm.jpg",
    span: "Feb 2022 - Oct 2022",
    description:
      "My professional developer journey starts at ATM.com, a fintech startup company. The company's product was a financial app in both iOS and Android. I worked on developing features within the Android side of things.",
    skills: [
      {
        name: "Kotlin",
        link: "https://kotlinlang.org/",
      },
      {
        name: "Android Studio",
        link: "https://developer.android.com/studio",
      },
      {
        name: "Jetpack Compose",
        link: "https://developer.android.com/compose",
      },
    ],
    ctas: [
      {
        label: "Visit",
        link: "https://atm.com",
        svg: newTabSvg,
      },
    ],
  },
];

export default projects;
