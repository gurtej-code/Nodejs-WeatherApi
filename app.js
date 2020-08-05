const express=require('express')
const path=require('path')
const expressLayouts=require('express-ejs-layouts')
const hbs=require('hbs')
const app=express()

//Ejs Layout
app.set('view engine','hbs')
hbs.registerPartials(path.join(__filename,'../views/partials'))

//Static File
app.use(express.static(path.join(__filename,'../public')))
app.use(express.static(path.join(__filename,'../views/partials/')))

//Body Parser
app.set(express.urlencoded({extended:false}))

//Routes
app.use('/',require('./Routes/mainPage'))

const PORT=process.env.PORT || 3000

app.listen(PORT,console.log(`Server is lintening to ${PORT} ...`))