import Typography from '@mui/material/Typography';
import type {Instances} from '../../components/types/instances';

export const ManuscriptInformationBox = (props: any) => {
    const INSTANCE = props.instances;
    const STORY_ID = INSTANCE.canonical_story_id;
    const MANUSCRIPT = INSTANCE.manuscript;
    const SCAN_START = INSTANCE.scan_start;
    const FOLIO_START = INSTANCE.folio_start;
    const STORY_CENTURY = Math.ceil(INSTANCE.date_range_mean/100);

    // Function to group manuscripts by story century
    // Print in chronological order
    // Each manuscript should be hyperlinked to the corresponding Manuscript Detail page
    // e.g. STORY CENTURY == 1300 (boolean) then map()

    // OUTPUT e.g. GMP in Which The Story Appears:
    //             1300s: EMDL 21 f. 34v; M-Duke 392 s. 342
    //             1400s: BOr (BL) 413 f. 3; Gayant f. 6; 1500s: BOr 520 f. 234; EMML 232 f. 123
    //             1500s: ...
    //             <See all manuscripts that contain this story> 

    const FindAllManuscripts = (story_century: number, instances:any) => {
        
        // for (const century of instances) {
        //     let century_number = century.STORY_CENTURY;
        //     if (century_number == 13) {
        //         return <> <Typography variant="body2"> {STORY_CENTURY}00s: {MANUSCRIPT} s. {SCAN_START}.</Typography> </>
        //     }
        // }

        if (STORY_CENTURY == 17) {
            return <> <Typography variant="body2"> {STORY_CENTURY}00s: {MANUSCRIPT} s. {SCAN_START}.</Typography> </>
        } else if (SCAN_START == null) {
            return <> <Typography variant="body2"> {STORY_CENTURY - 1}00s: {MANUSCRIPT} f. {FOLIO_START}.</Typography> </>
        }

        // var calculated_century = Math.ceil(story_century/100);

        // if (calculated_century == 17) {
        //     var new_instance = INSTANCE.map(function(val, index) {
        //         <div key={index}> 
        //         return <> <Typography variant="body2"> 1700s: {val} s. {SCAN_START}.</Typography> </>
        //         </div>
        //     }
        // }

        return;
    }

    return (
        <>
            <Typography variant="subtitle1"> <b>MANUSCRIPTS</b> </Typography>
            <Typography variant="body2"> GMP Manuscripts in which story appears (with page or folio start): </Typography>
            <h2>{FindAllManuscripts(STORY_CENTURY, INSTANCE)}</h2>
        </>
    );
};