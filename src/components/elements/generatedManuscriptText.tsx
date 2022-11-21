import { ElasticInference } from "aws-sdk";

export const GeneratedManuscriptText = (props: any) => {
    const manuscript = props.manuscript;
    const total_manuscripts_num = 481;
  
    // function to determine manuscript age
    const DeterminemanuscriptAge = (earliest_attest: number) => {
      let age;
  
      if (earliest_attest >= 1300 || earliest_attest < 1500) {
        age = 'very old';
      }
      else if (earliest_attest >= 1500 || earliest_attest < 1800) {
        age = 'old';
      }
      else if (earliest_attest >= 1800 || earliest_attest < 1950) {
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
      return new_format.concat('s');
    }
  
    // function to determine manuscript popularity
    const DeterminemanuscriptPopularity = (total_records: number) => {
      let popularity;
  
      if (total_records >= 300) {
        popularity = 'extremely popular';
      }
      else if (total_records >= 200) {
        popularity = 'very popular';
      }
      else if (total_records >= 50) {
        popularity = 'popular';
      }
      else if (total_records >= 10) {
        popularity = 'somewhat popular';
      }
      else if (total_records >= 3) {
        popularity = 'rare';
      }
      else {
        popularity = 'very rare';
      }
      return popularity;
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
  
      return <>This manuscript is available in the following <u>languages</u>: {language_list.join(", ")}. </>
    }
  
    // function to write painting sentences, if any
    const ConstructPaintingSentences = (total_paintings: number, socum_num: number) => {
      if (total_paintings === 0) {
        return <> This manuscript is <u>not illustrated</u> in PEMM manuscripts.</>;
      }
      return <> This manuscript is <u>frequently illustrated</u>: it is illustrated in {socum_num} PEMM manuscripts, with a total of {total_paintings} paintings.</>
    }
  
  
    // function to write illustration availability sentences
    const ConstructIllustrationSentences = (macomber_id: string, total_paintings: number, socum_num: number) => {
  
      let id_list: string[] = ['13', '187', '161', '162', '163', '19', '27', '33', '54',
        '153', '154', '16', '46', '43', '48', '59', '57', '61', '68', '82', '83', '99', '103', '112',
        '158', '140', '142', '7', '125', '152', '148', '236'];
  
      if (id_list.includes(macomber_id)) {
        return <> {ConstructPaintingSentences(total_paintings, socum_num)}</>
      }
      return <>{ConstructPaintingSentences(total_paintings, socum_num)}</>;
    }
  
    // function to write read aloud sentence, if any
    const ConstructReadAloudSentence = (readings_date: string) => {
  
      if (readings_date != null) {
        return <>This manuscript is assigned by to <u>read aloud</u> on a particular day during the Ethiopian church service: it is read on a {readings_date}. </>
      }
      return;
    }
  
    // function to write life miracle sentence, if any
    const ConstructLifeMiracleSentence = (type_of_manuscript: string) => {
  
      if (type_of_manuscript == 'Life of Mary') {
        return <>This manuscript is a <u>life miracle</u>: it takes place during Our Lady Mary&apos;s lifetime, not after it.</>
      }
      return <>This manuscript is a <u>post-life miracle</u>: it does not take place during Our Lady Mary&apos;s lifetime, but after it.</>;
    }
  
    // function to write manuscript setting sentence, if any
    const ConstructmanuscriptPlaceSentence = (manuscript_place: string, manuscript_place_type: string) => {
  
      if (manuscript_place != null) {
        return <>This manuscript takes place in {manuscript_place} {(manuscript_place_type != null) ? manuscript_place_type : ''}. </>
      }
      return;
    }
//-----------
    // function to write manuscript setting sentence, if any
    const DetermineManuscriptDateBasis = (manuscript_date_note: string) => {

        if(manuscript_date_note == "Date from ms (colophon)"){
            return <>This date is precise, based on the scribe noting the date in the manuscript. </>
        }
        else if (manuscript_date_note == "Date from king's name") {
            return <>This date is estimated, based on the reigning Ethiopian king's name appearing in the manuscript. </>
        }
        else if(manuscript_date_note == "Date from ms (paleography)"){
            return <>This date is estimated, based on paleography (a study of the manuscript's letter shapes). </>
        }
        else if(manuscript_date_note == "Date from cataloger"){
            return <>This date is estimated, based on a print or electronic catalog entry about the manuscript. </>
        }
        else if(manuscript_date_note == "Date from JRB and SGD"){
            return <>This date is estimated, based on paleography, a study of the manuscript's letter shapes by Jeremy Brown and Stephen Delamarter. </>
        }

        return <>This date is estimated based on various methods. </>;
    }

    const DetermineTotalStoriesSection = (total_stories: number) => {

        if(total_stories <= 1){
            if (total_stories != 0){
                return <>This manuscript has only one Marian miracle story. </>
            }
            return
        }
        else if (total_stories < 24){
            return <>This manuscript has fewer Marian miracle stories than most, only {total_stories}. </>
        }
        else if(total_stories < 99){
            return <>This manuscript has an average number of Marian miracle stories: {total_stories}. </>
        }
        else if (total_stories < 199){
            return <>This manuscript has a high number of Marian miracle stories: {total_stories}.</>
        }
        return <>This manuscript has a very high number of Marian miracle stories: {total_stories}. </>
    }
    // parts n, m, p instructions are missing from issue post
    // WHERE TO GET UPLOAD DATE + TOTAL NUM OF MANUSCRIPTS
    return (
      <>
        <div>
        <h2>
            This <u>{manuscript.language}</u> language manuscript was created between {manuscript.date_range_start} and {manuscript.date_range_end}. 
            {DetermineManuscriptDateBasis(manuscript.date_note)}
        </h2>
        <h2>
            This manuscript was cataloged, digitized, or purchased in (and thus may have been created in or near) [CANT FIND PROVENANCE COLUMN] in [OR PLACE_RECORDED COLUMN].
        </h2>
        <h2>
            {DetermineTotalStoriesSection(manuscript.total_stories)}
        </h2>
          <h2 style={{textIndent:"20px"}}>This manuscript is <u>{DeterminemanuscriptAge(manuscript.earliest_attestation)}</u>: the earliest PEMM manuscript<sup>1</sup> in which this manuscript appears is from&nbsp; 
            {manuscript.earliest_attestation}. </h2>
          <h2 style={{textIndent:"20px"}}>This manuscript is <u>{DeterminemanuscriptPopularity(manuscript.total_records)}</u>: appearing in {Math.round((manuscript.total_records / total_manuscripts_num) * 100)}%
            of PEMM manuscripts with five stories or more.</h2>
          <h2 style={{textIndent:"20px"}}>{ConstructIllustrationSentences(manuscript.macomber_id, manuscript.total_paintings, manuscript.sum_of_countif_unique_manuscript)} </h2>
          <h2 style={{textIndent:"20px"}}>{ConstructLifeMiracleSentence(manuscript.type_of_manuscript)} </h2>
          <h2 style={{textIndent:"20px"}}>This manuscript was originally <u>composed</u> in {manuscript.origin}. </h2>
          <h2 style={{textIndent:"20px"}}>{ConstructReadAloudSentence(manuscript.readings_dates)} </h2>
          <h2 style={{textIndent:"20px"}}>{ConstructTranslationSentence(manuscript.appears_in_french, manuscript.appears_in_amharic, manuscript.appears_in_latin, manuscript.appears_in_italian, manuscript.english_translation)} </h2>
          <h2 style={{textIndent:"20px"}}>{ConstructmanuscriptPlaceSentence(manuscript.canonical_manuscript_place, manuscript.canonical_manuscript_place_type)} </h2>
        </div>
        <div style={{ marginTop: "10px", textIndent:"20px" }}>
          <small ><sup>1</sup> A &quot;PEMM manuscript&quot; is defined as any Gəˁəz Marian manuscript that PEMM has catalogued. For more information, see About page.</small>
        </div>
      </>
    );
  };