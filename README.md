# Hotel Booking App - 酒店预订应用

一个仿照Trip.com的多语言酒店预订网站，支持Web3钱包连接和多种支付方式。

## 🌟 主要功能

### 多语言支持
- 默认英语
- 支持简体中文、日语、韩语、俄语
- 用户可手动切换语言
- 所有界面元素和内容都支持多语言

### 酒店预订模块
- 搜索目的地（默认"东京国际论坛"附近3公里内）
- 选择入住时间/退房时间/人数/房型
- 展示酒店卡片（价格、评分、图片、可用房型）
- 排序与筛选（按距离/评分/价格）

### 地图功能
- 内嵌Google Map显示会场周边酒店
- 支持位置导航
- 地图标记显示酒店信息
- 点击标记可查看详情和预订

### Web3 集成
- 支持 MetaMask 钱包连接
- 识别用户钱包身份
- 钱包状态实时更新

### 多种支付方式
- 信用卡（VISA/Master/Amex）
- 加密货币（USDT、ETH、BTC）
- 支付方式选择界面

### 客服模块
- 多语言FAQ
- 在线客服界面
- 常见问题解答

## 🎨 设计特色

- 参考Trip.com的设计风格
- 简洁专业的界面
- 卡片式列表展示
- 蓝白主色调
- 手机端优先响应式设计
- 适配H5和移动端

## 📱 页面结构

1. **顶部导航栏** - Logo和语言选择器
2. **搜索栏** - 目的地、日期、人数选择
3. **筛选和排序** - 按类型筛选和排序选项
4. **酒店列表** - 卡片式展示酒店信息
5. **地图视图** - Google Map集成
6. **底部菜单** - 关于我们、客服支持、支付方式、钱包连接

## 🚀 快速开始

### 安装依赖
```bash
# 项目使用CDN加载依赖，无需npm安装
# 主要依赖：
# - Tailwind CSS (样式框架)
# - Font Awesome (图标)
# - Google Maps API (地图功能)
```

### 运行项目
```bash
# 直接在浏览器中打开index.html
# 或使用本地服务器
python -m http.server 8000
# 或
npx serve .
```

### 配置Google Maps API
1. 在Google Cloud Console创建项目
2. 启用Maps JavaScript API
3. 创建API密钥
4. 在index.html中替换YOUR_GOOGLE_MAPS_API_KEY

## 📁 项目结构

```
hotel-booking-app/
├── index.html          # 主页面
├── app.js             # 主要JavaScript逻辑
├── README.md          # 项目说明
└── assets/            # 静态资源（可选）
    ├── images/        # 图片资源
    └── css/           # 自定义样式
```

## 🔧 技术栈

- **前端框架**: 原生JavaScript
- **样式框架**: Tailwind CSS
- **图标库**: Font Awesome
- **地图服务**: Google Maps API
- **Web3**: MetaMask集成
- **响应式设计**: 移动端优先

## 🌐 多语言支持

### 支持的语言
- English (en) - 默认
- 中文简体 (zh)
- 日本語 (ja)
- 한국어 (ko)
- Русский (ru)

### 语言切换
- 点击右上角语言选择器
- 实时切换界面语言
- 酒店信息自动翻译

## 💳 支付集成

### 支持的支付方式
1. **信用卡**
   - VISA
   - MasterCard
   - American Express

2. **加密货币**
   - USDT (Tether)
   - ETH (Ethereum)
   - BTC (Bitcoin)

## 🔗 Web3功能

### MetaMask集成
- 自动检测MetaMask安装
- 一键连接钱包
- 显示钱包地址
- 账户切换监听

### 钱包功能
- 连接状态显示
- 地址格式化显示
- 错误处理
- 多账户支持

## 📱 移动端适配

- 响应式设计
- 触摸友好的界面
- 移动端优化的交互
- 适配各种屏幕尺寸

## 🎯 核心特性

### 酒店搜索
- 智能目的地搜索
- 日期范围选择
- 人数和房型选择
- 实时搜索结果

### 筛选和排序
- 按酒店类型筛选（经济型/豪华型）
- 按距离排序
- 按价格排序
- 按评分排序

### 地图功能
- 交互式地图
- 酒店位置标记
- 信息窗口
- 导航功能

### 预订流程
- 详细的酒店信息
- 灵活的日期选择
- 多种支付方式
- 预订确认

## 🔒 安全特性

- HTTPS支持
- API密钥保护
- 输入验证
- 错误处理

## 📈 性能优化

- 图片懒加载
- 代码分割
- 缓存策略
- 响应式图片

## 🛠️ 开发说明

### 添加新语言
1. 在`translations`对象中添加新语言
2. 更新`getLanguageName`函数
3. 在HTML中添加语言选项

### 添加新酒店
1. 在`mockHotels`数组中添加酒店数据
2. 包含多语言名称和描述
3. 添加图片URL和详细信息

### 自定义样式
- 使用Tailwind CSS类
- 在`<style>`标签中添加自定义CSS
- 保持设计一致性

## 📞 客服支持

- 多语言FAQ
- 在线客服界面
- 常见问题解答
- 联系信息

## 🔄 更新日志

### v1.0.0
- 初始版本发布
- 多语言支持
- 酒店搜索和预订
- 地图集成
- Web3钱包连接
- 多种支付方式

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 提交GitHub Issue
- 发送邮件至项目维护者

---

**注意**: 这是一个演示项目，使用了模拟数据。在实际部署时，需要集成真实的酒店API和支付网关。 

## 🗄️ 数据库设计

本项目的MySQL数据库结构及示例数据请见：[docs/db_schema.sql](./docs/db_schema.sql) 

## 🖥️ 后端服务说明

本项目后端基于 Node.js + Express + MySQL 实现，支持用户注册/登录、酒店/机票预订、支付、评论、收藏等功能，并集成了自动化接口文档。

### 目录结构

```
backend/
├── app.js
├── db.js
├── swagger.js
├── .env.example
├── package.json
├── middlewares/
│   └── auth.js
├── routes/
│   ├── users.js
│   ├── orders.js
│   ├── payments.js
│   ├── comments.js
│   └── favorites.js
├── controllers/
│   ├── usersController.js
│   ├── ordersController.js
│   ├── paymentsController.js
│   ├── commentsController.js
│   └── favoritesController.js
```

### 启动方法

1. 进入 backend 目录，安装依赖：
   ```bash
   cd backend
   npm install
   ```
2. 复制 .env.example 为 .env 并配置数据库信息：
   ```bash
   cp .env.example .env
   # 编辑 .env 填写数据库账号密码等
   ```
3. 启动服务：
   ```bash
   npm start
   ```

### 接口文档入口

后端服务启动后，访问 [http://localhost:3000/api-docs](http://localhost:3000/api-docs) 可查看自动生成的 Swagger/OpenAPI 接口文档，包含所有接口、参数、返回结构示例。 
