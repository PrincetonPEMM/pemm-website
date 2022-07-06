export const SummaryText = (props: any) => {
    const story = props.story;
   
    // Doesn't place summary if not available
    if (story.summary_plot == null){
        return(<div></div>);
    }

    return (
        <div className="mt-8 overflow-hidden">
            <h1>SUMMARY</h1>
            <h2>{story.summary_plot}</h2>
      </div>
    );
  };