import { Button } from '@mui/material';
import type {Stories} from '../../components/types/stories';

const PREV_TEXT = "<< Read previous part of story";
const NEXT_TEXT = "Read next part of story >>";

export const CycleHyperlink = (props: any) => {
  const story : Stories = props.story;
  const all_stories : Stories[] = props.all_stories;
  const cycle_name = story.cycle_name;
  const story_id : string = story.macomber_id!;
  const sorted_stories : Stories[] = all_stories.sort((a: Stories, b: Stories) => {
    if (a.macomber_id! > b.macomber_id!) {
      return 1;
    }
    if (a.macomber_id! < b.macomber_id!) {
      return -1;
    }
    return 0;
  });

  if(!cycle_name){
    return (<></>)
  }

  // function to find data for previous story (uses macomber_id)
  const FindPrevStory = (story_id : string, sorted_stories: Stories[]) => {
    for (let i = 0; i < sorted_stories.length; i++) {
      if (sorted_stories[i].macomber_id !== story_id) continue;
      if (i === 0) return sorted_stories[sorted_stories.length - 1]
      return sorted_stories[i-1]
    }
  }

  // function to find data for next story (uses macomber_id)
  const FindNextStory = (story_id : string, sorted_stories: Stories[]) => {
    for (let i = 0; i < sorted_stories.length; i++) {
      if (sorted_stories[i].macomber_id !== story_id) continue;
      if (i + 1 === sorted_stories.length) return sorted_stories[0]
      return sorted_stories[i+1]
    }
  }

  // Function for when previous button is clicked
  const previousStoryButton = (story_id: string, sorted_stories: Stories[]) => {

    const prev_story_status = FindPrevStory(story_id, sorted_stories);
    let prev_story: Stories = {};
    if (prev_story_status) prev_story = prev_story_status;

    var new_link: string;

    if (prev_story.cycle_name === cycle_name){
      new_link = process.env.WEBSITE + '/stories' + '/' + prev_story.macomber_id;
      return(
        <a href={new_link} rel="noreferrer">
          <Button> {PREV_TEXT} </Button>
        </a>
      )
    }
    return <></>
  }
  
  // Function for when next button is clicked
  const nextStoryButton = (story_id: string, sorted_stories: Stories[]) => {
    const next_story_status = FindNextStory(story_id, sorted_stories);
    let next_story: Stories = {};
    if (next_story_status) next_story = next_story_status;

    let new_link: string;

    if (next_story.cycle_name === cycle_name){
      new_link = process.env.WEBSITE + '/stories' + '/' + next_story.macomber_id;
      return(
        <a href={new_link} rel="noreferrer">
           <Button> {NEXT_TEXT} </Button>
        </a>
      )
    }
    return <></>
  }
  
  return (
  <>
    {previousStoryButton(story_id, sorted_stories)}{nextStoryButton(story_id, sorted_stories)}
  </>
  )
};