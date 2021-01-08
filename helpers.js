import { defaultBranding, customerBranding } from "./branding.js";

/**
 *
 * @param {string} hex Color as a hex string
 */
export const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 *
 * @param {object} color Color object with r, g, b keys
 * @returns CSS stylesheet color string
 */
export const getRgbColorString = (color) => {
  const hexColor = hexToRgb(color);
  const { r, g, b } = hexColor;
  return `rgb(${r}, ${g}, ${b})`;
};

export const defaultBrandingRgbs = {
  primaryColor: getRgbColorString(defaultBranding.primaryColor),
  secondaryColor: getRgbColorString(defaultBranding.secondaryColor),
  tertiaryColor: getRgbColorString(defaultBranding.tertiaryColor),
};

export const customerBrandingRgbs = {
  primaryColor: getRgbColorString(customerBranding.primaryColor),
  secondaryColor: getRgbColorString(customerBranding.secondaryColor),
  tertiaryColor: getRgbColorString(customerBranding.tertiaryColor),
};
