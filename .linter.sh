#!/bin/bash
cd /home/kavia/workspace/code-generation/engagequest-62271-baaff81c/engagequest_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

