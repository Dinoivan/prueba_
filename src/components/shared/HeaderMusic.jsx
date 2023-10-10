import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import "../shared/shared-style/headerMusic.css"
import { useForm } from "react-hook-form"
import usePlayList from "../../hooks/usePlayList"
//Se importa useState para manejar estados
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const HeaderMusic = () => {

    const tracksplayList = useSelector(store => store.tracks)

    const { reset, handleSubmit, register } = useForm()

    const { postPlaylist } = usePlayList()

    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

    const navigate = useNavigate();
    
    const handleLogout = () => {
        setShowLogoutPopup(false);
        navigate('/auth/login');
      };


    // Se crea un estado para cambiar de lado con el boton
    const [seleccionar, actualizar] = useState("A");

    const submit = data => {

        const obj = {
            ...data,
            tracks: tracksplayList.map(e => ({
                id: e.id
            }))
        }
        postPlaylist(obj)

        reset({
            title: '',
            to: '',
            message: ''
        })
    }


    // Se crea un evento para controlar el cambio entre A y B
    const presionar = () => {
        //Si al presionar el boton es igual A se cambia en B y si no es verdadero se cambia en A
        actualizar(seleccionar === "A" ? "B" : "A");
    };
    
  return (
    <header className="header__container">
        <h1 className="header__text">Gift Music</h1>

        <div className="header__opcion" onClick={() => setShowLogoutPopup(!showLogoutPopup)}>
        <span></span>  
        {showLogoutPopup &&
        <div className="logout-popup"><button onClick={handleLogout}>Cerrar</button></div>}
        </div>
        {/* <div className="header__cuenta">
         <button onClick={handleLogout}>Mi Cuenta</button>
        </div> */}
       
        
        <div className="header__icon__container">
            <img src="/icons/header-icon.png" alt="" />
            <span>0</span>
        </div>
        <div className="header__music__form__container">
            
            <form onSubmit={handleSubmit(submit)} className="header__music__form">

                <span className="back__icon"></span>
                <div className="header__form__image__container">
                <img className="casete" src="/images/casete.png" alt="" />
                    {/* Si se presiona el boton se ejecuta el evento y seleccion es igual A el texto del boton será Lado A caso contrario Lado B*/}
                <button className="header__form__btn" onClick={presionar}>{seleccionar === "A" ? "Lado A" : "Lado B"} <span className="row"></span></button>
                </div>

                {seleccionar === 'A' && (

                    <div className="form__title">
                    <label htmlFor="title">Title:</label>
                    <input {...register("title")} type="text" id="title" placeholder="" />
                    <span className="vector"></span>
                    </div>
                )}


                {seleccionar === 'B' && (
                    <>
                    <div className="header__form__to">
                    <label htmlFor="to">To : </label>
                    <input {...register("to")} type="text" id="to" />
                    <span className="vector2"></span>
                </div>

                
                <div className="header__form__massage">
                    <label htmlFor="message">For : </label>
                    <textarea className="textarea__form" {...register("message")} id="message" />
                    <span className="vector3"></span>
                </div>
                </>

                )}

            
                <div className="header__music__trackList">
                    {
                        tracksplayList.map(track => (
                            <TrackList
                                key={track.id}
                                track={track}
                            />
                              
                        ))
                    }
                </div>
                <button className="header__create__btn">Create</button>
            </form>
        </div>
        
    </header>
  )
}

export default HeaderMusic