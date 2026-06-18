const cars = [
  {id:1,brand:'Toyota',name:'Toyota Camry 2022',price:950000000,
        img:'../assets/images/xecamry.jpg',desc:'Sedan hạng D, tiết kiệm nhiên liệu, phù hợp gia đình.'},

  {id:2,brand:'Honda',name:'Honda Civic 2021',price:730000000, 
        img:'../assets/images/avatar.jpg',desc:'Thiết kế thể thao, động cơ mạnh mẽ, trang bị an toàn tốt.'},

  {id:3,brand:'Ford',name:'Ford Ranger 2023',price:820000000,
        img:'../assets/images/xeford.jpg',desc:'Bán tải mạnh mẽ, chở đồ tốt, vận hành bền bỉ.'},
  {id:4,brand:'BMW',name:'BMW 3 Series 2022',price:1850000000,
         img:'../assets/images/xe4.jpg',desc:'Sedan sang trọng, cảm giác lái thể thao, nội thất cao cấp.'},
  {id:5,brand:'Mercedes',name:'Mercedes C-Class 2021',price:1720000000, 
        img:'https://source.unsplash.com/800x600/?mercedes,car',desc:'Thương hiệu Đức, tiện nghi và sang trọng.'},
  {id:6,brand:'Toyota',name:'Toyota Vios 2020',price:420000000, 
        img:'https://source.unsplash.com/800x600/?toyota,sedan',desc:'Xe đô thị nhỏ gọn, giá hợp lý, chi phí bảo dưỡng thấp.'},
  {id:7,brand:'Honda',name:'Honda CR-V 2022',price:1030000000, 
        img:'https://source.unsplash.com/800x600/?honda,suv',desc:'SUV gia đình rộng rãi, tiện nghi, an toàn.'},
  {id:8,brand:'Ford',name:'Ford Mustang 2022',price:2500000000, 
        img:'https://source.unsplash.com/800x600/?mustang,car',desc:'Xe thể thao hiệu năng cao, phù hợp người đam mê tốc độ.'}
];

function formatPrice(n){
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",") + ' ₫';
}

function renderBrands(){
  const sel = document.getElementById('brandFilter');
  const brands = Array.from(new Set(cars.map(c=>c.brand)));
  brands.forEach(b=>{
    const opt = document.createElement('option'); opt.value=b; opt.textContent=b; sel.appendChild(opt);
  });
}

function renderList(list){
  const g = document.getElementById('gallery'); g.innerHTML='';
  list.forEach(car=>{
    const card = document.createElement('article'); card.className='card';
    card.innerHTML = `
      <img src="${car.img}" alt="${car.name}">
      <div class="body">
        <div class="brand">${car.brand}</div>
        <h3 class="title">${car.name}</h3>
        <p class="desc">${car.desc}</p>
        <div class="price">${formatPrice(car.price)}</div>
        <div class="actions">
          <button class="btn view" data-id="${car.id}">Xem chi tiết</button>
          <button class="btn contact">Liên hệ</button>
        </div>
      </div>
    `;
    g.appendChild(card);
  });
}

function openModal(car){
  const m = document.getElementById('modal');
  // Nếu ảnh lấy từ source.unsplash.com, yêu cầu kích thước lớn hơn để tránh mờ
  let modalSrc = car.img;
  try {
    if (/source\.unsplash\.com/.test(car.img)) {
      // thay 800x600 -> 1600x1200 nếu có pattern kích thước
      modalSrc = car.img.replace(/\d+x\d+/, '1600x1200');
    }
  } catch (e) { /* ignore */ }
  const modalImg = document.getElementById('modalImg');
  modalImg.removeAttribute('loading');
  modalImg.src = modalSrc;
  // thêm srcset cho màn hình retina
  if (/source\.unsplash\.com/.test(modalSrc)) {
    modalImg.srcset = modalSrc + ' 1x, ' + modalSrc.replace(/1600x1200/, '3200x2400') + ' 2x';
  } else {
    modalImg.removeAttribute('srcset');
  }
  document.getElementById('modalTitle').textContent = car.name;
  document.getElementById('modalBrand').textContent = car.brand;
  document.getElementById('modalPrice').textContent = formatPrice(car.price);
  document.getElementById('modalDesc').textContent = car.desc;
  m.classList.remove('hidden');
}

function init(){
  renderBrands();
  renderList(cars);

  document.getElementById('brandFilter').addEventListener('change',()=>applyFilters());
  document.getElementById('search').addEventListener('input',()=>applyFilters());
  document.getElementById('sort').addEventListener('change',()=>applyFilters());

  document.getElementById('gallery').addEventListener('click', (e)=>{
    const id = e.target.getAttribute('data-id');
    if(id){
      const car = cars.find(c=>c.id===Number(id)); if(car) openModal(car);
    }
  });

  document.getElementById('closeModal').addEventListener('click', ()=>{
    document.getElementById('modal').classList.add('hidden');
  });
}

function applyFilters(){
  const brand = document.getElementById('brandFilter').value;
  const q = document.getElementById('search').value.trim().toLowerCase();
  const sort = document.getElementById('sort').value;

  let list = cars.slice();
  if(brand !== 'all') list = list.filter(c=>c.brand===brand);
  if(q) list = list.filter(c=> (c.name + ' ' + c.desc).toLowerCase().includes(q));
  if(sort === 'price-asc') list.sort((a,b)=>a.price-b.price);
  if(sort === 'price-desc') list.sort((a,b)=>b.price-a.price);

  renderList(list);
}

document.addEventListener('DOMContentLoaded', init);
