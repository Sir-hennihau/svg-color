"use strict";

import { defaultBranding, customerBranding } from "./branding.js";

import { defaultBrandingRgbs, customerBrandingRgbs } from "./helpers.js";

const styleSheets = document.styleSheets;

for (const styleSheet of styleSheets) {
  for (const rule of styleSheet.rules) {
    Object.keys(defaultBrandingRgbs).map((defaultBrandingRgbKey) => {
      if (rule.style.fill === defaultBrandingRgbs[defaultBrandingRgbKey]) {
        rule.style.fill = customerBrandingRgbs[defaultBrandingRgbKey];
      }
    });
  }
}

const svgs = document.getElementsByTagName("svg");

for (const svg of svgs) {
  const paths = svg.getElementsByTagName("*");

  for (const path of paths) {
    Object.keys(defaultBranding).map((colorLevel) => {
      if (path.getAttribute("stroke") === defaultBranding[colorLevel]) {
        path.setAttribute("stroke", customerBranding[colorLevel]);
      }

      if (path.getAttribute("fill") === defaultBranding[colorLevel]) {
        path.setAttribute("fill", customerBranding[colorLevel]);
      }
    });
  }

  svg.style.display = "block";
}
