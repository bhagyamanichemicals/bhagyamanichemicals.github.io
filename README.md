# Bhagyamani Chemicals

## Contact form setup

The contact form submits directly to Web3Forms and does not open the visitor's
email client or require this project to run its own email API.

1. Create a Web3Forms access key for the inbox that should receive enquiries.
2. Copy `.env.example` to `.env` and replace `YOUR_ACCESS_KEY_HERE` with that
   access key.
3. Restart the Vite development server after changing `.env`. For deployment,
   configure `VITE_WEB3FORMS_ACCESS_KEY` as a build-time environment variable
   and rebuild the site.

The access key is included in the frontend bundle because Web3Forms is called
directly from the browser. Use the access key issued for this form and manage
its allowed domains and usage from the Web3Forms dashboard. The mobile number
field is optional.
