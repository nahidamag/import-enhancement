import SurveyImportContainer from './SurveyImportContainer';
import { IField } from './interfaces/IDataStructure';

// User passing fields to be rendered. Also defining if the field is required (Ex. siteName, Latitude, Longitude )
const fields: IField[] = [
  { label: 'Site Name', key: 'siteName', isRequired: true },
  { label: 'Site Description', key: 'SiteDescription' },
  { label: 'Full Address', key: 'FullAddress' },
  { label: 'Region', key: 'Region' },
  { label: 'Latitude', key: 'Latitude', isRequired: true },
  { label: 'Longitude', key: 'Longitude', isRequired: true },
  { label: 'Survey Period Start', key: 'SurveyPeriodStart' },
  { label: 'Survey Period End', key: 'SurveyPeriodEnd' }
];

function App() {
  // User passing callback function to get the final
  const submitHandler = (data: any) => {
    console.log(data);
  };

  return <SurveyImportContainer fields={fields} onSubmit={submitHandler} />;
}

export default App;
