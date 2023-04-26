import React from "react"
import '../assets/scss/MusicCardContainer.scss';
import MusicCard from "./MusicCard";
import {useSelector} from "react-redux";
import Container from "./Container";

function MusicCardContainer() {
    const pathname=window.location.pathname;
    const {playlists} = useSelector(state => state.musicReducer);
    return (
        <Container>
            <div className={"music-card-container"}>
                {
                    pathname==='/home'?
                     
                    
                    

                   ( playlists.map(item => (
                        <MusicCard key={item.id} music={item}/>  )))
                        
                        :
                    playlists.map(item => (item.mood===localStorage.getItem("sentiment") &&  
                        <MusicCard key={item.id} music={item}/>
                    ))
                }
            </div>
        </Container>
    );
}

export default MusicCardContainer;
