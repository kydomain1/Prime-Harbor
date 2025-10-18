#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""PrimeHarbor 图片下载工具 - Python版"""

import os
import sys
import time
import urllib.request
from pathlib import Path

def main():
    print("=" * 50)
    print("  PrimeHarbor 图片下载工具")
    print("=" * 50)
    print()
    
    # 路径设置
    script_dir = Path(__file__).parent
    target_dir = script_dir / "images" / "articles"
    list_file = script_dir / "图片下载清单.txt"
    
    # 创建文件夹
    target_dir.mkdir(parents=True, exist_ok=True)
    print(f"目标文件夹: {target_dir}\n")
    
    # 检查清单文件
    if not list_file.exists():
        print("错误: 找不到 图片下载清单.txt")
        input("\n按Enter键退出...")
        return
    
    # 读取清单
    with open(list_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # 统计
    total = 0
    success = 0
    fail = 0
    skip = 0
    
    print("开始下载...\n")
    
    for line in lines:
        line = line.strip()
        
        # 跳过注释和空行
        if line.startswith('#') or not line:
            continue
        
        # 解析
        if '|' not in line:
            continue
            
        parts = line.split('|')
        filename = parts[0].strip()
        url = parts[1].strip()
        filepath = target_dir / filename
        
        total += 1
        
        # 检查是否已存在
        if filepath.exists():
            print(f"[{total}/20] 跳过: {filename} (已存在)")
            skip += 1
            continue
        
        # 下载
        try:
            print(f"[{total}/20] 下载: {filename} ...", end=" ")
            
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            req = urllib.request.Request(url, headers=headers)
            
            with urllib.request.urlopen(req, timeout=30) as response:
                data = response.read()
                
            with open(filepath, 'wb') as f:
                f.write(data)
            
            size_kb = len(data) / 1024
            print(f"成功! ({size_kb:.2f} KB)")
            success += 1
            
            time.sleep(0.5)
            
        except Exception as e:
            print(f"失败!")
            print(f"  错误: {str(e)}")
            fail += 1
    
    # 统计
    print("\n" + "=" * 50)
    print("  下载完成")
    print("=" * 50)
    print(f"总计: {total} 张")
    print(f"成功: {success} 张")
    print(f"跳过: {skip} 张")
    print(f"失败: {fail} 张")
    print()
    
    if success > 0:
        print(f"图片已保存到: {target_dir}")
        print("现在可以刷新网站查看效果!")
    
    print()
    input("按Enter键退出...")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n用户中断")
    except Exception as e:
        print(f"\n错误: {str(e)}")
        input("\n按Enter键退出...")

