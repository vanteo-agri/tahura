(function () {
  // Định mức chi phí gốc trên 1 công (đơn vị: triệu đồng)
  const BASE_COSTS = {
    giong: 1.68,
    gian: 1.90,
    phan: 4.90,
    cong: 5.50
  };
  const TOTAL_BASE_COST = 13.98; // triệu đồng / công

  const elCong = document.getElementById('input-cong');
  const rangeCong = document.getElementById('range-cong');
  const elGia = document.getElementById('input-gia');
  const rangeGia = document.getElementById('range-gia');
  const elNangSuat = document.getElementById('input-nangsuat');
  const rangeNangSuat = document.getElementById('range-nangsuat');

  function formatTrieu(val) {
    return val.toLocaleString('vi-VN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + ' triệu đ';
  }

  function updateCalc() {
    const cong = Math.max(0.1, parseFloat(elCong.value) || 1);
    const gia = Math.max(0, parseFloat(elGia.value) || 0);
    const nangSuat = Math.max(100, parseFloat(elNangSuat.value) || 3500);

    // Tính toán (đơn vị triệu đồng)
    const tongSanLuongKg = cong * nangSuat;
    const doanhThu = (tongSanLuongKg * gia) / 1000000;
    const tongChiPhi = cong * TOTAL_BASE_COST;
    const loiNhuan = doanhThu - tongChiPhi;
    const giaHoaVon = Math.round((tongChiPhi * 1000000) / tongSanLuongKg);

    // Cập nhật giao diện kết quả
    document.getElementById('out-doanhthu').textContent = formatTrieu(doanhThu);
    document.getElementById('out-chiphi').textContent = formatTrieu(tongChiPhi);
    document.getElementById('out-hoavon').textContent = giaHoaVon.toLocaleString('vi-VN') + ' đ/kg';

    const cardLoiNhuan = document.getElementById('card-loinhuan');
    const labelLoiNhuan = document.getElementById('label-loinhuan');
    const outLoiNhuan = document.getElementById('out-loinhuan');

    if (loiNhuan >= 0) {
      cardLoiNhuan.className = 'result-card highlight';
      labelLoiNhuan.textContent = 'Lợi nhuận ròng dự kiến';
      outLoiNhuan.textContent = formatTrieu(loiNhuan);
    } else {
      cardLoiNhuan.className = 'result-card loss';
      labelLoiNhuan.textContent = 'Ước tính lỗ';
      outLoiNhuan.textContent = formatTrieu(Math.abs(loiNhuan));
    }

    // Cập nhật bảng chi tiết
    document.getElementById('detail-cong').textContent = cong.toLocaleString('vi-VN');
    document.getElementById('cost-giong').textContent = formatTrieu(cong * BASE_COSTS.giong);
    document.getElementById('cost-gian').textContent = formatTrieu(cong * BASE_COSTS.gian);
    document.getElementById('cost-phan').textContent = formatTrieu(cong * BASE_COSTS.phan);
    document.getElementById('cost-cong').textContent = formatTrieu(cong * BASE_COSTS.cong);
  }

  // Đồng bộ ô nhập số và thanh trượt
  function bindSync(inputEl, rangeEl) {
    inputEl.addEventListener('input', () => {
      rangeEl.value = inputEl.value;
      updateCalc();
    });
    rangeEl.addEventListener('input', () => {
      inputEl.value = rangeEl.value;
      updateCalc();
    });
  }

  bindSync(elCong, rangeCong);
  bindSync(elGia, rangeGia);
  bindSync(elNangSuat, rangeNangSuat);

  updateCalc();
})();
