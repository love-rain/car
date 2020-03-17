import React from "react";

const Suachua = () => {
  return <div style={{padding: 24}} className="fs-16">
    <h1 className='text-center'>SỬA CHỮA</h1>
    <p>Mục đích của công việc bảo dưỡng xe là giữ cho xe luôn trong điều kiện sử dụng tốt nhất và tránh được những
      “trục trặc trên đường”, cụ thể như sau:</p>
    <ul>
      <li>Thay thế định kỳ những vật liệu và phụ tùng tiêu hao như dầu nhờn, lọc nhớt, lọc nhiên liệu, lọc gió,v..v..
        . (Những loại thay thế này rất quan trọng nhằm giữ cho động cơ và các chi tiết quan trọng khác của xe luôn
        trong tình trạng tốt nhất).
      </li>
      <li>Phát hiện hỏng hóc có thể xảy ra, từ đó có cách xử lý cần thiết, kịp thời để giảm thiểu chi phí sửa chữa
        thực tế.
      </li>
    </ul>
    <p><strong>Các loại bảo dưỡng</strong></p>
    <p>Có hai loại hình bảo dưỡng như sau:</p>
    <ul>
      <li>Bảo dưỡng miễn phí công lao động: Áp dụng cho mức bảo dưỡng 5.000 km đầu tiên.</li>
      <li>Bảo dưỡng định kỳ: Mỗi 5.000 Km sau lần bảo dưỡng miễn phí công lao động.</li>
    </ul>
    <p>Vui lòng tham khảo Lịch kiểm tra và bảo dưỡng định kỳ trong quyển Sổ tay hướng dẫn bảo dưỡng xe để thực hiện
      công việc bảo dưỡng xe tốt nhất.</p>
    <p className='text-center'>
      <img
        className='responsive-img'
        src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/08/bao-duong-img-1-768x538.jpg"
        alt=""
      />
    </p>
  </div>
};

export default Suachua;