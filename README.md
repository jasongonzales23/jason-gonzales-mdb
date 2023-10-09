# TODO

- [ ] clean up warnings
- [ ] break form up into components
- [x] find/replace all instances of 1024px and other magic numbers
- [x] more svg cleanup?
- [x] bottom cog
- [x] include Jotai for second page
- [x] make a simple filter
- [x] Integrate react-window
- [x] fix search field
- [x] add icons to tiles
- [x] add Pro Tip!
- [x] Make a page for chat-project/add-datasource layout
- [x] Create layout

- [x] side nav
- [x] top bar

- [ ] Filtering the list
  - [ ] What should 'Filter By' do? Existing app has 'Sort By' which is a bit unclear because if I 'sort by AWS' and type postgres is my result
        postgres on AWS? Methinks not!
- [ ] Figure out what I'll need Jotai for
- [ ] route to other pages w/ a placeholder in the page, highlight nav etc

- BONUS
  - [ ] make side nav expandable
  - [ ] theme switching

# Notes for me

Opted for nextjs, here's why.

I know it well and have been using it for the past two years. I can move fast and deliver many features with precision.

I thought about using a more bare-bones approact to demonstrate the depth of my knowledge with React, but Nextjs is still react and only
helps me move faster for this technical challenge. If this were a work project there would need to be possibly different
considerations of course.

Nextjs is opinionated and establishes a convention-over-configuration approach that helps teams and individuals move fast. The
things that helped me deliver this challenge for example include:

- routing
- tailwind CSS
- tons of config decisions (linting, etc)

Opted to not make a footer in the layout. It's not a challenge to add one for starters, but this looks more like an application and most times there's no need for a footer.

Made "/constants/nav-items.js" to make it easy to add nav items with data / json. Would be helpful to build this nav based on RBAC or other dynamic needs.

An assumption about how the list of datasources would be loaded. If there are a reasonable amount (like not thousands) it makes sense to render this page server side rather than load the page and then make a fetch for the data sources.

Ultimately is Tailwind CSS the way to go? Maybe?

To help teams move fast it's actually good to hide a lot of the CSS one way or another. One way is to use styled components that can have local overrides as needed.
But CSS is technically more efficient for rendering. As ever, I'd call this tradeoff when you see performance starting to be affected by using styled components.

In my experience styled components have never caused rendering problems

added additional items to data sources to demonstrate virtualizer still works without a full "row" of tiles.

Opted to move all images to public folder for convenience during this challenge. It's fine but usually in real project it's different (explain how)

Is this a prototype or a the beginning of a functional project? ¡¿Por que no los dos?!

Many times a prototype ends up becoming the starting place for a real project, so I _mostly_ thought about it that way. I hate making throw away work! That said, when prototyping you need to move fast because it is possible the entire thing is discarded. So you'll see I make various gestures to support growth with simple things like not hardcoding variables that would best be set programmatically somehow. For example I set a lot of layout functions with vars. In general these vars can get scattered about so it's good to give them helpful names and put them someplace reasonable.

Added a "magic number" to set the size of the scroll window for tiles. This is a tradeoff of speed / value / maintainability. When the layout changes in the future we'll need to fix this magic number. In that same future, it's pretty likely that will be a simple change. Or we could spend more time to calculate it better or use a an obscure CSS approach. I didn't take the time to find the obscure CSS approach. React Window already requires some weird CSS as it is and that took a while to sort out. We could set the heigh JS, but that is less efficient and creats a weird exception to how this whole project does styling.

## Tests!

I would always make a few integration tests. My stance on testing is integration tests > unit tests and that tests should support use-case coverage and not code coverage. I would have made more tests, but again time was short so I deprioritized this because I conceived of it as a prototype that could grow up to be a big boy someday.

## Filtering

I opted for a very simple filter. You type the name and the results are the name where any of the typed characters are included in the name.
It's also case insensitive because I feel that's a better experience and expected by most people. Additional super nicey niceties could be to strip and/or tokenize whitespace for names like "Microsoft Access". Just didn't get to this, but it should be done.

## SVG

I started off doing what I think is the right way, making a component for each SVG icon used, but I quickly got worried about taking too much time for the challenge and for the remainder opted for a simpler, faster and still OK approach using the Nextjs Image tag which is still quite organized. That said, for SVG that needs to be styled dynamically I'd need each SVG to be a component that receives props. But even then things can get hairy because you're now styling with JS instead of CSS. I'm sticking with CSS for this challenge because it was faster to build with!

## If you want to add more datasources for virtualized rendering

- Add an svg logo to the public folder (for a real world situation we might use a headless CMS like sanity or just an S3 bucket)
- Then add an item to /datasources/data.js
- Add and object that looks like this to the array:

  ```
  {
    name: "string",
    icon: "filename w/ extension"
  }

  ```

## Things I'd do next or with more time

- Support more responsive views like iPad, is phone even a reasonable use-case?
- Collapsible side nav, notice I have vars in there to pave the way for this
- made SVG components more flexible (take fill colors as vars for example)
- made it window scroll so the scroll bar isn't in the middle of the page

## Running the development environment

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Email

Hi Jason,

Congratulations, we’d love to take you forward to the next round, which entails a take-home task and a 30 minute follow-up call to review.

We ask that you timebox the challenge (as shown below) and would expect you to spend no more than 4 hours maximum on it. We are aware that in the real world you would likely have considerably more time to spend on the given task, which we take into account when we review your output.

We understand that this involves a significant time commitment from candidates and we will therefore be offering a payment of $200 USD on completion of the task. We greatly appreciate you taking the time to complete this challenge.

Challenge Payment Request Form: https://forms.gle/qEdTqDBH7Q6mfaNR8

Task

Create components with React.js as shown in this design spec.
We’d like you to focus on the Select your datasource screen.
If you have time, the Database form screen is a bonus.
Build styles with CSS or styled-components.
Create a virtual loading for the contents.
Publish or push the final code into Github or Vercel, etc.

What will we be evaluating?

Set up of the project.
Atomic design (atoms, molecules, organisms, etc) – how do you construct and organise the components?
Pixel perfect or quality of execution that mirrors or improves on the design spec.
State management – persisting data in the browser (Redux, Joltai).

Submission
When you have completed the task please send the link to me (abi@mindsdb.com), Seto (sebastian.tobon@mindsdb.com), David (david.fraser@mindsdb.com), Tyler (tyler@mindsdb.com) and Tom (tom@mindsdb.com) in advance of your review call.

Use either of these links to schedule a call to review your completed task:

https://calendly.com/d/294-7pg-bk3/sfee-challenge-review-1
https://calendly.com/d/4rt-w9h-77n/sfee-challenge-review-2

Good luck and we can’t wait to see your output!
