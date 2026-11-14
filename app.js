const menu=document.querySelector('.menu');const nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
let filter='all';const search=document.querySelector('.search input');function normalize(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();}function filterProducts(){let count=0;document.querySelectorAll('.product').forEach(card=>{const visible=(filter==='all'||card.dataset.category===filter)&&normalize(card.dataset.name).includes(normalize(search.value.trim()));card.hidden=!visible;if(visible)count++;});document.querySelector('#no-results').hidden=count>0;}document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});filterProducts();}));document.querySelector('[data-filter="all"]').setAttribute('aria-pressed','true');search.addEventListener('input',filterProducts);
const dialog=document.querySelector('dialog');const title=document.querySelector('#dialog-title');const content=document.querySelector('#dialog-content');const contactButton=document.querySelector('.dialog-contact');function openDialog(heading,paragraphs,showContact=true){title.textContent=heading;content.replaceChildren();paragraphs.forEach(text=>{const p=document.createElement('p');p.textContent=text;content.append(p);});contactButton.hidden=!showContact;dialog.showModal();}document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{const name=button.dataset.product;document.querySelector('#interest').value=button.closest('.product').dataset.category==='fertilizer'?'Phân bón':'Hạt giống';updateContactFields();document.querySelector('#message').value=`Tôi muốn được tư vấn về ${name.toLowerCase()}. Cây trồng và diện tích dự kiến của tôi: `;const info={"Dưa leo Thái F1 Mầm Xanh 39":["Hạt giống Dưa leo Thái F1 MẦM XANH 39 có các đặc điểm chính sau:","Đặc tính giống: Năng suất cao, cây sinh trưởng rất khỏe, kháng tốt các bệnh như đốm lá, virus... Trái sớm, dài 19–21 cm, trái rất bóng và rộ trái gốc mạnh, thích hợp vận chuyển xa, trái trên vẫn bóng đẹp.","Mật độ cây trồng: Cây cách cây 30–35 cm, hàng cách hàng 1,2–1,3 m.","Thu hoạch: 32–34 ngày sau gieo.","Thời vụ: Quanh năm, phù hợp nhất vụ Đông Xuân."],"Bí đao chanh F1 789":["Hạt giống TAHURA, gói 2 g.","Theo nhãn, có thể trồng quanh năm và nên hạn chế gieo vào thời điểm giao mùa.","Trái xanh, có đốm sao, dài 23–25 cm. Thời gian thu hoạch ghi trên nhãn là 42–54 ngày sau khi gieo."],"Root Mỹ":["Phân bón lá. Nhãn mô tả sản phẩm hỗ trợ phát triển bộ rễ.","Quy cách trên nhãn: can 5 lít.","Xem hướng dẫn trên bao bì thực tế và liên hệ TAHURA để được tư vấn."],"Terron A2":["Dinh dưỡng cho cây trồng. Nhãn giới thiệu sản phẩm hỗ trợ sinh trưởng.","Quy cách trên nhãn: chai 500 ml.","Xem hướng dẫn trên bao bì thực tế và liên hệ TAHURA để được tư vấn."],"Terroot TP 14":["Phân bón lá đa lượng, vi lượng và sinh học. Nhãn nêu công dụng hỗ trợ ra rễ và đâm chồi.","Quy cách trên nhãn: chai 1 lít.","Xem hướng dẫn trên bao bì thực tế và liên hệ TAHURA để được tư vấn."],"Terrafert Eco Solusion":["Nhãn giới thiệu sản phẩm hỗ trợ dinh dưỡng cho cây đang sinh trưởng.","Liên hệ TAHURA để xác nhận dung tích.","Xem hướng dẫn trên bao bì thực tế và liên hệ TAHURA để được tư vấn."],"Dưỡng Chất Xanh – Dika Amin-Pro":["Phân bón lá sinh học cho rau màu. Thành phần đăng ký trên nhãn ghi axit amin 20%.","Quy cách trên nhãn: chai 100 ml.","Xem hướng dẫn trên bao bì thực tế và liên hệ TAHURA để được tư vấn."],'Dưa leo F1 TS.39':['Thương hiệu: TAHURA. Quy cách trên bao bì: 10 g.','Hạt giống dưa leo F1 TS.39. Liên hệ TAHURA để được tư vấn mùa vụ, cách gieo trồng và báo giá.'],'Khổ qua trái ngắn F1 Mầm Xanh':['Thương hiệu: TAHURA. Quy cách trên bao bì: 40 g.','Hạt giống khổ qua trái ngắn F1 Mầm Xanh. Liên hệ để được tư vấn theo điều kiện canh tác thực tế.'],'Dưa leo F1 GEN 3':['Thương hiệu trên bao bì: Đất Việt. Quy cách: 10 g.','Hạt giống dưa leo F1 GEN 3. Liên hệ TAHURA để hỏi giá và tình trạng hàng.']};openDialog(name,info[name]||['Liên hệ TAHURA để được tư vấn.']);const image=document.createElement('img');image.src=button.closest('.product').querySelector('img').getAttribute('src');image.alt='Bao bì '+name;image.className='dialog-product-image';content.prepend(image);
const galleryIds = {
  "Bí đao chanh F1 789": "#bi-dao-789-gallery",
  "Dưa leo F1 GEN 3": "#gen3-gallery",
  "Dưa leo F1 TS.39": "#ts39-gallery",
  "Dưa leo Thái F1 Mầm Xanh 39": '#mam-xanh-39-gallery',
  "Khổ qua trái ngắn F1 Mầm Xanh": '#kho-qua-gallery'
};
const galleryId = galleryIds[name];
if (galleryId) {
  const gallery = document.querySelector(galleryId);
  content.append(gallery.content.cloneNode(true));
}
const phone=document.createElement('a');phone.href='tel:0877223939';phone.className='text-link dark';phone.textContent='Gọi TAHURA: 0877 22 39 39 ↗';content.append(phone);}));contactButton.addEventListener('click',()=>{dialog.close();document.querySelector('#lien-he').scrollIntoView({behavior:'smooth'});document.querySelector('#message').focus({preventScroll:true});});
const articles=[{title:'Trước khi gieo hạt, cần chuẩn bị những gì?',body:['Bắt đầu bằng việc chọn loại cây phù hợp với không gian, ánh sáng và mùa vụ tại nơi trồng. Đọc hướng dẫn trên bao bì để biết thời điểm gieo và yêu cầu của từng giống.','Chuẩn bị khay hoặc luống có khả năng thoát nước, giá thể phù hợp và nguồn nước sạch. Độ sâu gieo, khoảng cách và cách xử lý hạt cần theo hướng dẫn của nhà cung cấp.','Ghi ngày gieo và theo dõi độ ẩm để điều chỉnh cách chăm sóc theo điều kiện thực tế.']},{title:'Hiểu đất trồng, chọn cách chăm phù hợp.',body:['Quan sát khả năng thoát nước, độ tơi và lịch sử canh tác của đất. Mỗi loại cây có yêu cầu khác nhau, vì vậy không áp dụng một cách xử lý cho tất cả khu vườn.','Nếu cây sinh trưởng kém kéo dài, cân nhắc kiểm tra đất và trao đổi với người có chuyên môn trước khi điều chỉnh dinh dưỡng.','Khi dùng sản phẩm cải tạo đất, tuân thủ nhãn sản phẩm và hướng dẫn dành cho cây trồng của bạn.']},{title:'Bón phân đúng cách bắt đầu từ nhãn sản phẩm.',body:['Đọc tên sản phẩm, thành phần, đối tượng sử dụng, liều lượng và thời điểm bón trên nhãn. Không tự tăng liều với kỳ vọng cây sẽ lớn nhanh hơn.','Nhu cầu dinh dưỡng phụ thuộc loại cây, giai đoạn sinh trưởng và tình trạng đất. Chuẩn bị những thông tin này khi yêu cầu tư vấn.','Bảo quản theo hướng dẫn của nhà sản xuất, để xa trẻ em và tách biệt với thực phẩm.']}];document.querySelectorAll('[data-article]').forEach(b=>b.addEventListener('click',()=>{const a=articles[Number(b.dataset.article)];openDialog(a.title,a.body,false);}));
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

  openDialog('Gửi yêu cầu qua Zalo', [
    'Yêu cầu chưa được gửi. Sao chép tin nhắn, mở Zalo TAHURA, dán vào cuộc trò chuyện và bấm Gửi.'
  ], false);

  const preview = document.createElement('textarea');
  preview.className = 'copy-content';
  preview.value = lines.join('\n');
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
  formStatus.textContent = 'Yêu cầu chưa được gửi. Hãy hoàn tất thao tác trong Zalo.';
});

