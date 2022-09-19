Sick of HackerRank or LeetCode? Don't worry, this homework task is designed to be closer to our daily life as a Fresher. We believe that your coding skills, problem solving, business logic, and communication skills are all equally important.

This test is designed to be finished in around 2-3 hours. If you have any questions/difficulties please contact us. 

Let's get started and hope you enjoy!

## Prerequisites

To complete this test, you need to have:

- [Node.js](https://nodejs.org) (v16.17.0 recommended)
- [PostgreSQL](https://www.postgresql.org/download)
- [Figma](https://www.figma.com)

## Getting Started

First, install dependencies and prisma client:

```bash
yarn install
```

Next, seed your database:

```bash
yarn prisma db push
node prisma/seed.js
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Task 1

Fresh Amplify is an Australia's leading Capital Markets Management System. Our goal is make it easier for listed companies to directly engage with investors. Helping companies better understand their shareholders is an important part of our feature bundle. 

We were recently given access to some shareholder information, as a team we decided to make this data viewable by our clients. We can then assess if the data is valuable and how they prefer to use it.
 
Your task is to build a table view to display this information. The design can be found in `design.fig` in the repo. You can `GET /api/shareholders` for all shareholder information. This is just an example of how you can get the data, you can change anything if you want.
 
You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Task 2

Okay, now let's imagine the first task has been released for more than a month.
We have realised that the page gets a lot of traffic, but only 5% are returning users. This indicates the value we are providing isn't solving the user's problem.

Using data analytics and feedback from our clients we have identified several issues. 

1. There are too many shareholders, the client is unable to find the exact shareholder they are looking for. 
2. The client doesn't want to see all their shareholders, they only care about the top 50 shareholders (the shareholders with the largest holding).
3. They would like to use our data within external analysis tools, there is currently no way for them to export it.
4. Some of our clients use other methods to collect shareholder emails, they are unable to combine the two lists to check for duplicates.
5. When creating an email campaign, they like to target new shareholders (have held for less than one month). It would be good for them to be able to identify these shareholders.
6. A client uses this list to reach out directly to individual shareholders, they are struggling with keeping track of who they have already spoken to, other than with a pen and paper. 
7. Some clients care more about how long shareholders have held their stock rather than when they first started holding, they are unable to identify these shareholders. 

We'd like you to pick 1-2 problems and come up with an idea to solve them. Use your problem solving skills and creativity to build a suitable solution. If you hit any blockers feel free to email me jimmy@freshamplify.com and I'll be happy to help out.

## Submission
Please follow the following steps to submit your work:

1. Save your work
2. Run `rm -rf .next node_modules` to delete `.next` and `node_modules`
3. Compress everything into a `.zip` file
4. Email the `.zip` file to jimmy@freshamplify.com

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [TailwindCSS Documentation](https://tailwindcss.com) - learn about TailwindCSS.
- [Prisma Documentation](https://www.prisma.io) - learn about Prisma.

If you have any question, do not hesitate to contact us.

Good luck!
