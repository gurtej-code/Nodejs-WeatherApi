const request=require('request')

const geoCode=(address,callback)=>{
    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZ3VydGVqbGFsIiwiYSI6ImNrZGUwN25pODBlajEyeXVjczZheWFrdDYifQ.FPBp3SZfI0agqYcFnz9z6A&limit=1`;
    request({url,json:true},(error,{body})=>{
      if(error){
        callback('Unable To Connect To Location Services')
      }else if(body.message){
        callback('Unable To Find Lat and Lon')
      }else{
        callback(undefined,{
          latitude:body.features[0].center[1],
          longitude:body.features[0].center[0],
          location:body.features[0].place_name
        })
      }
    })
  }
  
module.exports=geoCode