const menu=document.querySelector('.menu');const nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
let filter='all';const search=document.querySelector('.search input');function normalize(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();}function filterProducts(){let count=0;document.querySelectorAll('.product').forEach(card=>{const visible=(filter==='all'||card.dataset.category===filter)&&normalize(card.dataset.name).includes(normalize(search.value.trim()));card.hidden=!visible;if(visible)count++;});document.querySelector('#no-results').hidden=count>0;}document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});filterProducts();}));document.querySelector('[data-filter="all"]').setAttribute('aria-pressed','true');search.addEventListener('input',filterProducts);
const dialog=document.querySelector('dialog');const title=document.querySelector('#dialog-title');const content=document.querySelector('#dialog-content');function openDialog(heading,paragraphs){title.textContent=heading;content.replaceChildren();paragraphs.forEach(text=>{const p=document.createElement('p');p.textContent=text;content.append(p);});if(!dialog.open) dialog.showModal();dialog.scrollTop=0;}document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{const name=button.dataset.product;document.querySelector('#interest').value=button.closest('.product').dataset.category==='fertilizer'?'Phân bón':'Hạt giống';updateContactFields();document.querySelector('#message').value=`Tôi muốn được tư vấn về ${name.toLowerCase()}. Cây trồng và diện tích dự kiến của tôi: `;const info={
  "Cải thìa F1 24":[
    "Đặc tính giống: Cây sinh trưởng khỏe, chịu nhiệt, chịu mưa, kháng bệnh thối nhũn tốt.",
    "Cây có độ đồng đều cao, cây xanh, bẹ dày, củ tròn, nặng ký.",
    "Thời gian thu hoạch: 28–30 ngày sau gieo.",
    "Thời vụ trồng: Quanh năm, vụ chính Đông Xuân."
  ],
  "Dưa leo Thái F1 Mầm Xanh 39":["Đặc tính giống: Năng suất cao, cây sinh trưởng rất khỏe, kháng tốt các bệnh như đốm lá, virus... Trái sớm, dài 19–21 cm, trái rất bóng và rộ trái gốc mạnh, thích hợp vận chuyển xa, trái trên vẫn bóng đẹp.","Mật độ cây trồng: Cây cách cây 30–35 cm, hàng cách hàng 1,2–1,3 m.","Thu hoạch: 32–34 ngày sau gieo.","Thời vụ: Quanh năm, phù hợp nhất vụ Đông Xuân."],"Bí đao chanh F1 789":["Đặc tính giống: Giống bí đao có dạng trái đẹp, thuôn dài, đồng đều, thịt trái xanh, được thị trường ưa chuộng.","Thu hoạch sớm và tập trung, sau 42–45 ngày kể từ khi trồng. Năng suất cao, trái đẹp bóng, thị trường ưa chuộng, trái xanh có đốm sao."],"Root Mỹ":["Thành phần: Axit humic, fulvic, NAA và các chất kích rễ cực mạnh vừa đủ.","Công dụng: Kích thích ra rễ mạnh, ra nhiều rễ tơ. Giúp cây hấp thu dinh dưỡng tốt hơn, tối ưu việc sử dụng dinh dưỡng. Tăng sức đề kháng, giúp cây sinh trưởng và phát triển bền vững.","Thể tích: 5 lít, sử dụng cho 5.000 m². Chuyên tưới cho cây trồng."],"Terron":["Thành phần: Bổ sung phụ gia đặc biệt giúp cây phát triển toàn diện, kích thích ra hoa.","Zinc 15.000 ppm · Iron 100 ppm · Mangan 100 ppm · Copper 100 ppm.","Công dụng: Cung cấp đầy đủ dinh dưỡng để kích thích cây sinh trưởng khỏe mạnh, xanh tốt.","Hỗ trợ ra hoa đồng loạt, đậu trái tốt, nuôi trái đồng đều.","Tăng khả năng chống chịu thời tiết bất lợi cho cây trồng."],"Terroot":["Thành phần: Bổ sung phụ gia đặc biệt chuyên cho rễ.","Đạm tổng số 2% · Lân hữu hiệu 3% · Kali hữu hiệu 3% · Axit humic 2% · Bo 100 ppm.","Công dụng: Cung cấp đầy đủ dinh dưỡng để cây ra rễ cực mạnh, ra nhiều rễ tơ, rễ khỏe.","Giúp cây đâm chồi nhanh, đẻ nhánh mạnh, chồi mập khỏe, lá xanh mướt.","Tăng khả năng chống chịu thời tiết bất lợi, tăng khả năng quang hợp cho cây.","Ổn định pH đất, giải độc hữu cơ, cây xanh dày lá, cây phát triển toàn diện."],"Trọn Vụ Xanh":["Thành phần: Chất hữu cơ 23% · Axit fulvic 2,3% · Tỷ lệ C/N 10.","Công dụng:","Phục hồi sinh lực cho đất.","Ra rễ cực mạnh, giảm hiện tượng lở cổ rễ.","Giải độc, hạ phèn, giảm các bệnh về rễ.","Tăng sinh trưởng, tăng hấp thu, tiết kiệm phân bón hóa học.","Phục hồi nhanh khi cây gặp điều kiện bất lợi, hạn hán, ngập úng."],"Dưỡng Chất Xanh":["Phân bón lá sinh học chuyên cho rau màu.","Thành phần: Axit amin 20%.","Công dụng:","Giúp cây đâm chồi, mập cây, lá to, xanh dày mướt.","Tăng ra hoa, đậu trái, trái lớn đồng đều, sáng đẹp.","Giải độc, giảm stress, tăng sức đề kháng, tăng hấp thu dinh dưỡng."],'Dưa leo F1 TS.39':["Đặc tính giống: Cây kháng bệnh tốt, năng suất cao, chèo nhiều, phát triển rất mạnh, cây khỏe.","Trái xanh bóng đẹp, dài 18–20 cm, đường kính 4 cm, ăn không bị đắng, vận chuyển xa tốt.","Trái ăn rất giòn, ngon ngọt, đặc biệt rất thơm, trái nặng từ 180–200 gram.","Mật độ cây trồng: Cây cách cây 35–40 cm, hàng cách hàng 1,2–1,3 m.","Thu hoạch: 31–32 ngày sau gieo.","Thời vụ: Quanh năm."],'Khổ qua trái ngắn F1 Mầm Xanh':["Đặc tính giống: Cây sinh trưởng khỏe, năng suất cao, có khả năng kháng bệnh rất tốt, sinh trưởng phát triển mạnh, phân nhánh khỏe, dễ đậu trái, thu trái rộ.","Dạng trái ngắn, trái dài 13–15 cm, trái có độ đồng đều cao, trái màu xanh nhạt, chắc trái, không bị nứt vào mùa mưa, bảo quản được lâu, dễ vận chuyển, thị trường ưa chuộng.","Thời gian thu hoạch: 38–40 ngày sau khi trồng.","Thời vụ trồng quanh năm, thích hợp trồng đất cũ."],'Dưa leo ĐẤT VIỆT':["Đặc tính giống: Cây sinh trưởng mạnh, kháng bệnh virus và sương mai tốt, năng suất cao, chèo mạnh, phù hợp với đất cũ.","Trái xanh bóng đẹp, trái đặc ruột, dài 18–20 cm, nặng ký, ăn không bị đắng, thu trái bền lâu.","Siêu rộ trái, bán được giá cao, thương lái ưa chuộng.","Mật độ cây trồng: Cây cách cây 35–40 cm, hàng cách hàng 1,2–1,3 m.","Thu hoạch: 32–34 ngày sau gieo.","Thời vụ: Quanh năm."]};openDialog(name,info[name]||['Liên hệ TAHURA để được tư vấn.']);const image=document.createElement('img');image.src=button.closest('.product').querySelector('img').getAttribute('src');image.alt='Bao bì '+name;image.className='dialog-product-image';content.prepend(image);
const galleryIds = {
  "Cải thìa F1 24": "#cai-thia-24-gallery",
  "Bí đao chanh F1 789": "#bi-dao-789-gallery",
  "Dưa leo ĐẤT VIỆT": "#gen3-gallery",
  "Dưa leo F1 TS.39": "#ts39-gallery",
  "Dưa leo Thái F1 Mầm Xanh 39": '#mam-xanh-39-gallery',
  "Khổ qua trái ngắn F1 Mầm Xanh": '#kho-qua-gallery'
};
const galleryId = galleryIds[name];
if (galleryId) {
  const gallery = document.querySelector(galleryId);
  content.append(gallery.content.cloneNode(true));
}
  const consultationActions = document.createElement('div');
  consultationActions.className = 'contact-dialog-actions';
  const consultationButton = document.createElement('button');
  consultationButton.type = 'button';
  consultationButton.className = 'button';
  consultationButton.textContent = 'Tư vấn trực tiếp sản phẩm ↗';
  consultationButton.addEventListener('click', () => {
    openZaloMessage('Tư vấn trực tiếp sản phẩm', `Xin chào TAHURA! Tôi muốn được tư vấn về sản phẩm ${name}. Xin cảm ơn!`);
    dialog.querySelector('.close-dialog').focus({ preventScroll: true });
  });
  consultationActions.append(consultationButton);
  content.append(consultationActions);
}));
const articles=[{title:'Trước khi gieo hạt, cần chuẩn bị những gì?',body:['Bắt đầu bằng việc chọn loại cây phù hợp với không gian, ánh sáng và mùa vụ tại nơi trồng. Đọc hướng dẫn trên bao bì để biết thời điểm gieo và yêu cầu của từng giống.','Chuẩn bị khay hoặc luống có khả năng thoát nước, giá thể phù hợp và nguồn nước sạch. Độ sâu gieo, khoảng cách và cách xử lý hạt cần theo hướng dẫn của nhà cung cấp.','Ghi ngày gieo và theo dõi độ ẩm để điều chỉnh cách chăm sóc theo điều kiện thực tế.']},{title:'Hiểu đất trồng, chọn cách chăm phù hợp.',body:['Quan sát khả năng thoát nước, độ tơi và lịch sử canh tác của đất. Mỗi loại cây có yêu cầu khác nhau, vì vậy không áp dụng một cách xử lý cho tất cả khu vườn.','Nếu cây sinh trưởng kém kéo dài, cân nhắc kiểm tra đất và trao đổi với người có chuyên môn trước khi điều chỉnh dinh dưỡng.','Khi dùng sản phẩm cải tạo đất, tuân thủ nhãn sản phẩm và hướng dẫn dành cho cây trồng của bạn.']},{title:'Bón phân đúng cách bắt đầu từ nhãn sản phẩm.',body:['Đọc tên sản phẩm, thành phần, đối tượng sử dụng, liều lượng và thời điểm bón trên nhãn. Không tự tăng liều với kỳ vọng cây sẽ lớn nhanh hơn.','Nhu cầu dinh dưỡng phụ thuộc loại cây, giai đoạn sinh trưởng và tình trạng đất. Chuẩn bị những thông tin này khi yêu cầu tư vấn.','Bảo quản theo hướng dẫn của nhà sản xuất, để xa trẻ em và tách biệt với thực phẩm.']}];document.querySelectorAll('[data-article]').forEach(b=>b.addEventListener('click',()=>{const a=articles[Number(b.dataset.article)];openDialog(a.title,a.body);}));
const contactForm = document.querySelector('#contact-form');
const interestField = document.querySelector('#interest');
const cropIssue = document.querySelector('#crop-issue');
const messageField = document.querySelector('#message');
const formStatus = document.querySelector('#form-status');
const defaultStatus = formStatus.textContent;
const defaultHint = messageField.placeholder;

function updateContactFields() {
  const dealer = interestField.value === 'Đăng ký đại lý';
  cropIssue.labels[0].hidden = cropIssue.hidden = cropIssue.disabled = dealer;
  messageField.placeholder = dealer
    ? 'Ví dụ: Tên cửa hàng, khu vực kinh doanh và sản phẩm quan tâm'
    : defaultHint;
  formStatus.textContent = defaultStatus;
}

interestField.addEventListener('change', updateContactFields);
contactForm.addEventListener('input', () => {
  messageField.setCustomValidity('');
  formStatus.textContent = defaultStatus;
});
document.querySelector('.floating-dealer').addEventListener('click', () => {
  interestField.value = 'Đăng ký đại lý';
  updateContactFields();
  messageField.focus({preventScroll: true});
});

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = messageField.value.trim();
  if (!message) {
    messageField.setCustomValidity('Vui lòng nhập nội dung yêu cầu.');
    messageField.reportValidity();
    return;
  }

  const lines = ['Xin chào TAHURA!', 'Nhu cầu: ' + interestField.value];
  if (!cropIssue.disabled && cropIssue.value) lines.push('Vấn đề cây trồng: ' + cropIssue.value);
  lines.push(message);

  openZaloMessage('Gửi yêu cầu qua Zalo', lines.join('\n'));
  formStatus.textContent = 'Yêu cầu chưa được gửi. Hãy hoàn tất thao tác trong Zalo.';
});

function openZaloMessage(heading, message) {
  openDialog(heading, [
    'Yêu cầu chưa được gửi. Sao chép tin nhắn, mở Zalo TAHURA, dán vào cuộc trò chuyện và bấm Gửi.'
  ]);

  const preview = document.createElement('textarea');
  preview.className = 'copy-content';
  preview.value = message;
  preview.readOnly = true;
  preview.setAttribute('aria-label', 'Tin nhắn gửi TAHURA');

  const actions = document.createElement('div');
  actions.className = 'contact-dialog-actions';
  const copy = document.createElement('button');
  copy.type = 'button';
  copy.className = 'button';
  copy.textContent = 'Sao chép tin nhắn';

  const zalo = document.querySelector('.floating-zalo').cloneNode();
  zalo.className = 'button lime';
  zalo.textContent = 'Mở Zalo TAHURA ↗';

  const copyStatus = document.createElement('p');
  copyStatus.className = 'contact-copy-status';
  copyStatus.setAttribute('role', 'status');
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(preview.value);
      copyStatus.textContent = 'Đã sao chép. Hãy mở Zalo, dán tin nhắn và bấm Gửi.';
    } catch {
      preview.focus();
      preview.select();
      copyStatus.textContent = 'Hãy sao chép nội dung đã chọn, sau đó mở Zalo để gửi.';
    }
  });

  actions.append(copy, zalo);
  content.append(preview, actions, copyStatus);
}

