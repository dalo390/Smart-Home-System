#!/bin/bash

echo "Clearing old build"

psql -U postgres -c "DROP DATABASE IF EXISTS team8db;"
psql -U postgres -c "DROP USER IF EXISTS home_manager;"
psql -U postgres -c "DROP USER IF EXISTS home_owner;"

echo "Creating new build"

echo "Initializing database: team8db"
echo "psql -d team8db -U postgres -f ./home.sql"
psql -d team8db -U postgres -f ./home.sql

echo "Inserting historical info into database: team8db"
#TODO


# FIRST:
# you need to install, enable, and start postgres on your local machine
# instructions for this can be found online

# HOW TO:
# 1. run this script in your terminal like so:      `./init_db.sh`
# 2. preferably in a separate terminal:             `psql -U postgres`
# 3. to see the database we just made (team8db):    `\l`
# 4. to connect to this database:                   `\c team8db`
# 5. example query:                                 `select * from sensor;`
