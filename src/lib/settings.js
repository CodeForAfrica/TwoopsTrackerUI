import * as md from "./md";

import footerContent from "content/settings/footer.md";

export function footer() {
  const { attributes } = footerContent;
  const {
    description,
    logo: projectLogo,
    name: projectName,
    url: projectUrl,
  } = attributes.project;
  attributes.project.description = md.renderInline(description);
  attributes.project.logoProps = {
    alt: projectName,
    href: projectUrl,
    src: projectLogo,
  };
  attributes.contacts.socialMedia =
    attributes.contacts.socialMedia?.map(({ name, logo, ...others }) => ({
      ...others,
      name,
      image: { url: logo, alt: name },
    })) ?? null;
  attributes.quickLinks =
    attributes.quickLinks?.map(({ links, ...others }) => ({
      ...others,
      links: links.map(({ name, url, ...more }) => ({
        ...more,
        label: name,
        href: url,
      })),
    })) ?? null;
  return attributes;
}

export function settings() {
  return {
    footer: footer(footer),
  };
}
