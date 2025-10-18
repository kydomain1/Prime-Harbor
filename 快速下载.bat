@echo off
chcp 65001 >nul
title PrimeHarbor 图片下载

powershell.exe -ExecutionPolicy Bypass -File "%~dp0下载图片-简化版.ps1"

