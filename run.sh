#!/bin/bash

TS_FILE="$1"

while inotifywait -e modify "$TS_FILE"; do
    bun "$TS_FILE"
done
