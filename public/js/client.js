$(document).ready(()=>{
    $('form').on('submit',(e)=>{
        e.preventDefault()
        const location=$('form input').val()
        
        $('#message-1').text("loading ...")
        $('#message-2').text("")

        fetch('http://localhost:3000/?address='+location).then((response)=>{
            response.json().then((data)=>{
                if(data.error){
                    $('#message-1').text(data.error)
                }else{
                    $('#message-1').text(data.location)
                    $('#message-2').text(data.forcastData)
                }
            })
        })
    })       
})