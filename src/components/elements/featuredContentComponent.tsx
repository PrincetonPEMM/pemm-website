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
                <div style={{
                        display: 'flex' ,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 1000
                    }}>
                        <div>
                            <div className='common featured'>
                                Featured {props.title}
                            </div>
                            <div className='common details'>
                                {props.description}
                            </div>
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
        <style jsx>{`
          .common {
            font-family: "Maghfirea", sans-serif;
            color: white;
            margin-left: 10px
          }
          .featured {
            font-size: 40px;
          }
          .details {
            font-size: 20px;
          }
        `}</style>
      </>
    );
};