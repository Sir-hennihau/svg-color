"use strict";

import { defaultBranding, customerBranding } from "./branding.js";

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const getStyleSheetColorString = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

const defaultPrimaryAsRgb = hexToRgb(defaultBranding.primaryColor);

const customerPrimaryAsRgb = hexToRgb(customerBranding.primaryColor);

const styleSheets = document.styleSheets;

for (const styleSheet of styleSheets) {
  for (const rule of styleSheet.rules) {
    if (
      rule.style.fill ===
      getStyleSheetColorString(
        defaultPrimaryAsRgb.r,
        defaultPrimaryAsRgb.g,
        defaultPrimaryAsRgb.b
      )
    ) {
      rule.style.fill = getStyleSheetColorString(
        customerPrimaryAsRgb.r,
        customerPrimaryAsRgb.g,
        customerPrimaryAsRgb.b
      );
    }
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

    // console.log("", path.className);
  }

  svg.style.display = "block";
}
