var $$ = document.querySelectorAll.bind(document)
var $ = document.querySelector.bind(document)


var productList = $$('.product-list')

var arraylist = Array.from(productList)

const resetBtn = ('.reset')
var objectList = [{
  name: 'Samsung A34',
  branch: 'Samsung',
  img: 'E:/hoc/javascript_basic/lession2/ass8/asset/img/samsung-galaxy-a34-5g.webp',

  price: '9.000.000'
},



{
  name: 'Vivo Y13',
  branch: 'Vivo',
  img: 'E:/hoc/javascript_basic/lession2/ass8/asset/img/vivo.webp',


  price: '5.000.000'
},
{
  name: 'IPhone 14',
  branch: 'IPhone',
  img: 'E:/hoc/javascript_basic/lession2/ass8/asset/img/iphone14.jpeg',
  price: '10.000.000'
},
{
  name: 'Razer Phone',
  branch: 'Razor',
  img: 'E:/hoc/javascript_basic/lession2/ass8/asset/img/razer-phone.jpg',

  price: '3.000.000'
},
{
  name: 'XiaoMi M5',
  branch: 'XiaoMi',
  img: 'E:/hoc/javascript_basic/lession2/ass8/asset/img/vivo.webp',
  price: '5.000.000'
},
{
  name: 'XiaoMi',
  branch: 'Hãng sản xuất',
  img: 'E:/hoc/javascript_basic/lession2/ass8/asset/img/vivo.webp',
  price: '5.000.000'
},
{
  name: 'XiaoMi',
  branch: 'Hãng sản xuất',
  img: 'E:/hoc/javascript_basic/lession2/ass8/asset/img/vivo.webp',
  price: '5.000.000'
},
{
  name: 'XiaoMi',
  branch: 'Hãng sản xuất',
  img: 'E:/hoc/javascript_basic/lession2/ass8/asset/img/vivo.webp',
  price: '5.000.000'
},
{
  name: 'XiaoMi',
  branch: 'Hãng sản xuất',
  img: 'E:/hoc/javascript_basic/lession2/ass8/asset/img/vivo.webp',
  price: '5.000.000'
},
{
  name: 'XiaoMi',
  branch: 'Hãng sản xuất',
  img: 'E:/hoc/javascript_basic/lession2/ass8/asset/img/vivo.webp',
  price: '5.000.000'
},
]

arraylist.forEach((product, index) => {
  var productHTML
  objectList.map(function () {

    productHTML = `
        <img src="${objectList[index].img}" alt="${objectList[index].name}">
        <div class="product-list-info " data-index="${index}">
            <h2><a href="#"> ${objectList[index].name} </a></h2>
            <p>Hãng sản xuất: ${objectList[index].branch} </p>
            <span class="fa fa-star evalustar checked"></span>
            <span class="fa fa-star evalustar checked"></span>
            <span class="fa fa-star evalustar checked"></span>
            <span class="fa fa-star evalustar"></span>
            <span class="fa fa-star evalustar"></span>
            <p> ${objectList[index].price} <i class="fa-solid fa-cart-shopping product-list-info-icon "></i></p>
        </div>
        
        
        `
    product.innerHTML = productHTML

  })
});

// Click vào giỏ hàng


var buyBtns = $$('.product-list-info-icon')

buyBtns.forEach((buy, index) => {
  buy.onclick = function () {

    alert(` Bạn đã thêm ${objectList[index].name} vào giỏ hàng`)
  }
})

// đánh giá sao cho từng sản phẩm

productList.forEach((product) => {
  if (product) {
    const stars = product.querySelectorAll('.evalustar') // nếu dùng $$ trong DOM sẻ lấy hết nên chỉ dùng product trong product list lấy ra 5 thẻ span
    stars.forEach((star, index) => {
      star.onclick = function () {
        switch (index) {
          case 0:
            stars[0].classList.add('checked')
            stars[1].classList.remove('checked')
            stars[2].classList.remove('checked')
            stars[3].classList.remove('checked')
            stars[4].classList.remove('checked')
            break;
          case 1:

            stars[0].classList.add('checked')
            stars[1].classList.add('checked')
            stars[2].classList.remove('checked')
            stars[3].classList.remove('checked')
            stars[4].classList.remove('checked')
            break;

          case 2:
            stars[0].classList.add('checked')
            stars[1].classList.add('checked')
            stars[2].classList.add('checked')
            stars[3].classList.remove('checked')
            stars[4].classList.remove('checked')
            break;
          case 3:
            stars[0].classList.add('checked')
            stars[1].classList.add('checked')
            stars[2].classList.add('checked')
            stars[3].classList.add('checked')
            stars[4].classList.remove('checked')
            break;

          case 4:
            stars[0].classList.add('checked')
            stars[1].classList.add('checked')
            stars[2].classList.add('checked')
            stars[3].classList.add('checked')
            stars[4].classList.add('checked')
            break;


          default:

        }
      }
    })
  }
})

// gettoAdmin
function gettoAdmin() {
  window.open('admin.html', '_self')
}



// =======Admin======

var infoList = $$('.body-left-item-list-dis')

var modelInput = Array.from($$('.modal-input'))

var productInfo = Array.from($$('.product-info-list-dis'))

const modal = $('.modal')

var createEditBtn = Array.from($$('.product-info-list-btn'))

// getbackHome
function getbackHome() {
  window.open('home.html', '_self')
}

// click categrory

const cates = $$('.body-left-item-list-dis')

const cateInfos = $$('.body-right-cate')
cates.forEach((cate, index) => {

  cate.onclick = function () {

    $('.body-right-cate.active').classList.remove('active')

    cateInfos[index].classList.add('active')

  }
})



// add new

function addNew() {
  modal.classList.add('active')
  saveBtn.classList.remove('display-none')
}

// close modal

function btnClose(mess) {
  modal.classList.remove('active')
  updateBtn.classList.remove('active')
}

// reset Btn

function resetBtn1() {
  modelInput.forEach(input =>

    input.value = null

  )
}


// modal save

function btnSave() {

  productInfo.forEach((product, index) => {

    var info
    var div = document.createElement('div')
    div.setAttribute('class', 'product-info-list-dis-item')
    div.setAttribute('data-index', index)
    modelInput.forEach(() => {


      info = modelInput[index].value



    })




    if (!isNaN(modelInput[0].value) && modelInput[1].value && modelInput[2].value) {


      return product.appendChild(div).innerHTML = info
    }


  })


  createEditBtn.map((btn, index) => {
    var div = document.createElement('div')
    div.setAttribute('class', 'product-info-list-btn-item')
    if (!isNaN(modelInput[0].value) && modelInput[1].value && modelInput[2].value && index == 0) {
      return btn.appendChild(div).innerHTML = `
            <button class="btn edit">Edit</button> </div>
            `
    }
    if (!isNaN(modelInput[0].value) && modelInput[1].value && modelInput[2].value && index == 1) {
      return btn.appendChild(div).innerHTML = `
            <button class="btn red del pro" data-index="${index}" 
             >Delete</button>
            `
    }
  })



}

// xóa sản phẩm

const delproClass = $('.del-pro')
const editproClass = $('.edit-pro')


function delPro() {
  const delBtns = delproClass.querySelectorAll('.pro')
  const editBtns = editproClass.querySelectorAll('.edit')


  var proInfos = productInfo.map(product => {
    return product.querySelectorAll('.product-info-list-dis-item')


  })

  delBtns.forEach((delBtn, index) => {
    delBtn.onclick = function () {

      proInfos.forEach((proInfo) => {
        proInfo[index].classList.add('display-none')
        delBtns[index].classList.add('display-none')
        editBtns[index].classList.add('display-none')


      })
    }
  })

}

// edit sản phẩm

const saveBtn = $('.blue')
const updateBtn = $('.update')





var editindexinfo
function editPro() { // bấm edit
  const editBtns = editproClass.querySelectorAll('.edit')
  
  
  editBtns.forEach((editBtn, editindex) => {
  
    editBtn.onclick = function () {
      modal.classList.add('active')
      saveBtn.classList.add('display-none')
      updateBtn.classList.add('active')
      

      return editindexinfo = editindex

    }


  })
 
  

}

function update() { //bấm update
  var updateInfo =[]
  for (var i in modelInput){
    updateInfo = updateInfo.concat(modelInput[i].value)
    
    
  }

  
  productInfo.forEach((product, proInfo) =>{

    const genProduct = product.querySelectorAll('.product-info-list-dis-item')

    genProduct.forEach((updatedProduct, index)=>{
      if (editindexinfo == index){
        updatedProduct.innerText = updateInfo[proInfo] 
      }
    })
  })

}











