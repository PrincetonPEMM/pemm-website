import Image from 'next/image';
import Typography from "@mui/material/Typography";
import Button  from '@mui/material/Button';

export const ImageTextComponent = (props: any) => {
    return (
    <div className="relative overflow-hidden w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-60 md:h-screen lg:h-screen xl:h-screen" onClick={props.accordionHandler}>
        <Image layout='fill' objectFit='contain' src={props.imageUrl} className="object-cover" alt="Painting From a Manuscript" />
        <div 
          className="absolute top-1/4 left-5 right-5 text-center -translate-x-1/2 -translate-y-1/2 flex flex-col">
            <Button className="block">
                <Typography className="block" variant="h5" color="secondary">
                    Featured
                </Typography>
            </Button>
            <Button className="block">
                <Typography variant="h3" color="secondary">
                    {props.title}
                </Typography>
            </Button>
            <div className="hidden md:block lg:block xl:block">
            <Button>
                <Typography variant="subtitle1" color="secondary">
                    {props.description}
                </Typography>
            </Button>
            </div>
        </div>
    </div>
    );
};