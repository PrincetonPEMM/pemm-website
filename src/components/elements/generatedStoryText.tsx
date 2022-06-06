export const GeneratedStoryText = (props: any) => {
  const story = props.story;
  const total_manuscripts_num = 481;
 
  // function to determine story age
  const DetermineStoryAge = (earliest_attest: number) => {
    let age;
   
    if (earliest_attest == 14 || earliest_attest == 15) {
      age = 'very old';
    }
    else if (earliest_attest == 16 || earliest_attest == 17){
      age ='old';
    }
    else if (earliest_attest == 18){
      age ='recent';
    }
    else{
      age = 'very recent';
    }
    return age;
  }


  // parts n, m, p instructions are missing from issue post
  // canonical story place & type columns are crossed out + empty
  return (
    <>
      <h2>The story is {DetermineStoryAge(story.earliest_attestation)}.
      The earliest GMP (Gəˁəz manuscripts in the PEMM database) in which this story appears is from the
      {} [b].The story is {} [c], appearing in {Math.round((story.total_records / total_manuscripts_num) * 100)}
      percent of GMP (among those manuscripts with more
      than five stories). The story was originally written down in {story.origin}. The story is among the thirty-two Täˀammərä
      Maryam stories that are most frequently illustrated [f] {}. It has {} [g] paintings in {} [h] GMP.
      The story is available in PEMM in the following languages: {} [j]. A summary of this story is: {story.summary_plot}
      Summary by {story.summary_created_by}; edited by Taylor Eggan. This story is one part of a larger story, titled {} [m]. It
      is part {} [n] out of {} [p] parts. This story takes place in {} [q] {} [r]. </h2>
     
    </>
  );
};