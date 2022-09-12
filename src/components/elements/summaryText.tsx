import { Typography } from "@mui/material";
export const SummaryText = (props: any) => {
    const story = props.story;
   
    // Doesn't place summary if not available
    if (story.summary_plot == null){
        return(<div></div>);
    }

    return (
        <div className="mt-5 overflow-hidden">
            <Typography variant="subtitle1" fontWeight="bold"> SUMMARY </Typography>
            <h2>{story.summary_plot}</h2>
      </div>
    );
  };