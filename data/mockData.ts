
import type { Customer, Staff, Booking, Task, Package, Contract, FinanceTransaction, ActivityLog } from '../types/types';

// Mock Staff
export const mockStaff: Staff[] = [
  { id: 'staff-1', name: 'Nguyễn Văn An', role: 'Photographer', phone: '0901234567', email: 'an.nv@studio.com', status: 'Đang làm', avatarUrl: 'https://picsum.photos/seed/staff1/100/100' },
  { id: 'staff-2', name: 'Trần Thị Bích', role: 'Makeup Artist', phone: '0902345678', email: 'bich.tt@studio.com', status: 'Đang làm', avatarUrl: 'https://picsum.photos/seed/staff2/100/100' },
  { id: 'staff-3', name: 'Lê Minh Cường', role: 'Sale', phone: '0903456789', email: 'cuong.lm@studio.com', status: 'Đang làm', avatarUrl: 'https://picsum.photos/seed/staff3/100/100' },
  { id: 'staff-4', name: 'Phạm Thị Dung', role: 'Admin', phone: '0904567890', email: 'dung.pt@studio.com', status: 'Đang làm', avatarUrl: 'https://picsum.photos/seed/staff4/100/100' },
  { id: 'staff-5', name: 'Hoàng Văn Em', role: 'Videographer', phone: '0905678901', email: 'em.hv@studio.com', status: 'Part-time', avatarUrl: 'https://picsum.photos/seed/staff5/100/100' },
  { id: 'staff-6', name: 'Vũ Thị Giang', role: 'Trợ lý', phone: '0906789012', email: 'giang.vt@studio.com', status: 'Đang làm', avatarUrl: 'https://picsum.photos/seed/staff6/100/100' },
];

// Mock Customers
export const mockCustomers: Customer[] = [
  { id: 'cust-1', coupleName: 'Anh Khoa & Mỹ Linh', groomName: 'Trần Anh Khoa', brideName: 'Nguyễn Mỹ Linh', phone: '0912345678', email: 'khoalinh@email.com', source: 'Facebook', status: 'Đã chốt', assignedStaff: 'Lê Minh Cường', createdAt: '2024-07-01' },
  { id: 'cust-2', coupleName: 'Bảo Long & Thu Hà', groomName: 'Hoàng Bảo Long', brideName: 'Đặng Thu Hà', phone: '0987654321', email: 'longha@email.com', source: 'Giới thiệu', status: 'Đã chốt', assignedStaff: 'Lê Minh Cường', createdAt: '2024-06-25' },
  { id: 'cust-3', coupleName: 'Công Minh & Phương Thảo', groomName: 'Vũ Công Minh', brideName: 'Lê Phương Thảo', phone: '0911223344', email: 'minhthao@email.com', source: 'Website', status: 'Đã tư vấn', assignedStaff: 'Lê Minh Cường', createdAt: '2024-07-10' },
  { id: 'cust-4', coupleName: 'Duy Anh & Ngọc Mai', groomName: 'Ngô Duy Anh', brideName: 'Bùi Ngọc Mai', phone: '0944556677', email: 'anhmai@email.com', source: 'Zalo', status: 'Lead mới', assignedStaff: 'Lê Minh Cường', createdAt: '2024-07-15' },
  { id: 'cust-5', coupleName: 'Gia Huy & Khánh An', groomName: 'Đỗ Gia Huy', brideName: 'Trần Khánh An', phone: '0966778899', email: 'huyan@email.com', source: 'Walk-in', status: 'Khách cũ', assignedStaff: 'Lê Minh Cường', createdAt: '2023-12-10' },
  { id: 'cust-6', coupleName: 'Hải Đăng & Thùy Dương', groomName: 'Lý Hải Đăng', brideName: 'Phan Thùy Dương', phone: '0977889900', email: 'dangduong@email.com', source: 'Facebook', status: 'Đã hủy', assignedStaff: 'Lê Minh Cường', createdAt: '2024-05-20' },
];

// Mock Bookings
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const nextWeek = new Date();
nextWeek.setDate(today.getDate() + 7);

export const mockBookings: Booking[] = [
  { id: 'book-1', customerId: 'cust-1', coupleName: 'Anh Khoa & Mỹ Linh', serviceType: 'Chụp Pre-wedding', start: new Date(today.setHours(9, 0, 0, 0)), end: new Date(today.setHours(17, 0, 0, 0)), location: 'Phim trường Smiley Ville', assignedStaffIds: ['staff-1', 'staff-2', 'staff-6'], status: 'Đã chốt' },
  { id: 'book-2', customerId: 'cust-2', coupleName: 'Bảo Long & Thu Hà', serviceType: 'Chụp Lễ cưới', start: new Date(tomorrow.setHours(8, 0, 0, 0)), end: new Date(tomorrow.setHours(12, 0, 0, 0)), location: 'Nhà riêng & Trung tâm tiệc cưới', assignedStaffIds: ['staff-1', 'staff-5'], status: 'Đã chốt' },
  { id: 'book-3', customerId: 'cust-3', coupleName: 'Công Minh & Phương Thảo', serviceType: 'Make up', start: new Date(nextWeek.setHours(14, 0, 0, 0)), end: new Date(nextWeek.setHours(16, 0, 0, 0)), location: 'Studio', assignedStaffIds: ['staff-2'], status: 'Đang chờ' },
  { id: 'book-4', customerId: 'cust-5', coupleName: 'Gia Huy & Khánh An', serviceType: 'Chụp Album', start: new Date(2024, 5, 20, 10, 0), end: new Date(2024, 5, 20, 15, 0), location: 'Studio', assignedStaffIds: ['staff-1'], status: 'Hoàn thành' },
  { id: 'book-5', customerId: 'cust-6', coupleName: 'Hải Đăng & Thùy Dương', serviceType: 'Quay phim', start: new Date(2024, 6, 28, 9, 0), end: new Date(2024, 6, 28, 21, 0), location: 'Hồ Tây', assignedStaffIds: ['staff-5'], status: 'Hủy' },
];

// Mock Tasks
export const mockTasks: Task[] = [
  { id: 'task-1', title: 'Thiết kế album cho cặp đôi Anh Khoa & Mỹ Linh', bookingId: 'book-1', assignedToId: 'staff-4', deadline: '2024-08-10', status: 'In progress', priority: 'Cao' },
  { id: 'task-2', title: 'Chuẩn bị váy cưới cho Thu Hà', bookingId: 'book-2', assignedToId: 'staff-6', deadline: '2024-07-25', status: 'Todo', priority: 'Cao' },
  { id: 'task-3', title: 'Liên hệ xác nhận lịch make up với Phương Thảo', bookingId: 'book-3', assignedToId: 'staff-3', deadline: '2024-07-28', status: 'Todo', priority: 'Trung bình' },
  { id: 'task-4', title: 'Chỉnh sửa video highlights Lễ cưới Bảo Long & Thu Hà', bookingId: 'book-2', assignedToId: 'staff-5', deadline: '2024-08-15', status: 'Todo', priority: 'Trung bình' },
  { id: 'task-5', title: 'Gửi báo giá cho lead mới Duy Anh', assignedToId: 'staff-3', deadline: '2024-07-22', status: 'Done', priority: 'Thấp' },
];

// Mock Packages
export const mockPackages: Package[] = [
  { id: 'pkg-1', name: 'Gói Pre-wedding Đà Lạt', price: 25000000, description: 'Trọn gói chụp ảnh cưới tại Đà Lạt 2 ngày 1 đêm.', features: ['Ekip 3 người', '2 váy cưới, 2 vest', 'Xe di chuyển', '300-400 file ảnh gốc', 'Album photobook'], tags: ['Best Seller', 'Hot'] },
  { id: 'pkg-2', name: 'Gói Album Studio', price: 8000000, description: 'Chụp ảnh album cưới tại studio với 3 concept.', features: ['Ekip 2 người', '3 váy cưới, 3 vest', 'Make up & làm tóc', '20 ảnh photoshop', 'Album mini'], tags: ['Khuyến mãi'] },
  { id: 'pkg-3', name: 'Gói Full Lễ + Tiệc', price: 15000000, description: 'Quay phim và chụp ảnh trọn vẹn ngày cưới.', features: ['2 Photographer', '1 Videographer', 'Chụp lễ gia tiên', 'Chụp tiệc nhà hàng', 'Video highlight 5 phút'], tags: [] },
  { id: 'pkg-4', name: 'Gói Phóng sự cưới', price: 12000000, description: 'Ghi lại những khoảnh khắc chân thực nhất trong ngày cưới.', features: ['2 Photographer (phóng sự)', 'Không giới hạn file ảnh', 'Slide trình chiếu', 'In 100 ảnh 13x18'], tags: ['Hot'] },
];

// Mock Contracts
export const mockContracts: Contract[] = [
  { id: 'HD-001', customerId: 'cust-1', packageId: 'pkg-1', totalValue: 25000000, paidAmount: 15000000, remainingAmount: 10000000, status: 'Đã ký', signDate: '2024-07-05', weddingDate: '2024-10-20' },
  { id: 'HD-002', customerId: 'cust-2', packageId: 'pkg-3', totalValue: 15000000, paidAmount: 15000000, remainingAmount: 0, status: 'Hoàn thành', signDate: '2024-06-28', weddingDate: '2024-07-20' },
  { id: 'HD-003', customerId: 'cust-3', packageId: 'pkg-2', totalValue: 8000000, paidAmount: 0, remainingAmount: 8000000, status: 'Đang thương lượng', signDate: '2024-07-12', weddingDate: '2024-09-15' },
  { id: 'HD-004', customerId: 'cust-6', packageId: 'pkg-4', totalValue: 12000000, paidAmount: 5000000, remainingAmount: 7000000, status: 'Hủy', signDate: '2024-05-22', weddingDate: '2024-08-08' },
];

// Mock Finance Transactions
export const mockFinanceTransactions: FinanceTransaction[] = [
  { id: 'tran-1', date: '2024-07-05', customerName: 'Anh Khoa & Mỹ Linh', type: 'Cọc', amount: 10000000, notes: 'Cọc lần 1 hợp đồng HD-001' },
  { id: 'tran-2', date: '2024-07-10', customerName: 'Bảo Long & Thu Hà', type: 'Thanh toán', amount: 7000000, notes: 'Thanh toán đợt 2 HD-002' },
  { id: 'tran-3', date: '2024-07-12', customerName: 'Anh Khoa & Mỹ Linh', type: 'Thanh toán', amount: 5000000, notes: 'Thanh toán đợt 2 HD-001' },
  { id: 'tran-4', date: '2024-07-15', customerName: '-', type: 'Chi phí', amount: -2000000, notes: 'Chi phí thuê đạo cụ' },
  { id: 'tran-5', date: '2024-07-20', customerName: 'Bảo Long & Thu Hà', type: 'Thanh toán', amount: 8000000, notes: 'Thanh toán cuối HD-002' },
];

// Mock Activity Log
export const mockActivityLog: ActivityLog[] = [
  { id: 'log-1', timestamp: '2024-07-15 14:30', user: 'Lê Minh Cường', action: 'Tạo lead mới', details: 'Khách hàng: Ngô Duy Anh & Bùi Ngọc Mai' },
  { id: 'log-2', timestamp: '2024-07-15 11:00', user: 'Admin', action: 'Cập nhật hợp đồng', details: 'Hợp đồng HD-002 chuyển trạng thái thành "Hoàn thành"' },
  { id: 'log-3', timestamp: '2024-07-14 09:15', user: 'Nguyễn Văn An', action: 'Phân công nhân sự', details: 'Thêm Vũ Thị Giang vào booking #book-1' },
  { id: 'log-4', timestamp: '2024-07-13 16:45', user: 'Lê Minh Cường', action: 'Gửi báo giá', details: 'Gửi báo giá gói Pre-wedding cho Vũ Công Minh' },
  { id: 'log-5', timestamp: '2024-07-12 10:00', user: 'Admin', action: 'Tạo hợp đồng mới', details: 'Hợp đồng HD-003 cho khách hàng Công Minh & Phương Thảo' },
];
