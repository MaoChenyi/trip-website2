// 多语言支持
const translations = {
    en: {
        'destination': 'Destination',
        'checkin': 'Check-in',
        'checkout': 'Check-out',
        'guests': 'Guests',
        'search': 'Search Hotels',
        'map-view': 'Map View',
        'sort-by': 'Sort by:',
        'distance': 'Distance',
        'price': 'Price',
        'rating': 'Rating',
        'filter': 'Filter:',
        'all': 'All',
        'budget': 'Budget',
        'luxury': 'Luxury',
        'about': 'About Us',
        'about-desc': 'Professional hotel booking platform, providing you with the best accommodation experience.',
        'support': 'Customer Support',
        'faq': 'FAQ',
        'contact': 'Contact Us',
        'live-chat': 'Live Chat',
        'payment': 'Payment Methods',
        'connect': 'Connect Wallet',
        'connect-wallet': 'Connect MetaMask',
        'book-now': 'Book Now',
        'customer-service': 'Customer Service',
        'faq-cancel': 'How to cancel booking?',
        'faq-cancel-answer': 'You can cancel your booking 24 hours before check-in.',
        'faq-payment': 'What payment methods are supported?',
        'faq-payment-answer': 'We support credit cards, USDT, ETH, BTC and other payment methods.',
        'chat-placeholder': 'Connecting to customer service, please wait...',
        'hotel-name': 'Hotel Name',
        'price-per-night': 'Price per night',
        'rating-score': 'Rating',
        'distance-km': 'km away',
        'book-this-hotel': 'Book this hotel',
        'view-details': 'View Details',
        'no-hotels-found': 'No hotels found',
        'loading': 'Loading...',
        'error-occurred': 'An error occurred',
        'wallet-connected': 'Wallet connected successfully',
        'wallet-connection-failed': 'Failed to connect wallet',
        'booking-success': 'Booking successful!',
        'booking-failed': 'Booking failed'
    },
    zh: {
        'destination': '目的地',
        'checkin': '入住',
        'checkout': '退房',
        'guests': '人数',
        'search': '搜索酒店',
        'map-view': '地图视图',
        'sort-by': '排序方式:',
        'distance': '距离',
        'price': '价格',
        'rating': '评分',
        'filter': '筛选:',
        'all': '全部',
        'budget': '经济型',
        'luxury': '豪华型',
        'about': '关于我们',
        'about-desc': '专业的酒店预订平台，为您提供最优质的住宿体验。',
        'support': '客服支持',
        'faq': '常见问题',
        'contact': '联系我们',
        'live-chat': '在线客服',
        'payment': '支付方式',
        'connect': '连接钱包',
        'connect-wallet': '连接MetaMask',
        'book-now': '立即预订',
        'customer-service': '客服支持',
        'faq-cancel': '如何取消预订？',
        'faq-cancel-answer': '您可以在入住前24小时取消预订。',
        'faq-payment': '支持哪些支付方式？',
        'faq-payment-answer': '支持信用卡、USDT、ETH、BTC等多种支付方式。',
        'chat-placeholder': '正在连接客服，请稍候...',
        'hotel-name': '酒店名称',
        'price-per-night': '每晚价格',
        'rating-score': '评分',
        'distance-km': '公里',
        'book-this-hotel': '预订此酒店',
        'view-details': '查看详情',
        'no-hotels-found': '未找到酒店',
        'loading': '加载中...',
        'error-occurred': '发生错误',
        'wallet-connected': '钱包连接成功',
        'wallet-connection-failed': '钱包连接失败',
        'booking-success': '预订成功！',
        'booking-failed': '预订失败'
    },
    ja: {
        'destination': '目的地',
        'checkin': 'チェックイン',
        'checkout': 'チェックアウト',
        'guests': '宿泊者数',
        'search': 'ホテル検索',
        'map-view': 'マップ表示',
        'sort-by': '並び替え:',
        'distance': '距離',
        'price': '価格',
        'rating': '評価',
        'filter': 'フィルター:',
        'all': 'すべて',
        'budget': 'エコノミー',
        'luxury': 'ラグジュアリー',
        'about': '会社概要',
        'about-desc': 'プロフェッショナルなホテル予約プラットフォームで、最高の宿泊体験を提供します。',
        'support': 'カスタマーサポート',
        'faq': 'よくある質問',
        'contact': 'お問い合わせ',
        'live-chat': 'ライブチャット',
        'payment': 'お支払い方法',
        'connect': 'ウォレット接続',
        'connect-wallet': 'MetaMask接続',
        'book-now': '今すぐ予約',
        'customer-service': 'カスタマーサポート',
        'faq-cancel': '予約のキャンセル方法は？',
        'faq-cancel-answer': 'チェックインの24時間前までキャンセル可能です。',
        'faq-payment': '対応しているお支払い方法は？',
        'faq-payment-answer': 'クレジットカード、USDT、ETH、BTCなどに対応しています。',
        'chat-placeholder': 'カスタマーサービスに接続中、お待ちください...',
        'hotel-name': 'ホテル名',
        'price-per-night': '1泊あたりの価格',
        'rating-score': '評価',
        'distance-km': 'km',
        'book-this-hotel': 'このホテルを予約',
        'view-details': '詳細を見る',
        'no-hotels-found': 'ホテルが見つかりません',
        'loading': '読み込み中...',
        'error-occurred': 'エラーが発生しました',
        'wallet-connected': 'ウォレット接続成功',
        'wallet-connection-failed': 'ウォレット接続失敗',
        'booking-success': '予約成功！',
        'booking-failed': '予約失敗'
    },
    ko: {
        'destination': '목적지',
        'checkin': '체크인',
        'checkout': '체크아웃',
        'guests': '투숙객',
        'search': '호텔 검색',
        'map-view': '지도 보기',
        'sort-by': '정렬:',
        'distance': '거리',
        'price': '가격',
        'rating': '평점',
        'filter': '필터:',
        'all': '전체',
        'budget': '경제형',
        'luxury': '럭셔리',
        'about': '회사 소개',
        'about-desc': '전문적인 호텔 예약 플랫폼으로 최고의 숙박 경험을 제공합니다.',
        'support': '고객 지원',
        'faq': '자주 묻는 질문',
        'contact': '연락처',
        'live-chat': '실시간 채팅',
        'payment': '결제 방법',
        'connect': '지갑 연결',
        'connect-wallet': 'MetaMask 연결',
        'book-now': '지금 예약',
        'customer-service': '고객 지원',
        'faq-cancel': '예약 취소 방법은?',
        'faq-cancel-answer': '체크인 24시간 전까지 취소 가능합니다.',
        'faq-payment': '지원하는 결제 방법은?',
        'faq-payment-answer': '신용카드, USDT, ETH, BTC 등을 지원합니다.',
        'chat-placeholder': '고객 지원에 연결 중, 잠시만 기다려주세요...',
        'hotel-name': '호텔명',
        'price-per-night': '1박당 가격',
        'rating-score': '평점',
        'distance-km': 'km',
        'book-this-hotel': '이 호텔 예약',
        'view-details': '상세 보기',
        'no-hotels-found': '호텔을 찾을 수 없습니다',
        'loading': '로딩 중...',
        'error-occurred': '오류가 발생했습니다',
        'wallet-connected': '지갑 연결 성공',
        'wallet-connection-failed': '지갑 연결 실패',
        'booking-success': '예약 성공!',
        'booking-failed': '예약 실패'
    },
    ru: {
        'destination': 'Направление',
        'checkin': 'Заезд',
        'checkout': 'Выезд',
        'guests': 'Гости',
        'search': 'Поиск отелей',
        'map-view': 'Вид карты',
        'sort-by': 'Сортировать по:',
        'distance': 'Расстояние',
        'price': 'Цена',
        'rating': 'Рейтинг',
        'filter': 'Фильтр:',
        'all': 'Все',
        'budget': 'Эконом',
        'luxury': 'Люкс',
        'about': 'О нас',
        'about-desc': 'Профессиональная платформа бронирования отелей, предоставляющая лучший опыт размещения.',
        'support': 'Поддержка клиентов',
        'faq': 'FAQ',
        'contact': 'Связаться с нами',
        'live-chat': 'Онлайн чат',
        'payment': 'Способы оплаты',
        'connect': 'Подключить кошелек',
        'connect-wallet': 'Подключить MetaMask',
        'book-now': 'Забронировать сейчас',
        'customer-service': 'Поддержка клиентов',
        'faq-cancel': 'Как отменить бронирование?',
        'faq-cancel-answer': 'Вы можете отменить бронирование за 24 часа до заезда.',
        'faq-payment': 'Какие способы оплаты поддерживаются?',
        'faq-payment-answer': 'Мы поддерживаем кредитные карты, USDT, ETH, BTC и другие способы оплаты.',
        'chat-placeholder': 'Подключение к службе поддержки, пожалуйста, подождите...',
        'hotel-name': 'Название отеля',
        'price-per-night': 'Цена за ночь',
        'rating-score': 'Рейтинг',
        'distance-km': 'км',
        'book-this-hotel': 'Забронировать этот отель',
        'view-details': 'Подробнее',
        'no-hotels-found': 'Отели не найдены',
        'loading': 'Загрузка...',
        'error-occurred': 'Произошла ошибка',
        'wallet-connected': 'Кошелек успешно подключен',
        'wallet-connection-failed': 'Не удалось подключить кошелек',
        'booking-success': 'Бронирование успешно!',
        'booking-failed': 'Ошибка бронирования'
    }
};

// 当前语言
let currentLanguage = 'en';

// 模拟酒店数据
const mockHotels = [
    {
        id: 1,
        name: 'Tokyo Grand Hotel',
        name_zh: '东京大酒店',
        name_ja: '東京グランドホテル',
        name_ko: '도쿄 그랜드 호텔',
        name_ru: 'Токио Гранд Отель',
        price: 15000,
        rating: 4.5,
        distance: 0.8,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
        type: 'luxury',
        amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'],
        description: 'Located in the heart of Tokyo, this luxury hotel offers stunning views and world-class amenities.',
        description_zh: '位于东京市中心，这家豪华酒店提供令人惊叹的景色和世界一流的设施。',
        description_ja: '東京の中心部に位置し、このラグジュアリーホテルは素晴らしい景色と世界クラスのアメニティを提供します。',
        description_ko: '도쿄 중심부에 위치한 이 럭셔리 호텔은 놀라운 전망과 세계적인 편의시설을 제공합니다.',
        description_ru: 'Расположенный в центре Токио, этот роскошный отель предлагает потрясающие виды и первоклассные удобства.'
    },
    {
        id: 2,
        name: 'Sakura Inn',
        name_zh: '樱花旅馆',
        name_ja: '桜イン',
        name_ko: '사쿠라 인',
        name_ru: 'Сакура Инн',
        price: 8000,
        rating: 4.2,
        distance: 1.2,
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
        type: 'budget',
        amenities: ['WiFi', 'Breakfast'],
        description: 'A cozy budget hotel with traditional Japanese charm and modern comfort.',
        description_zh: '一家具有传统日本魅力和现代舒适感的经济型酒店。',
        description_ja: '伝統的な日本の魅力と現代的な快適さを備えた居心地の良いエコノミーホテル。',
        description_ko: '전통적인 일본의 매력과 현대적인 편안함을 갖춘 아늑한 경제형 호텔입니다.',
        description_ru: 'Уютный экономный отель с традиционным японским очарованием и современным комфортом.'
    },
    {
        id: 3,
        name: 'Marunouchi Business Hotel',
        name_zh: '丸之内商务酒店',
        name_ja: '丸の内ビジネスホテル',
        name_ko: '마루노우치 비즈니스 호텔',
        name_ru: 'Маруноути Бизнес Отель',
        price: 12000,
        rating: 4.3,
        distance: 1.5,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
        type: 'luxury',
        amenities: ['WiFi', 'Business Center', 'Restaurant', 'Gym'],
        description: 'Perfect for business travelers with modern facilities and convenient location.',
        description_zh: '为商务旅客提供现代化设施和便利位置的完美选择。',
        description_ja: 'ビジネス旅行者に最適で、最新の設備と便利な立地を提供します。',
        description_ko: '비즈니스 여행자에게 완벽하며 현대적인 시설과 편리한 위치를 제공합니다.',
        description_ru: 'Идеально подходит для деловых путешественников с современными удобствами и удобным расположением.'
    },
    {
        id: 4,
        name: 'Ginza Comfort Inn',
        name_zh: '银座舒适旅馆',
        name_ja: '銀座コンフォートイン',
        name_ko: '긴자 컴포트 인',
        name_ru: 'Гинза Комфорт Инн',
        price: 9500,
        rating: 4.0,
        distance: 2.1,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
        type: 'budget',
        amenities: ['WiFi', 'Breakfast', 'Laundry'],
        description: 'Comfortable accommodation in the vibrant Ginza district.',
        description_zh: '位于充满活力的银座区的舒适住宿。',
        description_ja: '活気のある銀座地区にある快適な宿泊施設。',
        description_ko: '활기찬 긴자 지역에 위치한 편안한 숙박 시설입니다.',
        description_ru: 'Комфортное размещение в оживленном районе Гинза.'
    },
    {
        id: 5,
        name: 'Roppongi Hills Hotel',
        name_zh: '六本木山酒店',
        name_ja: '六本木ヒルズホテル',
        name_ko: '롯폰기 힐즈 호텔',
        name_ru: 'Роппонги Хиллз Отель',
        price: 18000,
        rating: 4.7,
        distance: 2.8,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
        type: 'luxury',
        amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym', 'Bar'],
        description: 'Luxury hotel with panoramic city views and premium services.',
        description_zh: '拥有全景城市景观和优质服务的豪华酒店。',
        description_ja: 'パノラマの街並みとプレミアムサービスを提供するラグジュアリーホテル。',
        description_ko: '파노라마 도시 전망과 프리미엄 서비스를 제공하는 럭셔리 호텔입니다.',
        description_ru: 'Роскошный отель с панорамным видом на город и премиальными услугами.'
    }
];

// 全局变量
let map = null;
let markers = [];
let currentFilter = 'all';
let currentSort = 'distance';
let isMapView = false;

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setDefaultDates();
    setupEventListeners();
    setupLanguageSelector();
    loadHotels();
    initializeMap();
    setupWeb3();
}

// 设置默认日期
function setDefaultDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    document.getElementById('checkin').value = today.toISOString().split('T')[0];
    document.getElementById('checkout').value = tomorrow.toISOString().split('T')[0];
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索按钮
    document.getElementById('search-btn').addEventListener('click', searchHotels);
    
    // 地图切换按钮
    document.getElementById('map-toggle').addEventListener('click', toggleMapView);
    
    // 排序选择器
    document.getElementById('sort-select').addEventListener('change', function(e) {
        currentSort = e.target.value;
        loadHotels();
    });
    
    // 筛选按钮
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentFilter = this.dataset.filter;
            updateFilterButtons();
            loadHotels();
        });
    });
    
    // 钱包连接按钮
    document.getElementById('connect-wallet').addEventListener('click', connectWallet);
}

// 设置语言选择器
function setupLanguageSelector() {
    document.querySelectorAll('.language-dropdown a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });
}

// 切换语言
function changeLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('current-lang').textContent = getLanguageName(lang);
    
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 重新加载酒店列表以更新语言
    loadHotels();
}

// 获取语言名称
function getLanguageName(lang) {
    const names = {
        'en': 'English',
        'zh': '中文',
        'ja': '日本語',
        'ko': '한국어',
        'ru': 'Русский'
    };
    return names[lang] || 'English';
}

// 搜索酒店
function searchHotels() {
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    
    // 显示加载状态
    showNotification(translations[currentLanguage]['loading'] || 'Loading...', 'info');
    
    // 模拟API调用延迟
    setTimeout(() => {
        loadHotels();
        showNotification('搜索完成', 'success');
    }, 1000);
}

// 加载酒店列表
function loadHotels() {
    const container = document.getElementById('hotels-container');
    container.innerHTML = '';
    
    let filteredHotels = mockHotels;
    
    // 应用筛选
    if (currentFilter !== 'all') {
        filteredHotels = filteredHotels.filter(hotel => hotel.type === currentFilter);
    }
    
    // 应用排序
    filteredHotels.sort((a, b) => {
        switch (currentSort) {
            case 'distance':
                return a.distance - b.distance;
            case 'price':
                return a.price - b.price;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });
    
    if (filteredHotels.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-8">
                <p class="text-gray-500">${translations[currentLanguage]['no-hotels-found'] || 'No hotels found'}</p>
            </div>
        `;
        return;
    }
    
    filteredHotels.forEach(hotel => {
        const hotelCard = createHotelCard(hotel);
        container.appendChild(hotelCard);
    });
    
    // 更新地图标记
    if (isMapView) {
        updateMapMarkers(filteredHotels);
    }
}

// 创建酒店卡片
function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'hotel-card bg-white rounded-lg shadow-md overflow-hidden';
    
    const hotelName = hotel[`name_${currentLanguage}`] || hotel.name;
    const description = hotel[`description_${currentLanguage}`] || hotel.description;
    
    card.innerHTML = `
        <img src="${hotel.image}" alt="${hotelName}" class="w-full h-48 object-cover">
        <div class="p-4">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold text-gray-900">${hotelName}</h3>
                <div class="flex items-center">
                    <span class="text-yellow-500">★</span>
                    <span class="ml-1 text-sm text-gray-600">${hotel.rating}</span>
                </div>
            </div>
            <p class="text-sm text-gray-600 mb-3">${description}</p>
            <div class="flex justify-between items-center mb-3">
                <span class="text-sm text-gray-500">${hotel.distance} ${translations[currentLanguage]['distance-km'] || 'km'}</span>
                <div class="flex space-x-1">
                    ${hotel.amenities.map(amenity => `<span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">${amenity}</span>`).join('')}
                </div>
            </div>
            <div class="flex justify-between items-center">
                <div>
                    <span class="text-2xl font-bold text-blue-600">¥${hotel.price.toLocaleString()}</span>
                    <span class="text-sm text-gray-500">/${translations[currentLanguage]['price-per-night'] || 'night'}</span>
                </div>
                <button onclick="bookHotel(${hotel.id})" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    ${translations[currentLanguage]['book-this-hotel'] || 'Book'}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// 更新筛选按钮状态
function updateFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    const activeBtn = document.querySelector(`[data-filter="${currentFilter}"]`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-gray-200', 'text-gray-700');
        activeBtn.classList.add('bg-blue-600', 'text-white');
    }
}

// 切换地图视图
function toggleMapView() {
    isMapView = !isMapView;
    const hotelsContainer = document.querySelector('#hotels-container').parentElement;
    const mapContainer = document.getElementById('map-container');
    const mapToggle = document.getElementById('map-toggle');
    
    if (isMapView) {
        hotelsContainer.classList.add('hidden');
        mapContainer.classList.remove('hidden');
        mapToggle.innerHTML = '<i class="fas fa-list mr-2"></i>列表视图';
        updateMapMarkers(mockHotels);
    } else {
        hotelsContainer.classList.remove('hidden');
        mapContainer.classList.add('hidden');
        mapToggle.innerHTML = '<i class="fas fa-map-marked-alt mr-2"></i>地图视图';
    }
}

// 初始化地图
function initializeMap() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        map = new google.maps.Map(mapElement, {
            center: { lat: 35.6762, lng: 139.6503 }, // 东京坐标
            zoom: 13,
            styles: [
                {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [{ visibility: 'off' }]
                }
            ]
        });
    }
}

// 更新地图标记
function updateMapMarkers(hotels) {
    // 清除现有标记
    markers.forEach(marker => marker.setMap(null));
    markers = [];
    
    hotels.forEach(hotel => {
        const position = {
            lat: 35.6762 + (Math.random() - 0.5) * 0.02, // 在东京附近随机分布
            lng: 139.6503 + (Math.random() - 0.5) * 0.02
        };
        
        const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: hotel[`name_${currentLanguage}`] || hotel.name,
            icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                scaledSize: new google.maps.Size(30, 30)
            }
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="p-2">
                    <h3 class="font-semibold">${hotel[`name_${currentLanguage}`] || hotel.name}</h3>
                    <p class="text-sm text-gray-600">¥${hotel.price.toLocaleString()}/night</p>
                    <p class="text-sm text-gray-600">${hotel.rating} ★</p>
                    <button onclick="bookHotel(${hotel.id})" class="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm">
                        ${translations[currentLanguage]['book-this-hotel'] || 'Book'}
                    </button>
                </div>
            `
        });
        
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
        
        markers.push(marker);
    });
}

// 预订酒店
function bookHotel(hotelId) {
    const hotel = mockHotels.find(h => h.id === hotelId);
    if (!hotel) return;
    
    const modal = document.getElementById('booking-modal');
    const modalContent = document.getElementById('modal-content');
    
    const hotelName = hotel[`name_${currentLanguage}`] || hotel.name;
    
    modalContent.innerHTML = `
        <div class="space-y-4">
            <div class="border-b pb-4">
                <h3 class="text-lg font-semibold">${hotelName}</h3>
                <p class="text-gray-600">¥${hotel.price.toLocaleString()} / ${translations[currentLanguage]['price-per-night'] || 'night'}</p>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">${translations[currentLanguage]['checkin'] || 'Check-in'}</label>
                    <input type="date" id="modal-checkin" class="w-full px-3 py-2 border border-gray-300 rounded-md">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">${translations[currentLanguage]['checkout'] || 'Check-out'}</label>
                    <input type="date" id="modal-checkout" class="w-full px-3 py-2 border border-gray-300 rounded-md">
                </div>
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">${translations[currentLanguage]['guests'] || 'Guests'}</label>
                <select id="modal-guests" class="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            
            <div class="border-t pt-4">
                <h4 class="font-semibold mb-2">${translations[currentLanguage]['payment'] || 'Payment Methods'}</h4>
                <div class="space-y-2">
                    <label class="flex items-center">
                        <input type="radio" name="payment" value="credit" checked class="mr-2">
                        <span>💳 ${translations[currentLanguage]['credit-card'] || 'Credit Card'}</span>
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="payment" value="usdt" class="mr-2">
                        <span>₮ USDT</span>
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="payment" value="eth" class="mr-2">
                        <span>Ξ ETH</span>
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="payment" value="btc" class="mr-2">
                        <span>₿ BTC</span>
                    </label>
                </div>
            </div>
            
            <div class="flex justify-end space-x-3">
                <button onclick="closeModal()" class="px-4 py-2 text-gray-600 hover:text-gray-800">
                    ${translations[currentLanguage]['cancel'] || 'Cancel'}
                </button>
                <button onclick="confirmBooking(${hotelId})" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    ${translations[currentLanguage]['confirm-booking'] || 'Confirm Booking'}
                </button>
            </div>
        </div>
    `;
    
    // 设置默认日期
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    document.getElementById('modal-checkin').value = today.toISOString().split('T')[0];
    document.getElementById('modal-checkout').value = tomorrow.toISOString().split('T')[0];
    
    modal.style.display = 'block';
}

// 确认预订
function confirmBooking(hotelId) {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    // 模拟预订处理
    showNotification(translations[currentLanguage]['processing'] || 'Processing...', 'info');
    
    setTimeout(() => {
        closeModal();
        showNotification(translations[currentLanguage]['booking-success'] || 'Booking successful!', 'success');
    }, 2000);
}

// 关闭模态框
function closeModal() {
    document.getElementById('booking-modal').style.display = 'none';
    document.getElementById('support-modal').style.display = 'none';
}

// 显示客服模态框
function showSupportModal() {
    document.getElementById('support-modal').style.display = 'block';
}

// Web3钱包连接
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            
            showNotification(translations[currentLanguage]['wallet-connected'] || 'Wallet connected successfully', 'success');
            
            // 更新按钮文本
            document.getElementById('connect-wallet').textContent = 
                `${account.substring(0, 6)}...${account.substring(38)}`;
            
        } catch (error) {
            showNotification(translations[currentLanguage]['wallet-connection-failed'] || 'Failed to connect wallet', 'error');
        }
    } else {
        showNotification('Please install MetaMask', 'error');
    }
}

// 设置Web3
function setupWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.on('accountsChanged', function (accounts) {
            if (accounts.length === 0) {
                document.getElementById('connect-wallet').textContent = 
                    translations[currentLanguage]['connect-wallet'] || 'Connect MetaMask';
            }
        });
    }
}

// 显示通知
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${getNotificationClass(type)}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 获取通知样式类
function getNotificationClass(type) {
    switch (type) {
        case 'success':
            return 'bg-green-500';
        case 'error':
            return 'bg-red-500';
        case 'warning':
            return 'bg-yellow-500';
        default:
            return 'bg-blue-500';
    }
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const bookingModal = document.getElementById('booking-modal');
    const supportModal = document.getElementById('support-modal');
    
    if (event.target === bookingModal) {
        bookingModal.style.display = 'none';
    }
    if (event.target === supportModal) {
        supportModal.style.display = 'none';
    }
} 