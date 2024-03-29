import * as md from "./md";

import account from "@/cms/components/account.md";
import accountlist from "@/cms/components/accountList.md";
import addtolist from "@/cms/components/addToList.md";
import search from "@/cms/components/search.md";
import aboutContent from "@/cms/pages/about.md";
import updateProfileContent from "@/cms/pages/account/update.md";
import updatePasswordContent from "@/cms/pages/account/updatePassword.md";
import fgPasswordContent from "@/cms/pages/auth/forgot-password.md";
import loginContent from "@/cms/pages/auth/login.md";
import signUpContent from "@/cms/pages/auth/register.md";
import rsPasswordContent from "@/cms/pages/auth/reset-password.md";
import verifyEmailContent from "@/cms/pages/auth/verify-email.md";
import exploreContent from "@/cms/pages/explore.md";
import homeContent from "@/cms/pages/index.md";
import investigationsContent from "@/cms/pages/investigations.md";
import lexiconsContent from "@/cms/pages/lexicons.md";
import footerContent from "@/cms/settings/footer.md";
import navigationContent from "@/cms/settings/navigation.md";

function processAboutContent() {
  const { attributes } = aboutContent;
  attributes.partners =
    attributes.partners
      ?.map(({ logo, url, ...others }) => ({
        image: logo,
        href: url,
        ...others,
      }))
      ?.map((partner) => md.renderObjectValuesInline(partner)) ?? null;
}
processAboutContent();

export function about() {
  const { attributes } = aboutContent;
  return attributes;
}

export function updateProfile() {
  const { attributes } = updateProfileContent;
  return attributes;
}
export function updatePassword() {
  const { attributes } = updatePasswordContent;
  return attributes;
}

function processInvestigationsContent() {
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
}
processInvestigationsContent();

export function investigations() {
  const { attributes } = investigationsContent;
  return attributes;
}

function processHomeContent() {
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
    attributes.about.primaryPartners =
      attributes.about.primaryPartners
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
}
processHomeContent();

export function home() {
  const { attributes } = homeContent;
  return attributes;
}

function processLexiconsContent() {
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
}
processLexiconsContent();

export function explore() {
  const { attributes } = exploreContent;
  return attributes;
}

export function lexicons() {
  const { attributes } = lexiconsContent;
  return attributes;
}

function processFooterContent() {
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
processFooterContent();

export function footer() {
  const { attributes } = footerContent;
  return attributes;
}

export function login() {
  const { attributes } = loginContent;
  return attributes;
}

export function signUp() {
  const { attributes } = signUpContent;
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

export function verifyEmail() {
  const { attributes } = verifyEmailContent;
  return attributes;
}

export function forgotPassword() {
  const { attributes } = fgPasswordContent;
  return attributes;
}

export function resetPassword() {
  const { attributes } = rsPasswordContent;
  return attributes;
}

export function searchSection() {
  const { attributes } = search;
  return attributes;
}

export function accountList() {
  const { attributes } = accountlist;
  return attributes;
}

export function addToList() {
  const { attributes } = addtolist;
  return attributes;
}

export function accountLabel() {
  const { attributes } = account;
  return attributes;
}
