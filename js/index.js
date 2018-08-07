
var UIController = (function(){
    var DOMstrings = {
        foods: ".btn_foods"
    };

    var foodList = [
        {
            type: 'btn-danger',
            img: 'imgs/lamb.png',
            content: 'Lamb' 
        },
        {
            type: 'btn-warning',
            img: 'imgs/salmon.png',
            content: 'Salmon' 
        },
        {
            type: 'btn-success',
            img: 'imgs/chicken.png',
            content: 'Chicken' 
        },
        {
            type: 'btn-dark',
            img: 'imgs/beef.jpg',
            content: 'Beef' 
        }
    ];

    return {
        displayFoods: function(){
            var str, newStr;
            var str = '<button type="button" class="btn %type%" rel="popover" data-img="%img%">%value%</button> ';

            foodList.forEach(function(cur){
                newStr = str.replace('%type%', cur.type);
                newStr = newStr.replace('%img%', cur.img);
                newStr = newStr.replace('%value%', cur.content);
                console.log(document.querySelector(DOMstrings.foods));
                console.log(document.querySelector('.btn_foods'));
                document.querySelector(DOMstrings.foods).insertAdjacentHTML('beforeend', newStr);
            });
            
        }
    };
})();

var controller = (function(){
    return {
        init: function(){
            UIController.displayFoods();
        }
    };
})();


