import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GitExpertApp = () => {

    const [categories, setCategories] = useState(['wolverine']);

    // Add
    // const handleAdd = () => {
        // setHero( ['otherhero', ...hero]);
    //     setHero( cats => [...cats, 'otherhero']);
    // }

    return (
        <>
        <h2> GitExpertAPP </h2>
        
        <AddCategory setCategories={ setCategories } />

        <hr/>

        {/* Create a list */}   
        <ol>
            {
                categories.map( hero => (

                    <GifGrid 
                    
                    key={ hero }
                    category={ hero }
                    
                    />
                
                ))
            }
        </ol>

        </>

    );

};

export default GitExpertApp;