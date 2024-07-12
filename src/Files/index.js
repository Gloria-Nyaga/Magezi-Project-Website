import './index.css'
import val from '../Files/images/Valentine .png'
import nakato from '../Files/images/nakato.png'
import maureen from '../Files/images/maureen.jpeg'

function Files(){
    return(
        <>
        <div>  
        <img  src={maureen} alt=' ' className='image'/>
        </div>
        </>
    )
}
export default Files;

export function Valentine(){
    return(
        <>
        <div>
        <img  src={val} alt=' ' className='image'/>
        </div>
        </>
    )
}

export function Nakato(){
    return(
        <>
        <div>
        <img  src={nakato} alt=' ' className='image'/>
        </div>
        </>
    )
}