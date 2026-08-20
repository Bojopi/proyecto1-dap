$needle='C:\Program Files\nodejs'
$u=[Environment]::GetEnvironmentVariable('Path','User')
Write-Output '---BEFORE USER PATH---'
Write-Output $u
$clean = $u -replace '\\nodejs"','\nodejs'
$clean = $clean -replace '\\nodejs','\nodejs'
$clean = $clean -replace '"',''
if($clean -notlike "*$needle*") {
    $clean = $clean + ';' + $needle
    setx PATH $clean
    Write-Output 'APPENDED'
} else {
    setx PATH $clean
    Write-Output 'ALREADY'
}
Write-Output '---AFTER USER PATH---'
[Environment]::GetEnvironmentVariable('Path','User')
