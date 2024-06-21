var flies = new Array(); //宣告flies為一個陣列 19行
var refreshInterval = 30;

$(document).ready(function() {
 var WIDTH = window.innerWidth;
 var HEIGHT = window.innerHeight;

    //初始化
    function init() {
      // Auto size
      $('#container').width(WIDTH).height(HEIGHT);   
      var canvas = document.getElementById('fire'); //選取圖形容器
      $(canvas).attr('width', WIDTH).attr('height',HEIGHT); //設定canvas寬高
      con = canvas.getContext('2d'); //渲染環境
        
      for(var i = 0; i < 150; i++) { //100 螢火蟲總數
        flies[i] = new Circle(); //
        flies[i].reset();
      }
      setInterval(draw,refreshInterval);//每0.03秒觸發
    }
    
    function draw() {
        con.clearRect(0,0,WIDTH,HEIGHT); //清空一個矩形，這邊清空整片視窗
        for(var i = 0; i < flies.length; i++) {
            flies[i].fade(); //效果
            flies[i].move(); //移動
            flies[i].draw(); //畫            
        }
    }

    function Circle() {
        this.s = {ttl:9000, // 9000跑多遠閃一下 
                  xmax:5,   //5 水平移動速率 ,0為垂直移動
                  ymax:2,   //2 水平移動速率 ,0為垂直移動
                  rmax:20,  //圓半徑
                  rt:1,     //1 
                  xdef:WIDTH * 0.8, //960 
                  ydef:HEIGHT * 0.7, //540
                  xdrift: 4, //4 x位移參數
                  ydrift: 4, //4 y位移參數
                  random:false, //同一個起點 false, 隨機起點 true  
                  blink:true   //false 直接出現是亮的, true 有漸變過程
                 };

        this.reset = function() {
            this.x = (this.s.random ? WIDTH*Math.random() : this.s.xdef); //寬不是random就是xdef
            this.y = (this.s.random ? HEIGHT*Math.random() : this.s.ydef); //高不是random就是ydef
            this.r =  ((this.s.rmax-1)*Math.random()) + 1; //螢火蟲半徑大小1-100
            this.dx = (Math.random()*this.s.xmax) * (Math.random() < 0.8 ? -1 : 1); // 區間範圍 * 一半往左飛,一半往右飛
            this.dy = (Math.random()*this.s.ymax) * (Math.random() < 0.8 ? -1 : -1); //一半往上飛(-1),一半往下飛
            this.hl = (this.s.ttl/refreshInterval)*(this.r/this.s.rmax); //(9000/30)*(半徑/30)=300 //閃光的頻率
            //console.log(this.r , this.s.ttl/refreshInterval , this.r/this.s.rmax ,this.hl);
            this.rt = Math.random()*this.hl; //約0~300隨機數字
            this.s.rt = Math.random() + 1 ; //隨機起始
            this.stop = Math.random() * 0.2 + 0.4; //隨機停止
            this.s.xdrift *= Math.random() * (Math.random() < 0.8 ? -1 : 1); //x位移
            this.s.ydrift *= Math.random() * (Math.random() < 0.8 ? -1 : 1); //y位移
        };

        this.fade = function() {
            this.rt += this.s.rt; //this.rt = this.rt + this.s.rt
        };

        this.draw = function() {
            if(this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) { 
                this.s.rt = this.s.rt*-1; 
            }
            else if(this.rt >= this.hl){
                this.reset(); 
            } 
            var newo = 1-(this.rt/this.hl);
            newo = newo*0.35;
            con.beginPath();
            con.arc(this.x,this.y,this.r,0,Math.PI*2,true); //(x,y,r,sAngle起始角度 ,eAngle結束角度 0.5=1/4圓,counterclockwise 順時鐘false/逆時鐘true)
            con.closePath();
            var cr = this.r*newo;
            g = con.createRadialGradient(this.x,this.y,0,this.x,this.y,(cr <= 0 ? 1 : cr));
            g.addColorStop(0.0, 'rgba( 105, 216, 229, 1)'); //漂浮的螢火蟲顏色
            g.addColorStop(this.stop, 'rgba(105,216,229,'+(newo*.9)+')');//外光暈顏色
            g.addColorStop(1.0, 'rgba( 255, 255, 255, 0)'); //襯底色rgba( 216, 236, 20, 0)
            con.fillStyle = g;
            con.fill();
        }
        
        //移動
        this.move = function() {
            this.x += (this.rt/this.hl)*this.dx;  //this.dx 移動速度
            this.y += (this.rt/this.hl)*this.dy; //this.dy 移動速度
            
            //碰到牆壁反彈
            if(this.x > WIDTH || this.x < 0) { this.dx *= -1; }  //this.dx = this.dx * -1 
            if(this.y > HEIGHT || this.y < 0){ this.dy *= -1; } //this.dy = this.dy * -1
        }

        this.getX = function() { return this.x; }
        this.getY = function() { return this.y; }
    }

init();
  
});