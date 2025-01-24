# Welcome to Orlando Devs!
This is the main respository for version 3 of our website.

## Local Development
This website is built on [Astro](https://docs.astro.build/en/getting-started/) with a bit of [React](https://react.dev/) sprinkled in. Please make yourself familiar with those if you are not already. The site is deployed on [Netlify](https://www.netlify.com/) and has support for the `netlify dev` command.

### Running Locally
Ensure that package dependencies are installed via `npm install`. After installed, you can run the website using `npm run dev` or (if you have netlify installed) `netlify dev`. That will expose a local version of the website at either `localhost:4321/` (if running `npm run dev`) or `http://localhost:8888/` (if running `netlify dev`). 

Either of these commands creates a file watcher, so any changes made while running will get hot-loaded into the browser for you to view. 

# Contributing
Thank you for your interest in improving the Orlando Devs website! This is an open platform, so if something needs changing, you can change it! Fork this repository to your own, make the changes, and open a pull request to `OrlandoDevs/website@main`. An admin will review your request and respond on the thread if necessary. Before merging, all GitHub actions must return successfully. 


## Group Adminsitration
If you are a group admin and want to make an update to your group's profile, clone the repo and edit your group file under `website/src/content/groups/your-group.md`. Include or omit as much as you feel necessary.

## Event Administration 

If you wish to add a new event, please check out the respository and make a new branch with the name of your event. Run the `new-event.sh` or `new-event.ps` script according to your operating system, proving the name and date of the event. For example, `./new-event.sh 2023-11-21 'My Event Name'"`. This will create a new file in `src/content/events/` with the date and name of your event. Fill out all the necessary information and remove whatever is not. Commit the new file and open a pull request to the main branch. 

## Going Further
If you have your own Netlify account and want to test the GitHub actions ahead of time, install [Act](https://github.com/nektos/act). Create a `.vars` file with `NETLIFY_SITE_ID` and `BRANCH_NAME` set. Create a `.secrets` file and set `NETLIFY_AUTH_TOKEN`. The format for both files is `BRANCH_NAME="my-cool-branch"` in pairs. Once your files are in place, run  `act workflow_dispatch -s --secret-file .secrets`. Assuming all of your code compiles, the runner should complete and you should have a staging version of the site deployed at the preview URL provided. Example output of a successful job:

```
Build logs:         https://app.netlify.com/sites/odevs-pipeline-testing/deploys/678d0d409e40cd228387f837
Function logs:      https://app.netlify.com/sites/odevs-pipeline-testing/logs/functions?scope=deploy:678d0d409e40cd228387f837
Edge function Logs: https://app.netlify.com/sites/odevs-pipeline-testing/logs/edge-functions?scope=deployid:678d0d409e40cd228387f837
Website draft URL:  https://build-actions--odevs-pipeline-testing.netlify.app
```