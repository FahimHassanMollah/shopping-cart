let mobile=true;
let casing=true;
document.getElementById('add-button-mobile')
    .addEventListener('click', event => {

  productCount('mobile-count',1,'mobile-price',1219);

});

document.getElementById('sub-button-mobile')
    .addEventListener('click', event => {
        productCount('mobile-count',0,'mobile-price',1219);

});
document.getElementById('add-button-silicone-case')
    .addEventListener('click', event => {
        productCount('silicone-case-count',1,'silicone-case-price',59);
});
document.getElementById('sub-button-silicone-case')
    .addEventListener('click', event => {
        productCount('silicone-case-count',0,'silicone-case-price',59);
    });


function productCount(mobileCountId,num,mobilePriceId,singlePrice) {
    let mobileCountString=document.getElementById(mobileCountId).value;
    let mobileCountValue= parseFloat(mobileCountString);
    // let mobilePriceString=document.getElementById(mobilePriceId).innerText;
    // let mobilePriceValue=parseFloat(mobilePriceString);

    if (num===1)
    {
        if (++mobileCountValue>=0)
        {
            document.getElementById(mobileCountId).value=mobileCountValue;
            document.getElementById(mobilePriceId).innerText=(mobileCountValue*singlePrice).toString();
            totalprice();


        }

    }
    else {
        if (--mobileCountValue>=0)
        {
            document.getElementById(mobileCountId).value=mobileCountValue;
            document.getElementById(mobilePriceId).innerText=(mobileCountValue*singlePrice).toString();
            totalprice();
        }

    }



}
document.getElementById('mobile-item')
    .addEventListener('click', event => {
    document.getElementById('item-one').style.display="none";
    mobile=false;
    totalprice();

});
document.getElementById('casing-item')
    .addEventListener('click', event => {
        document.getElementById('item-two').style.display="none";
        casing=false;
        totalprice();

    });



function totalprice() {
    document.getElementById('subtotal').innerText=null;
  // let subtotalString=  document.getElementById('subtotal').innerText;
  // let subtotalvalue= parseFloat(subtotal);
  let casingString=document.getElementById('silicone-case-price').innerText;
  let casingVlue=parseFloat(casingString);
  let mobileString=document.getElementById('mobile-price').innerText;
  let mobileValue=parseFloat(mobileString);
  if (mobile===false)
  {
      mobileValue=0;

  }
  if (casing===false)
  {
      casingVlue=0;
  }
    let subtotal=mobileValue+casingVlue;

    document.getElementById('subtotal').innerText=subtotal;
    document.getElementById('total').innerText=subtotal;


  // let taxString=  document.getElementById('tax').innerText;
  // let taxValue=  parseFloat(tax);
  //
  // let totalString=  document.getElementById('total').innerText;
  // let totalValue= parseFloat(total);



}