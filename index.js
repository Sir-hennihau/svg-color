"use strict";

import { defaultBranding, customerBranding } from "./branding.js";

const svgs = document.getElementsByTagName("svg");

for (const svg of svgs) {
  const paths = svg.querySelectorAll("path");

  for (const path of paths) {
    Object.keys(defaultBranding).map((colorLevel) => {
      console.log("colorLevel", colorLevel);

      if (path.getAttribute("stroke") === defaultBranding[colorLevel]) {
        path.setAttribute("stroke", customerBranding[colorLevel]);
      }
    });
  }

  svg.style.display = "block";
}
