
new Vue({
    el: "#box",
    data: {
        current: 0,
        datalist: [{
            title:'山原旷其盈视',
            Bgimg:'img/1.png'
        }, 
        {
            title:'川泽纡其骇瞩',
            Bgimg:'img/2.png'
        },
        {
            title:'滕王高阁临江渚',
            Bgimg:'img/3.png'
        },
        {
            title:'画栋朝飞南浦云',
            Bgimg:'img/4.png'
        },
        {
            title:'闲云潭影日悠悠',
            Bgimg:'img/5.png'
        },
        {
            title:'佩玉鸣鸾罢歌舞',
            Bgimg:'img/6.png'
        },
        {
            title:'珠帘暮卷西山雨',
            Bgimg:'img/7.png'
        },
        {
            title:'物换星移几度秋',
            Bgimg:'img/8.png'
        },
        {
            title:'阁中帝子今何在',
            Bgimg:'img/9.png'
        },
        {
            title:'槛外长江空自流',
            Bgimg:'img/10.png'
        }
        ],
        classobj: {
            Cored: false,
            Coblue: true,
            Cogreen: false,
            Coyellow: false,
            Copurple: false
        },
    },
    methods: {
        handleClick(index) {
            this.current = index

            //添加动画
                
            console.log(index);
            if (index === 0) {
                this.classobj.Cored = true
                this.classobj.Coblue=false
                this.classobj.Cogreen=false
                this.classobj.Coyellow=false
                this.classobj.Copurple=false
                this.classobj.Cowhite=false
            }else if(index === 1){
                this.classobj.Cored = false
                this.classobj.Coblue=true
                this.classobj.Cogreen=false
                this.classobj.Coyellow=false
                this.classobj.Copurple=false
                this.classobj.Cowhite=false
            }else if(index === 2){
                this.classobj.Cored = false
                this.classobj.Coblue= false
                this.classobj.Cogreen=true
                this.classobj.Coyellow=false
                this.classobj.Copurple=false
                this.classobj.Cowhite=false
            }
            else if(index === 3){
                this.classobj.Cored = false
                this.classobj.Coblue= false
                this.classobj.Cogreen=false
                this.classobj.Coyellow=true
                this.classobj.Copurple=false
                this.classobj.Cowhite=false
            }
            else if(index === 4){
                this.classobj.Cored = false
                this.classobj.Coblue= false
                this.classobj.Cogreen=false
                this.classobj.Coyellow=false
                this.classobj.Copurple=true
                this.classobj.Cowhite=false
            }
            else if(index === 5){
                this.classobj.Cored = false
                this.classobj.Coblue= false
                this.classobj.Cogreen=false
                this.classobj.Coyellow=false
                this.classobj.Copurple=false
                this.classobj.Cowhite=true
            }
            // console.log(this.current);
        },
        IcoClick( ) {


        }
    }
})