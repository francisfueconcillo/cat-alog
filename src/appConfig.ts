type Config = {
  CAT_API_KEY: string,
  CAT_API_BASE_URL: string,
  PAGE_LIMIT: number,
};

const AppConfig: Config = {
  CAT_API_KEY: '',
  CAT_API_BASE_URL: 'https://api.thecatapi.com/v1',
  PAGE_LIMIT: 10,
};

export default AppConfig;