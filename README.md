## User Story

```
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to
different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the
title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page
reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the
deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn
profiles, and their profile on a third platform (Stack Overflow, Twitter) 
```

## Design

As with the previous portfolio Challenge, remember that "good" design is subjective; however, your site should look polished. Here are a few guidelines on what that means:

* Use mobile-first design.
* Choose a color palette so that your site doesn't just look like the default Bootstrap theme or an unstyled HTML site. Look into resources like [Coolors](https://coolors.co/) or another color scheme generator to help you create something that will stand out.
* Make sure the font size is large enough to read and that the colors don't cause eye strain.
* Consider using animations and React component libraries. Note that this will not affect your grade, but it may impact how potential employers gauge your knowledge.

## Technical Acceptance Criteria: 40%

Satisfies all of the preceding acceptance criteria plus the following:

* Application must use React to render content.
* Application has a single Header component that appears on multiple pages, with a Navigation component within it that uses react-router-dom to render About Me, Portfolio, Contact, and Resume sections.
* Application has a single Project component that’s used multiple times in the Portfolio section.
* Application has a single Footer component that appears on multiple pages.
* Application must be deployed to Netlify.

## Code Sources

* The following files contain code largely or entirely taken from class activity 20.23: package.json, vite.config, index.html, [App.jsx](./src/App.jsx), [main.jsx](./src/main.jsx), [Navigation.jsx](./src/components/Navigation.jsx)
* Code in [Form.jsx](./src/components/Form.jsx) was largely taken from class activity 20.16.
* https://stackoverflow.com/questions/67578409/check-prop-values-before-loading-component for if prop = something return x.  User [psdr03](https://stackoverflow.com/users/2079976/psdr03).
* Uses FontAwesome icons; TODO: Use their React module
* TODO: Look up looping over array of props objects

## HEADING

* For a project with no live version (i.e. a console application), `Portfolio.jsx` uses the value `<Project livelink="NULL" />`.