# vbhupathi.github.io

Personal portfolio of Venkata Bhupathi, live at https://vbhupathi.com.

A static site with no build step, served by GitHub Pages from the `main` branch.

## Files

- `index.html`: the whole site (HTML, CSS and JavaScript in one file)
- `resume.pdf`: the resume linked from the site
- `CNAME`: the custom domain, `vbhupathi.com`
- `.nojekyll`: tells GitHub Pages to serve the files as they are

## Updating

Edit `index.html` (or replace `resume.pdf`), then:

```
git add .
git commit -m "Describe the change"
git push
```

The site refreshes about a minute after the push.
