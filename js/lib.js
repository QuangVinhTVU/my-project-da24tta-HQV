/* mã nguồn javascript*/
const product = {
                    name: "Iphone 14 Pro Max",
                    price: "27.000.000đ",
                     description: "Iphone 14 Pro Max là một chiếc điện thoại thông minh cao cấp được sản xuất bởi Apple vào năm 2022,... ",
                    img: "../assets/images/ip14prm.jpg",
                    linkProduct: "chi-tiet.html"
                };

function  inBBC(n)
{
    result = "";
    let i = 1;
    while(i <= 10)
    {
        result += `S(${n}) x S(${1}) = S(${n * 1}) <br>`;
        i++;
    }
    document.getElementById("result").innerHTML = result;
}

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
        name.innerHTML = obj.name; // <p>iphone 14 Pro Max</p>

        const price = document.createElement("p"); //<p></p>
        price.innerHTML = obj.price; // <p> 30.000.000đ</p>

        const description = document.createElement("p"); //<p></p>
        description.innerHTML = obj.description; // <p> ip14prm do apple sản xuất</p> 

        const link = document.createElement("a"); //<a></a>
        link.innerHTML = "Xem chi tiết"; // <a>Xem chi tiết</a>
        link.setAttribute("href", obj.linkProduct); //<a href="link sản phẩm">Xem chi tiết</a>
    //đưa 4 đối tượng vừa tạo vào khung container-info
    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(link);

    //chèn hai khung chứa vào container-item
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    // đưa container-item vào product-list
    document.getElementById("product-list").appendChild(item);

}
 
function createItemV2(obj) 
{
    const list = document.getElementById("product-list"); // truy suất khuung chưa DS sản phẩm
    list.innerHTML = `
        <div class="col">
            <div class="card product-item"> 
            <div class="product-image">
                <img class="card-img-top" src="${obj.img}" alt="${obj.name}">
            </div>
            <div class="card-body product-info text-center">
            <h4 class="card-title text-danger">${obj.name}</h4>
            <h5 class="card-text">${obj.price}</h5>
            <p style="text-align: justify; line-height: 1.5;" class="card-text"> ${obj.description}</p>
            <a href="${obj.linkProduct}" class="btn btn-info">Xem chi tiết</a>
            </div>
        </div>
    </div>
            
     `;
  
}

