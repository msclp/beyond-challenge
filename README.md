# Beyond Code Challenge

## How to run the project

Go to the project root and run
- `yarn install`
- `yarn start`

Backend API is sered on `http://localhost:4000/`,
and frontend applpication is served on port `http:/localhost:3000/`

Frontend should automatically open in a browser

## Motivations

Project is done as a monorepo with the help of Lerna.
Client app and servver app are separate packages that can be run and developed independently.
 

## Things to keep in mind

1. There are not tests. Test should be written!
2. Global TypeScript configuration. Submodules could extend from it.
3. There is no linter. One could write a global ESlint config so that packages follow the same 
   styling rules.
 4. There are no routing on the frontend part. Real app could have routs. Next.js could easily help
    with that.
5. UI is a mess, but I run out of time to polish it. The reason is that I changed the concept of
   how to give insights to user.
