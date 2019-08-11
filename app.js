$(()=>{
    console.log('running')
    $('#r').click(()=>{
        console.log('rock clicked')
        game('r')
    })
    $('#p').click(()=>{
        console.log('paper clicked')
        game('p')
    })
    $('#s').click(()=>{
        console.log('scissor clicked')
        game('s')
    })

 function game (user_choice){
     const choices=['r','p','s']
     console.log(user_choice) 
    //  console.log(Math.floor((Math.random())*3))
    const comp_choice=choices[Math.floor((Math.random())*3)]
    console.log(comp_choice)
    if(user_choice=='r'){
        if(comp_choice=='r'){
            console.log('draw')
        }
        else if (comp_choice=='p'){
            console.log("computer wins")
        }
        else {
            console.log("user wins")
        }
    }
    else if(user_choice=='p'){
        if(comp_choice=='p'){
            console.log('draw')
        }
        else if (comp_choice=='s'){
            console.log("computer wins")
        }
        else {
            console.log("user wins")
        }
    }

    else if(user_choice=='s'){
        if(comp_choice=='s'){
            console.log('draw')
        }
        else if (comp_choice=='r'){
            console.log("computer wins")
        }
        else {
            console.log("user wins")
        }
    }    
    }
})