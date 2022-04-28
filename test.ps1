Set-Location C:\Users\bigsh\Desktop\Github\Secondear\Dear-Family\test
npm run build
Remove-Item C:\Users\bigsh\Desktop\Github\OS\Dear-Family\* -Recurse
Copy-Item -Path "C:\Users\bigsh\Desktop\Github\Secondear\Dear-Family\test\build\*" -Destination "C:\Users\bigsh\Desktop\Github\OS\Dear-Family" -Recurse
New-Item -Path "C:\Users\bigsh\Desktop\Github\OS\Dear-Family" -Name "$($(Get-Date -f hh-mm-ss)).txt" -ItemType "file" -Value "*"


Set-Location C:\Users\bigsh\Desktop\Github\OS\Dear-Family
git add .
git commit -m "$($(Get-Date -f hh-mm-ss))"
git push
Set-Location C:\Users\bigsh\Desktop\Github\Secondear\Dear-Family\test




