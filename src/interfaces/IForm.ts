export interface IFieldForm {
  Customer: string;
  MappingName: string;
  FileNamePattern: string;
  SiteName: string;
  SiteDescription: string;
  FullAddress: string;
  Region: string;
  Latitude: string;
  Longitude: string;
  SurveyName: string;
  SurveyDescription: string;
  SurveyPeriodStart: string;
  SurveyPeriodEnd: string;
}

export interface IErrorFields {
  [key: string]: {
    message: string;
  };
}
