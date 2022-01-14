import userAvator from "@/twoopstracker/assets/icons/avator.svg";

export function shareData(title) {
  return [
    {
      name: "Twitter",
      props: { title, via: "TrollTracker", related: ["Code4Africa"] },
    },
    {
      name: "LinkedIn",
      props: {
        summary: title,
        source: process.env.NEXT_PUBLIC_APP_URL,
      },
    },
    {
      name: "Facebook",
      props: { quote: title, hashtag: "#TrollTracker" },
    },
    {
      name: "WhatsApp",
      props: {},
    },
  ];
}

export const contentActionsProps = {
  download: {
    label: "Download:",
    fileTypes: [
      { name: "CSV", ext: "csv" },
      { name: "Excel", ext: "xlsx" },
    ],
  },
};

export const navigationArgs = {
  userProfileArgs: {
    label: "Account Name",
    logOutLabel: "Log Out",
    src: userAvator,
    alt: "Profile",
    profilePages: [
      {
        href: "/account/lists",
        label: "My Lists",
      },
      {
        href: "/account/searches",
        label: "My Saved Searches",
      },
      {
        href: "/account/data",
        label: "Upload Data",
      },
    ],
    accountLink: [
      {
        href: "/account/settings",
        label: "My Account",
      },
    ],
  },
};

export const login = {
  title: "Welcome back",
  description: "Login to access all the features on TrollTracker",
  signupPrompt: "New to Trolltracker?",
  signUpLink: "Sign up now",
  href: "/signup",
  password: "Forgot password?",
};

export const searches = [
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
];

export const pagination = {
  pageSizeDefaultValue: "20",
  pageSizeLabel: "Results on Page",
  pageSizeOptions: [{ value: "20" }, { value: "50" }],
};
export const upload = {
  conjuctionLabel: "or",
  downloadCopy: "Download the template",
  errorLabel: "Something happened, please check the document and try again",
  failedLabel: "Failed",
  successLabel: "Upload successful",
  loadingLabel: "Uploading...",
  templateLink: "/template.csv",
  templateName: "template.csv",
  dragLabel: "Drag and drop your CSV files here",
  uploadLabel: "Select a File",
};

export const searchPagination = {
  pageSizeDefaultValue: "3",
  pageSizeLabel: "Results on Page",
  pageSizeOptions: [{ value: "10" }, { value: "20" }],
};

export const listPagination = {
  pageSizeDefaultValue: "3",
  pageSizeLabel: "Results on Page",
  pageSizeOptions: [{ value: "10" }, { value: "20" }],
};

export const accounts = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      name: "Valtteri Bottas",
      account_id: 1143472657,
      screen_name: "ValtteriBottas",
      protected: false,
      created_at: "2021-12-07T10:11:25.314577Z",
      updated_at: "2021-12-07T10:11:25.314616Z",
    },
  ],
};

export const inputSelectFilterArgs = {
  sectorProps: {
    inputSelectId: "checkbox-sector",
    title: "Sector",
    placeholder: "Select",
  },
  categoryProps: {
    inputSelectId: "checkbox-category",
    title: "Category",
    placeholder: "Select",
  },
  subCategoryProps: {
    inputSelectId: "checkbox-subcategory",
    title: "SubCategory",
    placeholder: "Select",
  },
  items: [
    {
      name: "Reference Documents",
      count: 74,
      categories: [
        {
          name: "Category1",
          count: 34,
          subcategories: [],
        },
        {
          name: "Category2",
          count: 34,
          subcategories: [
            { name: "subcategories1", count: 3 },
            { name: "subcategories2", count: 34 },
            { name: "subcategories3", count: 3 },
            { name: "subcategorie4", count: 1 },
          ],
        },
        {
          name: "Category3",
          count: 7,
          subcategories: [],
        },
      ],
    },
    {
      name: "Economic statistics",
      count: 338,
      categories: [
        {
          name: "Category4",
          count: 34,
          subcategories: [],
        },
        {
          name: "Category5",
          count: 34,
          subcategories: [
            { name: "subcategories5", count: 3 },
            { name: "subcategories6", count: 34 },
            { name: "subcategories7", count: 3 },
            { name: "subcategorie8", count: 1 },
          ],
        },
        {
          name: "Category6",
          count: 7,
          subcategories: [
            { name: "subcategories10", count: 3 },
            { name: "subcategories11", count: 34 },
            { name: "subcategories12", count: 3 },
            { name: "subcategorie13", count: 1 },
          ],
        },
      ],
    },
    {
      name: "Socio-Economic statistics ",
      count: 134,
      categories: [
        {
          name: "Category7",
          count: 34,
          subcategories: [
            { name: "subcategories14", count: 3 },
            { name: "subcategories15", count: 34 },
            { name: "subcategories16", count: 3 },
            { name: "subcategorie17", count: 1 },
          ],
        },
        {
          name: "Category8",
          count: 34,
          subcategories: [
            { name: "subcategories18", count: 3 },
            { name: "subcategories19", count: 34 },
            { name: "subcategories20", count: 3 },
            { name: "subcategorie21", count: 1 },
          ],
        },
        {
          name: "Category9",
          count: 7,
          subcategories: [
            { name: "subcategories22", count: 3 },
            { name: "subcategories23", count: 34 },
            { name: "subcategories24", count: 3 },
            { name: "subcategorie25", count: 1 },
          ],
        },
      ],
    },
    {
      name: "NBS Annual Abstract of Finance document",
      count: 4,
      categories: [
        {
          name: "Category10",
          count: 34,
          subcategories: [
            { name: "subcategories26", count: 3 },
            { name: "subcategories27", count: 34 },
            { name: "subcategories28", count: 3 },
            { name: "subcategorie29", count: 1 },
          ],
        },
        {
          name: "Category11",
          count: 34,
          subcategories: [
            { name: "subcategories30", count: 3 },
            { name: "subcategories31", count: 34 },
            { name: "subcategories32", count: 3 },
            { name: "subcategorie33", count: 1 },
          ],
        },
        {
          name: "Category12",
          count: 7,
          subcategories: [
            { name: "subcategories34", count: 3 },
            { name: "subcategories35", count: 34 },
            { name: "subcategories36", count: 3 },
            { name: "subcategorie37", count: 1 },
          ],
        },
      ],
    },
    {
      name: "Public Transport Statistics",
      count: 49,
      categories: [
        {
          name: "Category13",
          count: 34,
          subcategories: [
            { name: "subcategories38", count: 3 },
            { name: "subcategories39", count: 34 },
            { name: "subcategories40", count: 3 },
            { name: "subcategorie41", count: 1 },
          ],
        },
        {
          name: "Category14",
          count: 34,
          subcategories: [
            { name: "subcategories42", count: 3 },
            { name: "subcategories43", count: 34 },
            { name: "subcategories44", count: 3 },
            { name: "subcategorie45", count: 1 },
          ],
        },
        {
          name: "Category15",
          count: 7,
          subcategories: [
            { name: "subcategories46", count: 3 },
            { name: "subcategories47", count: 34 },
            { name: "subcategories48", count: 3 },
            { name: "subcategorie49", count: 1 },
          ],
        },
      ],
    },
    {
      name: "Crime Statistics",
      count: 14,
      categories: [
        {
          name: "Category16",
          count: 34,
          subcategories: [
            { name: "subcategories50", count: 3 },
            { name: "subcategories51", count: 34 },
            { name: "subcategories52", count: 3 },
            { name: "subcategorie53", count: 1 },
          ],
        },
        {
          name: "Category17",
          count: 34,
          subcategories: [
            { name: "subcategories54", count: 3 },
            { name: "subcategories55", count: 34 },
            { name: "subcategories56", count: 3 },
            { name: "subcategorie57", count: 1 },
          ],
        },
        {
          name: "Category18",
          count: 7,
          subcategories: [
            { name: "subcategories58", count: 3 },
            { name: "subcategories59", count: 34 },
            { name: "subcategories60", count: 3 },
            { name: "subcategorie61", count: 1 },
          ],
        },
      ],
    },
    {
      name: "Sector Statistics",
      count: 49,
      categories: [],
    },
    {
      name: "Population and Migration",
      count: 6,
      categories: [],
    },
    {
      name: "Health Statistics",
      count: 49,
      categories: [
        {
          name: "Category19",
          count: 34,
          subcategories: [
            { name: "subcategories62", count: 3 },
            { name: "subcategories63", count: 34 },
            { name: "subcategories64", count: 3 },
            { name: "subcategorie65", count: 1 },
          ],
        },
        {
          name: "Category20",
          count: 34,
          subcategories: [],
        },
        {
          name: "Category21",
          count: 7,
          subcategories: [
            { name: "subcategories66", count: 3 },
            { name: "subcategories67", count: 34 },
            { name: "subcategories68", searchses: 3 },
            { name: "subcategorie68", count: 1 },
          ],
        },
      ],
    },
  ],
};

const config = {
  name: "TwoopsTracker",
  navigationArgs,
  searches,
  url: "http://localhost:3000",
};

export default config;
