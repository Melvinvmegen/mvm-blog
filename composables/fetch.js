export default function useFetch() {
  async function fetchAll(endpoint, url, query) {
    const { data } = await useAsyncData(`${endpoint}`, () => {
      return query
        ? queryContent(url).sort({ id: -1 }).where({...query, draft: { $ne: true }}).find()
        : queryContent(url).sort({ id: -1 }).where({draft: { $ne: true }}).find();
    });

    return data.value;
  }

  async function fetchOne(endpoint, query) {
    const { data } = await useAsyncData(`${endpoint}`, () => {
      return queryContent().where(query).findOne();
    });

    return data.value;
  }

  return { fetchAll, fetchOne };
}
