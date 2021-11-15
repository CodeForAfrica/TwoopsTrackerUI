import React from "react";

import AboutContent from "@/twoopstracker/components/AboutContent";
import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import { about } from "@/twoopstracker/config";

export default function About({ ...props }) {
  return (
    <Page {...props}>
      <Hero withCTA={false} {...about.banner} />
      <AboutContent items={about.items} />
    </Page>
  );
}
