// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiKey: 'AIzaSyDM8fneVLsDYGHvtWsIPA0lcaQmhQlg70w',
  apiEndPoints: {
    geoCoding: 'https://maps.googleapis.com/maps/api/geocode/json',
    geoCodingMock: 'https://maps.googleapis.com/maps/api/geocode/json?address=Toledo&region=es&key=YOUR_API_KEY',
    googleSearch: 'https://www.googleapis.com/customsearch/v1?key=',
    cxCode: '004456939783387997491:877yxvo9iuu'
  }
};
