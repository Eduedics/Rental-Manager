import "./HeroImgSliderStyles.css"
import React from "react"
import{BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
export default function HeroImgSlider(url,limit,page){
    const[images,setImages] =React.useState([])
    const[currentSlide,setCurrentSlide] = React.useState(0)
    const[errorMsg,setErrorMsg]= React.useState(null)
    const[loading,setLoading]= React.useState(false)

    async function fetchImages(getUrl){
        try{
            setLoading(false)
            const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await res.json()
            console.log(data)
            if(data){
                setLoading(true)
                setImages(data)
            }
        }
        catch(error){
            setLoading(false)
            setErrorMsg(error.message)
        }
    }
    React.useEffect(()=>{
        if(url !=''){fetchImages(url)}
    },[url])
    console.log(images)
    console.log(loading)

    if(loading){
        <div>please wait!loading.....</div>
    }
    if(errorMsg!==null){ 
        <div>an error occured {errorMsg}</div>
    }

    function handleNext(){
        setCurrentSlide(currentSlide === 0 ?0:currentSlide+1)
    }
    function handlePrevious(){
        setCurrentSlide(currentSlide===0?images.length-1:currentSlide-1)
    }
    return(
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious}  className="arrow arrow-left"/>
            {
                images&&images.length?
                images.map((img,index)=>(
                    <img key={img.id}
                    src={img.download_url}
                    alt={img.download_url}
                    className={currentSlide===index?"current-image":'current-image hide-current-image'}/>
                ))
                :null
            }
            <BsArrowRightCircleFill  onClick={handleNext}  className="arrow arrow-right"/>
            <span className="circle-indicators">
                {
                    images&&images.lenght !==0?
                        images.map((_,index)=>{
                            <button className={currentSlide===index?"current-indicator":"current-indicator hide-current-ndicator"} 
                            key={index} onClick={()=>{currentSlide(index)}}>

                            </button>
                        })
                    :null
                }
            </span>
        </div>
    )
}