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

const config = {
  name: "TwoopsTracker",
  navigationArgs,
  searches,
  url: "http://localhost:3000",
};

export default config;
