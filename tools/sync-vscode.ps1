<#
.SYNOPSIS
  Copies the master VS Code config (tools/vscode-template) into the course root,
  every Part / Phase / Module / Lesson / Project folder, and every folder that contains JavaScript.

.DESCRIPTION
  Why? VS Code only reads the .vscode folder of the folder you OPEN.
  So whether you open the whole course, one module, or one exercise folder,
  Ctrl+Shift+B (run), "Run Test Task" (test) and F5 (debug) all work.

  Want to change a setting everywhere? Edit tools/vscode-template, then run:
      powershell -ExecutionPolicy Bypass -File tools\sync-vscode.ps1
#>
$ErrorActionPreference = 'Stop'
$root     = Split-Path -Parent $PSScriptRoot
$template = Join-Path $PSScriptRoot 'vscode-template'
$skip     = '[\\/](\.vscode|node_modules|\.git|tools)([\\/]|$)'

$targets = [System.Collections.Generic.HashSet[string]]::new()
[void]$targets.Add($root)

# Structural folders: 00.Orientation, PartN.*, PNN.*, MNNN.*, LNN.*, projects, Final ...
Get-ChildItem $root -Directory -Recurse |
    Where-Object { $_.FullName -notmatch $skip -and $_.Name -match '^(\d\d\.|Part\d|P\d\d\.|M\d{3}\.|L\d\d\.|[JT]P\d|JSC\.|Projects$|Final|Phase-Exam)' } |
    ForEach-Object { [void]$targets.Add($_.FullName) }

# Any folder with code in it (examples, exercises, solutions, projects)
Get-ChildItem $root -Recurse -File -Include *.js, *.mjs, *.ts |
    Where-Object { $_.FullName -notmatch $skip } |
    ForEach-Object { [void]$targets.Add($_.DirectoryName) }

$count = 0
foreach ($dir in $targets) {
    $dest = Join-Path $dir '.vscode'
    New-Item -ItemType Directory -Force $dest | Out-Null
    Copy-Item (Join-Path $template '*') $dest -Force
    $count++
}
Write-Host "Synced .vscode into $count folders." -ForegroundColor Green
