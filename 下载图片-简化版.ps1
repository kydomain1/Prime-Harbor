# PrimeHarbor 图片下载脚本 - 简化版
# 编码: UTF-8

$ErrorActionPreference = "Continue"

Write-Host "========================================`n"
Write-Host "  PrimeHarbor 图片下载工具`n"
Write-Host "========================================`n"

# 获取脚本所在目录
$dir = $PSScriptRoot
$targetDir = "$dir\images\articles"
$listFile = "$dir\图片下载清单.txt"

# 创建文件夹
if (!(Test-Path $targetDir)) {
    New-Item -Path $targetDir -ItemType Directory -Force | Out-Null
}

# 读取文件
if (!(Test-Path $listFile)) {
    Write-Host "错误: 找不到图片下载清单.txt`n"
    pause
    exit
}

$content = Get-Content $listFile -Encoding UTF8

$total = 0
$success = 0
$fail = 0
$skip = 0

Write-Host "开始下载...`n"

foreach ($line in $content) {
    if ($line -match "^\s*#" -or $line -match "^\s*$") {
        continue
    }
    
    if ($line -match "\|") {
        $data = $line -split "\|"
        $filename = $data[0].Trim()
        $url = $data[1].Trim()
        $filepath = Join-Path $targetDir $filename
        
        $total++
        
        if (Test-Path $filepath) {
            Write-Host "[$total/20] 跳过: $filename (已存在)"
            $skip++
            continue
        }
        
        try {
            Write-Host "[$total/20] 下载: $filename ..." -NoNewline
            
            $webClient = New-Object System.Net.WebClient
            $webClient.DownloadFile($url, $filepath)
            
            $size = (Get-Item $filepath).Length
            if ($size -gt 0) {
                $sizeKB = [math]::Round($size / 1KB, 2)
                Write-Host " 成功! ($sizeKB KB)" -ForegroundColor Green
                $success++
            } else {
                Write-Host " 失败 (文件为空)" -ForegroundColor Red
                Remove-Item $filepath -Force
                $fail++
            }
            
            Start-Sleep -Milliseconds 500
        }
        catch {
            Write-Host " 失败!" -ForegroundColor Red
            $fail++
        }
    }
}

Write-Host "`n========================================"
Write-Host "  下载完成"
Write-Host "========================================`n"
Write-Host "总计: $total 张"
Write-Host "成功: $success 张" -ForegroundColor Green
Write-Host "跳过: $skip 张"
Write-Host "失败: $fail 张`n"

if ($success -gt 0) {
    Write-Host "图片已保存到: $targetDir" -ForegroundColor Green
    Write-Host "现在可以刷新网站查看效果!`n" -ForegroundColor Green
}

Write-Host "按任意键退出..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

