import type {Stories} from '../../components/types/stories';

export const CycleHyperlink = (props: any) => {
  const STORY = props.story;
  const ALL_STORIES = props.all_stories;
  const PREV_TEXT = "<< Read previous part of story";
  const NEXT_TEXT = "Read next part of story >>";
  const CYCLE_NAME = STORY.cycle_name;
  const STORY_ID = STORY.macomber_id;

  if(CYCLE_NAME === null){
    return (<></>)
  }

  // function to find data for previous story (uses macomber_id)
  const FindPrevStory = (story_id :string, all_stories: any) => {
    let closest_id = '';
    
    let prev_story = {};
    for (const curr_story of all_stories){
      let id = curr_story.macomber_id;
      if(id.localeCompare(story_id) === -1 && id.localeCompare(closest_id) === 1){
        prev_story = curr_story;
        closest_id = id;
      }
    }
    
    return prev_story;
  }

  // function to find data for next story (uses macomber_id)
  const FindNextStory = (story_id : string, all_stories: any) => {
    let closest_id = '';
    
    let next_story = {};
    for (const curr_story of all_stories){
      let id = curr_story.macomber_id;

      if(closest_id === '' && id.localeCompare(story_id) === 1){
        closest_id = id;
        continue;
      }

      if(id.localeCompare(story_id) === 1 && id.localeCompare(closest_id) === -1){
        next_story = curr_story;
        closest_id = id;
      }
    }

    return next_story
  }

  // Function for when previous button is clicked
  const previousStoryButton = () => {
    let prev_story: Stories = {};
    prev_story = FindPrevStory(STORY_ID, ALL_STORIES);
    var new_link: string;

    if (prev_story.cycle_name === CYCLE_NAME){
      new_link = process.env.WEBSITE + '/stories' + '/' + prev_story.macomber_id;
      return(
        <a href={new_link} rel="noreferrer">
          <button className="bg-black text-white mr-2 border-2"> {PREV_TEXT} </button>
        </a>
      )
    }
    return <></>
  }
  
  // Function for when next button is clicked
  const nextStoryButton = () => {
    let next_story: Stories = {};
    next_story = FindNextStory(STORY_ID, ALL_STORIES);
    let new_link: string;

    if (next_story.cycle_name === CYCLE_NAME){
      new_link = process.env.WEBSITE + '/stories' + '/' + next_story.macomber_id;
      return(
        <a href={new_link} rel="noreferrer">
          <button className="bg-black text-white ml-2 border-2"> {NEXT_TEXT} </button>
        </a>
      )
    }
    return <></>
  }
  
  return (
  <>
    {previousStoryButton()}{nextStoryButton()}
  </>
  )
};