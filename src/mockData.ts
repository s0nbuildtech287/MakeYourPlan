import { AppData } from './types';

export const INITIAL_MOCK_DATA: AppData = {
  topics: [
    {
      id: 'topic-startup',
      name: '🚀 Khởi Nghiệp AI & Tech 2026',
      color: '#10B981'
    },
    {
      id: 'topic-finance',
      name: '💰 Kế Hoạch Tự Do Tài Chính',
      color: '#F59E0B'
    },
    {
      id: 'topic-growth',
      name: '📚 Nâng Cao Kỹ Năng & Năng Suất',
      color: '#6366F1'
    }
  ],
  notes: [
    {
      id: 'note-startup-root',
      topicId: 'topic-startup',
      title: 'Lộ Trình Xây Dựng Hệ Sinh Thái AI Agent 2026',
      updatedAt: Date.now() - 3600000 * 2,
      isPinned: true,
      content: `# 🚀 Lộ Trình Xây Dựng Hệ Sinh Thái AI Agent 2026

*   **Trạng thái:** 🟢 Đang thực thi tích cực (Sprint Q1-Q2)
*   **Mục tiêu cốt lõi:** Ra mắt nền tảng Make Your Plan 3D kết hợp trợ lý AI Gemini Pro hỗ trợ tự động bóc tách sơ đồ tư duy.
*   **Tiến độ tổng thể:** 75% hoàn thành

---

## 📍 Giai đoạn 1: Chuẩn bị & Kiến trúc Kỹ thuật
- [x] Khảo sát nhu cầu người dùng về sơ đồ tư duy phân cấp đối xứng
- [x] Thiết kế Design System với phong cách Cyber Glassmorphism & Neon Glow
- [x] Hoàn thiện thuật toán Auto-Layout cân bằng 2 bên đối xứng
- 🔴 **Milestone 1:** Hoàn thành đặc tả kiến trúc kỹ thuật và MVP sơ đồ tư duy 3D

## 📍 Giai đoạn 2: Tích Hợp AI & Trải Nghiệm Tương Tác
- [x] Kết nối Google Gemini Pro SDK để phân rã mục tiêu tự động
- [x] Hỗ trợ trình soạn thảo Markdown đa cấp với Task Checklist tương tác
- [ ] Bổ sung cơ chế đồng bộ Realtime đa thiết bị qua Cloud
- [ ] Tích hợp xuất file PDF độ phân giải cao & Vector SVG
- 🔵 **Milestone 2:** Phát hành bản Beta cho 1,000 người dùng thử nghiệm

## 📍 Giai đoạn 3: Tối Ưu Hóa & Tăng Trưởng
- [ ] Triển khai chiến dịch tiếp cận cộng đồng lập trình viên & chuyên gia tài chính
- [ ] Hoàn thiện gói tính năng Pro cho doanh nghiệp vừa và nhỏ
- 🟢 **Milestone 3:** Chính thức thương mại hóa sản phẩm trên quy mô toàn cầu`
    },
    {
      id: 'note-startup-backend',
      topicId: 'topic-startup',
      parentNoteId: 'note-startup-root',
      title: '1. Kiến Trúc Backend & Vector DB',
      updatedAt: Date.now() - 3600000 * 5,
      content: `# ⚙️ Kiến Trúc Backend & Vector DB

*   **Chủ nhiệm:** Kỹ sư Trưởng Hệ Thống
*   **Tech Stack:** Java Spring Boot / Node.js, PostgreSQL, pgvector, Redis Cache

---

## 📋 Các đầu mục công việc trọng tâm
- [x] Thiết kế lược đồ cơ sở dữ liệu quan hệ cho Cây thư mục và Node liên kết
- [x] Thiết lập Embedding Pipeline lưu trữ ngữ cảnh kế hoạch vào Vector Database
- [x] Xây dựng API xác thực JWT bảo mật với cơ chế Refresh Token
- [ ] Tối ưu hóa truy vấn thuật toán DFS/BFS cho cây Mindmap kích thước lớn (>500 nodes)
- [ ] Thiết lập hệ thống giám sát Prometheus và Grafana Dashboard`
    },
    {
      id: 'note-startup-ui',
      topicId: 'topic-startup',
      parentNoteId: 'note-startup-root',
      title: '2. Giao Diện Người Dùng 3D & Web Canvas',
      updatedAt: Date.now() - 3600000 * 8,
      content: `# 🎨 Thiết Kế Giao Diện 3D & Web Canvas

*   **Mục tiêu:** Đạt chuẩn độ mượt 60fps trên mọi thiết bị và trải nghiệm điện ảnh hút mắt.

---

## 📋 Nhiệm vụ chính
- [x] Xây dựng Landing Page 3D Showcase với hiệu ứng tương tác chuột Parallax
- [x] Triển khai Canvas Mindmap hỗ trợ kéo thả tự do, pan & zoom mượt mà
- [x] Thiết kế Modal Đăng nhập Glassmorphism hỗ trợ 1-click Auto Demo Accounts
- [x] Tích hợp thanh công cụ định dạng Markdown nhanh (Heading, Bold, Checkbox, Emoji)
- [ ] Bổ sung hiệu ứng hạt sao vũ trụ tương tác (Cosmic Particle Glow)`
    },
    {
      id: 'note-startup-cloud',
      topicId: 'topic-startup',
      parentNoteId: 'note-startup-root',
      title: '3. Triển Khai Hạ Tầng Kubernetes & CI/CD',
      updatedAt: Date.now() - 3600000 * 12,
      content: `# ☁️ Hạ Tầng Cloud & Tự Động Hóa CI/CD

- [x] Viết Dockerfile tối ưu kích thước image (<50MB)
- [x] Thiết lập GitHub Actions tự động kiểm thử và build production
- [ ] Cấu hình Kubernetes Cluster với HPA (Horizontal Pod Autoscaler)
- [ ] Triển khai CDN Cloudflare bảo vệ DDoS và tăng tốc tải tài nguyên tĩnh`
    },
    {
      id: 'note-finance-root',
      topicId: 'topic-finance',
      title: 'Chiến Lược Quản Lý Tài Sản & Đầu Tư 2026',
      updatedAt: Date.now() - 3600000 * 18,
      isPinned: true,
      content: `# 💰 Chiến Lược Quản Lý Tài Sản & Đầu Tư 2026

*   **Mục tiêu:** Xây dựng danh mục đầu tư tăng trưởng bền vững với tỷ suất sinh lời kỳ vọng 22%/năm.
*   **Nguyên tắc:** Quản trị rủi ro đặt lên hàng đầu, bảo vệ vốn trước khi tìm kiếm lợi nhuận.

---

## 📊 Cơ cấu phân bổ danh mục (Asset Allocation)
1. **Cổ phiếu tăng trưởng & Cổ tức:** 50%
2. **Hệ thống Giao dịch Thuật toán (Quant):** 20%
3. **Bất động sản dòng tiền:** 15%
4. **Vàng & Tiền mặt dự phòng khẩn cấp:** 15%

---

## 📍 Checklist kỷ luật định kỳ
- [x] Trích 35% thu nhập hàng tháng ngay khi nhận lương vào tài khoản đầu tư
- [x] Tái cân bằng danh mục định kỳ mỗi cuối quý
- [ ] Không giao dịch theo cảm xúc, tuân thủ nghiêm ngặt quy tắc cắt lỗ 7%
- [ ] Ghi chép nhật ký lệnh giao dịch và đánh giá hiệu quả hàng tuần`
    },
    {
      id: 'note-finance-algo',
      topicId: 'topic-finance',
      parentNoteId: 'note-finance-root',
      title: 'Hệ Thống Giao Dịch Thuật Toán (Quant Trading)',
      updatedAt: Date.now() - 3600000 * 24,
      content: `# 🤖 Hệ Thống Giao Dịch Thuật Toán (Quant Trading)

- [x] Thu thập dữ liệu lịch sử giá OHLCV sàn chứng khoán Việt Nam
- [x] Kiểm thử chiến lược Backtest theo bộ lọc Trend Following & RSI Momentum
- [ ] Tích hợp Webhook cảnh báo tín hiệu mua/bán tự động qua Telegram Bot
- [ ] Giám sát rủi ro Drawdown tối đa không vượt quá 12%`
    },
    {
      id: 'note-growth-root',
      topicId: 'topic-growth',
      title: 'Lộ Trình Trở Thành Solutions Architect Xuất Sắc',
      updatedAt: Date.now() - 3600000 * 30,
      content: `# 🎓 Lộ Trình Solutions Architect 2026

*   **Mục tiêu:** Đạt chứng chỉ AWS Certified Solutions Architect Professional & Master System Design.

---

## 📋 Các chuyên đề cần làm chủ
- [x] Nắm vững các mẫu thiết kế Distributed Systems (CAP Theorem, Event Sourcing, CQRS)
- [x] Thực hành tối ưu hóa cơ sở dữ liệu lớn và chiến lược Indexing nâng cao
- [ ] Đọc xong cuốn sách "Designing Data-Intensive Applications" của Martin Kleppmann
- [ ] Hoàn thành 12 đồ án kiến trúc thực tế trên môi trường Multi-Cloud`
    },
    {
      id: 'note-growth-habits',
      topicId: 'topic-growth',
      title: 'Kỷ Luật Thể Chất & Đọc 50 Đầu Sách Năm 2026',
      updatedAt: Date.now() - 3600000 * 36,
      content: `# 🏃 Kỷ Luật Cá Nhân: Rèn Luyện & Phát Triển

- [x] Chạy bộ tối thiểu 20km mỗi tuần
- [x] Đọc ít nhất 30 trang sách mỗi buổi sáng trước giờ làm việc
- [ ] Duy trì giấc ngủ đủ 7 tiếng mỗi ngày
- [ ] Thực hành thiền định tĩnh tâm 15 phút mỗi tối`
    }
  ]
};
