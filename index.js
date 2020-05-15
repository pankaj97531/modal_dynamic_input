var htmlObj = document.querySelectorAll(".testinput");
var inputElement;
for(var i=0;i<htmlObj.length;i++){
    
    //console.log(htmlObj[i]);
    htmlObj[i].addEventListener('click',function(){
        document.getElementById('modalinput').value = this.value
        inputElement = this;
        
        $("#myModal").modal('show');
    })
}

document.getElementById('modalbtn').addEventListener('click',function(){
    console.log(document.getElementById('modalinput').value);
    //console.log('xx',inputElement);
    inputElement.value = document.getElementById('modalinput').value;
    $("#myModal").modal('hide');
})