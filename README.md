# Monorepo templated based on Devcontainer/Hapi/Vue

This is a template repository for developing everything needed for a single modern web application/project in a monorepo fashion.
The template is based on the following technologies/frameworks:

- [devcontainer](https://containers.dev/) for reproducible and fully sandboxed development enviroments based on Docker containers
- [Hapi](https://hapi.dev) as a backend framework
- [PostgreSQL](https://www.postgresql.org/) as the database
- [Vue](https://vuejs.org/) as a frontend framework
- [Terraform](https://www.terraform.io/) for infrastructure-related tooling

This template also includes some examples of usage, namely a backend integration with [AdminJS](https://adminjs.co/) to provide a standard, easy to use admin dashboard on top of Objection/Schwifty models and database resources, as well as an example of integration between frontend and backend.

## How to use

0. install the required dependencies
   - [Visual Studio Code](https://code.visualstudio.com/)
   - [Docker](https://docs.docker.com/engine/install/)
   - [Visual Studio Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
1. clone this repository (or create a new one using this as a template)
2. open the repository inside Visual Studio Code
3. launch the development environment, either by clicking on "Reopen in Container" when prompted, or by opening the command palette (`CTRL + SHIFT + P`) and searching for the "Dev Containers: Rebuild an Reopen in Container" command
4. develop as you would normally, keeping in mind to always work inside the container (e.g., by using the VSCode internal terminal, which is automatically created inside)
5. to start the backend, go inside the `backend` directory and run `pnpm start`; to run the frontend, go inside the `frontend` directory and run `pnpm run serve`
