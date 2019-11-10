# React A11y Workshop 
Instructor: Erin Doyle  
  
Thank you for signing up for the workshop on Building Accessible Web Apps with React! 
Please read through this entire document and follow the steps to get set up. 
Please complete each step *before* the workshop starts to ensure that you are ready to go from the start!  

## Contents
1. [Set up the Dev Environment](#dev-env-setup)
2. [Clone and Run the Test Application](#clone-and-run-the-test-application)
3. [Pre-Class Resources](#pre-class-resources)
4. [Lesson Plan](#lesson-plan)


## Dev Env Setup

Please follow the steps to get your machine set up **_before the workshop_** to ensure that you're ready to 
code from the start. 

### Step 1: Install core tools
Please ensure that your machine has the following core tools installed:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/) v10.13 or higher
    * NVM is the easiest way to manage Node. [Its setup instructions
    here](https://github.com/creationix/nvm#installation). Then run `nvm install
node && nvm alias default node`, which installs the latest version of Node.js
and sets up your terminal so you can run it by typing `node`. With nvm you can
install multiple versions of Node.js and easily switch between them.
    * New to [npm](https://docs.npmjs.com/)?
* An editor of your choice that you are comfortable using

### Step 2: Install testing tools
When you've verified that your machine has the above requirements, install the following tools: 
  
* aXe browser plugin:
    * Chrome: https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd
    * Firefox: https://addons.mozilla.org/en-us/firefox/addon/axe-devtools/
* tota11y browser plugin:
    * Chrome: https://chrome.google.com/webstore/detail/tota11y-plugin-from-khan/oedofneiplgibimfkccchnimiadcmhpe?hl=en
    * Firefox: https://addons.mozilla.org/en-US/firefox/addon/tota11y-accessibility-toolkit/
* High Contrast Mode:
    * High Contrast browser plugin:
        * Chrome: https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph
    * Windows - High Contrast Mode:
        * See here for how to enable: https://support.microsoft.com/en-us/help/13862/windows-use-high-contrast-mode
    * Mac - Accessible Display Preferences:
        * See here for how to customize: https://support.apple.com/guide/mac-help/change-accessibility-display-preferences-unac089/mac
* Screen Reader:
    * Mac - VoiceOver:
        * See here for how to use and familiarize yourself with: https://help.apple.com/voiceover/info/guide/10.11/
    * Windows - NVDA:
        * Download: https://www.nvaccess.org/download/
        * See here for how to use and familiarize yourself with: https://www.nvaccess.org/files/nvda/documentation/userGuide.html?

#### Optional
If you are using a Mac and would like to also be able to test Windows-only based tools such as the NVDA screen reader,
High Contrast Mode, and IE or Edge browsers then you can do so by setting up a Windows Virtual Machine on your Mac.
See here for step by step instructions: [How to Set Up a Windows VM](docs/VM_SETUP.md)

### Step 3: Configure
Note that different browsers may have different keyboard control options available. Most modern browsers support pressing Tab 
to move forward or Shift + Tab to move backwards through the focusable elements, but some browsers have their own idiosyncrasies:

Safari doesn't allow you to tab through links by default; to enable this, you need to: 
1. open Safari's Preferences
2. go to Advanced
3. check the Press Tab to highlight each item on a webpage checkbox

Firefox for the Mac doesn't do tabbing by default. To turn it on, you have to: 
1. go to Preferences > Advanced > General
2. then uncheck "Always use the cursor keys to navigate within pages"
3. Next, you have to open your Mac's System Preferences app
4. then go to Keyboard > Shortcuts
5. then select the All Controls radio button


## Clone and run the test application
1. Clone this project
2. Install dependencies by entering `npm install`
3. Run by entering: `npm run start`
4. Open `http://localhost:3000` in a browser

_**NOTE:** the HEAD revision of the master branch contains the fully completed workshop source.  We will be checking out
various revision tags to step through the evolution of improving this code with the first being completely inaccessible and 
ending with a version that has all accessibility findings resolved._


## Pre-class Resources

Please review the following materials to help you better prepare for the workshop:

### Accessibility
Here is a recording of a presentation I gave previously that can serve as an introduction to Accessibility, 
what it's about and why it's important:
* [Intro to Accessibility](https://drive.google.com/open?id=12W8g3YCaFJZWReiOgtY2D_n5aHsM6t8y)

Here are some short videos that may be helpful to watch that we won't have time to watch during the workshop and will help us hit the ground running:
* [Perspective Videos](https://www.w3.org/WAI/perspective-videos)
* [Screen Reader Basics: VoiceOver](https://youtu.be/5R-6WvAihms)
* [Screen Reader Basics: NVDA](https://youtu.be/Jao3s_CwdRU)

### Git basics
For the workshop you'll need to be able to check out specific tag revisions using git.  Please familiarize yourself with how to do this.
* [Git Basics Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) See section "Checking out Tags".

### ES6
If you're not familiar with ES6, you'll want to start here. Read one or both.  
* [ES6 Interactive Guide](http://stack.formidable.com/es6-interactive-guide/#/)
* [ES6 Guide](https://mrzepinski.gitbooks.io/es6-guide/content/). Only sections 1-5 recommended.

### React Foundations
If you're not comfortable with React, you should read through the following resources:  
* [Thinking in react](https://facebook.github.io/react/docs/thinking-in-react.html)
* [9 things every react beginner should know](https://camjackson.net/post/9-things-every-reactjs-beginner-should-know)
* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)


## Lesson Plan
The lesson plan we'll be following for this workshop can be found here: [Lesson Plan](docs/LESSON_PLAN.md)
