import Image from 'next/image';
import Link from 'next/link';
import Typography from "@mui/material/Typography";
import Button  from '@mui/material/Button';

export const FeaturedContentButton = (props: any) => {
    return (
      <>
        <div className="relative overflow-hidden">
            <Image src={props.content.illustration} width={600} height={600} className="object-cover" />
            <div className="absolute py-2.5 bottom-64 inset-x-0 leading-4 flex flex-col">
                <Link href={props.link + '/' + props.content.id}>
                    <Button className="block">
                        <Typography variant="h3" color="secondary">
                            {props.content.title}
                        </Typography>
                    </Button>
                </Link>
            </div>
        </div>
      </>
    );
};