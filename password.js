<!-- Hide from old browsers
function verify(){
        marker = false
        checkname = document.pass.passname.value
        checkpass = document.pass.password.value
        fullpass = checkname + " " + checkpass

        users = 3  //user의 숫자
        userlist = new Array
        userlist[0] = "nota 170726" // 앞 자리는 이름, 뒷자리는 암호
        userlist[1] = "pado8 xo99xo"   
        userlist[2] = "floe8 1234" 

        for (i = 0; i < users; i++){
                if (fullpass == userlist[i]){
                        location.href = "home.html" 
                        marker = true
                }
        }
        if (marker == true){
                window.close()
        }
        else {
                alert("암호가 맞지 않습니다. 다시 이름과 패스워드를 입력하세요")
        }
}
// -->

