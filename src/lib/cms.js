import * as md from "./md";

import aboutContent from "@/cms/pages/about.md";
import homeContent from "@/cms/pages/index.md";
import investigationsContent from "@/cms/pages/investigations.md";
import lexiconsContent from "@/cms/pages/lexicons.md";
import footerContent from "@/cms/settings/footer.md";
import navigationContent from "@/cms/settings/navigation.md";

export function about() {
  const { attributes } = aboutContent;
  attributes.partners =
    attributes.partners
      ?.map(({ logo, url, ...others }) => ({
        image: logo,
        href: url,
        ...others,
      }))
      ?.map((partner) => md.renderObjectValuesInline(partner)) ?? null;

  return attributes;
}

export function investigations() {
  const { attributes } = investigationsContent;
  attributes.reports =
    attributes.reports
      ?.map(({ cta, name, thumbnail, url, ...others }) => ({
        ctaText: cta,
        image: thumbnail,
        href: url,
        title: name,
        ...others,
      }))
      ?.map((i) => md.renderObjectValuesInline(i)) ?? null;

  return attributes;
}

export function home() {
  const { attributes } = homeContent;
  if (attributes.tool) {
    const { cta: buttonText, thumbnail: image, ...others } = attributes.tool;
    attributes.tool = md.renderObjectValuesInline({
      buttonLink: "/explore",
      buttonText,
      image,
      ...others,
    });
  }
  const { partners } = about();
  if (attributes.about) {
    attributes.about.items =
      attributes.about.partners
        ?.map((name) => partners?.find((partner) => partner.name === name))
        ?.filter((partner) => partner) || null;
    attributes.about.partners = null;
    attributes.about.secondaryPartners =
      attributes.about.secondaryPartners
        ?.map((name) => partners?.find((partner) => partner.name === name))
        ?.filter((partner) => partner) || null;
  }
  const { reports } = investigations();
  if (attributes.investigations) {
    attributes.investigations.items =
      attributes.investigations.reports
        ?.map((title) => reports?.find((report) => report.title === title))
        ?.filter((report) => report) || null;
    attributes.investigations.reports = null;
    attributes.investigations.buttonLink = "/investigations";
    attributes.investigations.buttonText =
      attributes.investigations.cta || null;
    attributes.investigations.cta = null;
  }

  return attributes;
}

export function lexicons() {
  const { attributes } = lexiconsContent;
  attributes.resouces =
    attributes.resouces
      ?.map(({ thumbnail, name, url, ...others }) => ({
        title: name,
        image: thumbnail,
        href: url,
        ...others,
      }))
      ?.map((resource) => md.renderObjectValuesInline(resource)) ?? null;

  return attributes;
}

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
      image: { url: logo || null, alt: name || null },
    })) ?? null;
  attributes.quickLinks =
    attributes.quickLinks?.map(({ links, ...others }) => ({
      ...others,
      links: links.map(({ name, url, ...more }) => ({
        ...more,
        label: name || null,
        href: url || null,
      })),
    })) ?? null;

  return attributes;
}

export function navigation() {
  const { attributes } = navigationContent;

  return attributes;
}

export function settings() {
  return {
    footer: footer(),
    navigation: navigation(),
  };
}
