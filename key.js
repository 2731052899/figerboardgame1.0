function key(){
    //初始化
    this.init();
    //按钮控制
    this.btn()
    //游戏分数及游戏结束控制
    
    //游戏难度的设置
    // this.nandu()
    this.b =0
    this.j = 0
    this.speed = 0
    this.divs = []
    this.scc = 0
    
}
key.prototype = {
    init(){
        this.js = document.querySelector(".end")
        this.ks = document.querySelector(".start");
        this.sd = document.querySelector(".sp");
        this.nd = document.querySelector(".nandu")
        this.box = document.querySelector(".box")
        this.nandushezhi = document.querySelector(".nandushezhi")
        this.nandu1 = document.querySelectorAll(".nandushezhi li")
        this.cai = document.querySelector(".cai")
        this.sudu = document.querySelector(".sudu")
        this.check = document.querySelector(".check")
        this.suduzhi = document.querySelector(".suduzhi")
        this.suduxuanze = document.querySelector(".suduxuanze")
        this.sc = document.querySelector(".sc")
        this.sm = document.querySelector(".sm")
        this.body = document.querySelector("body")
    },
    btn(){
        var that = this;
        
        that.cai.onclick = function () {
            that.box.style.display = ("block")
        }
        that.sd.onclick = function () {
           alert("回到游戏？")
        }
        that.nd.onclick = function () {
            that.nandushezhi.style.display = "block"
            that.box.style.display = "none"
           
        }
        for (i = 0; i < that.nandu1.length; i++) {
            that.nandu1[i].onclick = function() {
                that.box.style.display = "block"
                that.nandushezhi.style.display = "none"
                that.b = this.dataset.index;
            }
        }
        that.ks.onclick = function () {
            that.j = 1;
            that.box.style.display = "none"  
            that.fen()
            that.dong()
           that.body.style.background = "url(2.jpg)"
        }
        that.js.onclick = function () {
            alert("确认退出？");
            history.go(0);
        }
        that.sudu.onclick = function () {

            that.suduxuanze.style.display = "block"
            that.box.style.display = "none";


        },
            that.check.onclick = function () {
            that.box.style.display = "block"
            that.suduxuanze.style.display = "none"
                that.speed = that.suduzhi.value;
                
            }

    },
    
    fen(num){
        var that = this
        var letter = ["G", "H", "T","A","B","C","D","E","F","I","O","P"];
        that.body = document.querySelector("body")
        if(num){
            that.b = num
        }
       
       
        function creat() {
            var  current = [];
           
            for (var i = 0; i < that.b; i++) {
                current.push(letter[Math.floor(letter.length * Math.random())]);
               
            }
            for (var i = 0; i < current.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = current[i];
                div.style.cssText = "width:100px;height:100px;position:absolute;left:" + (300 + document.body.offsetHeight * Math.random()) + "px;top:-200px;background:rgba(" + (255 * Math.random()) + "," + (255 * Math.random()) + "," + (100 * Math.random()) + ",1);line-height:100px;text-align:center;font-size:" + 100 * Math.random() + "px;color:#fff;"
                document.documentElement.appendChild(div);
                that.divs.push(div);
                
            }
            
        }
        creat();
       
        
    },
    dong(){
        var that = this
        var ci = 1;
        var num = 10
       
        var t = setInterval(function () {
            if (that.j == 1) {
                console.log(that.divs.length)
                for (var i = 0; i < that.divs.length; i++) {   
                              
                    that.divs[i].style.top = that.divs[i].offsetTop + parseInt(that.speed) + "px";
                    
                   if (that.divs[i].offsetTop > document.body.offsetHeight) {
                        ci++
                         num = num-1
                       
                        document.documentElement.removeChild(that.divs[i]);
                       that.divs.splice(i, 1);
                       that.sm.innerHTML = parseInt(num)
                       that.fen(1)
                    }                              
            }
                if (num == -1) {
                    
                   
                    alert("游戏失败:是否重新开始");
                    ci = 1;
                    that.j = 0
                    history.go(0);
                }
            }
            }, 500);
        
        document.onkeydown = function (ev) {
            
            if (that.j == 1) {
                that.letters = String.fromCharCode(ev.keyCode);

                for (var i = 0; i < that.divs.length; i++) {
                    if (that.divs[i].innerHTML == that.letters) {
                        document.documentElement.removeChild(that.divs[i]);
                        
                        that.scc++
                        console.log(that.scc)
                        that.divs.splice(i, 1);
                        that.sc.innerHTML = that.scc;
                        that.fen(1)
                        break
                        
                    }
                    
                }
               
            }

        }
       
    },
   

}
