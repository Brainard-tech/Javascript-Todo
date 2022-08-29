const start_btn = document.querySelector(".start_btn");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const result_box = document.querySelector(".result_box");
    setTimeout(
        start_btn.onclick = ()=>{
        info_box.classList.add("activeInfo"); //show info box
    }
    ,800)
        exit_btn.onclick = ()=>{
        info_box.classList.remove("activeInfo"); //hide info box
    }

    // if continueQuiz button clicked
    setTimeout(
        continue_btn.onclick = ()=>{ 
        info_box.classList.remove("activeInfo"); //hide info box
        result_box.classList.add("activeResult"); //show quiz box
    }
    ,10000);
    var myList = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myList.length; i++){
        var button = document.createElement("BUTTON");
        var txt = document.createTextNode("❎");
        button.className = "close";
        button.appendChild(txt);
        myList[i].appendChild(button)
    }
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++){
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none"
        }
    }
    
    var list = document.querySelector('ul');
    list.addEventListener("click",function(ev){
        if (ev.target.tagName === 'LI'){
            ev.target.classList.toggle('checked')
        }
    },false)
    function newElement() {
        var li = document.createElement("li")
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue)
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something")
        }
        else{
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";
        var button = document.createElement("BUTTON");
        var txt = document.createTextNode("❎");
        button.className = "close";
        button.appendChild(txt);
        li.appendChild(button);

        for(i = 0; i < close.length; i++){
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none"
            }
        }
    }