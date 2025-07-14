#!/bin/bash

# 酒店预订应用 - GitHub部署脚本

echo "🚀 开始部署酒店预订应用到GitHub..."
echo "================================"

# 检查Git状态
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  检测到未提交的更改，正在提交..."
    git add .
    git commit -m "feat: update before deployment"
fi

# 检查是否已设置远程仓库
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ 未设置远程仓库"
    echo ""
    echo "请按照以下步骤操作："
    echo "1. 在GitHub上创建新仓库：https://github.com/new"
    echo "2. 仓库名称：hotel-booking-app"
    echo "3. 选择：Public"
    echo "4. 不要初始化README"
    echo "5. 创建仓库后，运行以下命令："
    echo ""
    echo "git remote add origin https://github.com/YOUR_USERNAME/hotel-booking-app.git"
    echo "git branch -M main"
    echo "git push -u origin main"
    echo ""
    echo "然后重新运行此脚本"
    exit 1
fi

# 推送代码
echo "📤 推送代码到GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ 代码推送成功！"
    echo ""
    echo "🌐 接下来请："
    echo "1. 访问您的GitHub仓库"
    echo "2. 进入 Settings > Pages"
    echo "3. Source选择：Deploy from a branch"
    echo "4. Branch选择：gh-pages"
    echo "5. 点击 Save"
    echo ""
    echo "📱 部署完成后，您的应用将在以下地址可用："
    echo "https://YOUR_USERNAME.github.io/hotel-booking-app/"
    echo ""
    echo "🎉 部署完成！"
else
    echo "❌ 代码推送失败，请检查网络连接和GitHub权限"
    exit 1
fi 