function createItem(obj) // obj là đối tượng thực tế đang quản lý thông tin sản phẩm cần thêm
{ 
    const item = document.createElement("div"); //<div></div>
    item.setAttribute("class", "container-item"); //<div class="container-item"></div>

    //2 khung chứa con image và info
    const containerImage = document.createElement("div"); //<div></div>
    containerImage.setAttribute("class", "container-image"); //<div class="container-image"></div>


    //tạo đối tượng hình ảnh và khung chứa image
    const image = document.createElement("img"); //<img>
    image.setAttribute("src", obj.img); //<img src="link ảnh"> -> truy suất đến thuộc tính image của đối tượng obj để lấy link ảnh
    image.setAttribute("alt", obj.name); //<img src="link ảnh" alt="tên sản phẩm"> -> truy suất đến thuộc tính name của đối tượng obj để lấy tên sản phẩm
    containerImage.appendChild(image); // đưa ảnh vào khung container-image

    const containerInfo = document.createElement("div"); //<div></div>
    containerInfo.setAttribute("class", "container-info"); //<div class="container-info"></div>

    //tạo 3 đối tượng <p> : name, price, description và 1 đối tượng <a>
        const name = document.createElement("p"); //<p></p>
        name.innerHTML = obj.name; 

        const price = document.createElement("p"); //<p></p>
        price.innerHTML = obj.price; // <p>giá sản phẩm</p>

        const description = document.createElement("p"); //<p></p>
        description.innerHTML = obj.description; // <p>mô tả sản phẩm</p> 

        const link = document.createElement("a"); //<a></a>
        link.setAttribute("href", obj.link); //<a href="link sản phẩm">Xem chi tiết</a>
        link.innerHTML = "Xem chi tiết";

    //chèn hai khung chứa vào container-item
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

}