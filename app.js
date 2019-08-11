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
    //  console.log(Math.ceil((Math.random())*3))
    const comp_choice=choices[Math.ceil((Math.random())*3)]
    console.log(comp_choice)

    }
})