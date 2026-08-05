const xhr=new XMLHttpRequest(); //creates new HTTP message/request to send to backend

xhr.addEventListener('load', () =>{
    console.log(xhr.response)
});//waits for response to reach back to local to return 

//common requests include GET,POST,PUT,DELETE
xhr.open('GET', 'https://supersimplebackend.dev'); //open/sets up message
xhr.send();//sends message