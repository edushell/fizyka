module.exports = {
  head: [["link", { rel: "icon", href: "/icon.ico" }]],
  plugins: [
    [
      "vuepress-plugin-mathjax",
      {
        target: "svg",
        macros: {
          "*": "\\times",
        },
      },
    ],
    [
      "@vuepress/medium-zoom",
      {
        selector: "img",
        options: {
          margin: 24,
          background: "#000000",
          scrollOffset: 0,
        },
      },
    ],
    [
      "vuepress-plugin-simple-analytics",
      {
        customDomain: "api.edushell.net",
        skipDnt: true,
      },
    ],
  ],
  base: "/fizyka/",
  themeConfig: {
    lastUpdated: "Last Updated", // string | boolean
  },
  locales: {
    "/": {
      lang: "pl-PL",
      title: "Edushell Fizyka",
      description:
        "Edushell Fizyka to internetowy kurs fizyki dla licealistów. W serwisie można nauczyć się kinematyki, dynamiki, pracy, mocy, energii i bryły sztywnej.",
    },
  },
  themeConfig: {
    sidebarDepth: 2,
    locales: {
      "/": {
        selectText: "Język",
        label: "Polski",
        nav: [
          {
            text: "Działy",
            items: [
              { text: "Kinematyka", link: "/kinematyka/" },
              { text: "Dynamika", link: "/dynamika/" },
              { text: "Praca, moc, energia", link: "/praca-moc-energia/" },
              { text: "Bryła sztywna", link: "/bryla-sztywna/" },
              { text: "Fale: Efekt Dopplera", link: "/fale/" },
            ],
          },
          {
            text: "O serwisie",
            link: "/o-serwisie/",
          },
        ],
        sidebar: {
          "/kinematyka/": [
            "",
            "rodzaje-ruchu",
            "rownania-ruchu",
            "predkosc-wzgledna",
            "ruch-jednostajny-po-okregu",
          ],
          "/dynamika/": [
            "",
            "masa-a-ciezar",
            "sily",
            "rownia-pochyla",
            "uklad-inercjalny-i-nieinercjalny",
            "zasada-zachowania-pedu",
          ],
          "/praca-moc-energia/": [
            "",
            "zasada-zachowania-energii",
            "spadek-swobodny-i-rzuty",
          ],
          "/bryla-sztywna/": [""],
          "/fale/": ["", "efekt-dopplera"],
          // '/': [
          //     '',
          //     'contact',
          //     'about'
          // ]
        },
      },
    },
  },
};
