import { useLoaderData } from "react-router-dom";
import Photo from "./Photo";

const Photos = () => {
    const photos = useLoaderData();
    return (
        <div>
            <h1>Total Photos: {photos.length} </h1>
            {
                photos.map(photo =><Photo key={photo.id} photo={photo}></Photo>)
            }
        </div>
    );
};

export default Photos;