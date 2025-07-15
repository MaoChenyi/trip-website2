-- 酒店预订系统数据库结构及示例数据

-- 1. 用户表
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    wallet_address VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. 酒店主表
CREATE TABLE IF NOT EXISTS hotels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_zh VARCHAR(255),
    name_ja VARCHAR(255),
    name_ko VARCHAR(255),
    name_ru VARCHAR(255),
    description_en TEXT,
    description_zh TEXT,
    description_ja TEXT,
    description_ko TEXT,
    description_ru TEXT,
    location VARCHAR(255),
    price_per_night DECIMAL(10,2),
    rating DECIMAL(2,1),
    available_rooms INT,
    latitude DECIMAL(10,6),
    longitude DECIMAL(10,6)
);

-- 3. 酒店图片子表
CREATE TABLE IF NOT EXISTS hotel_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (hotel_id) REFERENCES hotels(id) ON DELETE CASCADE
);

-- 4. 酒店房型子表
CREATE TABLE IF NOT EXISTS hotel_room_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT NOT NULL,
    room_type VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(10,2),
    available_count INT,
    FOREIGN KEY (hotel_id) REFERENCES hotels(id) ON DELETE CASCADE
);

-- 5. 机票表
CREATE TABLE IF NOT EXISTS flights (
    id INT AUTO_INCREMENT PRIMARY KEY,
    airline VARCHAR(100),
    flight_number VARCHAR(50),
    departure_city VARCHAR(100),
    arrival_city VARCHAR(100),
    departure_time DATETIME,
    arrival_time DATETIME,
    price DECIMAL(10,2),
    seats_available INT
);

-- 6. 订单表
CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type ENUM('hotel', 'flight') NOT NULL,
    item_id INT NOT NULL,
    check_in DATE,
    check_out DATE,
    flight_date DATE,
    guests INT,
    total_price DECIMAL(10,2),
    payment_method VARCHAR(50),
    status VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 7. 支付记录表
CREATE TABLE IF NOT EXISTS payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    method VARCHAR(50) NOT NULL,
    status VARCHAR(50),
    paid_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    tx_hash VARCHAR(255),
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 8. 评论表
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    hotel_id INT NOT NULL,
    content TEXT NOT NULL,
    rating DECIMAL(2,1),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (hotel_id) REFERENCES hotels(id) ON DELETE CASCADE
);

-- 9. 收藏表
CREATE TABLE IF NOT EXISTS favorites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    hotel_id INT,
    flight_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (hotel_id) REFERENCES hotels(id) ON DELETE CASCADE,
    FOREIGN KEY (flight_id) REFERENCES flights(id) ON DELETE CASCADE
);

-- 示例数据
INSERT INTO users (username, password_hash, email, wallet_address) VALUES
('alice', 'hash1', 'alice@example.com', '0x123abc'),
('bob', 'hash2', 'bob@example.com', '0x456def');

INSERT INTO hotels (name_en, name_zh, description_en, location, price_per_night, rating, available_rooms, latitude, longitude)
VALUES
('Tokyo Grand Hotel', '东京大酒店', 'A luxury hotel in Tokyo', 'Tokyo', 120.00, 4.5, 10, 35.6586, 139.7454);

INSERT INTO hotel_images (hotel_id, image_url) VALUES
(1, 'https://example.com/hotel1_img1.jpg'),
(1, 'https://example.com/hotel1_img2.jpg');

INSERT INTO hotel_room_types (hotel_id, room_type, description, price, available_count) VALUES
(1, 'Single', 'Single room with 1 bed', 120.00, 5),
(1, 'Double', 'Double room with 2 beds', 180.00, 5);

INSERT INTO flights (airline, flight_number, departure_city, arrival_city, departure_time, arrival_time, price, seats_available)
VALUES
('JAL', 'JL123', 'Tokyo', 'Osaka', '2024-07-01 09:00:00', '2024-07-01 10:30:00', 80.00, 50);

INSERT INTO orders (user_id, type, item_id, check_in, check_out, guests, total_price, payment_method, status)
VALUES
(1, 'hotel', 1, '2024-07-10', '2024-07-12', 2, 240.00, 'credit_card', 'confirmed');

INSERT INTO payments (order_id, user_id, amount, method, status, tx_hash)
VALUES
(1, 1, 240.00, 'credit_card', 'paid', NULL);

INSERT INTO comments (user_id, hotel_id, content, rating)
VALUES
(1, 1, 'Very nice hotel!', 5.0);

INSERT INTO favorites (user_id, hotel_id)
VALUES
(1, 1); 
