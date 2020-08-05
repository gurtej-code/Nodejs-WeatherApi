const express=require('express')
const geoCode=require('../utils/geocode')
const forecast=require('../utils/forecast')
const Router=express()

Router.get('/',(req,res)=>{
    if(!req.query.address){
        return res.render('index',{
            title:'Weather App',
            name:'Gurtej Lal',
            error:'Address Must Provided ...'
        })
    }

    geoCode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }

        forecast(latitude,longitude,(error,forcastData)=>{
            if(error){
                return res.send({error})  
            }

            res.render('index',{
                title:'Weather App',
                name:'Gurtej Lal',
                forcastData,
                location
            })
        })
    })
})

Router.get('/help',(req,res)=>{
    res.render('help',{
        msg:'Its Working Fine , Just Checking It.',
        title:'Help',
        name:'Purshotam Veer'
    })
})

Router.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Gurtej Lal'
    })
})

Router.get('/help/*',(req,res)=>{
     res.render('404Page',{
         error:'Help Artical Not Found',
         title:'404 Error Page',
         name:'Gurtej Lal'
        })
})

Router.get('*',(req,res)=>{
    res.render('404Page',{
        error:'Page Not Found',
        title:'404 Error Page',
        name:'Gurtej Lal'
    })
})

module.exports=Router