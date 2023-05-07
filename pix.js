class pixScreen{
    /**
     * @class
     * @param {boolean} border
     * @param {int} width
     * @param {int} height
     */
    constructor(border,width,height){
        this.border=border
        this.width=width
        this.height=height
        this.data=[]
    }
    init=function(){
        if(this.width>64){
            this.width=64
        }else if(this.width<8){
            this.width=8
        }
        if(this.height>32){
            this.height=32
        }else if(this.height<8){
            this.height=8
        }
        for(let y=0;y<this.height;y++){
            this.data.push([])
            for(let x=0;x<this.width;x++){
                this.data[y][x]="0"
            }
        }
    }
    setPixel=function(x,y,val){
        /**
         * @function
         * @param {int} x
         * @param {int} y
         * @param {int} val
         */
        this.data[y][x]=val
    }
    update=function(){
        for(let y=0;y<this.data.length;y++){
            for(let x=0;x<this.data[y].length;x++){
                if(this.data[y][x]==1){
                    this.data[y][x]="█"
                }else{
                    this.data[y][x]=" "
                }
            }
        }
        console.clear()
        if(this.border){
            process.stdout.write("\n┏")
            for(let i=0;i<this.width;i++){
                process.stdout.write("━")
            }
            process.stdout.write("┓")
        }
        process.stdout.write("\n")
        for(let i=0;i<this.data.length;i++){
            if(this.border){
                process.stdout.write("┃")
                process.stdout.write(this.data[i].join(""))
                process.stdout.write("┃\n")
            }
        }
        if(this.border){
            process.stdout.write("┗")
            for(let i=0;i<this.width;i++){
                process.stdout.write("━")
            }
            process.stdout.write("┛\n")
        }
        process.stdout.write("\n")
    }
}
var config={}



module.exports={
    "Screen":pixScreen,
    "config":config
}
