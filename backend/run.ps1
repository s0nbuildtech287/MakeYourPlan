Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "  Starting YourPlan Java Spring Boot Backend (Port 8080)" -ForegroundColor Green
Write-Host "===================================================" -ForegroundColor Cyan

$jdkPath = "C:\Program Files\Eclipse Adoptium\jdk-17.0.20.101-hotspot"
if (Test-Path $jdkPath) {
    $env:JAVA_HOME = $jdkPath
    $env:PATH = "$jdkPath\bin;" + $env:PATH
}

Write-Host "Using JAVA_HOME: $env:JAVA_HOME" -ForegroundColor Yellow
java -version

Set-Location $PSScriptRoot
./gradlew.bat bootRun
