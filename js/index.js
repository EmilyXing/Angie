
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
            
            var str = '<button type="button" class="btn %type%" rel="popover" data-img="%img%">%value%</button> ';

            var newStr;
            foodList.forEach(function(food){
                newStr = str.replace('%type%', food.type);
                newStr = newStr.replace('%img%', food.img);
                newStr = newStr.replace('%value%', food.content);

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


