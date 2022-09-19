import Image from 'next/image';
import Typography from "@mui/material/Typography";
import Button  from '@mui/material/Button';

export const ImageTextComponent = (props: any) => {
    return (
    <div className="relative overflow-hidden w-1/3 h-screen" onClick={props.accordionHandler}>
        <Image layout='fill' objectFit='contain' src={props.imageUrl} className="object-cover" alt="Painting From a Manuscript" />
        <div className="absolute py-2.5 bottom-64 inset-x-0 leading-4 flex flex-col">
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
            <Button className="block">
                <Typography variant="subtitle1" color="secondary">
                    {props.description}
                </Typography>
            </Button>
        </div>
    </div>
    );
};