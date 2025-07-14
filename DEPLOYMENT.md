# 部署指南

本指南将帮助您将酒店预订应用部署到GitHub并共享给他人。

## 🚀 部署到GitHub

### 方法一：使用GitHub CLI（推荐）

1. **安装GitHub CLI**
```bash
# macOS
brew install gh

# Windows
winget install GitHub.cli

# Linux
sudo apt install gh
```

2. **登录GitHub**
```bash
gh auth login
```

3. **创建GitHub仓库**
```bash
gh repo create hotel-booking-app --public --description "A multi-language hotel booking platform with Web3 integration" --source=. --remote=origin --push
```

### 方法二：手动创建（如果GitHub CLI不可用）

1. **在GitHub上创建新仓库**
   - 访问 https://github.com/new
   - 仓库名称：`hotel-booking-app`
   - 描述：`A multi-language hotel booking platform with Web3 integration`
   - 选择：Public（公开）
   - 不要初始化README（我们已经有了）
   - 点击 "Create repository"

2. **添加远程仓库**
```bash
git remote add origin https://github.com/YOUR_USERNAME/hotel-booking-app.git
```

3. **推送代码**
```bash
git branch -M main
git push -u origin main
```

## 🌐 启用GitHub Pages

1. **进入仓库设置**
   - 在GitHub仓库页面点击 "Settings"
   - 左侧菜单选择 "Pages"

2. **配置GitHub Pages**
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
   - 点击 "Save"

3. **等待部署**
   - GitHub Actions会自动构建和部署
   - 部署完成后，您的应用将在以下地址可用：
   - `https://YOUR_USERNAME.github.io/hotel-booking-app/`

## 📋 部署检查清单

### 部署前检查
- [ ] 所有文件已提交到Git
- [ ] README.md包含项目说明
- [ ] .gitignore文件正确配置
- [ ] 没有敏感信息（API密钥等）

### 部署后检查
- [ ] GitHub Pages已启用
- [ ] 应用可以正常访问
- [ ] 所有功能正常工作
- [ ] 移动端适配正常

## 🔧 自定义配置

### 更新package.json中的仓库信息
```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/hotel-booking-app.git"
  },
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/hotel-booking-app/issues"
  },
  "homepage": "https://github.com/YOUR_USERNAME/hotel-booking-app#readme"
}
```

### 配置Google Maps API
1. 在Google Cloud Console创建项目
2. 启用Maps JavaScript API
3. 创建API密钥
4. 在index.html中替换API密钥

## 📱 分享链接

部署完成后，您可以分享以下链接：

### 主要链接
- **GitHub仓库**: `https://github.com/YOUR_USERNAME/hotel-booking-app`
- **在线演示**: `https://YOUR_USERNAME.github.io/hotel-booking-app/`
- **演示页面**: `https://YOUR_USERNAME.github.io/hotel-booking-app/demo.html`

### 社交媒体分享
```markdown
🏨 酒店预订应用 - 多语言支持 + Web3集成

✨ 功能特色：
- 5种语言支持（中英日韩俄）
- Google Maps集成
- MetaMask钱包连接
- 多种支付方式
- 响应式设计

🌐 在线体验：https://YOUR_USERNAME.github.io/hotel-booking-app/
📁 源码：https://github.com/YOUR_USERNAME/hotel-booking-app

#Web3 #HotelBooking #Multilingual #JavaScript
```

## 🔄 更新部署

### 推送更新
```bash
git add .
git commit -m "feat: add new feature"
git push origin main
```

### 强制更新GitHub Pages
- 在GitHub仓库页面
- 进入 Actions 标签
- 手动触发 "Deploy to GitHub Pages" 工作流

## 🛠️ 故障排除

### 常见问题

1. **GitHub Pages不显示**
   - 检查仓库是否为公开
   - 确认GitHub Actions工作流成功运行
   - 等待几分钟让部署完成

2. **地图不显示**
   - 检查Google Maps API密钥
   - 确认API密钥有正确的权限
   - 检查浏览器控制台错误

3. **Web3功能不工作**
   - 确认用户安装了MetaMask
   - 检查是否在HTTPS环境下运行
   - 查看浏览器控制台错误

### 获取帮助
- 查看GitHub Issues
- 检查GitHub Actions日志
- 联系项目维护者

## 📈 监控和分析

### 添加Google Analytics
```html
<!-- 在index.html的<head>中添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 添加GitHub统计
- 在README.md中添加仓库统计徽章
- 使用GitHub Insights查看访问统计

---

**注意**: 请确保您的GitHub账户已启用GitHub Pages功能，并且仓库设置为公开以允许他人访问。 