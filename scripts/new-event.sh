#!/bin/bash

set -e 

# Function to display help message
function help {
  echo "Usage: ./scripts/new-event.sh DATE NAME"
  echo ""
  echo "This script creates a new markdown event file based on a template."
  echo ""
  echo "Arguments:"
  echo "  DATE  (required): The date of the event in YYYY-MM-DD format."
  echo "  NAME  (required): The name of the event."
  echo ""
  echo "Example:"
  echo "  ./scripts/new-event.sh 2023-11-21 'My Event Name'"
  exit 0
}

# Check if help is requested
if [ "$1" == "--help" ]; then
  help
  exit 0
fi

# Check if two arguments are provided
if [ $# -ne 2 ]; then
  echo "Error: Please provide two arguments: date and name"
  echo "Use ./scripts/new-event.sh --help for more"
  exit 1
fi

# Ensure that the template is present
if [ ! -f "src/content/templates/event.md" ]; then 
  echo "Error: events.md not found at src/content/templates/event.md"
  exit 1
fi

# Get the date and name from arguments
date="$1"
name="$2"

# Format the date to YYYYMMDD
formatted_date=$(date -d "$date" +%Y%m%d)

# Replace spaces in name with hyphens
name_formatted=$(echo "$name" | tr ' ' '-')

# Create the filename with extension
filename="${formatted_date}-${name_formatted}.md"

# Check if the file already exists
if [ -f "$filename" ]; then
  echo "Error: File '$filename' already exists"
  exit 1
fi


# Copy the template file and name the copy
cp src/content/templates/event.md "src/content/events/$filename"

echo "File '$filename' created successfully! Please ensure you fill in your own details about this event."