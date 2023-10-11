# Notes and Explanations

## Viewing on Vercel

You can see the code deployed [here](https://jason-gonzales-mdb.vercel.app/)

## Rationale

Is this a prototype or a the beginning of a functional project? ¡¿Por que no los dos?!

Many times a prototype ends up becoming the starting place for a real project, so I _mostly_ thought about it that way. I hate making throw away work! That said, when prototyping you need to move fast because it is possible the entire thing is discarded. So you'll see I make various gestures to support growth with simple things like not hardcoding variables that would best be set programmatically somehow. For example I set a lot of layout functions with vars. In general these vars can get scattered about so it's good to give them helpful names and put them someplace reasonable.

Opted for nextjs, here's why.

I know it well and have been using it for the past two years. I can move fast and deliver many features with precision.

I thought about using a more bare-bones approact to demonstrate the depth of my knowledge with React, but Nextjs is still React under the hood and only
helps me move faster for this technical challenge. If this were a work project there would need to be different considerations of course.

Nextjs is opinionated and establishes a convention-over-configuration approach that helps teams and individuals move fast. The things that helped me deliver this challenge for example include:

- routing
- tailwind CSS
- tons of config decisions (linting, etc)

## Decisions In No Particular Order

I opted to load the data from a JSON file to speed things up. Loading it via a fetch seemed silly and artificial in order to demonstrate I know how to do that. I do. I wanted to focus on more difficult parts of this challenge.

I opted to not make a footer in the layout. It's not hard to add one for starters, but the provided design looks more like an application and most times there's no need for a footer.

I made "/constants/nav-items.js" to make it easy to add nav items with data / json. This would be helpful to build this nav based on RBAC or other dynamic needs.

An assumption about how the list of datasources would be loaded. If there are a reasonable amount (like not thousands) it makes sense to render this page server side rather than load the page and then make a fetch for the data sources.

Ultimately is Tailwind CSS the way to go? It depends!

To help teams move fast it's actually good to hide a lot of the CSS one way or another. One way is to use styled components that can have local overrides as needed.
But CSS is technically more efficient for rendering. As ever, I'd make a call on this tradeoff when you see performance starting to be affected by using styled components.

That said, in my experience styled components have never caused rendering problems

I added additional items to data sources to demonstrate virtualizer still works without a full "row" of tiles and duplicated a bunch so you could actually see the virtualized rendering function.

I opted to move images to public folder for convenience during this challenge. It's fine but usually in real project it's different -- read below for SVG thoughts, but also some images might come from an assets folder or an s3 bucket.

Added a "magic number" to set the size of the scroll window for tiles. This is a tradeoff of speed / value / maintainability. When the layout changes in the future we'll need to fix this magic number. In that same future, it's pretty likely that will be a simple change. Or we could spend more time to calculate it better or use a an obscure CSS approach. I didn't take the time to find the obscure CSS approach. React Window already requires some weird CSS as it is and that took a while to sort out. We could set the heigh JS, but that is less efficient and creats a weird exception to how this whole project does styling.

I discovered a weird bug where Tailwind doesn't work reliably when you assign fixed pixel measurements via template literals, so I had to use the `style` property of React components to set fixed heights and widths. Bizarre. I'm not super familiar with Tailwind, but was surprised to run into this -- it set me back trying to figure out why my layouts would randomly stop looking the same.

## Filtering

I opted for a very simple filter. You type the name and the results are the name where any of the typed characters are included in the name.
It's also case insensitive because I feel that's a better experience and expected by most people. Additional super nicey niceties could be to strip and/or tokenize whitespace for names like "Microsoft Access". Just didn't get to this, but it should be done.

## SVG

I started off doing what I think is the right way, making a component for each SVG icon used, but I quickly got worried about taking too much time for the challenge and for the remainder opted for a simpler, faster and still OK approach using the Nextjs Image tag which is still quite organized. That said, for SVG that needs to be styled dynamically I'd need each SVG to be a component that receives props. But even then things can get hairy because you're now styling with JS instead of CSS. I'm sticking with CSS for this challenge because it was faster to build with!

## Tests

I would always make a few integration tests. My stance on testing is integration tests > unit tests and that tests should support use-case coverage and not code coverage. I would have made more tests, but again time was short so I deprioritized this because I conceived of it as a prototype that could grow up to be a big boy someday.

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
- Collapsible side nav, notice I have already defined vars in there to pave the way for this
- made SVG components more flexible (take fill colors as vars for example)
- made it window scroll so the scroll bar isn't in the middle of the page
- make the form elements (Input and Dropdown) a bit more flexible and perhaps composable so you could quickly make a text, number, password input etc.

## Running the development environment locally

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
