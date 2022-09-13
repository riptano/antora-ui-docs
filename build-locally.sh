#!/bin/bash

# get the product docset that is going to be run

# First - do you need to rebuild the APIs (REST, Document, DevOps) as part of your build?

read -p 'Do you need to rebuild the APIs? (Y or N)' api

if [ $api = "Y" ] || [ $api = "y" ];
  then
    case $1 in
      ('dev-ad4d' | 'dev-classic' | 'dev-serverless' ) echo "product: $1";;
      (*) echo "pick dev-ad4d, dev-classic, or dev-serverless" && exit;;
    esac
  else
    case $1 in
      ('ad4d' | 'classic' | 'classic-with-sg' | 'serverless' | 'serverless-with-sg' ) echo "product: $1";;
      (*) echo "pick ad4d, classic, classic-with-sg, serverless, or serverless-with-sg" && exit;;
    esac
fi

# Function to check software versions for prereq updates

version_greater_equal()
{
    printf '%s\n%s\n' "$2" "$1" | sort --check=quiet --version-sort
}

# check if nvm is running and up-to-date

echo "Checking prerequisites are up-to-date"

# Look for profile information in these three files

. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc

nvmversion=$(nvm --version)
echo "nvm version: ${nvmversion}"

# If the version is not up-to-date, do the install/update
version_greater_equal "${nvmversion}" 0.39.1 || echo "Updating/installing nvm - please be patient, this takes time"; brew update; brew install nvm;

# check if node is running and the version

nodeversion=$(node -v)
echo "node version: ${nodeversion}"
version_greater_equal "${nodeversion}" 'v16.13.1' || echo "Updating/installing node"; nvm install 16; nvm use 16;

# check if npm is running and the version

npmversion=$(npm -v)
echo "npm version: ${npmversion}"
version_greater_equal "${npmversion}" 8.5.5 || echo "Updating/installing npm"; npm install;

# check the antora version

antoraversion=$(npm info antora version)
echo "antora version: ${antoraversion}"
version_greater_equal "${antoraversion}" 3.0.1 || echo "Updating antora"; npm update antora;

# Next, do the actions required for individual docset builds
# - remove the antora symlinks that exist
# - set the antora symlinks to the correct product docset
# - finally, run the corresponding product docset playbook

case $1 in

  ad4d)
    echo "You are building the ad4d docset."
    echo "Remove and remake the antora.yml symlinks."
    cd docs-src/astra-core
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../../../stargate/docs/docs-src/stargate-develop
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../../../../dse68-docs/docs-src/graph
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../search
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../spark
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../../../astra-docs

    echo "Run the ad4d build."
    npm run build:local:ad4d
    ;;

  dev-ad4d)
    echo "You are building the dev-ad4d docset."
    echo "Remove and remake the antora.yml symlinks."
    cd docs-src/astra-core
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../../../stargate/docs/docs-src/stargate-develop
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../../../../dse68-docs/docs-src/graph
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../search
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../analytics
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../spark
    rm antora.yml; ln -s antora-ad4d.yml antora.yml
    cd ../../../astra-docs

    echo "Run the dev-ad4d build."
    npm run build:dev-ad4d
    ;;

  classic)
    echo "You are building the classic docset."
    echo "Remove and make antora.yml symlinks."
    cd docs-src/astra-core
    rm antora.yml; ln -s antora-classic.yml antora.yml
    cd ../astra-develop
    rm antora.yml; ln -s antora-classic.yml antora.yml
    cd ../..
    echo "Run the classic build."
    npm run build:local:classic
    ;;

  dev-classic)
    echo "You are building the dev-classic docset."
    echo "Remove and make antora.yml symlinks."
    cd docs-src/astra-core
    rm antora.yml; ln -s antora-classic.yml antora.yml
    cd ../astra-develop
    rm antora.yml; ln -s antora-classic.yml antora.yml
    cd ../..
    echo "Run the dev-classic build."
    npm run build:dev-classic
    ;;

  classic-with-sg)
    echo "product is classic-with-sg"
    echo "make antora.yml links"
    cd docs-src/astra-core
    rm antora.yml
    ln -s antora-classic-with-sg.yml antora.yml
    cd ../../../stargate/docs/docs-src/stargate-develop
    rm antora.yml
    ln -s antora-astra-classic-with-sg.yml antora.yml
    cd ../../../../astra-docs
    echo "run the build"
    npm run build:local:classicsg
    ;;

  serverless)
    echo "product is serverless"
    echo "make antora.yml links"
    cd docs-src/astra-core
    rm antora.yml
    ln -s antora-serverless.yml antora.yml
    cd ../astra-develop
    rm antora.yml
    ln -s antora-serverless.yml antora.yml
    cd ../..
    echo "run the build"
    npm run build:local:serverless
    ;;

  dev-serverless)
    echo "You are building the dev-serverless docset."
    echo "Remove and make antora.yml symlinks."
    cd docs-src/astra-core
    rm antora.yml; ln -s antora-serverless.yml antora.yml
    cd ../astra-develop
    rm antora.yml; ln -s antora-serverless.yml antora.yml
    cd ../..
    echo "Run the dev-serverless build."
    npm run build:dev-serverless
    ;;

  serverless-with-sg)
   echo "product is serverless-with-sg"
    echo "make antora.yml links"
    cd docs-src/astra-core
    rm antora.yml
    ln -s antora-serverless-with-sg.yml antora.yml
    cd ../../../stargate/docs/docs-src/stargate-develop
    rm antora.yml
    ln -s antora-astra-serverless-with-sg.yml antora.yml
    cd ../../../../astra-docs
    echo "run the build"
    npm run build:local:serverlesssg
    ;;
esac

echo
read -p "Do you want to start a local web server for viewing the generated docs? (Y or N)" server

if [ $server = "Y" ] || [ $server = "y" ];
  then
    npm i -g serve; serve
  else
    exit;
fi
