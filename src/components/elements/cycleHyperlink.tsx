import type {Stories} from '../../components/types/stories';

export const CycleHyperlink = (props: any) => {
  const story = props.story;
  const all_stories = props.all_stories;

  let prev_text = "<< Read previous part of story";
  let next_text = "Read next part of story >>";
  let cycle_name = story.cycle_name;
  let story_id = story.macomber_id;


  // doesn't include hyperlinks if no cycle_name
  if(cycle_name === null){
    return (<></>)
  }

  // function to find data for previous story (uses macomber_id)
  const FindPrevStory = (story_id :string, all_stories: any) => {
    // Finds prev story based on pemm_id
    // let lbound = pemm_id - 1;
    // let closest_id = 0;
    
    // let prev_story = {};
    // for (const curr_story of all_stories){
    //   let id = curr_story.pemm_id;
    //   if(id >= lbound && id < pemm_id){
    //     if(id > closest_id){
    //       prev_story = curr_story;
    //       closest_id = id;
    //     }
    //   }
    // }

    // Finds prev story based on macomber_id
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
    // Finds next story based on pemm_id
    // let ubound = pemm_id + 1;
    // let closest_id = Infinity;
      
    // let next_story = {};
    // for (const curr_story of all_stories){
    //   let id = curr_story.pemm_id;
    //   if(id > pemm_id && id <= ubound){
    //       if (id < closest_id){
    //         next_story = curr_story;
    //         closest_id = id;
    //       }
    //     }
    //   }

    // Finds next story based on macomber_id
    let closest_id = '';
    
    let next_story = {};
    for (const curr_story of all_stories){
      let id = curr_story.macomber_id;

      // finds first macomber that is greater than the current
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

  // Action for when previous button is clicked
  const previousStoryButton = () => {
    let prev_story: Stories = {};
    prev_story = FindPrevStory(story_id, all_stories);
    var new_link: string;

    // create hyperlink if cycle_name of previous story is the same
    if (prev_story.cycle_name === cycle_name){
      new_link = process.env.WEBSITE + '/stories' + '/' + prev_story.macomber_id;
      return(
        <a href={new_link} rel="noreferrer">
          <button className="bg-black text-white mr-2 border-2"> {prev_text} </button>
        </a>
      )
    }
    return <></>
  }
  
  // Action for when next button is clicked
  const nextStoryButton = () => {
    let next_story: Stories = {};
    next_story = FindNextStory(story_id, all_stories);
    let new_link: string;

    // create hyperlink if cycle_name of next story is the same
    if (next_story.cycle_name === cycle_name){
      new_link = process.env.WEBSITE + '/stories' + '/' + next_story.macomber_id;
      return(
        <a href={new_link} rel="noreferrer">
          <button className="bg-black text-white ml-2 border-2"> {next_text} </button>
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