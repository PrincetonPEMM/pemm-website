export const GeneratedStoryText = (props: any) => {
  const story = props.story;
  const total_manuscripts_num = 481;
 
  // function to determine story age
  const DetermineStoryAge = (earliest_attest: number) => {
    let age;
   
    if (earliest_attest === 14 || earliest_attest === 15) {
      age = 'very old';
    }
    else if (earliest_attest === 16 || earliest_attest === 17){
      age ='old';
    }
    else if (earliest_attest === 18){
      age ='recent';
    }
    else{
      age = 'very recent';
    }
    return age;
  }

  // function to convert earliest attestation to earliest GMP
  const WriteEarliestGMP = (earliest_attest: number) => {
    let new_format = ((earliest_attest - 1) * 100).toString();
    return new_format.concat('s');
  }

   // function to determine story popularity
   const DetermineStoryPopularity = (total_records: number) => {
    let popularity;
   
    if (total_records >= 300) {
      popularity = 'extremely popular';
    }
    else if (total_records >= 200){
      popularity ='very popular';
    }
    else if (total_records >= 50){
      popularity ='popular';
    }
    else if (total_records >= 10){
      popularity ='somewhat popular';
    }
    else if (total_records >= 3){
      popularity ='rare';
    }
    else{
      popularity = 'very rare';
    }
    return popularity;
  }

     // function to write translation availability sentences
     const ConstructTranslationSentence = (appears_in_french : boolean, appears_in_amharic: boolean, 
      appears_in_latin : boolean, appears_in_italian : boolean, english_translation: string) => {

      let language_list: string[] = [];

      if (appears_in_french){
        language_list.push('French');
      }
      if (appears_in_amharic){
        language_list.push('Amharic');
      }
      if (appears_in_latin){
        language_list.push('Latin');
      }
      if (appears_in_italian){
        language_list.push('Italian');
      }

      // determines if english translation exists
      if ((english_translation != null) && (english_translation.toLowerCase() != 'summary only')){
        language_list.push('English');
      }

      return <>The story is available in PEMM in the following languages: {language_list.join(", ")}. </>
    }

      // function to write painting sentences, if any
   const ConstructPaintingSentences = (total_paintings: number, socum_num: number) => {
    if(total_paintings === 0){
      return;
    }
    return <> It has {total_paintings} paintings in {socum_num} GMP. </>
    }


    // function to write illustration availability sentences
    const ConstructIllustrationSentences = (pemm_id : number, total_paintings: number, socum_num: number) => {
    
      let id_list: number[] = [13, 187, 161, 162, 163, 19, 27, 33, 54, 
            153, 154, 16, 46, 43, 48, 59, 57, 61, 68, 82, 83, 99, 103, 112, 
            158, 140, 142, 7, 125, 152, 148, 236 ];
  
      if(id_list.includes(pemm_id)){
        return <> The story is among the thirty-two Täˀammərä Maryam stories that are most frequently illustrated. 
        {ConstructPaintingSentences(total_paintings, socum_num)}</>
      }
      return;
    }

    // function to write story setting sentence, if any
    const ConstructStoryPlaceSentence = (story_place : string, story_place_type: string) => {
    
      if(story_place != null){
        return <>This story takes place in {story_place} {(story_place_type != null) ? story_place_type : ''}. </>
      }
      return;
    }


  // parts n, m, p instructions are missing from issue post
  return (
    <>
      <h2>The story is {DetermineStoryAge(story.earliest_attestation)}. The earliest GMP (Gəˁəz manuscripts in the PEMM database) in which this story appears is from the 
      {WriteEarliestGMP(story.earliest_attestation)}.The story is {DetermineStoryPopularity(story.total_records)}, appearing in {Math.round((story.total_records / total_manuscripts_num) * 100)}
      % of GMP (among those manuscripts with more
      than five stories). The story was originally written down in {story.origin}. {ConstructIllustrationSentences(story.pemm_id, story.total_paintings, story.sum_of_countif_unique_manuscript)} 
      {ConstructTranslationSentence(story.appears_in_french, story.appears_in_amharic, story.appears_in_latin, story.appears_in_italian, story.english_translation)} 
      {ConstructStoryPlaceSentence(story.canonical_story_place, story.canonical_story_place_type)} </h2>
      {/* <h2>Summary: </h2>
      <h2>{story.summary_plot} Summary by {story.summary_created_by}; edited by Taylor Eggan.</h2> */}
    </>
  );
};