# Eastman Technical Training Institute website

A responsive, dependency-free single-page website for Eastman Technical Training Institute (ETTI), a technical and vocational training college in Embu, Kenya. It showcases practical student work, training programs, contact information, and a map location.

## Folder structure

```text
etti-website/
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
`-- images/
    `-- etti-logo-src.jpeg
```

## Add the real logo

1. Create a folder named `images` next to `index.html`.
2. Copy the institute logo into it.
3. Rename the file to `etti-logo-src.jpeg` (lowercase, no spaces).
4. Refresh the browser. The logo appears automatically.

The page already references the required relative path: `images/etti-logo-src.jpeg`.

## Run locally

Open `index.html` directly in a browser. The site uses no build step or external JavaScript library. An internet connection is needed for the Google Fonts, Unsplash images, map, and WhatsApp links.

## Publish with Netlify Drop

1. Visit [Netlify Drop](https://app.netlify.com/drop).
2. Drag the complete `etti-website` folder onto the upload area.
3. Netlify will provide a public URL when deployment finishes.

## Publish with GitHub Pages

1. Create a GitHub repository and upload all files, keeping the `images` folder structure.
2. Open **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select the main branch and root folder.
4. Save and open the GitHub Pages URL after deployment completes.

## Publish with Vercel

Import the repository at [vercel.com](https://vercel.com), select the project root, and deploy with the default settings. No build command is required.

## Contact verification

- Location: Pearl Center Building, 2nd Floor, Embu Town, Embu County, Kenya
- Postal address: P.O. BOX 1151-60100, Embu, Kenya
- Phone: 0729 722 790 or 0714 026 984
- WhatsApp: +254 729 722 790

## How to run

1. Save all files into a folder called `etti-website`.
2. Place the logo at `etti-website/images/etti-logo-src.jpeg`.
3. Open `index.html` in a browser.
4. Drag the folder to https://app.netlify.com/drop to publish.
