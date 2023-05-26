import { ElasticInference } from "aws-sdk";

export const GeneratedManuscriptText = (props: any) => {
    const manuscript = props.manuscript;
    const total_manuscripts_num = 481;

    // function to write manuscript setting sentence, if any
    const DetermineManuscriptDateBasis = (manuscript_date_note: string) => {

        if (manuscript_date_note == "Date from ms (colophon)") {
            return <> This date is precise, based on the scribe noting the date in the manuscript. </>
        }
        else if (manuscript_date_note == "Date from king's name") {
            return <> This date is estimated, based on the reigning Ethiopian king's name appearing in the manuscript. </>
        }
        else if (manuscript_date_note == "Date from ms (paleography)") {
            return <> This date is estimated, based on paleography (a study of the manuscript's letter shapes). </>
        }
        else if (manuscript_date_note == "Date from catalog") {
            return <> This date is estimated, based on a print or electronic catalog entry about the manuscript. </>
        }
        else if (manuscript_date_note == "Date from JRB and SGD") {
            return <> This date is estimated, based on paleography, a study of the manuscript's letter shapes by Jeremy Brown and Stephen Delamarter. </>
        }

        return <> This date is estimated based on various methods. </>;
    }

    const DetermineTotalStoriesSection = (total_stories: number) => {
        if(total_stories == null){
            return <></>
        }

        if (total_stories <= 1) {
            if (total_stories != 0) {
                return <>This manuscript has only one Marian miracle story. </>
            }
            return
        }
        else if (total_stories < 24) {
            return <>This manuscript has fewer Marian miracle stories than most, only <b>{total_stories}</b>. </>
        }
        else if (total_stories < 99) {
            return <>This manuscript has a typical number of Marian miracle stories: <b>{total_stories}</b>. </>
        }
        else if (total_stories < 199) {
            return <>This manuscript has a high number of Marian miracle stories: <b>{total_stories}</b>.</>
        }
        return <>This manuscript has a very high number of Marian miracle stories: <b>{total_stories}</b>. </>
    }

    const DeterminePaintingsSentence = (tm_story_paintings: string, total_tm_paintings: number) => {

        if(tm_story_paintings == null || total_tm_paintings == null){
            return
        }

        if (tm_story_paintings == 'No') {
            return <>This manuscript has no paintings of Marian miracle stories.</>
        }
        else if (tm_story_paintings == 'Yes') {
            if (total_tm_paintings <= 6) {
                if (total_tm_paintings > 0) {
                    return <>This manuscript has a few paintings of Marian miracle stories: <b>{total_tm_paintings}</b>.</>
                }
                return
            }
            else if (total_tm_paintings < 15) {
                return <>This manuscript has some paintings of Marian miracle stories: <b>{total_tm_paintings}</b>. </>
            }
            else if (total_tm_paintings < 200) {
                return <>This manuscript has a lot of paintings of Marian miracle stories: <b>{total_tm_paintings}</b>. </>
            }
        }
        else if (tm_story_paintings == 'Related Images') {
            return <>This manuscript has no paintings of Marian miracle stories, but it does have <b>{total_tm_paintings}</b> paintings of Mary and events in her life. </>
        }
        return
    }

    // GO BACK BC LINK IS NEVER NULL --> ASK FOR NO LINK INDICATOR TO BE STANDARDIZED
    // GO BACK AND MAKE HYPERLINK DISTINGUISHABLE
    const DetermineColorPaintingsSentence = (tm_story_paintings: string, total_tm_paintings: string, scans_of_manuscript_in_color: string, link_to_digital_copy: string) => {
       
        if(tm_story_paintings == null || total_tm_paintings == null){
            return
        }

        if (tm_story_paintings == 'Yes' || tm_story_paintings == 'Related Images') {
            if(scans_of_manuscript_in_color == null){
                return <></>
            }

            if (scans_of_manuscript_in_color == 'Yes') {
                if (link_to_digital_copy != null) {
                    return <>Fortunately, these paintings are digitized and available online in color. To view the manuscript online, go to the
                        <b><a href={link_to_digital_copy}> digital copy</a></b>.</>
                }
                else {
                    return <>These paintings have been digitized in color but are not available online. Please encourage the repository to put this manuscript online.</>
                }
            }
            else {
                if (link_to_digital_copy != null) {
                    return <>These paintings are digitized and available online but only in black and white. To view the manuscript online, go to the
                        <b><a href={link_to_digital_copy}> digital copy</a></b>.</>
                }
            }
        }
        return
    }

    // GO BACK AND FIX "AND" and "," LOGIC
    const DetermineFoliosSentence = (total_folios: number, total_pages: number, total_scans: number, columns_per_page: number, line_range_per_column: string, folio_start_of_the_tm_part: string, scan_start_of_the_tm_part: string) => {
        let folios = null
        let pages = null
        let scans = null
        let columns = null
        let lines = null
        let folio_start = null

        // Determines sentence #1
        let num = 0
        if (total_folios != null) {
            folios = <> <b>{total_folios}</b> folios</>
            num++
        }

        if (total_pages != null) {
            if (num == 0){
                pages = <><b>{total_pages}</b> pages</>
            }
            else{
                if (total_scans == null){
                    pages = <> and <b>{total_pages}</b> pages</>
                }
                else{
                    pages = <>, <b>{total_pages}</b> pages</>
                }
            }
            num++
        }

        if (total_scans != null) {
            if(num == 0){
                scans = <><b>{total_scans}</b> scans</>
            }
            else if(num == 1){
                scans = <> and <b>{total_scans}</b> scans</>
            }
            else{
                scans = <>, and <b>{total_scans}</b> scans</>
            }

        }
        
        let s1 = null
        if ((scans != null ) || (pages != null) || (folios != null)){
            s1 = <>This manuscript has a total of {folios}{pages}{scans}. </>
        }


        // Determines sentence #2
        if (columns_per_page != null) {
            columns = <><b>{columns_per_page}</b> columns per page</>
        }

        if (line_range_per_column != null) {
            if (columns_per_page!= null){
                lines = <> and approximately <b>{line_range_per_column}</b> lines per column</>
            }
            else{
                lines = <> approximately <b>{line_range_per_column}</b> lines per column</>
            }
        }

        let s2 = null
        if ((columns != null) || (lines != null)){
            s2 =<>It has {columns} {lines}. </>
        }
       
        // Determines sentence #3
        if (folio_start_of_the_tm_part != null) {
            folio_start = <> The Marian miracle stories begin on folio <b>{folio_start_of_the_tm_part}</b> of the whole manuscript.</>
        }

        return <>{s1} {s2} {folio_start}</>
    }

    // duplicate/missing_scans/rebound_in_disorder= COLUMN DOESNT EXIST IN SHEET --> USE UNDERSCORES AND NOT "/"
    const DeterminePageProblemSentence = (disordered_rebound: string, duplicate_or_missing: string) => {
        if (disordered_rebound != null && duplicate_or_missing == 'Yes') {
            return <> Unfortunately, this manuscript was bound in disorder and digitized improperly so that some folios were skipped or duplicated.</>
        }
        else if (disordered_rebound != null) {
            return <> Unfortunately, this manuscript was bound in disorder.</>
        }
        else if (duplicate_or_missing == 'Yes') {
            return <> Unfortunately, this manuscript was digitized improperly and some folios were skipped or duplicated.</>
        }
        return
    }

    // SEE TICKET ABOUT HYPERLINK TO STAFF PAGE
    const DetermineCatalogerSentence = (pemm_cataloger_name: string, print_cataloger_name: string, pemm_volunteer_name: string) => {
        let s1 = null
        let s2 = null
        if (pemm_cataloger_name != null && print_cataloger_name != null) {
            s1 = <> The stories in this manuscript were cataloged by <b>{pemm_cataloger_name}</b> and <b>{print_cataloger_name}</b>.</>
        }
        else {
            if (pemm_cataloger_name != null) {
                s1 = <> The stories in this manuscript were cataloged by <b>{pemm_cataloger_name}</b></>
            }
            else if (print_cataloger_name != null) {
                s1 = <> The stories in this manuscript were cataloged by <b>{print_cataloger_name}</b></>
            }
        }

        if (pemm_volunteer_name != null) {
            s2 = <>Assistance in the form of typing incipits was provided by <b>{pemm_volunteer_name}</b>.</>
        }

        return <> {s1} {s2}</>
    }

    const DetermineCreatedPlaceParagraph = (location_of_ms_imaging: string, location_of_ms_imaging_city: string, location_of_ms_imaging_country: string,
        digital_repository: string, digital_repository_city: string, digital_repository_country: string, link_to_digital_copy: string, link_to_digital_copy_note_external: string) => {
       let p1 = null
       let p2 = null

       p1 = <>This manuscript's last known location (i.e., where it was microfilmed or digitized at some point in the past forty years) 
       is the repository of {location_of_ms_imaging} in {location_of_ms_imaging_city}, {location_of_ms_imaging_country}. A digital copy 
       of this manuscript is held by {digital_repository} in {digital_repository_city} , {digital_repository_country}. 
       </>

       if (link_to_digital_copy != null){
        p2 = <>To view the manuscript online, go <a href={link_to_digital_copy}><b>here</b></a>.</>
       }
       else{
        p2 = <>{link_to_digital_copy_note_external}</>
       }
        
        return <>{p1}{p2}</>
    }

    const DetermineCurrentLocationParagraph = (institution_name: string, collection_name: string, institution_city_state: string, institution_country: string,  link_to_digital_copy: string,
        link_to_digital_copy_note_external: string) => {
            let p1 = null
            let p2 = null
     
            p1 = <>This manuscript is held in the repository of {institution_name} in their {collection_name} in {institution_city_state}, {institution_country}. 
            </>
     
            if (link_to_digital_copy != null){
             p2 = <>To view the manuscript online, go <a href={link_to_digital_copy}><b>here</b></a>.</>
            }
            else{
             p2 = <>{link_to_digital_copy_note_external}</>
            }
             
             return <>{p1}{p2}</>     
    }

    const DetermineMSNameAbbrevSection = (manuscript_name: string, hamburg_ms_id: string, Collection_shelfmark: string, source: string) => {
            let p1, p2, p3, p4, p5 = null

            if (manuscript_name){
                p1 = <><h2><b>PEMM Manuscript Abbreviation:</b> {manuscript_name}</h2></>
            }

            if (hamburg_ms_id){
                p2 = <><h2><b>Beta Maṣāḥǝft Manuscript Abbreviation:</b> {hamburg_ms_id}</h2></>
            }

            if(Collection_shelfmark){
                p4 = <><h2><b>Institutional Shelfmark:</b> {Collection_shelfmark}</h2></>
            }

            if(source){
                p5 = <><h2><b>Additional Cataloging or Archive Information:</b> {source}</h2></>

            }

             return  <>{p1}{p2}{p3}{p4}{p5}</>
    }

    // parts n, m, p instructions are missing from issue post
    // WHERE TO GET UPLOAD DATE + TOTAL NUM OF MANUSCRIPTS
    return (
        <>
            <div>
                {manuscript.language && manuscript.date_range_start && manuscript.date_range_end && <h2>
                    This <b>{manuscript.language}</b> language manuscript was created between <b>{manuscript.date_range_start}</b> and <b>{manuscript.date_range_end}</b>.
                    {DetermineManuscriptDateBasis(manuscript.date_note)}
                </h2>}
                {manuscript.collections_sheet_relevant ? DetermineCurrentLocationParagraph(manuscript.institution_name, manuscript.collection_name,
                manuscript.institution_city_state, manuscript.institution_country, manuscript.link_to_digital_copy, manuscript.link_to_digital_copy_note_external) : 
                DetermineCreatedPlaceParagraph(manuscript.location_of_ms_imaging, manuscript.location_of_ms_imaging_city, manuscript.location_of_ms_imaging_country,
                    manuscript.digital_repository, manuscript.digital_repository_city, manuscript.digital_repository_country, manuscript.link_to_digital_copy, 
                    manuscript.link_to_digital_copy_note_external)
                }
                {manuscript.provenance && manuscript.place_recorded && <h2>
                    This manuscript was cataloged, digitized, or purchased in (and thus may have been created in or near) {manuscript.provenance} in {manuscript.place_recorded}.
                </h2>}
                <h2>
                    {DetermineTotalStoriesSection(manuscript.total_stories)}
                </h2>
                <h2>{DeterminePaintingsSentence(manuscript.tm_story_paintings, manuscript.total_tm_paintings)}</h2>
                <h2>{DetermineColorPaintingsSentence(manuscript.tm_story_paintings, manuscript.total_tm_paintings, manuscript.scans_of_manuscript_in_color, manuscript.link_to_digital_copy)}</h2>
                <h2>
                    {DetermineFoliosSentence(manuscript.total_folios, manuscript.total_pages, manuscript.total_scans, manuscript.columns_per_page, manuscript.line_range_per_column, manuscript.folio_start_of_the_tm_part, "")}
                </h2>
                <h2>
                    {DeterminePageProblemSentence(manuscript.mss_rebound_in_disorder_or_there_are_breaks_in_the_sequence_of_tm, manuscript.duplicate_missing_scans_rebound_in_disorder)}
                </h2>
                <h2>
                    {DetermineCatalogerSentence(manuscript.pemm_cataloger_name, manuscript.print_cataloger_name, manuscript.pemm_volunteer_name)}
                </h2>
                <h2>
                    {DetermineMSNameAbbrevSection(manuscript.manuscript_name, manuscript.hamburg_ms_id, manuscript.Collection_shelfmark, manuscript.source)}
                </h2>
                <h2>
                    {manuscript.catalog != null ? <> This manuscript has a print catalog: <b>{manuscript.catalog}</b></> : <></>}
                </h2>
                <h2>
                If a story in our database appears only once, in this manuscript, we mark it below, with a ☆ in the last column. 
                If a story has a hymn at the end, we mark it with a ♫. If we are not entirely sure if this story is the one we say 
                it is, we mark it with (?).
                </h2>

            </div>
        </>
    );
};