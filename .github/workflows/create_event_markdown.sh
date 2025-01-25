#!/bin/bash

groupName="${{ github.event.inputs.groupName }}"
date="${{ github.event.inputs.date }}"
startTime="${{ github.event.inputs.startTime }}"
endTime="${{ github.event.inputs.endTime }}"
address="${{ github.event.inputs.address }}"
signUpLink="${{ github.event.inputs.signUpLink }}"
parkingDetails="${{ github.event.inputs.parkingDetails }}"
talkTitle="${{ github.event.inputs.talkTitle }}"
authorIntroduction="${{ github.event.inputs.authorIntroduction }}"

# Handle empty signUpLink
if [ -z "$signUpLink" ]; then
  signUpLink="Not Available"
fi

# Format the date to YYYYMMDD
formatted_date=$(date -d "$date" +%Y%m%d)

# Replace spaces in name with hyphens
name_formatted=$(echo "$talkTitle" | tr ' ' '-')

# Create the filename with extension
filename="${formatted_date}-${name_formatted}.md"

# Check if the file already exists
if [ -f "$filename" ]; then
  echo "Error: File '$filename' already exists"
  exit 1
fi

# Generate the markdown output
markdown=$(cat << EOF
---
groupName: ${groupName}
image: /images/events/${groupName}.jpg
date: ${date}
subject: ${talkTitle}
startTime: ${startTime}
endTime: ${endTime}
location: ${address}
signUp: ${signUpLink}
description: ${authorIntroduction}
---

# Details

## Meetup Parking & Entry

${parkingDetails}

## Talks and Speakers

### ${talkTitle}



#### About ${{AUTHOR}}

${authorIntroduction}
EOF
)

# Write the markdown to a file
echo "$markdown" > "$filename"

echo "Markdown file generated: ${filename}"
echo FILE_NAME=${filename} >> $GITHUB_OUTPUT