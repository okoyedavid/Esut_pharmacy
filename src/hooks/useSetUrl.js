import { useSearchParams } from "react-router-dom";

function useSetUrl() {
  const [searchParams, setSearchParams] = useSearchParams();
  const current = Object.fromEntries([...searchParams]);

  function setParams(params) {
    setSearchParams({ ...current, ...params });
  }

  return { searchParams, setParams };
}

export { useSetUrl };
