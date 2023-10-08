# TODO

- [ ]
- [x] Make a page for chat-project/add-datasource layout
- [x] Create layout

  - [ ] side nav
    - [ ] bottom cog
  - [x] top bar

- Components to make

  - [ ] input
  - [ ] w/ icon child?
  - [x] left nav
  - [x] top bar

- [x] Make a decision about routing
- [ ] Filtering the list
  - [ ] What should 'Filter By' do? Existing app has 'Sort By' which is a bit unclear because if I 'sort by AWS' and type postgres is my result
        postgres on AWS? Methinks not!
- [ ] Integrate virtualized
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

## Things I'd do next or with more time

- Support more responsive views like iPad, is phone even a reasonable use-case?
- Collapsible side nav, notice I have vars in there to pave the way for this
- made SVG components more flexible (take fill colors as vars for example)

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
