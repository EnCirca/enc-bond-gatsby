#!/bin/bash

BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

if [ -d "./node_modules" ] 
then
    printf "${BLUE}info${NC} node modules exists, good!\n"
else
    printf "${RED}warning${NC} node_modules does not exist, running npm install\n"
    npm install
fi

gatsby clean
gatsby develop --host 0.0.0.0 --port 8000
