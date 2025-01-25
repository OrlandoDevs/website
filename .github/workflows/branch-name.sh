#!/bin/bash
set -e
echo "Event name is: ${{ github.event.inputs.eventName }}"
echo "${{ github.event.inputs.eventName }}" | tr ' ' '-' | awk '{print tolower($0)}' >> "$GITHUB_OUTPUT"
echo "BRANCH_NAME={value}" >> "$GITHUB_OUTPUT"
echo "Transformed string: $output_string" 
exit 13