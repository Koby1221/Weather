// import sunImg from "../spite_sun.png"
// import overcastImg from "../weather-overcast.png"
// import background from "../18QeoMWZ8ysn4qNlNbARBy.jpg"

function List(props){
    let array=[];
    let img;
    
    //מכיוון שהשרת שולח תחזית של כל שלש שעות למשך 5 ימים ,בניתי מערך שיחזיק שעה אחת מכל יום
    for (let index = 0; index < 40; index+=8) {
        array.push(props.List[index])
    }



    return(
        <div className="container"  >
        <br/><br/>  <br/>
        <h2 >City : <span style={{color: "red"}}>{props.city}</span></h2>
        <br/><br/>  <br/>
        <div className="row">
            {array.map(item =>{
                //תנאי שקובע איזה אייקון יוצג על המסך בהתאם לטמפרטורה 
                // {if(item.main.temp<25){
                // img=overcastImg
                // }
                // else img=sunImg}
                
                return(
            
                    <div className="col-lg-6  p-3" key={item.dt}>
                    <div className="p-2 shadow overflow-hidden" >
                    <h2> date : <span style= {{color: "green"}}>{item.dt_txt.substring(0,11)}</span></h2>
                    <div><h3 >temp : <span style= {{color: "blue"}} >{item.main.temp}</span></h3> </div> 
                    <h2>description : <span style= {{color: "red"}}>{item.weather[0].description}</span></h2>
                    {/* <img src={img} style={{width:"80px"}}></img> */}
                    </div>
                    </div> 
                    )
            } )}
            </div>
            </div>
)
}

export default List;