
export type Page = 
  | 'Dashboard'
  | 'Khách hàng'
  | 'Lịch chụp'
  | 'Việc cần làm'
  | 'Nhân viên'
  | 'Gói dịch vụ'
  | 'Hợp đồng & thanh toán'
  | 'Tài chính'
  | 'Nhật ký hoạt động'
  | 'Cài đặt';

export interface Customer {
  id: string;
  coupleName: string;
  groomName: string;
  brideName: string;
  phone: string;
  email: string;
  source: 'Facebook' | 'Zalo' | 'Website' | 'Giới thiệu' | 'Walk-in';
  status: 'Lead mới' | 'Đã tư vấn' | 'Đã chốt' | 'Đã hủy' | 'Khách cũ';
  assignedStaff: string;
  createdAt: string;
  weddingDate?: string;
  budget?: number;
  notes?: string;
}

export interface Staff {
  id: string;
  name: string;
  role: 'Photographer' | 'Makeup Artist' | 'Sale' | 'Admin' | 'Videographer' | 'Trợ lý';
  phone: string;
  email: string;
  status: 'Đang làm' | 'Part-time' | 'Nghỉ';
  avatarUrl: string;
}

export interface Booking {
  id: string;
  customerId: string;
  coupleName: string;
  serviceType: 'Chụp Pre-wedding' | 'Chụp Lễ cưới' | 'Chụp Album' | 'Make up' | 'Quay phim';
  start: Date;
  end: Date;
  location: string;
  assignedStaffIds: string[];
  status: 'Đang chờ' | 'Đã chốt' | 'Hoàn thành' | 'Hủy';
  notes?: string;
}

export type TaskStatus = 'Todo' | 'In progress' | 'Done';
export type TaskPriority = 'Cao' | 'Trung bình' | 'Thấp';

export interface Task {
  id: string;
  title: string;
  bookingId?: string;
  assignedToId: string;
  deadline: string;
  status: TaskStatus;
  priority: TaskPriority;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  tags: ('Best Seller' | 'Hot' | 'Khuyến mãi')[];
}

export type ContractStatus = 'Đang thương lượng' | 'Đã ký' | 'Hoàn thành' | 'Hủy';

export interface Contract {
  id: string;
  customerId: string;
  packageId: string;
  totalValue: number;
  paidAmount: number;
  remainingAmount: number;
  status: ContractStatus;
  signDate: string;
  weddingDate: string;
}

export interface FinanceTransaction {
  id: string;
  date: string;
  customerName: string;
  type: 'Cọc' | 'Thanh toán' | 'Hoàn tiền' | 'Chi phí';
  amount: number;
  notes: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  details: string;
}
