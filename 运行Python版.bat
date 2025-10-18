@echo off
chcp 65001 >nul
title PrimeHarbor 图片下载 - Python版

python "%~dp0下载图片-Python版.py"

if errorlevel 1 (
    echo.
    echo Python版本运行失败，可能是没有安装Python
    echo 请使用 快速下载.bat 运行PowerShell版本
    echo.
)

pause

