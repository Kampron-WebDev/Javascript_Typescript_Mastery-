<#
.SYNOPSIS
  Runs the tests of every exercise / debugging challenge / project in the course
  against its MODEL SOLUTION. A green run proves all the practice material is healthy.

.DESCRIPTION
  Each exercise folder contains:
      main.js           <- the student's file (starter with TODOs, or buggy code)
      main.test.js      <- tests; they import ./main.js, or ./solution/main.js
                           when the environment variable CHECK_SOLUTION=1
      solution/main.js  <- the model answer

  -Starters  also checks that every STARTER fails its tests (so no exercise
             is accidentally "already solved"). Add an empty file named
             .starter-passes to a folder whose starter is meant to pass.

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File tools\check-exercises.ps1
  powershell -ExecutionPolicy Bypass -File tools\check-exercises.ps1 -Filter M01 -Starters
#>
param([string]$Filter = '', [switch]$Starters)
$root = Split-Path -Parent $PSScriptRoot

$dirs = Get-ChildItem $root -Recurse -File -Filter *.test.js |
    Where-Object { $_.FullName -notmatch '[\\/](node_modules|\.git|tools)[\\/]' -and $_.FullName -like "*$Filter*" } |
    Select-Object -ExpandProperty DirectoryName -Unique | Sort-Object

function Invoke-Tests([string]$dir, [bool]$solution) {
    if ($solution) { $env:CHECK_SOLUTION = '1' } else { Remove-Item Env:CHECK_SOLUTION -ErrorAction SilentlyContinue }
    Push-Location $dir
    $files = @(Get-ChildItem -File -Filter *.test.js | Select-Object -ExpandProperty Name)
    # --test-timeout stops an accidental infinite loop from freezing the whole run
    $log = & node --test --test-timeout=20000 @files 2>&1
    $code = $LASTEXITCODE
    Pop-Location
    Remove-Item Env:CHECK_SOLUTION -ErrorAction SilentlyContinue
    return @{ Code = $code; Log = $log }
}

$pass = 0; $fail = @()
foreach ($d in $dirs) {
    if (Test-Path (Join-Path $d '.skip-check')) { continue }
    $rel = $d.Substring($root.Length + 1)

    $r = Invoke-Tests $d $true
    if ($r.Code -eq 0) { $pass++; Write-Host "  ok   $rel" -ForegroundColor DarkGreen }
    else {
        $fail += $rel; Write-Host "  FAIL $rel (solution)" -ForegroundColor Red
        $r.Log | Select-String -Pattern 'not ok|Error|expected|actual' | Select-Object -First 8 | ForEach-Object { Write-Host "       $_" }
    }

    if ($Starters -and -not (Test-Path (Join-Path $d '.starter-passes'))) {
        $s = Invoke-Tests $d $false
        if ($s.Code -eq 0) { $fail += "$rel (starter)"; Write-Host "  FAIL $rel (starter already passes!)" -ForegroundColor Red }
    }
}
Write-Host ""
Write-Host "Passed: $pass   Failed: $($fail.Count)" -ForegroundColor ($(if ($fail.Count) { 'Red' } else { 'Green' }))
exit $fail.Count
