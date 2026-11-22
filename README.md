# CodeNetz – Official Website

Premium responsive, multi-page business website for **CodeNetz**.

## Pages
- `index.html` – Home
- `services.html` – Services
- `solutions.html` – Business solutions
- `work.html` – Design examples (clearly identified as concepts)
- `about.html` – About
- `contact.html` – Contact and quote enquiry
- `privacy.html` and `terms.html` – Legal information
- `404.html` – Custom not-found page
- `assets/` – CSS, JavaScript, logo, social sharing graphic, favicon

## Contact details
- Email: codenetztech@gmail.com
- Phone / WhatsApp: +91 80077 73888
- Country: India

## Deploy independently with GitHub Pages
1. Create a **new PUBLIC repository** named `codenetz` in the GitHub account `catonpe-droid`.
2. Upload **all files and the `assets` folder** to the repository root (do not upload only this README or a parent folder).
3. Open **Settings > Pages** and set `Deploy from a branch`, branch `main`, folder `/(root)`; Save.
4. Site preview should be `https://catonpe-droid.github.io/codenetz/` after Pages finishes deploying. The site uses relative URLs and should work in this preview path.
5. **Later**, add `codenetz.cc.cd` in Pages > Custom domain; GitHub will give the exact DNS instructions needed for the domain host. Only then add the `CNAME` file containing `codenetz.cc.cd` at repository root if GitHub has not created it. Avoid changing DNS of other domains.
6. Configure the domain host's DNS records specifically for `codenetz.cc.cd`. The correct record type and target depend on whether `cc.cd` allows custom DNS records at this depth. Confirm DNS control first. Use GitHub's domain verification advice and enable HTTPS when available.

**Important:** Don't add a CNAME file for the custom domain until you're ready to connect it. If a new repo cannot yet be created, keep this folder as a ready-to-publish package; do not mix the CodeNetz custom domain into the existing Dalalnama/Lokhit/NewsTrendus Pages settings.

## Enquiry form behaviour
The contact form **does not automatically submit or store data**. It opens the visitor's configured email app with the details prefilled. The visitor must press Send. Direct email, telephone and WhatsApp links also work. For server-side submissions in the future, implement a privacy-conscious service and update the privacy notice.

## Customization
- Brand and navigation: `index.html` and each page; shared template source available from the website build system.
- Colors, typography and responsive design: `assets/styles.css`.
- Mobile navigation, animation and enquiry form: `assets/script.js`.
- Social preview: `assets/og-cover.png`.
- Logo: `assets/codenetz-logo.png`.

No public page discloses internal implementation tools or databases. Site preview numbers and images are explicitly illustrative, not customer outcomes. No fabricated testimonials or client metrics.
