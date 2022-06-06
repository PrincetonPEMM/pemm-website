import type {Stories} from '../components/types/stories';
import { FilterData } from '../components/types/filter_data';

export class TableFilter {
    filterData: FilterData;
    data: Stories[] = [];
    filteredTableData: Stories[] = [];
  
    constructor( data: Stories[]){
      this.filterData = {
        withPaintings: false,
        mostIllustrated: false,
        withEnglishTranslation: false,
        ethiopianStories: false,
        miracleOfMaryStories: false,
        lifeOfMaryStories: false,
        earliestStories: false,
        recentStories: false,
        popularStories: false,
        uniqueStories: false,
        centuryRange: [0, 100],
        originAfrica: false,
        originEgypt: false,
        originEthiopia: false,
        originEurope: false,
        originFrance: false,
        originSpain: false,
        originLevant: false,
        originUnknown: false,
        manuscriptsWithStoryRange: [0, 100],
        paintingsOfStoryRange: [0, 100],
        languagesGeez: false,
        languagesArabic: false,
        languagesAmharic: false,
        languagesEnglish: false,
        languagesFrench: false,
        languagesItalian: false,
        languagesLatin: false,
        substring: "",
      }
      this.data = data;
      this.filteredTableData = this.data;
    }

    searchTable() {}
  
    filterStoryTheme() {
      if (this.filterData.withPaintings) {
        this.filteredTableData = this.filteredTableData.filter(story => story.total_paintings && story.total_paintings > 0);
      }
      if (this.filterData.mostIllustrated) {
        this.filteredTableData = this.filteredTableData.filter(story => story.total_paintings && story.total_paintings > 19);
      }
      if (this.filterData.withEnglishTranslation) {
        this.filteredTableData =
          this.filteredTableData.filter(story => story.has_english_translation === true);
      }
      if (this.filterData.ethiopianStories) {
        this.filteredTableData =
          this.filteredTableData.filter(story => story.origin &&
            story.origin.toLowerCase().includes("ethiopia"));
      }
      if (this.filterData.miracleOfMaryStories) {
        this.filteredTableData = 
          this.filteredTableData.filter(story => story.non_life_miracle === true);
      }
      if (this.filterData.lifeOfMaryStories) {
        this.filteredTableData = 
          this.filteredTableData.filter(story => story.non_life_miracle === false);
      }
      if (this.filterData.earliestStories) {
        this.filteredTableData = 
          this.filteredTableData.filter(story => story.earliest_attestation === 14 || story.earliest_attestation === 15);
      }
      if (this.filterData.recentStories) {
        this.filteredTableData = 
          this.filteredTableData.filter(story => story.earliest_attestation === 20);
      }
      if (this.filterData.popularStories) {
        this.filteredTableData = 
          this.filteredTableData.filter(story => story.total_records && story.total_records > 200);
      }
      if (this.filterData.uniqueStories) {
        this.filteredTableData = 
          this.filteredTableData.filter(story => story.total_records === 1);
      }
    }

    filterCenturyOfOrigin() {
      if (this.filterData["centuryRange"][0] !== 0 || this.filterData["centuryRange"][1] !== 100) {
        const startRange =  (this.filterData["centuryRange"][0] * 7) + 1300;
        const endRange = (this.filterData["centuryRange"][1] * 7) + 1300;
        this.filteredTableData = this.filteredTableData.filter(story => 
          story.earliest_attestation &&
          story.earliest_attestation*100 >= startRange &&
          (story.earliest_attestation-1)*100 <= endRange
        );
      }
    }

    filterPlaceOfOrigin() {
      if (this.filterData.originAfrica) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.origin && story.origin.toLowerCase().includes("africa"));
      }
      if (this.filterData.originEgypt) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.origin && story.origin.toLowerCase().includes("egypt"));
      }
      if (this.filterData.originEthiopia) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.origin && story.origin.toLowerCase().includes("ethiopia"));
      }
      if (this.filterData.originEurope) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.origin && story.origin.toLowerCase().includes("europe"));
      }
      if (this.filterData.originFrance) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.origin && story.origin.toLowerCase().includes("france"));
      }
      if (this.filterData.originSpain) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.origin && story.origin.toLowerCase().includes("spain"));
      }
      if (this.filterData.originLevant) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.origin && story.origin.toLowerCase().includes("levant"));
      }
      if (this.filterData.originUnknown) {
        this.filteredTableData = this.filteredTableData.filter(
          story => !story.origin);
      }
    }

    filterNumberOfManuscripts() {
      if (this.filterData["manuscriptsWithStoryRange"][0] !== 0 || this.filterData["manuscriptsWithStoryRange"][1] !== 100) {
        const startRange =  (this.filterData["manuscriptsWithStoryRange"][0] * 3.5);
        const endRange = (this.filterData["manuscriptsWithStoryRange"][1] * 3.5);
        this.filteredTableData = this.filteredTableData.filter(story => 
          story.total_records &&
          story.total_records >= startRange &&
          story.total_records <= endRange
        );
      }
    }

    filterNumberOfPaintings() {
      if (this.filterData["paintingsOfStoryRange"][0] !== 0 || this.filterData["paintingsOfStoryRange"][1] !== 100) {
        const startRange =  (this.filterData["paintingsOfStoryRange"][0] / 2.5);
        const endRange = (this.filterData["paintingsOfStoryRange"][1] / 2.5);
        this.filteredTableData = this.filteredTableData.filter(story => 
          story.total_paintings &&
          story.total_paintings >= startRange &&
          story.total_paintings <= endRange
        );
      }
    }

    filterLanguagesOfStory() {
      if (this.filterData.languagesEnglish) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.has_english_translation === true);
      }
      if (this.filterData.languagesArabic) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.appears_in_arabic
        )
      }
    }

    filterSubstring() {
      // Filter data based on Text
      if (this.filterData.substring !== "") {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.macomber_title?.toLocaleLowerCase()
                      .includes(this.filterData.substring.toLocaleLowerCase()));
      }
    }
  
    filterTableData() {
      // Resetting Data.
      this.filteredTableData = this.data;

      // Fitler the data based on new selection.
      this.filterStoryTheme();
      this.filterCenturyOfOrigin();
      this.filterPlaceOfOrigin();
      this.filterNumberOfManuscripts();
      this.filterNumberOfPaintings();
      this.filterLanguagesOfStory();
      this.filterSubstring();
    }
  
    setData(stories: Stories[]) {
      this.data = stories;
    }
  
    // Getters
    getFilteredTableData = () : Stories[] => this.filteredTableData;
  
}
