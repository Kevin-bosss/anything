var button = document.querySelector(".but");
var input = document.querySelector(".bar");
var itemsContainer = document.querySelector('.items-container');
var itemBox, item, cancelIcon;

button.addEventListener("click", function () {
    var inputText = input.value.trim();

    if (inputText !== '') {
        itemBox = document.createElement('div');
        item = document.createElement('div');
        cancelIcon = document.createElement('i');
        
        itemBox.className = 'item-box';
        item.className = 'item';
        item.textContent = inputText;
        cancelIcon.className = 'fas fa-times cancel-icon';
        
        itemsContainer.appendChild(itemBox);
        itemBox.appendChild(item);
        itemBox.appendChild(cancelIcon);

        cancelIcon.addEventListener('click', function() {
            itemsContainer.removeChild(itemBox);
        });

        input.value = '';
    }
});

