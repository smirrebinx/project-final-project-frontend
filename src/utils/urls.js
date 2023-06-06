const BASE_URL = process.env.REACT_APP_FINAL_PROJECT_API_KEY;
console.log(BASE_URL)

export const API_URL = (slug) => {
  const url = `${BASE_URL}/${slug}`;
  console.log('Generated API URL:', url);
  console.log('Slug:', slug);
  return url;
};
