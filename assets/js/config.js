/* =====================================================================
   Site settings — edit this file before publishing.
   Everything the legal pages and the registration form need about the
   organisation lives here, so no page has to be edited by hand.
   ===================================================================== */
window.ASALEEB_CONFIG = {
  // Public address of the site (used in the sitemap / share links).
  siteUrl: "https://nhardev.github.io/asaleeb/",

  // Legal name of the body that runs the project (shown in the legal pages).
  orgName: "مشروع أساليب",
  // Registration number of the association / company, if there is one.
  orgId: "",
  // Postal address (optional).
  address: "",

  contactEmail: "info@example.com",
  privacyEmail: "privacy@example.com",
  phone: "",              // e.g. "+972 50 000 0000"
  whatsapp: "",           // digits only, e.g. "972500000000"
  instagram: "",          // full URL
  facebook: "",           // full URL

  // Where registrations are sent.
  //  - A form service URL (Formspree, Getform, Basin, a Google Apps Script web app …)
  //    receives the form as JSON with a POST.
  //  - Leave empty and the form opens the visitor's e-mail app with the
  //    registration filled in, addressed to contactEmail.
  formEndpoint: "https://script.google.com/macros/s/AKfycbxuQdHWy6aK2BTHJdDl4qdbB6RhtGTWtiY2qYZJA8qWQjgSp3P82dyoJ0qFrgOJIqmR/exec",

  // Age from which the guardian section is no longer required.
  adultAge: 18,
  minAge: 6,
  maxAge: 99,

  // Date shown as "last updated" on the legal pages.
  legalUpdated: "2026-10-17"
};
