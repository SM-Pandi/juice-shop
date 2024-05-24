

//select  icon+ addcart+ close icon div

var openicon=document.querySelector(".fa-cart-shopping")

var cart=document.querySelector(".addcart")

var closeicon=document.querySelector(".fa-wallet")

// process in click open

 openicon.addEventListener("click",function () {
// one icon click two process key word in toggle
    // cart.classList.toggle("opencart")
    cart.classList.add("opencart")
    
 })

//  process in click close

 closeicon.addEventListener("click",function(params) {

    cart.classList.remove("opencart")

 })

 // page load function 

 document.addEventListener("DOMContentLoaded",loadEvent) 

 function loadEvent(params) {
    loadContent()
 }

 function loadContent(params) {
// cart div delete
     var juiceremove=document.querySelectorAll(".fa-trash-can")
   //all  cart design delete so used for each method
     juiceremove.forEach(
        function name(totalremove) {
            totalremove.addEventListener("click",removeProduct)
            
        }
     )
        
     
   

  // count increment
    var  juiceno=document.querySelectorAll(".prinput") 

 /// total input box increase   
    juiceno.forEach(
   
    function (juicenototal) {

        juicenototal.addEventListener("change",minus)
        
    }     

    )
  
    // shopnow button function....>>>>>>

       var shopnowbtn=document.querySelectorAll(".addbtn")

    //    console.log(shopnowbtn);
// button multiple element so used for each mathod
       shopnowbtn. forEach(
        function(btn) {
            btn.addEventListener("click",getjuiceinfo)
            
        } 

       )
        
       totalcalculation()

 }
 function minus (params) {
        
    // console.log(juiceno.value);
    if (this.value<=0) {
        this.value=1
        alert("please select any one of juice")
    } else if(this.value>=10) {
        this.value=10
        alert("minimum of juice only ")
    }
loadEvent()
}
 // create new array.>>>>>>>> chacking purpose 

 var juiceStoreArray=[]


 function removeProduct (params) {

    //find indx function 
               
                  var getName=this.parentNode.querySelector(".prname").innerText
    
                  var findIndex=juiceStoreArray.findIndex(function (array) {
                    return array.juicename==getName
                    
                  })
                  console.log(getName);
                    console.log(findIndex);
    //if condition+ splice method
                    if (findIndex>=0) {
                        juiceStoreArray.splice(findIndex,1)
                        this.parentNode.remove()
                        
                    }
    
    
                    // alert("remove this product")
             // this, parent node,remove key word    
             
             loadContent()
                 }

 // getjuiceinfo function

 function getjuiceinfo () {
//click element parentnode select    
    var select =this.parentNode

    
    var juiceimage=select.querySelector(".fruits").src

    var juicename=select.querySelector(".frname").innerText

    var juiceprice=select.querySelector(".frprice").innerText.replace("RS.","")



      var juiceNameObject={juicename}
//using find indx

 var findIndex=juiceStoreArray.findIndex(function (juarray) {

        return juicename==juarray.juicename
        
      })
        console.log(findIndex);
// condition to add(or) alert messgae

      if (findIndex !== -1) {

       return alert("alert added")
        
      } 
      else{

      juiceStoreArray.push(juiceNameObject)
           
      } 
       



console.log(juiceStoreArray);

    //   console.log(juiceNameObject);

//juicearray using push method
     
  
    //   console.log(juiceStoreArray);

//new div is store the design
    var juicedetails=document.createElement('div')
//passing design
    juicedetails.innerHTML=putjuiceinfo(juiceimage,juicename,juiceprice)

    // console.log(juicedetails);

    var juicecontainer=document.querySelector(".juicecontainer")
    juicecontainer.appendChild(juicedetails)
//the work is repeated so used load content
  loadContent()
 }
// cart juice design function

 function putjuiceinfo(image,name,price) {
// return `` javscript using tags

    return` <div class="remove">
    <div class="content">
        <img class="prfruits" src="${image}">
    </div>
    <div class="content1">
        <h3 class="prname">${name}</h3>
        <p class="prprice">${price}</p>
<!-- inpu box selection                     -->
        <input class="prinput" type="number"  value="1">
    </div>
    <!-- <div class="icon"> -->
<!-- toatl juicecontainer remove icon -->
     <p class="juice-total"> </p>
    <i class="fa-solid fa-trash-can" style="color:blue;"></i>
    <!-- </div> -->

</div>`

// loadContent()
    
 }

  function totalcalculation(params) {
    var cartjuice=document.querySelectorAll(".remove")
    console.log(cartjuice);

    var totalcart=0
   
    cartjuice.forEach(function(cjuice) {

         var juiceprice=cjuice.querySelector(".prprice").innerText

         var  juicecount=cjuice.querySelector(".prinput").value

         var juicetotal=cjuice.querySelector(".juice-total")

         juicetotal.innerText="RS."+ juiceprice*juicecount

        //  alert("calculate")

         console.log(juiceprice,juicecount);


         totalcart +=juiceprice*juicecount
          
         



        
    })

    var cartTotal=document.querySelector(".print")

        cartTotal.innerHTML="RS. "+totalcart
    
       console.log(cartTotal);

// cart notify 

document.querySelector('.notify').innerText=juiceStoreArray.length
  }



