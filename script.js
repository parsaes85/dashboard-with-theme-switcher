let darkModebtn = document.querySelector('input[type=checkbox]')

darkModebtn.addEventListener('click',e=>{
    if(darkModebtn.checked == true){

        document.body.style.backgroundColor = 'hsl(230, 17%, 14%)'
        document.querySelector('header .title h1').style.color = 'white'
        document.querySelector('header .title p').style.color = 'hsl(228, 34%, 66%)'
        document.querySelectorAll('.stat').forEach(stat=>{
            stat.style.backgroundColor = 'hsl(228, 28%, 20%)'
        })
        document.querySelectorAll('.stat-title p').forEach(statTitleP=>{
            statTitleP.style.color = 'hsl(228, 34%, 66%)'
        })
        document.querySelectorAll('.stat > h1').forEach(statH1=>{
            statH1.style.color = 'white'
        })
        document.querySelectorAll('.stat').forEach(stat=>{
            stat.style.backgroundColor = 'hsl(228, 28%, 20%)'
        })
        document.querySelector('section > h1').style.color = 'white'
        document.querySelectorAll('.today-stat').forEach(todayStat=>{
            todayStat.style.backgroundColor = 'hsl(228, 28%, 20%)'
        })
        document.querySelectorAll('.today-stat-title p').forEach(todayStatP=>{
            todayStatP.style.color = 'hsl(228, 34%, 66%)'
        })
        document.querySelectorAll('.today-stat-footer > h1').forEach(statH1=>{
            statH1.style.color = 'white'
        })
    }else{

        document.body.style.backgroundColor = 'white'
        document.querySelector('header .title h1').style.color = 'hsl(230, 17%, 14%)'
        document.querySelector('header .title p').style.color = 'hsl(228, 12%, 44%)'
        document.querySelectorAll('.stat').forEach(stat=>{
            stat.style.backgroundColor = 'hsl(227, 47%, 96%)'
        })
        document.querySelectorAll('.stat-title p').forEach(statTitleP=>{
            statTitleP.style.color = 'hsl(230, 17%, 14%)'
        })
        document.querySelectorAll('.stat > h1').forEach(statH1=>{
            statH1.style.color = 'hsl(230, 17%, 13%)'
        })
        document.querySelector('section > h1').style.color = 'hsl(228, 12%, 40%)'
        document.querySelectorAll('.today-stat').forEach(todayStat=>{
            todayStat.style.backgroundColor = 'hsl(227, 47%, 96%)'
        })
        document.querySelectorAll('.today-stat-title p').forEach(todayStatP=>{
            todayStatP.style.color = 'hsl(228, 12%, 44%)'
        })
        document.querySelectorAll('.today-stat-footer > h1').forEach(statH1=>{
            statH1.style.color = 'hsl(230, 17%, 13%)'
        })
    }
    
})