import Image from 'next/image';
import Link from 'next/link';
import Typography from "@mui/material/Typography";
import Button  from '@mui/material/Button';

export const ImageTextComponent = (props: any) => {
    return (
      <>
        <div className="relative w-max h-max overflow-hidden">
            <Image src={props.imageUrl} width={600} height={1000} className="object-cover" />
            <div className="absolute w-full py-2.5 bottom-64 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4 flex flex-col">
                <Link href={props.link}>
                    <Button className="block">
                        <Typography variant="h5" color="secondary">
                            Featured
                        </Typography>
                    </Button>
                </Link>
                <Link href={props.link}>
                    <Button className="block">
                        <Typography variant="h3" color="secondary">
                            {props.title}
                        </Typography>
                    </Button>
                </Link>
                <Link href={props.link}>
                    <Button className="block">
                        <Typography variant="subtitle1" color="secondary">
                            {props.description}
                        </Typography>
                    </Button>
                </Link>
            </div>
        </div>
      </>
    );
};