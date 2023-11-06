# React Profile

## Introduction

This code is for a website showing a portfolio of my work, using React. This portfolio began as a class project, with the following requirements listed below (written from the perspective of a job recruiter):

```
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria / App Logic

The qualifications for the assignment to be met were the following:

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

## Deployment

Satisfies all of the preceding acceptance criteria plus the following:

* Application must be deployed to Netlify.

## Code Sources

* The following files contain code largely or entirely taken from class activity 20.23: [package.json](./package.json), [vite.config.js](./vite.config.js), [index.html](index.html), [App.jsx](./src/App.jsx), [main.jsx](./src/main.jsx), and [Navigation.jsx](./src/components/Navigation.jsx)
* Code in [Form.jsx](./src/components/Form.jsx) was largely taken from class activity 20.16.
* I consulted [this StackOverflow thread](https://stackoverflow.com/questions/67578409/check-prop-values-before-loading-component) for changing return values of a React component depending on the props passed in.  User [psdr03's](https://stackoverflow.com/users/2079976/psdr03) answer was the most helpful.
* [Dominic's](https://stackoverflow.com/users/414062/dominic) answer in [this thread](https://stackoverflow.com/questions/37609049/how-to-correctly-catch-change-focusout-event-on-text-input-in-react-js) alerted me to the `onBlur` event for text focus.  I use this in the contact page to alert the user if their input is invalid or blank.
* The footer uses FontAwesome icons.

## Future Development

* Use the FontAwesome React module instead of individual calls.
* Add `<Project />s` by looping over array of props objects, as opposed to calling them individually.

## Additional Notes

* For a project with no live version (i.e. a console application), `Portfolio.jsx` uses the value `<Project livelink="NULL" />`.

---

(c) 2023 Giancarlo Whitaker