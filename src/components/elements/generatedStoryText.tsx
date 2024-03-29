import { Person2 } from "@mui/icons-material";

export const GeneratedStoryText = (props: any) => {
  const story = props.story;
  const total_manuscripts_num = 481;

  // function to determine story age
  const DetermineStoryAge = (earliest_attest: number) => {
    let age;

    if (earliest_attest >= 1300 && earliest_attest < 1500) {
      age = 'very old';
    }
    else if (earliest_attest >= 1500 && earliest_attest < 1800) {
      age = 'old';
    }
    else if (earliest_attest >= 1800 && earliest_attest < 1950) {
      age = 'recent';
    }
    else if (earliest_attest >= 1950) {
      age = 'very recent';
    }
    return age;
  }

  // function to convert earliest attestation to earliest GMP
  const WriteEarliestGMP = (earliest_attest: number) => {
    let new_format = ((earliest_attest - 1) * 100).toString();
    return new_format;
  }

  // function to determine story popularity
  const DetermineStoryPopularity = (total_records: number, total_num_manuscripts_with_ms_status_complete: number) => {
    let p1 = null
    let p2 = null

    if(total_records == null){
      return <></>
    }

    if (total_records < 10){
      p2 = <>only {total_records} of the PEMM manuscripts</>

      if (total_records >= 6){
        p1 = <>somewhat rare</>
      }
      else if(total_records >= 3){
        p1 = <>quite rare</>
      }
      else if(total_records == 2){
        p1 = <>extremely rare</>
      }
      else{
        p1 = <>uniquely rare</>
      }
    }
    else{
      p2 = <>appearing in {((total_records / total_num_manuscripts_with_ms_status_complete) * 100).toPrecision(5)}% of PEMM manuscripts with five stories or more</>
      if (total_records >= 300) {
        p1 = <>extremely popular</>
      }
      else if (total_records >= 200) {
        p1 = <>very popular</>
      }
      else if (total_records >= 50) {
        p1 = <>popular</>
      }
      else{
        p1 = <>somewhat popular</>
      }
    }
    // return popularity;
    return <>This story is <u>{p1}</u>: appearing in {p2}.</>
  }

  // function to write translation availability sentences
  const ConstructTranslationSentence = (appears_in_french: boolean, appears_in_amharic: boolean,
    appears_in_latin: boolean, appears_in_italian: boolean, english_translation: string) => {

    let language_list: string[] = ['Gəˁəz'];

    if (appears_in_french) {
      language_list.push('French');
    }
    if (appears_in_amharic) {
      language_list.push('Amharic');
    }
    if (appears_in_latin) {
      language_list.push('Latin');
    }
    if (appears_in_italian) {
      language_list.push('Italian');
    }

    // determines if english translation exists
    if ((english_translation != null) && (english_translation.toLowerCase() != 'summary only')) {
      language_list.push('English');
    }

    return <>This story is available in the following <u>languages</u>: {language_list.join(", ")}. </>
  }

  // function to write painting sentences, if any
  const ConstructPaintingSentences = (total_story_id_paintings: number, socum_num: number, recognized_id: boolean) => {
    if (total_story_id_paintings === 0) {
      return <> This story is <u>not illustrated</u> in PEMM manuscripts.</>;
    }

    if (recognized_id){
      if (socum_num == null){
        return <> This story is among the thirty-two Täˀammərä Maryam stories that are most <u>frequently illustrated</u>, with a total of {total_story_id_paintings} paintings.</>
      }
      return <>This story is among the thirty-two Täˀammərä Maryam stories that are most <u>frequently illustrated</u>: it is illustrated in {socum_num} PEMM manuscripts, with a total of {total_story_id_paintings} paintings.</> 
    }
    
    if (socum_num == null){
      return <>This story is <u>sometimes illustrated</u>, with a total of {total_story_id_paintings} painting(s).</>
    }
  return <> This story is <u>sometimes illustrated</u>: it is illustrated in {socum_num} PEMM manuscript(s), with a total of {total_story_id_paintings} painting(s).</>
  }


  // function to write illustration availability sentences
  const ConstructIllustrationSentences = (macomber_id: string, total_paintings: number, socum_num: number) => {

    let id_list: string[] = ['13', '187', '161', '162', '163', '19', '27', '33', '54',
      '153', '154', '16', '46', '43', '48', '59', '57', '61', '68', '82', '83', '99', '103', '112',
      '158', '140', '142', '7', '125', '152', '148', '236'];
    if(macomber_id == null || total_paintings == null){
      return <></>
    }

    if (id_list.includes(macomber_id)) {
      return <> {ConstructPaintingSentences(total_paintings, socum_num, true)}</>
    }
    return <>{ConstructPaintingSentences(total_paintings, socum_num, false)}</>;
  }

  // function to write read aloud sentence, if any
  const ConstructReadAloudSentence = (readings_date: string) => {

    if (readings_date != null) {
      return <>This story is assigned by to <u>read aloud</u> on a particular day during the Ethiopian church service: it is read on a {readings_date}. </>
    }
    return;
  }

  // function to write life miracle sentence, if any
  const ConstructLifeMiracleSentence = (type_of_story: string) => {

    if (type_of_story == 'Life of Mary') {
      return <>This story is a <u>life miracle</u>: it takes place during Our Lady Mary&apos;s lifetime, not after it.</>
    }
    return <>This story is a <u>post-life miracle</u>: it does not take place during Our Lady Mary&apos;s lifetime, but after it.</>;
  }

  // function to write story setting sentence, if any
  const ConstructStoryPlaceSentence = (story_place: string, story_place_type: string) => {

    if (story_place != null) {
      return <>This story takes place in {story_place} {(story_place_type != null) ? story_place_type : ''}. </>
    }
    return;
  }

  // parts n, m, p instructions are missing from issue post
  // WHERE TO GET UPLOAD DATE + TOTAL NUM OF MANUSCRIPTS
  return (
    <>
      <div>
        <h2 style={{textIndent:"20px"}}>This story is <u>{DetermineStoryAge(story.earliest_attestation)}</u>: the earliest PEMM manuscript<sup>1</sup> in which this story appears is from around&nbsp; 
          {story.earliest_attestation}. </h2>
        <h2 style={{textIndent:"20px"}}>{DetermineStoryPopularity(story.total_records, 641)}</h2>
        <h2 style={{textIndent:"20px"}}>{ConstructIllustrationSentences(story.macomber_id, story.total_story_id_paintings, story.total_manuscripts_with_story_id_illustrated)} </h2>
        <h2 style={{textIndent:"20px"}}>{ConstructLifeMiracleSentence(story.type_of_story)} </h2>
        <h2 style={{textIndent:"20px"}}>This story was originally <u>composed</u> in {story.origin}. </h2>
        <h2 style={{textIndent:"20px"}}>{ConstructReadAloudSentence(story.readings_dates)} </h2>
        <h2 style={{textIndent:"20px"}}>{ConstructTranslationSentence(story.appears_in_french, story.appears_in_amharic, story.appears_in_latin, story.appears_in_italian, story.english_translation)} </h2>
        <h2 style={{textIndent:"20px"}}>{ConstructStoryPlaceSentence(story.canonical_story_place, story.canonical_story_place_type)} </h2>
      </div>
      <div style={{ marginTop: "10px", textIndent:"20px" }}>
        <small ><sup>1</sup> A &quot;PEMM manuscript&quot; is defined as any Gəˁəz Marian manuscript that PEMM has catalogued. For more information, see About page.</small>
      </div>
    </>
  );
};