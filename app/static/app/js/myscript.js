
$('.plus-cart').click(function(){
    let id = $(this).attr("pid").toString();
    let val = this.parentNode.children[2];
    console.log("pid", id);
    $.ajax({
        type:"GET",
        url:"/pluscart",
        data:{
            prod_id:id
        },
        success: function (data) {
            console.log("data = ", data);
            val.innerText=data.quantity;
            document.getElementById("amount").innerText=data.amount;
            document.getElementById("totalamount").innerText=data.totalamount;
        }
    })
})


$('.minus-cart').click(function(){
    let id = $(this).attr("pid").toString();
    let val = this.parentNode.children[2];
    $.ajax({
        type:"GET",
        url:"/minuscart",
        data:{
            prod_id:id
        },
        success: function (data) {
            console.log("data = ", data);
            val.innerText=data.quantity;
            document.getElementById("amount").innerText=data.amount;
            document.getElementById("totalamount").innerText=data.totalamount;
        }
    })
})

$('.remove-cart').click(function(){
    let id = $(this).attr("pid").toString();
    let val = this;
    $.ajax({
        type:"GET",
        url:"/removecart",
        data:{
            prod_id:id
        },
        success: function (data) {
            document.getElementById("amount").innerText=data.amount;
            document.getElementById("totalamount").innerText=data.totalamount;
            val.parentNode.parentNode.parentNode.parentNode.remove();
        }
    })
})

$('.plus-wishlist').click(function(){
    let id = $(this).attr("pid").toString();
    $.ajax({
        typr:"GET",
        url:"/pluswishlist",
        data:{
            prod_id:id
        },
        success:function(data){
            window.location.href = `http://127.0.0.1:8000/product-detail/${id}`
        }
    })
})

$('.minus-wishlist').click(function(){
    let id = $(this).attr("pid").toString();
    $.ajax({
        typr:"GET",
        url:"/minuswishlist",
        data:{
            prod_id:id
        },
        success:function(data){
            window.location.href = `http://127.0.0.1:8000/product-detail/${id}`
        }
    })
})