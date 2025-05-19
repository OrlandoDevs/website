# Welcome to Orlando Devs

This is the main respository for version 3 of our website.

## Local Development

This website is built on [Astro](https://docs.astro.build/en/getting-started/) with a bit of [React](https://react.dev/) sprinkled in. Please make yourself familiar with those if you are not already. The site is deployed on [Cloudflare](https://www.cloudflare.com/). Cloudflare will pull the dev branch and display at [dev.orlandodevs.com](https://dev.orlandodevs.com). When you are satisfied, merge dev to main and leadership will approve.

## Running Locally (Needs Updated)

Ensure that package dependencies are installed via `npm install`. After installed, you can run the website using `npm run dev` or (if you have netlify installed) `netlify dev`. That will expose a local version of the website at either `localhost:4321/` (if running `npm run dev`) or `http://localhost:8888/` (if running `netlify dev`).

Either of these commands creates a file watcher, so any changes made while running will get hot-loaded into the browser for you to view.

## Contributing

Thank you for your interest in improving the Orlando Devs website! This is an open platform, so if something needs changing, you can change it! Fork this repository to your own, make the changes, and open a pull request to `OrlandoDevs/website@main`. An admin will review your request and respond on the thread if necessary. Before merging, all GitHub actions must return successfully.

## Group Administration

If you are a group admin and want to make an update to your group's profile, clone the repo and edit your group file under `website/src/content/groups/your-group.md`. Include or omit as much as you feel necessary. 

## Event Administration

If you wish to add a new event, please check out the repository and make a new branch with the name of your event. Run the `new-event.sh` or `new-event.ps` script according to your operating system, proving the name and date of the event. For example, `./new-event.sh 2023-11-21 'My Event Name'"`. This will create a new file in `src/content/events/` with the date and name of your event. Fill out all the necessary information and remove whatever is not. Commit the new file and open a pull request to the main branch. 

### Troubleshooting new-event.sh|.ps1

If you are unable to run the script, make it executable by running `sudo chmod +x ./scripts/new-event.sh` on Mac/Linux.

On Windows, open PowerShell as an administrator by right-clicking the PS icon and choosing "Run as Administrator". In the new window, run this: `Set-ExecutionPolicy Unrestricted`. You should now be able to run the `new-event.ps1` script after that completes. You should then set your execution policy back to `Restricted` once you are finished.
