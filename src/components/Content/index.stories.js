import React from "react";

import Content from ".";

const about = {
  banner: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
    title: "About Us",
  },
  items: [
    {
      image: "/images/cfa-editable-logo-01-1.png",
      description:
        "<a rel='noopener noreferrer' target='_blank' href='https://www.codeforafrica.org/'>Code for Africa (CfA)</a> is the continent’s largest network of civic technology and data journalism labs, with teams in 21 countries. CfA builds digital democracy solutions that give citizens unfettered access to actionable information that empowers them to make informed decisions, and that strengthens civic engagement for improved public governance and accountability. This includes building infrastructure like the continent’s largest open data portals at openAFRICA and sourceAFRICA. CfA incubates initiatives as diverse as the africanDRONE network, the PesaCheck fact-checking initiative, the sensors.AFRICA air quality sensor network and the research and analysis programme Civic Signal.",
      href: "https://www.codeforafrica.org/",
      cta: "View",
    },
    {
      image: "/images/artboard-1-2x-1.png",
      description:
        "<a rel='noopener noreferrer' target='_blank' href='https://www.cfa.org/'>Code for All</a> is a global network composed of 30+ civic tech organisations from around the world. Our mission is to connect civic tech organisations so they can learn from each other, leading to greater impact in their local communities. With the support of this international network, each of our member organisations have access to tool-kits, projects, and expertise from people doing similar work in different corners of the world. We believe in driving social change through digital technology, citizen participation and collaborative decision-making, while improving the relationship between governments and citizens.",
      href: "https://www.cfa.org/",
      cta: "View",
    },
  ],
};

export default {
  title: "Sections/Content",
};

function Template(args) {
  return <Content {...args} />;
}

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-investigation-list--default",
  },
};

Default.args = {
  items: about.items,
};
