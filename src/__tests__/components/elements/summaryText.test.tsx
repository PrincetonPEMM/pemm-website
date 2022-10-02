import { render, screen } from '@testing-library/react'
import { SummaryText } from '../../../components/elements/summaryText'
import type { Stories } from '../../../components/types/stories'


describe('SummaryText Fails Gracefully', () => {
  it('renders empty div if story is empty', () => {
    const story: Stories = {};
    const debug = render(<SummaryText story={story}/>);

    expect(debug.asFragment().firstChild).toMatchInlineSnapshot(`<div />`);
  })

  it('renders empty div if summary plot is empty string', () => {
    const story: Stories = {
      summary_plot: ""
    };
    const debug = render(<SummaryText story={story}/>);

    expect(debug.asFragment().firstChild).toMatchInlineSnapshot(`<div />`);
  })
})


describe('SummaryText Runs Properly', () => {

  it('renders the input summary plot', () => {
    const story: Stories = {
      summary_plot: "This is a sample summary plot"
    };
    const debug = render(<SummaryText story={story}/>);

    expect(debug.getAllByText("This is a sample summary plot"));
  })

  it('renders the component title', () => {
    const story: Stories = {
      summary_plot: "This is a sample"
    };
    const debug = render(<SummaryText story={story}/>);

    expect(debug.getAllByText("SUMMARY"));
  })
})