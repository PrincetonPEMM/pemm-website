import Image from 'next/image';
import Link from 'next/link';
import Typography from "@mui/material/Typography";
import Button  from '@mui/material/Button';

export const FeaturedContentButton = (props: any) => {
    return (
      <>
        <div className="relative overflow-hidden">
            <Image src={props.content.illustration} width={600} height={600} className="object-cover" />
            <div className="absolute top-1/2 left-5 right-5 text-center -translate-x-1/2 -translate-y-1/2 flex flex-col">
                <Link href={props.link + '/' + props.content.id}>
                    <Button className="block">
                        <Typography className="hidden md:block lg:block xl:block" variant="h3" color="secondary">
                            {props.content.title}
                        </Typography>
                        <Typography className="block md:hidden lg:hidden xl:hidden" variant="subtitle1" color="secondary">
                            {props.content.title}
                        </Typography>
                    </Button>
                </Link>
            </div>
        </div>
      </>
    );
};