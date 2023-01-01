let inp = document.getElementById('inp'),
    btn = document.getElementById('btn'),
    cards = document.querySelectorAll('main .card');

inp.focus();
btn.onclick = () =>{
    if(inp.value !== ''){
       // Add the text that the entry added in the first card
        cards[0].querySelector('.content').innerHTML += `
          <li class="item" draggable="true"> ${inp.value}</li>
        `;
        // Return the entry value to null
        inp.value = '';
        inp.focus();
    }
    // Drag And Drop Item
    dragItem();
}
function dragItem(){
    // All Items
    let items = document.querySelectorAll('.item');
    items.forEach ((item)=>{
        // You put the item to place into a drag variable with opacity 0.5
        item.addEventListener('dragstart', ()=>{
            drag = item;
            item.style.opacity = '0.5';
        });
        // When you put the item, you return the drag value to null and their opacity to 1
        item.addEventListener('dragend', ()=>{
            drag = null;
            item.style.opacity = '1';
        });
    cards.forEach (card =>{
        // When the item (mouse) on the Card
            card.addEventListener('dragover',function (e){
                // You are disabling the default drag settings for element placement.
                e.preventDefault();
                this.style.background = '#090';
                this.style.color = '#fff';
            });
         // When the item (mouse) moves away from the Card
            card.addEventListener('dragleave', function (){
                this.style.background = '#fff' ;
                this.style.color = '#000';
            });
          // When you put the item in the card
          card.addEventListener('drop',function(){
                this.append(drag);
                // After putting an item, return the default color and background
                this.style.background = '#fff' ;
                this.style.color = '#000';
          });
        });
    });
}













