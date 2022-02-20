import { Stories } from '../types/stories'
import Link from 'next/link'

function StoryHighlightsComponent(prop: any) {
    const story: Stories = prop.story;
    return (
      <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> {story.macomber_id}</div>
          <p className="text-gray-700 text-base">
            {story.macomber_title}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link href={"/stories/" + story.macomber_id}>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Details...</span>
          </Link>
        </div>
      </div>
      </>
    );
  };

export default StoryHighlightsComponent;