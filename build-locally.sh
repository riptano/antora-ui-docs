#!/bin/bash

# get the product docset that is going to be run

case $1 in
  ( 'landing-pages' ) echo "product: $1";;
  (*) echo "pick landing-pages" && exit;;
esac

echo "checking prerequisites"

# check if nvm is running and up-to-date

. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc

nvmversion=$(nvm --version)
echo "nvm version: ${nvmversion}"

if [ $nvmversion != 0.39.0 ]; then
  # update homebrew list of packages and either update or install nvm
  echo "Updating/installing nvm - please be patient, this takes time"
  brew update
  brew install nvm
fi

# check if node is running and the version

nodeversion=$(node -v)
echo "node version: ${nodeversion}"

if [ $nodeversion != 'v16.13.1' ]; then
  # use nvm to install version 16 and change nvm to use it
  nvm install 18
  nvm use 18
fi

# check if npm is running and the version

npmversion=$(npm -v)
echo "npm version: ${npmversion}"

if [ $npmversion != '8.10.0' ]; then
  npm install
fi

# check the antora version

antoraversion=$(npm info antora version)
echo "antora version: ${antoraversion}"

if [$antoraversion != 3.0.1 ]; then
  npm install antora
fi

# remove the antora symlinks that exist
# and set the antora symlinks to the correct product docset
# finally, run the corresponding product docset playbook

case $1 in

  landing-pages)
    echo "product is landing-pages"
    echo "make antora.yml links"
    cd docs-src/home-core
    echo "removing antora symlinks"
    rm antora.yml
    echo "adding correct symlink"
    ln -s antora-landing-pages.yml antora.yml
    cd ../..
    echo "run the build"
    npm run build:local:landing-pages
    ;;

esac
npm i -g serve
serve
