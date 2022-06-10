import type { NextPage } from 'next'
import Link from 'next/link';

import {ImageTextComponent} from '../components/elements/imageTextComponent';

const STORY_IMAGE = "/stories.jpeg";
const STORY_TITLE = "Stories";
const STORY_DESCRIPTION = "";
const STORY_LINK="/stories";

const PAINTINGS_IMAGE = "/paintings.jpeg";
const PAINTINGS_TITLE = "Paintings";
const PAINTINGS_DESCRIPTION = "";
const PAINTINGS_LINK="/paintings";

const MANUSCRIPTS_IMAGE = "/manuscripts.jpeg";
const MANUSCRIPTS_TITLE = "Manuscripts";
const MANUSCRIPTS_DESCRIPTION = "";
const MANUSCRIPTS_LINK="/manuscripts";

const Home: NextPage = () => {
  return (
    <div>
        <div className='flex content-center'>
          <ImageTextComponent 
            imageUrl={STORY_IMAGE}
            title={STORY_TITLE}
            description={STORY_DESCRIPTION}
            link={STORY_LINK}/>
          <ImageTextComponent 
            imageUrl={MANUSCRIPTS_IMAGE}
            title={MANUSCRIPTS_TITLE}
            description={MANUSCRIPTS_DESCRIPTION}
            link={MANUSCRIPTS_LINK}/>
          <ImageTextComponent 
            imageUrl={PAINTINGS_IMAGE}
            title={PAINTINGS_TITLE}
            description={PAINTINGS_DESCRIPTION}
            link={PAINTINGS_LINK}/>
        </div>
    </div>
  )
}

export default Home
