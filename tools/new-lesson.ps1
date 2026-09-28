<#
.SYNOPSIS
  Creates a new lesson folder from tools/templates/lesson.

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File tools\new-lesson.ps1 `
      -Path "Part1.JavaScript\P02.JavaScriptFundamentals\M003.VariablesAndValues\L01.DeclarationAssignmentInitialization"

  Lesson folder names must match the module's lesson list: run
  node tools\skeleton\generate.mjs  (it prints the expected names for modules marked ready: true)

  Then rename Exercises\01_Exercise to something meaningful, copy it for more
  exercises, and add a Debugging\01_Bug folder (same shape as an exercise).
#>
param([Parameter(Mandatory)][string]$Path)
$ErrorActionPreference = 'Stop'
$root     = Split-Path -Parent $PSScriptRoot
$template = Join-Path $PSScriptRoot 'templates\lesson'
$dest     = if ([IO.Path]::IsPathRooted($Path)) { $Path } else { Join-Path $root $Path }

if (Test-Path $dest) { throw "Already exists: $dest" }
New-Item -ItemType Directory -Force $dest | Out-Null
Copy-Item (Join-Path $template '*') $dest -Recurse
New-Item -ItemType Directory -Force (Join-Path $dest 'Debugging') | Out-Null
Copy-Item (Join-Path $template 'Exercises\01_Exercise') (Join-Path $dest 'Debugging\01_Bug') -Recurse

& (Join-Path $PSScriptRoot 'sync-vscode.ps1')
Write-Host "Created $dest" -ForegroundColor Green
