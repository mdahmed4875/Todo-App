
let btn=document.getElementById('btn');
let todayItem=document.getElementById("today-todo");
let futureItem=document.getElementById("future-todo");
let compltedItem=document.getElementById('completed-todo');
let todayList=document.getElementById('today-list');
let futureList=document.getElementById('future-list');
let completedList=document.getElementById('completed-list');
 const todaydate = new Date().toISOString().split('T')[0];
btn.addEventListener('click',(e)=>{
     e.preventDefault();

    let item = document.getElementById("item").value.trim();
    let date = document.getElementById('date').value;
    let priority = document.getElementById('priority').value
    if(!item||!date||!priority){
        document.getElementById("item").value="";
     document.getElementById('date').value="";
     document.getElementById('priority').value="";
        alert('enter all the inputs');
        return;
    }
    else if(date<todaydate){
        document.getElementById("item").value="";
     document.getElementById('date').value="";
     document.getElementById('priority').value="";
        alert("enter valid date");
        return;
    }
    else{
        let li=document.createElement('li');
        let p1=document.createElement('p');
        let p2=document.createElement('p');
        let p3=document.createElement('p');
        let deletebtn=document.createElement("button");
        let checkbtn=document.createElement("button");
        p1.textContent=item;
        p2.textContent=date;
        p3.textContent=priority;
        deletebtn.textContent="🗑";
        checkbtn.textContent="✔️";
        let btns=document.createElement("div");
        btns.appendChild(deletebtn);
        btns.setAttribute("id","btns");
        btns.appendChild(checkbtn);
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        li.appendChild(btns);
        if(date==todaydate){
            todayList.appendChild(li);
        }
        else{
            futureList.appendChild(li);
        }
        checkbtn.addEventListener('click',(e)=>{
            checkbtn.remove();
            completedList.appendChild(li);
        })
        deletebtn.addEventListener('click',(e)=>{
            li.remove();
        })
    }
     document.getElementById("item").value="";
     document.getElementById('date').value="";
     document.getElementById('priority').value="";
})