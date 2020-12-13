function shadow(options){
    let Images = document.querySelectorAll('.addshadow');

    if(options.shadowType==="hard"){
        options.shadowType==="15px";
    }
    else{
        options.shadowType==="0px";
    }

    Images.forEach(item=>{
        item.style.boxShadow =`10px 10px ${option.shadowType} 1px rgba(0,0,0,0.12)`;
        if(options.padding){
            item.style.padding='1em';
        }
    })


}

module.exports.shadow=shadow;