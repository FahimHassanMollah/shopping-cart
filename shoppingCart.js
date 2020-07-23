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

        }

    }
    else {
        if (--mobileCountValue>=0)
        {
            document.getElementById(mobileCountId).value=mobileCountValue;
            document.getElementById(mobilePriceId).innerText=(mobileCountValue*singlePrice).toString();
        }

    }

}