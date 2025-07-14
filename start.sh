#!/bin/bash

# Hotel Booking App 启动脚本

echo "🏨 启动酒店预订应用..."
echo "================================"

# 检查Python是否安装
if command -v python3 &> /dev/null; then
    echo "✅ 使用 Python 3 启动服务器..."
    echo "🌐 服务器地址: http://localhost:8000"
    echo "📱 移动端访问: http://[你的IP地址]:8000"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    echo "================================"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ 使用 Python 启动服务器..."
    echo "🌐 服务器地址: http://localhost:8000"
    echo "📱 移动端访问: http://[你的IP地址]:8000"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    echo "================================"
    python -m http.server 8000
elif command -v node &> /dev/null; then
    echo "✅ 使用 Node.js serve 启动服务器..."
    echo "🌐 服务器地址: http://localhost:3000"
    echo "📱 移动端访问: http://[你的IP地址]:3000"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    echo "================================"
    npx serve . -p 3000
else
    echo "❌ 未找到 Python 或 Node.js"
    echo "请安装 Python 或 Node.js 来启动本地服务器"
    echo ""
    echo "或者直接在浏览器中打开 index.html 文件"
    echo "================================"
    echo "📁 项目文件:"
    ls -la
    echo ""
    echo "🌐 直接打开: file://$(pwd)/index.html"
fi 