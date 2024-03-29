import Typography from '@mui/material/Typography';

// List of all the centuries we currently have story instances in.
const CENTURIES: [number, string][] = [[13, '1300s'], [14, '1400s'], [15, '1500s'], [16, '1600s'], [17, '1700s'], [18, '1800s'], [19, '1900s'], [20, '2000s']];

export const ManuscriptInformationBox = (props: any) => {
    const INSTANCES = props.instances;

    // Takes in a single story century and a list of story instances and returns
    // semicolon separated element of all the manuscripts in that century
    const FindManuscriptsOfCentury = (story_century: number, instances: any) => {
        let manuscripts = [];
        for (const instance of instances) {
            let century_number = Math.floor(instance.date_range_mean / 100);
            if (century_number == story_century) {
                if (instance.scan_start) {
                    manuscripts.push(instance.manuscript + " s. " + instance.scan_start);
                } else {
                    manuscripts.push(instance.manuscript + " f. " + instance.folio_start);
                }
            }
        }
        return manuscripts.map(function (manuscript, i) {
            return (
                <div key={i} className="inline-block">
                    {manuscript + "; "}
                </div>
            )
        })
    }

    // Returns True if any of the story instances were written in the story century.
    const HasManuscriptsInCentury = (story_century: number, instances: any) => {
        for (const instance of instances) {
            let century_number = Math.floor(instance.date_range_mean / 100);
            if (century_number == story_century) {
                return true
            }
        }
        return false;
    }

    return (
        <>
            <Typography variant="subtitle1"> <b>MANUSCRIPTS</b> </Typography>
            <Typography variant="body2"> PEMM Manuscripts in which story appears (with page or folio start): </Typography>
            {CENTURIES.map(function (century, i) {
                return (
                    <div className='block' key={i}>
                        <div className='font-bold inline'>{HasManuscriptsInCentury(century[0], INSTANCES) && century[1] + ": "}</div>  {FindManuscriptsOfCentury(century[0], INSTANCES)}
                    </div>
                )
            })}
        </>
    );
};
