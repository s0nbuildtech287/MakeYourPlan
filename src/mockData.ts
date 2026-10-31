import { AppData, MindmapNode } from './types';

export const INITIAL_MOCK_NODES: MindmapNode[] = [
  // ================= 1. MINDMAP CHO NOTE "Lộ Trình Xây Dựng Hệ Sinh Thái AI Agent 2026" =================
  {
    id: 'm-root-startup',
    text: '🚀 Lộ Trình Hệ Sinh Thái AI Agent 2026',
    parentId: null,
    x: 400,
    y: 300,
    type: 'root',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 1
  },
  // Nhánh Phải
  {
    id: 'm-start-1',
    parentId: 'm-root-startup',
    text: '1. Kiến Trúc Backend & Vector DB',
    x: 680,
    y: 170,
    type: 'main',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 1,
    isCompleted: true
  },
  {
    id: 'm-start-1-1',
    parentId: 'm-start-1',
    text: 'PostgreSQL + pgvector Hybrid Search',
    x: 940,
    y: 130,
    type: 'sub',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 1,
    isCompleted: true
  },
  {
    id: 'm-start-1-2',
    parentId: 'm-start-1',
    text: 'Redis Cache & Event Pub/Sub',
    x: 940,
    y: 200,
    type: 'sub',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 2,
    isCompleted: true
  },
  {
    id: 'm-start-2',
    parentId: 'm-root-startup',
    text: '2. Giao Diện 3D & Web Canvas',
    x: 680,
    y: 320,
    type: 'main',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 2,
    isCompleted: true
  },
  {
    id: 'm-start-2-1',
    parentId: 'm-start-2',
    text: 'Glassmorphism Cyber Theme & Parallax',
    x: 940,
    y: 290,
    type: 'sub',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 1,
    isCompleted: true
  },
  {
    id: 'm-start-2-2',
    parentId: 'm-start-2',
    text: 'Auto-Layout 2 Bên Cân Bằng Đối Xứng',
    x: 940,
    y: 360,
    type: 'sub',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 2,
    isCompleted: true
  },
  {
    id: 'm-start-3',
    parentId: 'm-root-startup',
    text: '3. Trợ Lý AI Gemini Pro 1-Click',
    x: 680,
    y: 470,
    type: 'main',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 3,
    isCompleted: false
  },
  {
    id: 'm-start-3-1',
    parentId: 'm-start-3',
    text: 'Tự Động Bóc Tách Milestone & Checklist',
    x: 940,
    y: 440,
    type: 'sub',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 1,
    isCompleted: true
  },
  {
    id: 'm-start-3-2',
    parentId: 'm-start-3',
    text: 'Tạo Nhánh Tư Duy Mindmap Thông Minh',
    x: 940,
    y: 510,
    type: 'sub',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 2,
    isCompleted: false
  },
  // Nhánh Trái (Đối xứng)
  {
    id: 'm-start-4',
    parentId: 'm-root-startup',
    text: '4. Hạ Tầng Kubernetes & CI/CD',
    x: 120,
    y: 200,
    type: 'main',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 4,
    isCompleted: true
  },
  {
    id: 'm-start-4-1',
    parentId: 'm-start-4',
    text: 'Docker Multi-stage Build Tối Ưu',
    x: -140,
    y: 160,
    type: 'sub',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 1,
    isCompleted: true
  },
  {
    id: 'm-start-4-2',
    parentId: 'm-start-4',
    text: 'GitHub Actions Tự Động Triển Khai',
    x: -140,
    y: 230,
    type: 'sub',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 2,
    isCompleted: true
  },
  {
    id: 'm-start-5',
    parentId: 'm-root-startup',
    text: '5. Ra Mắt & Tăng Trưởng Toàn Cầu',
    x: 120,
    y: 380,
    type: 'main',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 5,
    isCompleted: false
  },
  {
    id: 'm-start-5-1',
    parentId: 'm-start-5',
    text: 'Chương Trình Beta 1,000 Người Dùng',
    x: -140,
    y: 340,
    type: 'sub',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 1,
    isCompleted: false
  },
  {
    id: 'm-start-5-2',
    parentId: 'm-start-5',
    text: 'Hợp Tác Cộng Đồng Lập Trình & Tài Chính',
    x: -140,
    y: 420,
    type: 'sub',
    noteId: 'note-startup-root',
    topicId: 'topic-startup',
    priority: 2,
    isCompleted: false
  },

  // ================= 2. MINDMAP CHO NOTE "Chiến Lược Quản Lý Tài Sản & Đầu Tư 2026" =================
  {
    id: 'm-root-fin',
    text: '💰 Quản Trị Danh Mục Tài Sản 2026',
    parentId: null,
    x: 400,
    y: 300,
    type: 'root',
    noteId: 'note-finance-root',
    topicId: 'topic-finance',
    priority: 1
  },
  {
    id: 'm-fin-1',
    parentId: 'm-root-fin',
    text: '1. Cổ Phiếu Tăng Trưởng & VN30 (50%)',
    x: 680,
    y: 190,
    type: 'main',
    noteId: 'note-finance-root',
    topicId: 'topic-finance',
    priority: 1,
    isCompleted: true
  },
  {
    id: 'm-fin-1-1',
    parentId: 'm-fin-1',
    text: 'Nhóm Ngân Hàng & Bán Lẻ Đầu Ngành',
    x: 940,
    y: 150,
    type: 'sub',
    noteId: 'note-finance-root',
    topicId: 'topic-finance',
    priority: 1,
    isCompleted: true
  },
  {
    id: 'm-fin-1-2',
    parentId: 'm-fin-1',
    text: 'Cổ Tức Tiền Mặt Đều Đặn Hàng Năm',
    x: 940,
    y: 220,
    type: 'sub',
    noteId: 'note-finance-root',
    topicId: 'topic-finance',
    priority: 2,
    isCompleted: true
  },
  {
    id: 'm-fin-2',
    parentId: 'm-root-fin',
    text: '2. Giao Dịch Thuật Toán Quant (20%)',
    x: 680,
    y: 380,
    type: 'main',
    noteId: 'note-finance-root',
    topicId: 'topic-finance',
    priority: 2,
    isCompleted: true
  },
  {
    id: 'm-fin-3',
    parentId: 'm-root-fin',
    text: '3. Bất Động Sản Dòng Tiền (15%)',
    x: 120,
    y: 210,
    type: 'main',
    noteId: 'note-finance-root',
    topicId: 'topic-finance',
    priority: 3,
    isCompleted: false
  },
  {
    id: 'm-fin-4',
    parentId: 'm-root-fin',
    text: '4. Quỹ Khẩn Cấp & Vàng (15%)',
    x: 120,
    y: 370,
    type: 'main',
    noteId: 'note-finance-root',
    topicId: 'topic-finance',
    priority: 4,
    isCompleted: true
  },

  // ================= 3. MINDMAP CHO NOTE "Lộ Trình Trở Thành Solutions Architect" =================
  {
    id: 'm-root-grow',
    text: '🎓 Solutions Architect Mastery 2026',
    parentId: null,
    x: 400,
    y: 300,
    type: 'root',
    noteId: 'note-growth-root',
    topicId: 'topic-growth',
    priority: 1
  },
  {
    id: 'm-grow-1',
    parentId: 'm-root-grow',
    text: '1. Kiến Trúc Phân Tán (Distributed Systems)',
    x: 680,
    y: 200,
    type: 'main',
    noteId: 'note-growth-root',
    topicId: 'topic-growth',
    priority: 1,
    isCompleted: true
  },
  {
    id: 'm-grow-2',
    parentId: 'm-root-grow',
    text: '2. Chứng Chỉ AWS Solutions Architect Pro',
    x: 680,
    y: 360,
    type: 'main',
    noteId: 'note-growth-root',
    topicId: 'topic-growth',
    priority: 2,
    isCompleted: false
  },
  {
    id: 'm-grow-3',
    parentId: 'm-root-grow',
    text: '3. Rèn Luyện Thể Chất & Đọc 50 Đầu Sách',
    x: 120,
    y: 280,
    type: 'main',
    noteId: 'note-growth-root',
    topicId: 'topic-growth',
    priority: 3,
    isCompleted: true
  }
];

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
  ],
  mindmapNodes: INITIAL_MOCK_NODES
};
