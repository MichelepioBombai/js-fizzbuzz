
const listEl = document.getElementById("list");
const m3 = ("fizz");
const m5 = ("buzz");
const m3_5 = ("fizzbuzz");



for (let i = 1; i < 100; i++) {


    const listItem = document.createElement("li")

    listItem.innerHTML = i;
    listItem.classList.add("box");

    if (i % 3 == 0){
        listItem.classList.add("box3")
        listItem.innerHTML = m3;
        
    }  if(i % 15 == 0){
        listItem.classList.add("box3_5")
        listItem.innerHTML = m3_5; 

    } 
      else if(i % 5 == 0){
        listItem.classList.add("box5")
        listItem.innerHTML = m5; 
    
    }
    listEl.append(listItem);
    
    console.log(listItem);
    
    
}
