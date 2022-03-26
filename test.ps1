Remove-Item C:\Users\bigsh\Desktop\Github\OS\Dear-Family\* -Recurse
Copy-Item -Path "C:\Users\bigsh\Desktop\Github\Secondear\Dear-Family\test\build\*" -Destination "C:\Users\bigsh\Desktop\Github\OS\Dear-Family" -Recurse
New-Item -Path "C:\Users\bigsh\Desktop\Github\OS\Dear-Family" -Name "$($(Get-Date -f hh-mm-ss)).txt" -ItemType "file" -Value "*"