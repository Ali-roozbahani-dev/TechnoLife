// محاسبه میانگین امتیازات 
export function calcAverageRating(comments){
  const average = comments.length ?
   comments.reduce((acc , cur)=>{
       return acc + cur.ratingNumber
    },0) / comments.length :
    0

   return average 
}

