const fruitItems = document.getElementsByClassName("fruit");

fruitItems[2].style.backgroundColor = "yellow";

for (let i = 0; i < fruitItems.length; i++)
{
    fruitItems[i].style.fontWeight = "bold";
}