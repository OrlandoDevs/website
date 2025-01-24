# Set strict error handling (same as set -e in bash)
$ErrorActionPreference = "Stop"

# Function to display help message
function Show-Help {
  Write-Host "Usage: ./scripts/new-event.ps1 DATE NAME"
  Write-Host ""
  Write-Host "This script creates a new markdown event file based on a template."
  Write-Host ""
  Write-Host "Arguments:"
  Write-Host "  DATE  (required): The date of the event in YYYY-MM-DD format."
  Write-Host "  NAME  (required): The name of the event."
  Write-Host ""
  Write-Host "Example:"
  Write-Host "  ./scripts/new-event.ps1 2023-11-21 'My Event Name'"
  exit 0
}

# Check if help is requested
if ($args[0] -eq "--help") {
  Show-Help
}

# Check if two arguments are provided (excluding the help flag)
if ($args.Count -ne 2) {
  Write-Error "Error: Please provide two arguments: date and name"
  Write-Host "Use ./scripts/new-event.ps1 --help for more information."
  exit 1
}

# Ensure that the template is present
if (!(Test-Path -Path "src/content/templates/event.md")) {
  Write-Error "Error: event.md not found at src/content/templates/event.md"
  exit 1
}

# Get the date and name from arguments
$date = $args[0]
$name = $args[1]

# Format the date to YYYYMMDD
$formattedDate = (Get-Date -Date $date).ToString("yyyyMMdd")

# Replace spaces in name with hyphens
$nameFormatted = $name -replace " ", "-"

# Create the filename with extension
$filename = "src/content/events/$formattedDate-$nameFormatted.md"

# Check if the file already exists
if (Test-Path -Path $filename) {
  Write-Error "Error: File '$filename' already exists"
  exit 1
}

# Copy the template file and name the copy
Copy-Item -Path "src/content/templates/event.md" -Destination $filename

Write-Host "File '$filename' created successfully! Please ensure you fill in your own details about this event."