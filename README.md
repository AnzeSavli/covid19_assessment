<p align="center">
  <img width="320" height="200" src="./assets/morela-logo.svg">
</p>

# Assignment

Implement logic inside `addon/covid19_assessment` module where unregistered user can enter the following data:

- Do you have fever?
- Last measured temperature (if first answer is false, do not show this input)
- Do you cough?
- Do you have sever headache?
- Were in contact with someone who has COVID-19?
- What is your age?
- First and Last name
- Email

Data must be persisted to Odoo database.
Once user sends this data they should be redirected to page where it says that they will be contacted once their data is processed, and they should also get an email saying that we received their data.

# Development

## Setup
We use Docker for local development of additional modules for Odoo. Before you start docker container make sure directory `/addos` and `/etc` has read rights so container can access the directory.

* To give all permissions to directories you can run the following commands from terminal:

    ```shell
    sudo chmod -R 777 addons
    sudo chmod -R 777 etc
    ```

* To install images and start the containers run:

    ```shell
    docker-compose up -d
    ```

* Then open `localhost:8069` to access Odoo. If you want to start the server with a different port, change **8069** to another value in **docker-compose.yml**:

    ```yaml
    ports:
    - "8069:8069"
    ```

* Log file is located at **etc/odoo-server.log**
  
## Useful docker commands
* To stop containers use `docker-compose stop`
* To start containers use `docker-compose start`
* To restart containers use `docker-compose restart`

_If you have Docker Desktop you can manage containers there_

# What is Odoo addon

The **addons** folder contains custom addons. Inside are existing modules we developed for specific use cases plus scaffold of odoo module (my-module).

# Version control

Checkout new branch from `main` branch and develop the assignment there. Do not merge your code to any other branch than yours.
