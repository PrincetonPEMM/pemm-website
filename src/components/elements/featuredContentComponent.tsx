import Image from 'next/image';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import {FeaturedContentButton} from '../elements/featuredContentButton';

export const FeaturedContentComponent = (props: any) => {
    return (
      <>
        <div className="relative overflow-hidden">
            <Box sx={{ 
                    flexDirection: 'row',
                    display: { xs: 'flex', md: 'flex', lg: 'flex' },
                    backgroundColor: props.backgroundColor
                }}>
                <Image src={props.imageUrl} width={600} height={600}/>
                <div style={{
                        display: 'flex' ,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 1000
                    }}>
                        <div style={{width: 700}}>
                            <Typography variant="h5" color="secondary">
                                Featured {props.title}
                            </Typography>
                            <Typography variant="subtitle1" color="secondary">
                                {props.description}
                            </Typography>
                        </div>
                        
                </div>
            </Box>
            <Box sx={{ 
                    flexGrow: 1, 
                    display: { xs: 'flex', md: 'flex', lg: 'flex' },
                    alignContent: 'center'
                }}>
                <FeaturedContentButton 
                content={props.content[0]}
                link={props.link}/>
                <FeaturedContentButton 
                content={props.content[1]}
                link={props.link}/>
                <FeaturedContentButton 
                content={props.content[2]}
                link={props.link}/>
            </Box>
        </div>
      </>
    );
};