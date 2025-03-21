# Crypto app (KendoReact free components challenge)

This app is in response to the challenge proposed by KendoReact team.

## 10 KendoReact free components being used in this app

The list of 10 KendoReact free components used in this app is the following:

-> Button
-> Popup
-> Input
-> Fade
-> Push
-> Card
-> CardBody
-> Loader
-> Skeleton
-> SvgIcon

## Waku, a React 19 framework

In this app [Waku](https://waku.gg) has been used. It's a React 19 framework made by the author of [Jotai](https://jotai.org/). This means that server components and server actions are ready to be used. Server actions are used in this app to fetch data from the server once on the client side. The data is fetched in a way that the server action returns a client component passing to it a promise. In the returned client component `Suspense` plus `use` are used to access the resolved value of the promise without blocking the rendering of other parts of the UI.

## Tailwind.css, responsive

This app uses Tailwind.css and it's responsive.
