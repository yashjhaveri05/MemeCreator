import React from 'react';
import { useParams } from "react-router-dom";

const CreateMeme = () => {
    const { id,boxes } = useParams();

    return(
        <div>
            <h1>{id} had {boxes} text input fields!!</h1>
        </div>
    );
}

export default CreateMeme;