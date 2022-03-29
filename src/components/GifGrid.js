import  React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: image, loading } = useFetchGifs( category );


    const images = image.map( img => (
        
        // ({id, title, url})
        // <li key={ id } >{ title }</li>
        
            <GifGridItem 
                key={ img.id }
                { ...img }
            /> 
    
    ))

    return (
        <>
        <h3>{ category }</h3>

        { loading && <p> Loading </p>}
        
        { loading ? 'cargando' : 'data cargada'}

        <div className="card-grid">
            <ol>
                { images }
            </ol>
   
        </ div>
        </>
    )

}
