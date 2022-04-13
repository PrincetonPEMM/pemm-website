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
        originCentury13s: false,
        originCentury14s: false,
        originCentury15s: false,
        originCentury16s: false,
        originCentury17s: false,
        originCentury18s: false,
        originCentury19s: false,
        originAfrica: false,
        originEgypt: false,
        originEthiopia: false,
        originEurope: false,
        originFrance: false,
        originSpain: false,
        originLevant: false,
        originUnknown: false,
        manuscriptsMax: false,
        manuscripts200To299: false,
        manuscripts100To199: false,
        manuscripts50To99: false,
        manuscripts10To49: false,
        manuscripts5To9: false,
        manuscripts2To4: false,
        manuscripts1: false,
        paintingsMax: false,
        paintings2To19: false,
        paintings1: false,
        paintings0: false,
        languagesGeez: false,
        languagesArabic: false,
        languagesAmharic: false,
        languagesEnglish: false,
        languagesFrench: false,
        languagesItalian: false,
        languagesLatin: false
      }
      this.data = data;
      this.filteredTableData = this.data;
    }
  
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
      if (this.filterData.originCentury13s) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.earliest_attestation && story.earliest_attestation == 14);
      }

      if (this.filterData.originCentury14s) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.earliest_attestation && story.earliest_attestation == 15);
      }

      if (this.filterData.originCentury15s) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.earliest_attestation && story.earliest_attestation == 16);
      }

      if (this.filterData.originCentury16s) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.earliest_attestation && story.earliest_attestation == 17);
      }

      if (this.filterData.originCentury17s) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.earliest_attestation && story.earliest_attestation == 18);
      }

      if (this.filterData.originCentury18s) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.earliest_attestation && story.earliest_attestation == 19);
      }

      if (this.filterData.originCentury19s) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.earliest_attestation && story.earliest_attestation == 20);
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
      if (this.filterData.manuscriptsMax) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_records && story.total_records >= 300);
      }
      if (this.filterData.manuscripts200To299) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_records && story.total_records >= 200 && story.total_records < 300);
      }
      if (this.filterData.manuscripts100To199) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_records && story.total_records >= 100 && story.total_records < 199);
      }
      if (this.filterData.manuscripts50To99) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_records && story.total_records >= 50 && story.total_records < 100);
      }
      if (this.filterData.manuscripts10To49) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_records && story.total_records >= 10 && story.total_records < 50);
      }
      if (this.filterData.manuscripts5To9) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_records && story.total_records >= 5 && story.total_records < 10);
      }
      if (this.filterData.manuscripts2To4) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_records && story.total_records >= 2 && story.total_records < 5);
      }
      if (this.filterData.manuscripts1) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_records && story.total_records === 1);
      }
    }

    filterNumberOfPaintings() {
      if (this.filterData.paintingsMax) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_paintings && story.total_paintings >= 20);
      }
      if (this.filterData.paintings2To19) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_paintings && story.total_paintings < 20 && story.total_paintings > 1);
      }
      if (this.filterData.paintings1) {
        this.filteredTableData = this.filteredTableData.filter(
          story => story.total_paintings && story.total_paintings == 1);
      }
      if (this.filterData.paintings0) {
        this.filteredTableData = this.filteredTableData.filter(
          story => !story.total_paintings);
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
    }
  
    setData(stories: Stories[]) {
      this.data = stories;
    }
  
    // Getters
    getFilteredTableData = () : Stories[] => this.filteredTableData;
  
}
