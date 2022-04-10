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
        uniqueStories: false
      }
      this.data = data;
      this.filteredTableData = this.data;
    }
  
    filterStoryTheme() {
      this.filteredTableData = this.data;
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
  
    filterTableData() {
      this.filterStoryTheme();
    }
  
    setData(stories: Stories[]) {
      this.data = stories;
    }
  
    // Getters
    getFilteredTableData = () : Stories[] => this.filteredTableData;
  
}
